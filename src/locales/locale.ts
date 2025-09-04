import * as contactEn from "@/locales/portfolio/contact-en";
import * as contactEs from "@/locales/portfolio/contact-es";
import * as portfolioEn from "@/locales/portfolio/portfolio-en";
import * as portfolioEs from "@/locales/portfolio/portfolio-es";
import * as servicesEn from "@/locales/portfolio/services-en";
import * as servicesEs from "@/locales/portfolio/services-es";
import * as skillsEn from "@/locales/portfolio/skills-en";
import * as skillsEs from "@/locales/portfolio/skills-es";

type Sites = "portfolio";

export function getLocaleBySite(site: Sites, lang: string) {
	switch (site) {
		case "portfolio": {
			assertTypes(portfolioEn, portfolioEs);

			return lang === "es" ? portfolioEs : portfolioEn;
		}
	}
}

export function getSkillsLocale(lang?: string) {
	assertTypes(skillsEn, skillsEs);

	return lang === "es" ? skillsEs : skillsEn;
}

export function getServicesLocale(lang?: string) {
	assertTypes(servicesEn, servicesEs);

	return lang === "es" ? servicesEs : servicesEn;
}

export function getPortfolioLocale(lang?: string) {
	assertTypes(portfolioEn, portfolioEs);

	return lang === "es" ? portfolioEs : portfolioEn;
}

export function getContactLocale(lang?: string) {
	assertTypes(contactEn, contactEs);

	return lang === "es" ? contactEs : contactEn;
}

function assertTypes(a: unknown, b: unknown) {
	if (typeof a === typeof b) {
		return;
	}

	throw new Error(`Locales with diff problem: a !== b look: A: ${a}, B: ${b}`);
}
