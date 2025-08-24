const HIGHLIGHT_REGEX = /\*{2}(.*?)\*{2}/gms;

export function parseHighlightsFromParagraph(paragraph: string): string {
	return paragraph.replace(HIGHLIGHT_REGEX, (match) => {
		return `<strong class="highlight">${match.slice(2, -2)}</strong>`;
	});
}
