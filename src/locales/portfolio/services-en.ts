import { Code, Rocket, Shield } from "@/components/icon.astro";
import type { Service } from "@/locales/type";

export const SERVICES: Service[] = [
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

export const UI = { title: "Services" } as const;
