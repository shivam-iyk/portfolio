"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Github, Loader2 } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./project-card";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/services/api";

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
  created_at: string;
}

export default function Projects() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "shivam-iyk";

  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(username),
    staleTime: 1000 * 60 * 15, // 15 minutes
    refetchOnWindowFocus: false,
  });

  const projects = useMemo(() => {
    if (!data) return [];
    const featured = data
      .filter((repo: Repository) => repo.topics.includes("portfolio-featured"))
      .sort((a: Repository, b: Repository) => {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });
    const excluded = data.filter(
      (repo: Repository) =>
        !repo.topics.includes("portfolio-featured") &&
        !repo.topics.includes("portfolio-exclude"),
    );
    return [...featured, ...excluded];
  }, [data]);

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

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : isError ? (
          <div className="text-center py-10">
            <p className="text-red-500">
              {error?.message ||
                "Something went wrong. Please try again later."}
            </p>
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
                <ProjectCard project={project} index={index} key={index} />
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
