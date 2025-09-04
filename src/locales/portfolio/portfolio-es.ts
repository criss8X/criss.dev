import projects from "@/assets/content/projects.json";
import type { Project } from "@/locales/type";
import type { NavItem } from "@/sites/portfolio/sections/header.astro";

export const PROJECTS: Project[] = projects.es;

export const UI = {
	hero: {
		contactButton: "Trabajemos juntos",
		projectsButton: "Ver mi trabajo",

		mainStack: "Frontend • Backend • Web3",
		description:
			"Desarrollador Full Stack especializado en tecnologías modernas y blockchain",

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
		title: "Sobre mí",

		markdown: {
			paragraph:
				"Con **4 años de experiencia** en ingeniería de software, he perfeccionado un enfoque único que combina **metodologías ágiles** con **tecnologías de vanguardia**. Mi especialidad es crear soluciones que no solo funcionan, sino que escalan y generan valor real para el negocio",
		},
		location: "Puerto Padre, Las Tunas, Cuba",
		time: "GMT-5 (Flexible)",
	},

	header: {
		navItems: [
			{ name: "Sobre mí", id: "about" },
			{ name: "Servicios", id: "services" },
			{ name: "Habilidades", id: "skills" },
			{ name: "Projectos", id: "projects" },
			{ name: "Contacto", id: "contact" },
		] satisfies NavItem[],
	},

	projects: {
		title: "Projectos",
		previewBtn: "Previsualizar",
	},
};
