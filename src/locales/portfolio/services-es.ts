import { Code, Rocket, Shield } from "@/components/icon.astro";
import type { Service } from "@/locales/type";

export const SERVICES: Service[] = [
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

export const UI = { title: "Servicios" } as const;
