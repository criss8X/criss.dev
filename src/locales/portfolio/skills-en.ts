import { Github, Palette, Terminal, Zap } from "@/components/icon.astro";
import type { Skill } from "@/locales/type";

export const SKILLS: Skill[] = [
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

export const UI = { title: "Tech Stack" } as const;
