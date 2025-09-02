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
		desc: "Aplicación para forzar la 4G del teléfono que ocupa menos de 250 KB",
		stack: ["Kotlin", "Mobile Dev"],
		github: "https://github.com/criss8X/Force4G",
	},
	{
		name: "Mirage",
		desc: "Cliente web simple, ligero y personalizable para el protocolo Matrix con interfaz limpia y fácil de usar",
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
		desc: "Contrato inteligente para almacenamiento seguro de tokens ERC20 con funcionalidades de depósito y retiro",
		stack: ["Solidity", "Ethereum", "Smart Contracts", "Web3"],
		github: "https://github.com/yuri-xyz/erc20-vault",
	},
];

const HERO = {
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
};

const CONTACT = {
	contactDescription:
		"Tengo **disponibilidad inmediata** para proyectos nuevos. Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos.",
	label: "Respuesta garantizada en menos de 24 horas",
};

const ABOUT = {
	markdown: {
		paragraph:
			"Con **4 años de experiencia** en ingeniería de software, he perfeccionado un enfoque único que combina **metodologías ágiles** con **tecnologías de vanguardia**. Mi especialidad es crear soluciones que no solo funcionan, sino que escalan y generan valor real para el negocio",
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
		description: "Interfaces modernas y experiencias de usuario excepcionales",
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
		description: "APIs robustas y gestión eficiente de datos",
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
		description: "Contratos inteligentes y aplicaciones descentralizadas",
		icon: Terminal,
		stack: ["Solidity", "Vyper", "Viem & Wagmi", "Rainbowkit", "IPFS"],
	},
	{
		title: "Tools & Languages",
		description: "Herramientas de desarrollo y lenguajes adicionales",
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
		title: "Desarrollo Full Stack",
		description:
			"Aplicaciones web completas desde el frontend hasta la base de datos",
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
		description:
			"Contratos inteligentes seguros y aplicaciones descentralizadas",
		features: [
			"Solidity & Vyper",
			"Auditorías de seguridad",
			"Testing exhaustivo",
			"Deployment & Verificación",
			"Viem & Wagmi integration",
			"Rainbowkit wallets",
			"IPFS & descentralización",
			"Gas optimization",
		],
		icon: Shield,
	},
	{
		title: "Consultoría & Mentoring",
		description:
			"Arquitectura, optimización y mejores prácticas para tu equipo",
		features: [
			"Code Review & Refactoring",
			"Arquitectura de software",
			"Mentoring técnico",
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
	{ name: "Sobre mí", id: "about" },
	{ name: "Servicios", id: "services" },
	{ name: "Habilidades", id: "skills" },
	{ name: "Projectos", id: "projects" },
	{ name: "Contacto", id: "contact" },
];

export const ui = {
	header: {
		navItems: NAV_ITEMS,
	},
	hero: {
		contactButton: "Trabajemos juntos",
		projectsButton: "Ver mi trabajo",
	},
	about: { title: "Sobre mí" },
	services: { title: "Servicios" },
	skills: { title: "Stack Tecnológico" },
	projects: {
		title: "Projectos Destacados",
		previewBtn: "Previsualizar",
	},
	contact: {
		title: "¿Listo para empezar?",
		sendMessageBtn: "Enviar un mensaje",
	},
} as const;
