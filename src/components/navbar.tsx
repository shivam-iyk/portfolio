"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Equal, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", id: "#hero" },
  { name: "Skills", href: "#skills", id: "#skills" },
  { name: "Experience", href: "#experience", id: "#experience" },
  { name: "Projects", href: "#projects", id: "#projects" },
  { name: "Contact", href: "#contact", id: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "shivam-iyk";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const glass =
    "overflow-hidden relative bg-[rgba(255, 255, 255, 0.16)] border border-[rgba(255,255,255,0.3)] backdrop-blur-[9px] shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_20px_10px_rgba(255,255,255,1)] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] after:absolute after:top-0 after:left-0 after:right-0 after:w-[1px] after:h-full after:bg-[linear-gradient(180deg,rgba(255,255,255,0.8),transparent,rgba(255,255,255,0.3))] ";

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none">
      <div
        className={`w-full transition-all duration-300 ease-out relative ${
          scrolled ? "mt-3 max-w-7xl px-3" : "mt-0 max-w-full px-0"
        }`}
      >
        <nav
          className={`flex h-16 items-center justify-between px-4 sm:px-6 transition-all duration-300 ease-out pointer-events-auto ${glass} ${
            scrolled
              ? "rounded-full shadow-lg shadow-black/10 dark:shadow-black/40"
              : "rounded-none border-0 shadow-none"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            onClick={() => scrollToSection("#hero")}
          >
            <Avatar>
              <AvatarImage src={`https://github.com/${username}.png`} />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <span className="text-lg font-extrabold tracking-tighter dark:text-white">
              Shivam
            </span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <ul className="hidden items-center gap-1 md:flex">
              {navItems.map(({ name, id }) => (
                <li key={id}>
                  <Button
                    variant="ghost"
                    className="rounded-full"
                    onClick={() => scrollToSection(id)}
                  >
                    {name}
                  </Button>
                </li>
              ))}
            </ul>

            <Button
              type="button"
              variant="ghost"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="md:hidden"
            >
              {open ? <X /> : <Equal />}
            </Button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`mt-2 overflow-hidden rounded-2xl border p-2 shadow-lg shadow-black/10 transition-all duration-200 ease-out md:hidden pointer-events-auto ${glass} ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          } ${scrolled ? "border-b border-input" : "mx-3"}`}
        >
          <ul className="flex flex-col">
            {navItems.map(({ name, id }) => (
              <li key={id}>
                <Button
                  variant="ghost"
                  className="w-full block"
                  onClick={() => {
                    setOpen(false);
                    scrollToSection(id);
                  }}
                >
                  {name}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
