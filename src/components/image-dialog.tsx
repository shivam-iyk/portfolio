"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

function ImageDialog({
  src,
  name,
  description,
  githubUrl,
  homepage,
  topics = [],
  language = "",
}: {
  src: string;
  name: string;
  githubUrl: string;
  homepage?: string;
  description: string;
  topics?: string[];
  language?: string;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={imageError ? "/placeholder.svg?height=400&width=600" : src}
          alt={name}
          draggable={false}
          fill
          onError={() => setImageError(true)}
          className={`object-cover select-none rounded-t-lg h-full ${
            imageError ? "object-center" : "object-left-top"
          } cursor-pointer`}
        />
      </DialogTrigger>
      <DialogContent className="md:max-w-7xl sm:w-3xl w-full p-1 [&>button[data-slot='close']]:hidden border-0 focus-visible:outline-none">
        <DialogHeader>
          <Image
            src={imageError ? "/placeholder.svg?height=400&width=600" : src}
            alt={name}
            className={`${
              imageError ? "object-cover" : "object-contain"
            } rounded-t-lg max-h-[50vh] md:w-7xl sm:w-3xl w-full`}
            width={1280}
            height={1024}
            onError={() => setImageError(true)}
          />
          <DialogTitle className="text-black font-bold tracking-tighter text-2xl capitalize pb-1 px-2">
            {name.replace("-", " ")}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm max-sm:text-left mb-3 px-2">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 flex-wrap px-4">
          {language.length > 0 && <Badge>{language}</Badge>}
          {topics.map((topic, index) => (
            <Badge variant="secondary" key={index}>
              {topic}
            </Badge>
          ))}
        </div>
        <DialogFooter className="max-sm:flex-col">
          <DialogClose asChild>
            <Button className="flex-1 rounded-full" asChild>
              <Link href={githubUrl}>
                <Github /> GitHub
              </Link>
            </Button>
          </DialogClose>
          <DialogClose asChild>
            {homepage && (
              <Button variant="outline" className="rounded-full flex-1" asChild>
                <Link href={homepage}>
                  <ArrowUpRight /> Live Demo
                </Link>
              </Button>
            )}
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ImageDialog;
