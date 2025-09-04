import projectsEn from "@/assets/content/projects.json";
import { Code, type Palette, Rocket, Shield } from "@/components/icon.astro";
import type { NavItem } from "@/sites/portfolio/sections/header.astro";
import type { Project } from "../type";

const PROJECTS: Project[] = projectsEn.en;

const HERO = {
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
};

const CONTACT = {
	contactDescription:
		"I'm **immediately available** for new projects. Let's talk about how I can help you achieve your goals.",
	label: "Response in less than 24h",
};

const ABOUT = {
	markdown: {
		paragraph:
			"With **4 years of experience** in software engineering, I've honed a unique approach that combines **agile methodologies** with **cutting-edge technologies**. My specialty is creating solutions that not only work but also scale and generate real business value",
	},
	location: "Puerto Padre, Las Tunas, Cuba",
	time: "GMT-5 (Flexible)",
};

type Service = {
	title: string;
	description: string;
	features: string[];
	icon: typeof Palette;
};

const SERVICES: Service[] = [
	{
		title: "Full Stack Development",
		description: "Complete web applications from frontend to database",
		features: [
			"React/Next.js & TypeScript",
			"Node.js/Fastify APIs",
			"PostgreSQL & Drizzle ORM",
			"Tailwind CSS & UI/UX",
			"Cloudflare Workers",
			"Testing & CI/CD",
			"SEO & Performance",
			"Responsive Design",
		],
		icon: Code,
	},
	{
		title: "Smart Contracts & Web3",
		description: "Secure smart contracts and decentralized applications",
		features: [
			"Solidity & Vyper",
			"Security audits",
			"Comprehensive testing",
			"Deployment & Verification",
			"Viem & Wagmi integration",
			"Rainbowkit wallets",
			"IPFS & decentralization",
			"Gas optimization",
		],
		icon: Shield,
	},
	{
		title: "Consulting & Mentoring",
		description: "Architecture, optimization, and best practices for your team",
		features: [
			"Code Review & Refactoring",
			"Software architecture",
			"Technical mentoring",
			"DevOps & GitHub Actions",
			"Performance optimization",
			"Best practices",
			"Team leadership",
			"Technical documentation",
		],
		icon: Rocket,
	},
];

export const content = {
	projects: PROJECTS,
	hero: HERO,
	contact: CONTACT,
	about: ABOUT,
	services: SERVICES,
} as const;

// #region UI

const NAV_ITEMS: NavItem[] = [
	{ name: "About", id: "about" },
	{ name: "Services", id: "services" },
	{ name: "Skills", id: "skills" },
	{ name: "Projects", id: "projects" },
	{ name: "Contact", id: "contact" },
];

export const ui = {
	header: { navItems: NAV_ITEMS },
	hero: {
		contactButton: "Work Together",
		projectsButton: "View my work",
	},
	about: { title: "About me" },
	services: { title: "Services" },
	skills: { title: "Tech Stack" },
	projects: {
		title: "Projects",
		previewBtn: "Preview",
	},
	contact: {
		title: "Contact",
		sendMessageBtn: "Send message",
		connectBtn: "Connect",
		viewCodeBtn: "View code",
	},
} as const;
