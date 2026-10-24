"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Accenture",
      period: "February 2025 - Present",
      description:
        "Developed and contributed to an e-commerce MERN stack project by building multiple features and reusable components. Additionally, received cross-training in Adobe Analytics to implement website tracking and analytics.",
      skills: ["Adobe Analytics", "MERN"],
      image: "/accenture.png",
    },
    {
      title: "Web Developer Intern",
      company: "House of Couton Pvt. Ltd.",
      period: "January 2025 - April 2025",
      description:
        "Gained hands-on experience with the MediaRecorder and Camera APIs for capturing and recording audio/video streams, and learned Selenium WebDriver for automated web application testing.",
      skills: ["Next.js", "Tailwind", "Selenium WebDriver"],
      image: "/houseofcouton.png",
    },
    {
      title: "Web Developer Intern",
      company: "DU Student Helper",
      period: "June 2024 - September 2024",
      description:
        "Enhanced user engagement by developing 4+ feature-rich pages with intuitive UI/UX, improving a platform serving 10,000+ DU students and 4,00,000+ CUET aspirants, and contributing to Google AdSense approval through increased website traffic.",
      skills: ["Next.js", "Figma", "Tailwind"],
      image: "/dustudenthelper.png",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            My Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Professional experiences that have shaped my skills and knowledge in
            web development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card>
                <CardHeader className="flex items-center gap-4 pb-2">
                  <Image
                    src={exp.image}
                    alt=""
                    width="100"
                    height="100"
                    className="size-10 object-contain"
                  />
                  <div className="flex flex-1 justify-between items-start flex-col sm:flex-row gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mt-2">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
