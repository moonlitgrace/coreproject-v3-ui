<script lang="ts">
	import AnimeInfoPage from '$components/pages/anime_info/Index.svelte';
	import { OpengraphGenerator } from '$functions/opengraph';
	import { page } from '$app/stores';

	const opengraph_html = new OpengraphGenerator({
		title: 'Hello',
		page_url: $page.url.href,
		description: 'random',
		site_name: 'CoreProject',
		locale: 'en_US'
	}).generate_opengraph();
</script>

<svelte:head>
	{@html opengraph_html}
</svelte:head>
<AnimeInfoPage />
