<script lang="ts">
	export let anime_name: string;
	export let anime_japanese_name: string;
	export let anime_episodes_count: number;
	export let anime_date: string;
	export let anime_synopsis: string;
	export let anime_banner: string;
	export let anime_cover: string;

	import AnimeMainDetails from './AnimeMainDetails.svelte';
</script>

<div class="anime_info">
	<div
		class="relative h-screen rounded-tl-3xl bg-cover"
		style="background-image: url({anime_cover ?? ''});"
	>
		<div
			class="gradient absolute h-full w-full bg-gradient-to-t from-surface-900 to-surface-900/50"
		/>
		<div class="absolute h-full w-full md:p-[5vw]">
			<AnimeMainDetails
				{anime_name}
				{anime_japanese_name}
				{anime_episodes_count}
				{anime_date}
				{anime_synopsis}
				{anime_banner}
			/>
		</div>
	</div>
</div>
