import { Github, Palette, Terminal, Zap } from "@/components/icon.astro";
import type { Skill } from "@/locales/type";

export const SKILLS: Skill[] = [
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

export const UI = { title: "Stack Tecnológico" } as const;
