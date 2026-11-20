"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layout, Server, Cog } from "lucide-react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Abril_Fatface } from "next/font/google";
import GridMotion from "./grid-motion";

const abrilFlatface = Abril_Fatface({ weight: ["400"], subsets:["latin"] });

const transcity = localFont({
  src: "../fonts/transcity.otf",
});

const techLogos = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    href: "https://www.typescriptlang.org",
  },
  {
    title: "ReactJS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    href: "https://react.dev",
  },
  {
    title: "React Router",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
    href: "https://reactrouter.com",
  },
  {
    title: "Expo",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
    href: "https://expo.dev",
  },
  {
    title: "Next JS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    href: "https://nextjs.org",
  },
  {
    title: "Tailwind",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    href: "https://tailwindcss.com",
  },
  {
    title: "NodeJS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    href: "https://nodejs.org",
  },
  {
    title: "React Native",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg",
    href: "https://reactnative.dev",
  },
  {
    title: "ExpressJS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    href: "https://expressjs.com",
  },
  {
    title: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    href: "https://www.mongodb.com",
  },
  {
    title: "PostgresSQL",
    name: "PostgresSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    href: "https://www.postgresql.org",
  },
];

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend & Languages",
      icon: <Layout className="h-10 w-10 mb-3 text-primary" />,
      skills: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          highlight: true,
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          highlight: true,
        },
        {
          name: "ReactJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          highlight: true,
        },
        {
          name: "React Router",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
        },
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg",
        },
        {
          name: "Expo",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
        },
        {
          name: "Next JS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          highlight: true,
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          highlight: true,
        },
      ],
    },
    {
      title: "Backend & Deployment",
      icon: <Server className="h-10 w-10 mb-3 text-primary" />,
      skills: [
        {
          name: "NodeJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          highlight: true,
        },
        {
          name: "ExpressJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          invert: true,
          highlight: true,
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          highlight: true,
        },
        {
          name: "PostgresSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
          highlight: true,
        },
        {
          name: "Cloudinary",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cloudinary.svg",
        },
        {
          name: "Socket.IO",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/socketdotio.svg",
          invert: true,
          highlight: true,
        },
        {
          name: "Render",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/render.svg",
        },
        {
          name: "Vercel",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg",
        },
      ],
    },
    {
      title: "Tools & Libraries",
      icon: <Cog className="h-10 w-10 mb-3 text-primary" />,
      skills: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          highlight: true,
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          invert: true,
          highlight: true,
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        },
        {
          name: "Vite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        },
        {
          name: "Postman",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        },
        {
          name: "ShadCN",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/shadcnui.svg",
        },
        {
          name: "Zod",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zod.svg",
        },
        {
          name: "Redux Toolkit",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        },
        {
          name: "Axios",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
        },
        {
          name: "Adobe Analytics",
          icon: "/adobe.png",
          highlight: true,
        },
        {
          name: "Razorpay",
          icon: "/razorpay.webp",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <h2
          className={cn(
            "text-4xl text-center mb-6 font-extrabold tracking-tighter",
            abrilFlatface.className,
          )}
        >
          Skills
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="flex flex-col gap-8 my-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 shadow-sm border"
              >
                <div className="flex flex-col items-center mb-6">
                  <h3 className={cn("text-3xl", transcity.className)}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {category.skills.map((skill) => (
                    <div
                      className={`flex items-center gap-3 px-2 py-1 rounded-full ${skill.highlight ? "bg-foreground hover:bg-foreground/80 text-background" : "bg-muted/80 hover:bg-muted"} transition-colors`}
                      key={skill.name}
                    >
                      <div
                        className={`${skill.name === "Razorpay" ? "w-20 h-6 grid place-content-center" : "w-6 h-6"} h-6 relative flex-shrink-0`}
                      >
                        <Image
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          width={skill.name === "Razorpay" ? 80 : 24}
                          height={24}
                          className={`object-contain ${skill.invert ? "invert" : ""}`}
                        />
                      </div>
                      <span
                        className={`font-medium truncate text-sm ${skill.name === "Razorpay" ? "hidden" : ""}`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <GridMotion
          className="max-lg:hidden"
            items={techLogos.map((item) => item.image)}
            rows={6}
            aspectRatio={1}
            gap={16}
            radius={14}
            angle={-10}
            tilt={0}
            speed={24}
            direction="alternate"
            parallax={0.5}
            spotlight={0.6}
            dim={0.1}
            fade={0.5}
            grayscale={false}
            theme="light"
          />
        </div>
      </div>
    </section>
  );
}
