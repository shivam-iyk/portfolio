"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Loader2 } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./project-card";

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export default function Projects() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "shivam-iyk";

  const [projects, setProjects] = useState<Repository[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);

        const cacheKey = "projects_cache";
        const cachedData = localStorage.getItem(cacheKey);
        const cacheTimestamp = localStorage.getItem(`${cacheKey}_timestamp`);

        if (cachedData && cacheTimestamp) {
          const now = new Date().getTime();
          const cacheAge = now - parseInt(cacheTimestamp, 10);

          if (cacheAge < 3600000) {
            setProjects(JSON.parse(cachedData));
            setLoading(false);
            return;
          }
        }

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        const filteredProjects = [
          ...data.filter((repo: Repository) => repo.topics.includes("portfolio-featured")),
          ...data.filter(
            (repo: Repository) =>
              !repo.topics.includes("portfolio-featured") &&
              !repo.topics.includes("portfolio-exclude")
          ),
        ];

        localStorage.setItem(cacheKey, JSON.stringify(filteredProjects));
        localStorage.setItem(
          `${cacheKey}_timestamp`,
          new Date().getTime().toString()
        );

        setProjects(filteredProjects);
        setError(null);
      } catch (err) {
        setError("Failed to load projects. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const handleViewMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="projects" className="py-20 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Here are some of my recent projects. Check out my GitHub for more!
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500">{error}</p>
            <Button variant="outline" className="mt-4" asChild>
              <Link
                href="https://github.com/${username}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-background">
              {projects.slice(0, visibleProjects).map((project, index) => (
                <ProjectCard
                  project={project}
                  index={index}
                  key={index}
                />
              ))}
            </div>

            {visibleProjects < projects.length && (
              <div className="flex justify-center mt-12">
                <Button onClick={handleViewMore} size="lg">
                  View More Projects
                </Button>
              </div>
            )}

            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/${username}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View All on GitHub
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
