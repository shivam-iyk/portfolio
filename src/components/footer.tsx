"use client";

import type React from "react";

import Link from "next/link";
import { Heart, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Socials from "./Socials";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const mailId = process.env.NEXT_PUBLIC_MAIL_ID || "legendshivam11@gmail.com";
  const city = process.env.NEXT_PUBLIC_CURRENT_CITY || null;

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: mailId,
      link: `mailto:${mailId}`,
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: `${city ? `${city}, ` : ""}India`,
      link: `https://google.com/maps/place/${city ? `${city}+` : ""}India`,
    },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Shivam</h3>
            <p className="text-muted-foreground">
              A passionate developer focused on creating beautiful and
              functional web experiences.
            </p>
            <div className="space-y-2">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-0.5">{item.icon}</div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <Link
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                    >
                      {item.value}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#hero"
                onClick={(e) => scrollToSection(e, "hero")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="#skills"
                onClick={(e) => scrollToSection(e, "skills")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#experience"
                onClick={(e) => scrollToSection(e, "experience")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Connect</h3>
              <div className="flex space-x-4">
                <Socials />
              </div>
            </div>
            <a
              href={`https://www.buymeacoffee.com/${process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_USERNAME}`}
              target="_blank"
            >
              <Image
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me a Coffee"
                width="150"
                height="40"
              />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Shivam. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Shivam
          </p>
        </div>
      </div>
    </footer>
  );
}
