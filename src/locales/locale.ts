import * as portfolioEn from "@/locales/en/portfolio";
import * as portfolioEs from "@/locales/es/portfolio";
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

function assertTypes(a: unknown, b: unknown) {
	if (typeof a === typeof b) {
		return;
	}

	throw new Error(`Locales with diff problem: a !== b look: A: ${a}, B: ${b}`);
}
