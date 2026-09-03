import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Repository } from "./projects";
import ImageDialog from "./image-dialog";
import { Badge } from "./ui/badge";

function ProjectCard({
  project,
  index,
}: {
  project: Repository;
  index: number;
}) {
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
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524945/portfolio/mu7whyi3poqdfnkqfb30.jpg`,
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
      image:
        "https://raw.githubusercontent.com/${username}/learn-loop/main/frontend/public/screenshot.png",
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle className="capitalize text-center text-xl">
            {project.name.replace(/-/g, " ")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="relative aspect-video overflow-hidden rounded-md mb-4">
            <ImageDialog
              src={getProjectImage(project.name)}
              name={project.name}
              description={project.description || ""}
              topics={project.topics || []}
              language={project.language || ""}
            />
          </div>
          <p className="text-muted-foreground line-clamp-3">
            {project.description}
          </p>
          <div className="flex space-between items-center w-full mt-4">
            {project.language && (
              <Badge variant="secondary" className="mr-2">
                {project.language}
              </Badge>
            )}
            <div>
              {topics.length > 0 &&
                topics.slice(0, 2).map((topic, index) => (
                  <Badge variant="outline" className="mr-2" key={index}>
                    {topic}
                  </Badge>
                ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          <Button variant="outline" size="sm" asChild>
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
            <Button size="sm" asChild>
              <Link
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
