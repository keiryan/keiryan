import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const d =
    year && month && day
      ? new Date(year, month - 1, day)
      : new Date(iso);

  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
