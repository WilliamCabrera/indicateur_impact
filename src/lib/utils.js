import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const LANGUAGES = ["fr", "en"];

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
