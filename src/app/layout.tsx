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
  title: "Shivam's Portfolio",
  description: "Personal portfolio website of Shivam",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title: "Shivam",
    description:
      "A passionate developer focused on creating beautiful and functional web experiences.",
    siteName: "Shivam",
    images: [
      {
        url: "/opengraph-image.png",
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam",
    description:
      "A passionate developer focused on creating beautiful and functional web experiences.",
    creator: "@shivam_iyk",
    siteId: "765045797750706176",
    images: [
      {
        url: "/opengraph-image.png",
        type: "image/png",
        width: 1200,
        height: 630,
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
