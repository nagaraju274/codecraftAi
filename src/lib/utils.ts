// Import the 'clsx' library for conditionally joining class names.
import { clsx, type ClassValue } from "clsx"
// Import the 'tailwind-merge' library to merge Tailwind CSS classes without conflicts.
import { twMerge } from "tailwind-merge"

// A utility function to combine and merge class names.
export function cn(...inputs: ClassValue[]) {
  // `clsx` handles conditional classes, and `twMerge` resolves Tailwind class conflicts.
  return twMerge(clsx(inputs))
}
