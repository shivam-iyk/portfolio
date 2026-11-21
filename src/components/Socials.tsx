import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Socials() {
  const mailId = process.env.NEXT_PUBLIC_MAIL_ID || "legendshivam11@gmail.com";
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "shivam-iyk";

  const socialLinks = [
    {
      name: "GitHub",
      url: username
        ? `https://github.com/${username}`
        : "https://github.com/shivam-iyk",
      icon: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          alt="GitHub"
          className="h-5 w-5 group-hover:invert"
          width="20"
          height="20"
        />
      ),
    },
    {
      name: "LinkedIn",
      url:
        process.env.NEXT_PUBLIC_LINKEDIN_PROFILE ||
        "https://linkedin.com/in/shivam-iyk",
      icon: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
          alt="LinkedIn"
          className="h-5 w-5 group-hover:invert"
          width="20"
          height="20"
        />
      ),
    },
    {
      name: "Twitter",
      url: process.env.NEXT_PUBLIC_X_PROFILE || "https://x.com/shivam_iyk",
      icon: (
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
          alt=""
          className="h-5 w-5 group-hover:invert"
          width="20"
          height="20"
        />
      ),
    },
    {
      name: "Mail",
      url: `mailto:${mailId}`,
      icon: <Mail className="h-5 w-5" />,
    },
  ];
  return socialLinks.map((link) => (
    <Link
      key={link.name}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-110 group"
      aria-label={link.name}
    >
      {link.icon}
    </Link>
  ));
}

export default Socials;
