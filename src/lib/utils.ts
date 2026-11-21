import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (!element) {
    console.log("Element not found");
    return;
  }
  element.scrollIntoView({ behavior: "smooth" });
};
