export function get_page_from_url(url: string): string {
	const endpoints = url.split("/").filter(Boolean); // removes empty string
	const page = `/${endpoints[0]}`;

	return page;
};