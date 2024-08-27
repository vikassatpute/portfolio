import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getRandomPosition = () => ({
  top: `${Math.floor(Math.random() * 90)}%`,
  left: `${Math.floor(Math.random() * 90)}%`,
});