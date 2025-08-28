import * as portfolioEn from "@/locales/en/portfolio";
import * as portfolioEs from "@/locales/es/portfolio";

type Sites = "portfolio";

export function getLocaleBySite(site: Sites, lang: string) {
	switch (site) {
		case "portfolio": {
			assertTypes(portfolioEn, portfolioEs);

			return lang === "es" ? portfolioEs : portfolioEn;
		}
	}
}

function assertTypes(a: unknown, b: unknown) {
	if (typeof a === typeof b) {
		return;
	}

	throw new Error(`Locales with diff problem: a !== b look: A: ${a}, B: ${b}`);
}
