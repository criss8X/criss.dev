import * as servicesEn from "@/locales/portfolio/services-en";
import * as servicesEs from "@/locales/portfolio/services-es";
import * as skillsEn from "@/locales/portfolio/skills-en";
import * as skillsEs from "@/locales/portfolio/skills-es";

type AnyLocale<L> = {
	es: L;
	en: L;
};

export function getLocalesByLang<L>(locales: AnyLocale<L>, lang?: string): L {
	assertTypes(locales.en, locales.es);

	return lang === "es" ? locales.es : locales.en;
}

export function getSkillsLocale(lang?: string) {
	assertTypes(skillsEn, skillsEs);

	return lang === "es" ? skillsEs : skillsEn;
}

export function getServicesLocale(lang?: string) {
	assertTypes(servicesEn, servicesEs);

	return lang === "es" ? servicesEs : servicesEn;
}

function assertTypes(a: unknown, b: unknown) {
	if (typeof a === typeof b) {
		return;
	}

	throw new Error(`Locales with diff problem: a !== b look: A: ${a}, B: ${b}`);
}
