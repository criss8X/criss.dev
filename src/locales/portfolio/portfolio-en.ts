import projects from "@/assets/content/projects.json";
import type { Project } from "@/locales/type";
import type { NavItem } from "@/sites/portfolio/sections/header.astro";

export const PROJECTS: Project[] = projects.en;

export const UI = {
	hero: {
		contactButton: "Work Together",
		projectsButton: "View my work",

		mainStack: "Frontend • Backend • Web3",
		description:
			"Full Stack Developer specialized in modern technologies and blockchain",

		mainSkills: [
			"TypeScript",
			"React",
			"Solidity",
			"Rust",
			"Next.js",
			"PostgreSQL",
			"Tailwind CSS",
		],
	},

	about: {
		title: "About me",
		markdown: {
			paragraph:
				"With **4 years of experience** in software engineering, I've honed a unique approach that combines **agile methodologies** with **cutting-edge technologies**. My specialty is creating solutions that not only work but also scale and generate real business value",
		},
		location: "Puerto Padre, Las Tunas, Cuba",
		time: "GMT-5 (Flexible)",
	},

	header: {
		navItems: [
			{ name: "About", id: "about" },
			{ name: "Services", id: "services" },
			{ name: "Skills", id: "skills" },
			{ name: "Projects", id: "projects" },
			{ name: "Contact", id: "contact" },
		] satisfies NavItem[],
	},

	projects: {
		title: "Projects",
		previewBtn: "Preview",
	},
};
