"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import LetterGlitch from "./ui/letter-glitch";
import { Abril_Fatface } from "next/font/google";

type TimelineItem = {
  type: "work" | "education";
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  image: string;
};

const abrilFlatface = Abril_Fatface({ weight: ["400"], subsets: ["latin"] });

const experiences: TimelineItem[] = [
  {
    type: "work",
    title: "Associate Software Engineer",
    company: "Accenture",
    period: "Feb 2025 - Present",
    description:
      "Developed and contributed to an e-commerce MERN stack project by building multiple features and reusable components. Additionally, received cross-training in Adobe Analytics to implement website tracking and analytics.",
    skills: ["React", "Node.js", "Adobe Analytics", "JavaScript"],
    image: "/accenture.png",
  },
  {
    type: "work",
    title: "Web Developer Intern",
    company: "House of Couton",
    period: "Jan 2025 - Jun 2025",
    description:
      "Gained hands-on experience with the MediaRecorder and Camera APIs for capturing and recording audio/video streams, and learned Selenium WebDriver for automated web application testing.",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    image: "/houseofcouton.png",
  },
  {
    type: "work",
    title: "Web Developer Intern",
    company: "DU Student Helper",
    period: "Jun 2024 - Sep 2024",
    description:
      "Enhanced user engagement by developing 4+ feature-rich pages with intuitive UI/UX, improving a platform serving 10,000+ DU students and 4,00,000+ CUET aspirants, and contributing to Google AdSense approval through increased website traffic.",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    image: "/dustudenthelper.png",
  },
  {
    type: "education",
    title: "Bachelor of Science",
    company: "University of Delhi",
    period: "2021 - 2025",
    description:
      "Studied core computer science subjects, including Data Structures and Algorithms, C++, Python, Software Engineering, SQL, DBMS and Operating Systems, building a strong base in programming and problem solving.",
    skills: ["Computer Science", "SQL", "Web Development"],
    image: "/delhi-university.png",
  },
];

// WAVE GEOMETRY
const ROW = 320; // height of each timeline row
const W = 96; // width of the wave column
const LEFT_X = 16; // trough (left extreme)
const RIGHT_X = W - 16; // peak (right extreme)
const MID_X = W / 2;
const H = experiences.length * ROW;

const points = experiences.map((_, i) => ({
  x: i % 2 === 0 ? RIGHT_X : LEFT_X,
  y: ROW * (i + 0.5),
}));

function buildPath() {
  const first = points[0];
  let d = `M ${MID_X} 0 C ${MID_X} ${first.y / 2}, ${first.x} ${first.y / 2}, ${first.x} ${first.y}`;
  for (let i = 1; i < points.length; i++) {
    const p = points[i - 1];
    const c = points[i];
    const my = (p.y + c.y) / 2;
    d += ` C ${p.x} ${my}, ${c.x} ${my}, ${c.x} ${c.y}`;
  }
  const last = points[points.length - 1];
  const my = (last.y + H) / 2;
  d += ` C ${last.x} ${my}, ${MID_X} ${my}, ${MID_X} ${H}`;
  return d;
}

const wavePath = buildPath();

function Dot({
  x,
  y,
  progress,
  type,
}: {
  x: number;
  y: number;
  progress: MotionValue<number>;
  type: TimelineItem["type"];
}) {
  const t = y / H;
  const scale = useTransform(progress, [t - 0.04, t], [0, 1]);
  const opacity = useTransform(progress, [t - 0.04, t], [0, 1]);

  return (
    <motion.span
      style={{ left: x - 24, top: y - 24, scale, opacity }}
      className="absolute flex size-12 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-md"
    >
      {type === "work" ? (
        <Briefcase className="size-6" />
      ) : (
        <GraduationCap className="size-6" />
      )}
    </motion.span>
  );
}

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 55%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative">
      <div className="absolute left-0 top-0 overflow-hidden w-full h-full">
        <LetterGlitch
          glitchColors={["#ffffff", "black"]}
          glitchAmount={0.5}
          speed={1}
          flow={0.5}
          clickEffect="tear"
          baseColor="#ffffff"
          fontSize={14}
          spacing={0.6}
          density={0.9}
          baseOpacity={0.16}
          smooth
          edgeFade={0}
          centerFade={0}
          interactive
          cursorRadius={140}
          intro
          lightMode={true}
        />
      </div>
      <div className="container px-4 md:px-6 relative py-20">
        <div className="flex flex-col items-center text-center mb-12">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold tracking-tighter mb-4",
              abrilFlatface.className,
            )}
          >
            Experience &amp; Education
          </h2>
        </div>

        <div ref={trackRef} className="relative max-w-4xl mx-auto">
          <div
            className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 pointer-events-none"
            style={{ width: W, height: H }}
            aria-hidden="true"
          >
            <svg
              width={W}
              height={H}
              viewBox={`0 0 ${W} ${H}`}
              fill="none"
              className="absolute inset-0 text-primary overflow-visible"
            >
              <path
                d={wavePath}
                stroke="currentColor"
                strokeOpacity={0.15}
                strokeWidth={3}
                strokeLinecap="round"
              />
              <motion.path
                d={wavePath}
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                style={{ pathLength: progress }}
              />
            </svg>

            {points.map((p, i) => (
              <Dot
                key={i}
                x={p.x}
                y={p.y}
                progress={progress}
                type={experiences[i].type}
              />
            ))}
          </div>

          {experiences.map((exp, index) => {
            const onRight = points[index].x === RIGHT_X;
            return (
              <div
                key={index}
                className="relative flex items-center"
                style={{ height: ROW }}
              >
                <motion.div
                  initial={{ opacity: 0, x: onRight ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className={`ml-28 md:ml-0 w-[calc(100%-7rem)] md:w-[calc(50%-4rem)] ${
                    onRight ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <Card>
                    <CardHeader className="flex items-center gap-4">
                      <Image
                        src={exp.image}
                        alt=""
                        width="100"
                        height="100"
                        className="size-12 object-contain"
                      />
                      <div className="flex flex-1 justify-between items-start flex-col gap-2">
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
                      <p className="text-sm">{exp.description}</p>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
