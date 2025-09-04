import type { LucideIcon } from "@/components/icon.astro";

export type Project = {
	name: string;
	desc: string;
	stack: string[];
	github: string;
	preview?: string;
};

export type Skill = {
	title: string;
	description: string;
	stack: string[];
	icon: LucideIcon;
};
