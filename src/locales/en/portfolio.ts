import {
	Code,
	Github,
	Palette,
	Rocket,
	Shield,
	Terminal,
	Zap,
} from "@/components/icon.astro";
import type { NavItem } from "@/sites/portfolio/sections/header.astro";

type Project = {
	name: string;
	desc: string;
	stack: string[];
	github: string;
	preview?: string;
};

const PROJECTS: Project[] = [
	{
		name: "Force4G",
		desc: "Lightweight application to force 4G on your phone, taking up less than 250KB",
		stack: ["Kotlin", "Mobile Dev"],
		github: "https://github.com/criss8X/Force4G",
	},
	{
		name: "Mirage",
		desc: "Simple, lightweight, and customizable web client for the Matrix protocol with a clean and user-friendly interface",
		stack: [
			"TypeScript",
			"React",
			"SCSS/SASS",
			"Matrix JS SDK",
			"Vite.js",
			"Zustand",
			"Storybook.js",
		],
		github: "https://github.com/yuri-xyz/mirage",
	},
	{
		name: "ERC20 Vault",
		desc: "Smart contract for secure ERC20 token storage with deposit and withdrawal functionality",
		stack: ["Solidity", "Ethereum", "Smart Contracts", "Web3"],
		github: "https://github.com/yuri-xyz/erc20-vault",
	},
];

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
	label: "Response guaranteed in less than 24 hours",
};

const ABOUT = {
	markdown: {
		paragraph:
			"With **4 years of experience** in software engineering, I've honed a unique approach that combines **agile methodologies** with **cutting-edge technologies**. My specialty is creating solutions that not only work but also scale and generate real business value",
	},
	location: "Puerto Padre, Las Tunas, Cuba",
	time: "GMT-5 (Flexible)",
};

type Skill = {
	title: string;
	description: string;
	stack: string[];
	icon: typeof Palette;
};

const SKILLS: Skill[] = [
	{
		title: "Frontend Development",
		description: "Modern interfaces and exceptional user experiences",
		icon: Palette,
		stack: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"React Router",
			"HTML5 & SEO",
			"Next.js",
		],
	},
	{
		title: "Backend & Database",
		description: "Robust APIs and efficient data management",
		icon: Zap,
		stack: [
			"Node.js",
			"Fastify",
			"PostgreSQL",
			"Drizzle ORM",
			"Cloudflare Workers",
			"SQL",
		],
	},
	{
		title: "Web3 & Blockchain",
		description: "Smart contracts and decentralized applications",
		icon: Terminal,
		stack: ["Solidity", "Vyper", "Viem & Wagmi", "Rainbowkit", "IPFS"],
	},
	{
		title: "Tools & Languages",
		description: "Development tools and additional languages",
		icon: Github,
		stack: [
			"Git & GitHub",
			"Rust",
			"Kotlin",
			"GitHub Actions",
			"VsCode",
			"Arch Linux",
		],
	},
];

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
	skills: SKILLS,
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
	header: {
		navItems: NAV_ITEMS,
	},
	hero: {
		contactButton: "Work Together",
		projectsButton: "View my work",
	},
	about: {
		title: "About me",
	},
	contact: {
		title: "Contact",
		sendMessageBtn: "Send message",
	},
	projects: {
		title: "Projects",
		previewBtn: "Preview",
	},
	skills: {
		title: "Tech Stack",
	},
	services: {
		title: "Services",
	},
} as const;
