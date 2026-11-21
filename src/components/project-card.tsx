import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Repository } from "./projects";
import ImageDialog from "./image-dialog";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: Repository }) {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "shivam-iyk";

  const images = [
    {
      name: "gadget-store",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524957/portfolio/chzs9wo4zdhekhzxlb6d.png`,
      repository: `https://github.com/${username}/gadget-store`,
    },
    {
      name: "campus-space",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524945/portfolio/rr97kg4geno54vfoo8od.png`,
      repository: `https://github.com/${username}/campus-space`,
    },
    {
      name: "grosery",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744526767/portfolio/d3tyvlbexnmwriyesvxz.png`,
      repository: `https://github.com/${username}/grosery`,
    },
    {
      name: "2048",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524956/portfolio/h9rvzpva7vck3xv3qlsu.png`,
      repository: `https://github.com/${username}/2048`,
    },
    {
      name: "workconnect",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524956/portfolio/tcikh1sw5ntbtdah4wem.png`,
      repository: `https://github.com/${username}/workconnect`,
    },
    {
      name: "weather",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524954/portfolio/yfxb4crtpv9efxsgvz6z.png`,
      repository: `https://github.com/${username}/weather`,
    },
    {
      name: "moviesandtv",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524954/portfolio/akz8easku4zy45g5llji.png`,
      repository: `https://github.com/${username}/moviesandtv`,
    },
    {
      name: "newsapp",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524953/portfolio/z2cuelbgpvelz1kevpxb.png`,
      repository: `https://github.com/${username}/newsapp`,
    },
    {
      name: "myonline",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524953/portfolio/alchhrpwnp6em3e1kxp4.png`,
      repository: `https://github.com/${username}/myonline`,
    },
    {
      name: "robospeaker",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524952/portfolio/cvfoj1mjyqewxzjigt3z.png`,
      repository: `https://github.com/${username}/robospeaker`,
    },
    {
      name: "cloudnotebook",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524946/portfolio/pareilc36ielcwtf4iuc.png`,
      repository: `https://github.com/${username}/cloudnotebook`,
    },
    {
      name: "chatapp",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524946/portfolio/rpnomvdasptklgboa5cu.png`,
      repository: `https://github.com/${username}/chatapp`,
    },
    {
      name: "social-media-backend",
      image: `https://raw.githubusercontent.com/${username}/sociial/main/public/hero-dark.png`,
      repository: `https://github.com/${username}/social-media-backend`,
    },
    {
      name: "sudoku",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524945/portfolio/zofefvus3aifamouvuqr.png`,
      repository: `https://github.com/${username}/sudoku`,
    },
    {
      name: "scholarship",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524945/portfolio/zns3kudmtytjyqpzaz3f.png`,
      repository: `https://github.com/${username}/scholarship`,
    },
    {
      name: "copypaste",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524944/portfolio/elema2l0fr33skfkxwuu.png`,
      repository: `https://github.com/${username}/copypaste`,
    },
    {
      name: "web-connect",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1746718456/portfolio/hj7rc22xuyww2i3ohjzk.avif`,
      repository: `https://github.com/${username}/webrtc-video-chat`,
    },
    {
      name: "lastminprep",
      image: `https://raw.githubusercontent.com/${username}/lastminprep/main/public/screenshots/home.png`,
      repository: `https://github.com/${username}/lastminprep`,
    },
    {
      name: "sociial",
      image: `https://raw.githubusercontent.com/${username}/sociial/main/public/hero-light.png`,
      repository: `https://github.com/${username}/sociial`,
    },
    {
      name: "todo",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744526839/portfolio/kjvynyx5rkrngx4hvw7w.png`,
      repository: `https://github.com/${username}/todo`,
    },
    {
      name: "camera",
      image: `https://raw.githubusercontent.com/${username}/camera/main/src/assets/images/camera.jpg`,
      repository: `https://github.com/${username}/camera`,
    },
    {
      name: "tasks",
      image: `https://raw.githubusercontent.com/${username}/tasks/main/src/assets/images/home-page.jpg`,
      repository: `https://github.com/${username}/tasks`,
    },
    {
      name: "calculator",
      image: `https://raw.githubusercontent.com/${username}/calculator/main/assets/images/calculator.jpg`,
      repository: `https://github.com/${username}/calculator`,
    },
    {
      name: "abcd-pro",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1755412745/Screenshot_2025-08-17_120716_ne0xi9.png`,
      repository: `https://github.com/${username}/abcd-pro`,
    },
    {
      name: "school-finder",
      image: `https://raw.githubusercontent.com/${username}/school-finder/main/screenshot.png`,
      repository: `https://github.com/${username}/school-finder`,
    },
    {
      name: "learn-loop",
      image: `https://raw.githubusercontent.com/${username}/learn-loop/main/frontend/public/screenshot.png`,
      repository: `https://github.com/${username}/learn-loop`,
    },
  ];

  const topics = useMemo(() => {
    return project.topics.filter((item) => !item.includes("portfolio-"));
  }, [project]);

  const getProjectImage = (name: string) => {
    let image = `https://raw.githubusercontent.com/${username}/${name}/main/public/screenshot.png`;
    images.map((ele) => {
      if (ele.name === name) {
        image = ele.image;
      }
    });
    return image;
  };

  return (
    <motion.div
      key={project.id}
      className="h-full px-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Card className="group relative flex h-full flex-col gap-0 border-0 bg-muted p-0 shadow-md">
        <div className="absolute -top-6 left-7 h-6 w-30 rounded-t-2xl bg-current text-muted drop-shadow-[0_-2px_3px_rgba(0,0,0,0.08)] before:absolute before:bottom-0 before:-left-4 before:size-4 before:bg-[radial-gradient(circle_at_0_0,transparent_16px,currentColor_16.5px)] after:absolute after:bottom-0 after:-right-4 after:size-4 after:bg-[radial-gradient(circle_at_100%_0,transparent_16px,currentColor_16.5px)]" />

        <div className="flex grow flex-col px-2 pt-2">
          <div className="relative aspect-video overflow-hidden grow rounded-t-lg transition-transform duration-300 ease-out sm:group-hover:-translate-y-15 sm:-mb-15">
            <ImageDialog
              src={getProjectImage(project.name)}
              name={project.name}
              description={project.description || ""}
              topics={project.topics || []}
              language={project.language || ""}
              githubUrl={`https://github.com/${username}/${project.name}`}
              homepage={project.homepage}
            />
          </div>
        </div>

        <CardContent className="relative z-20 shrink-0 grow-0 bg-muted p-2 shadow-[0_-6px_12px_-6px_rgba(0,0,0,0.15)]">
          <h2
            className={cn(
              "mb-1 text-xl font-semibold capitalize tracking-tight",
            )}
          >
            {project.name.replace(/-/g, " ")}
          </h2>
          <p className="line-clamp-3 min-h-18 text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-4 flex min-h-6 w-full items-center justify-between">
            {project.language && (
              <Badge className="mr-2 rounded-full">{project.language}</Badge>
            )}
            <div>
              {topics.slice(0, 2).map((topic, index) => (
                <Badge
                  variant="outline"
                  className="mr-2 rounded-full"
                  key={index}
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="gap-2 px-2 py-3 z-20 bg-muted">
          <Button className="flex-1 rounded-full" asChild>
            <Link
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          {project.homepage && (
            <Button
              size="icon"
              variant="outline"
              className="rounded-full"
              asChild
            >
              <Link
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowUpRight />
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
