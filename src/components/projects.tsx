"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Github, Loader2 } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./project-card";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/services/api";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { Abril_Fatface } from "next/font/google";

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

const abrilFlatface = Abril_Fatface({ weight: ["400"], subsets:["latin"] });

export default function Projects() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "shivam-iyk";

  const [api, setApi] = useState<CarouselApi>();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(username),
    staleTime: 1000 * 60 * 15, // 15 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
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

  return (
    <section id="projects" className="py-20 border-t">
      <div className="container pr-0">
        <div className="flex justify-between items-center gap-4">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              abrilFlatface.className,
            )}
          >
            Projects
          </h2>
          <div className="space-x-2">
            <Button
              variant="outline"
              className="rounded-full size-8"
              disabled={!api?.canScrollPrev}
              onClick={() => api?.scrollPrev()}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              className="rounded-full size-8"
              disabled={!api?.canScrollNext}
              onClick={() => api?.scrollNext()}
            >
              <ChevronRight />
            </Button>
          </div>
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
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem
                  className="pt-15 pb-2 lg:basis-1/3 sm:basis-1/2"
                  key={index}
                >
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </section>
  );
}
