export function assertLocale(lang: string | undefined): string {
	if (lang === undefined) {
		throw new Error("Oops this should not be happened, THE LANG IS UNDEFINED");
	}

	return lang;
}
