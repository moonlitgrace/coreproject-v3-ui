<script lang="ts">
	import AnimeInfoPage from '$components/pages/anime_info/Index.svelte';
	import { anime_list, anime_list2 } from '$data/mock/anime_list';

	import { OpengraphGenerator } from '$functions/opengraph';
	import { page } from '$app/stores';

	let anime_id = Number($page.params.id);

	let anime = anime_list?.find((anime: any) => anime.id === anime_id);
	let anime2 = anime_list2?.find((anime: any) => anime.id === anime.id);

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
<AnimeInfoPage {anime} {anime2} />
