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

export const content = {
	projects: PROJECTS,

	hero: {
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

	contact: {
		contactDescription:
			"Tengo **disponibilidad inmediata** para proyectos nuevos. Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos.",
	},

	about: {
		markdown: {
			paragraph:
				"Con **4 años de experiencia** en ingeniería de software, he perfeccionado un enfoque único que combina **metodologías ágiles** con **tecnologías de vanguardia**. Mi especialidad es crear soluciones que no solo funcionan, sino que escalan y generan valor real para el negocio",
		},
		location: "Puerto Padre, Las Tunas, Cuba",
		time: "GMT-5 (Flexible)",
	},
} as const;
