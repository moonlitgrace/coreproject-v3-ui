<script lang="ts">
	import AnimeInfoPage from '$components/pages/anime_info/Index.svelte';
	import { anime_list } from '$data/mock/anime_list';
	import { anime_episodes } from '$data/mock/anime_episodes';

	import { OpengraphGenerator } from '$functions/opengraph';
	import { page } from '$app/stores';

	let anime_id = Number($page.params.id);

	let anime = anime_list?.find((anime: any) => anime.id === anime_id);

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

{#if anime}
	<AnimeInfoPage 
		anime_name={anime.name}
		anime_japanese_name={anime.name_japanese}
		anime_episodes_count={anime.episodes_count}
		anime_date={anime.updated}
		anime_synopsis={anime.synopsis}
		anime_banner={anime.banner}
		anime_cover={anime.cover}

		{anime_episodes}
	/>
{/if}