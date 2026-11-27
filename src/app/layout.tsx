import "./globals.css";
import type React from "react";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import TanstackProvider from "@/context/tanstack-provider";

const lora = Poppins({
  weight: ["400", "600", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivam Soni · Software Engineer & Full-Stack Developer",
  description:
    "Shivam Soni is a Software Engineer experienced in MERN Stack development, full-stack web development, and building modern web applications using JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL.",

  applicationName: "Shivam Soni Portfolio",
  manifest: "/site.webmanifest",

  keywords: [
    "Shivam Soni",
    "Shivam Soni Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Full Stack Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Development",
    "MERN Stack Developer",
    "Software Engineer Portfolio",
    "Shivam Dev",
    "Dev Shivam",
    "shivam-iyk",
  ],

  authors: [{ name: "Shivam Soni" }],
  creator: "Shivam Soni",
  publisher: "Shivam Soni",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      "index": true,
      "follow": true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Shivam Soni · Software Engineer & Full-Stack Developer",
    description:
      "Explore Shivam Soni's portfolio, featuring full-stack development projects, professional experience, and skills in MERN Stack, Next.js, PostgreSQL, Git, GitHub, and Adobe Analytics.",
    siteName: "Shivam Soni Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Shivam Soni - Software Engineer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shivam Soni | Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer skilled in MERN Stack, Next.js, PostgreSQL, Git, GitHub, and Adobe Analytics. Explore my projects and experience.",
    creator: "@shivam_iyk",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Shivam Soni - Software Engineer Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={lora.className}>
        <TanstackProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Analytics />
            {children}
            <Toaster richColors />
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
