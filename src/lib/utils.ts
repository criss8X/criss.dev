import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function splitLocale(path: string): string {
	return path.slice(path.indexOf("/", 1));
}
