"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Abril_Fatface, Dynalight, Lora } from "next/font/google";
import { cn, scrollToSection } from "@/lib/utils";
import CardSwap from "./ui/card-swap";
import { useTheme } from "next-themes";
import Grainient from "./ui/grainient";

const dynalight = Dynalight({ subsets: ["latin"], weight: "400" });
const abrilFlatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });
const lora = Lora({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "shivam-iyk";
  const mailId = process.env.NEXT_PUBLIC_MAIL_ID || "legendshivam11@gmail.com";
  const resume = process.env.NEXT_PUBLIC_RESUME_URL || null;

  const { theme } = useTheme();

  const projectCards = [
    {
      title: "Gadget Store",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524957/portfolio/chzs9wo4zdhekhzxlb6d.png`,
    },
    {
      title: "Sociial",
      image: `https://raw.githubusercontent.com/shivam-iyk/sociial/main/public/hero-dark.png`,
    },
    {
      title: "Work Connect",
      image: `https://res.cloudinary.com/dv3qbj0bn/image/upload/v1744524956/portfolio/tcikh1sw5ntbtdah4wem.png`,
    },
    {
      title: "LastMinPrep",
      image: `https://raw.githubusercontent.com/${username}/lastminprep/main/public/screenshots/home.png`,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: username
        ? `https://github.com/${username}`
        : "https://github.com/shivam-iyk",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url:
        process.env.NEXT_PUBLIC_LINKEDIN_PROFILE ||
        "https://linkedin.com/in/shivam-iyk",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      url: process.env.NEXT_PUBLIC_X_PROFILE || "https://x.com/shivam_iyk",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      name: "Mail",
      url: `mailto:${mailId}`,
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[95dvh] flex items-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full max-h-screen overflow-hidden">
        <Grainient
          className="min-h-screen"
         colors={["#171717", "#397A9B", "#A5DFF2", "#E0F5FC"]}
          angle={55}
          flow={0.8}
          silk={0.35}
          grainAmount={0.08}
          type="linear"
          bands={1}
          softness={1}
          scale={1}
          speed={1}
          grainSize={1.2}
          grainAnimated
          contrast={1}
          saturation={1}
          variation={0}
          interactive
          stir={1}
          clickSwirl
          intro
          lightMode={true}
        />
      </div>
      <div className="container md:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className={cn(
                  "text-5xl md:text-6xl font-medium mb-2 flex items-center",
                  dynalight.className,
                )}
              >
                Hi
              </h2>
              <h1
                className={cn(
                  "text-6xl md:text-7xl font-bold tracking-tighter relative w-fit",
                  abrilFlatface.className,
                )}
              >
                I&apos;m <span className="text-black">Shivam</span>
                <div className="absolute -rotate-4 bg-[#ffe847] md:w-60 w-50 md:h-20 h-18 top-0 -right-2 -z-10" />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p
                className={cn(
                  "text-xl md:text-2xl text-muted-foreground",
                  lora.className,
                )}
              >
                I build modern, scalable web applications by turning ideas into
                functional digital experiences. Passionate about solving
                problems through clean code, thoughtful design, and continuous
                learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
              >
                View Projects
              </Button>
              {resume ? (
                <Button size="lg" variant="outline" asChild>
                  <Link href={resume} target="_blank">
                    Resume
                  </Link>
                </Button>
              ) : (
                <Button onClick={() => scrollToSection("#contact")}>
                  Get in Touch
                </Button>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex space-x-4 max-sm:justify-center"
            >
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block"
          >
            <CardSwap
              items={projectCards}
              width={600}
              height={400}
              cardDistance={80}
              verticalDistance={80}
              skewAmount={3}
              depth={80}
              theme={theme === "dark" ? "dark" : "light"}
            />
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full"
              aria-label="Scroll to Skills section"
              onClick={() => scrollToSection("#skills")}
            >
              <ArrowDown className="text-primary sm:size-8 size-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
