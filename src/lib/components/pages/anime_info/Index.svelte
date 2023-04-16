<script lang="ts">
	export let anime: any;
	export let anime2: any;

	import AnimeMainDetails from './AnimeMainDetails.svelte';
</script>

<div class="anime_info">
	<div
		class="relative h-screen rounded-tl-3xl bg-cover"
		style="background-image: url({anime?.bannerBackgroundImage ?? ''});"
	>
		<div
			class="gradient absolute h-full w-full bg-gradient-to-t from-surface-900 to-surface-900/50"
		/>
		<div class="absolute h-full w-full md:p-[5vw]">
			<AnimeMainDetails {anime} {anime2} />
		</div>
	</div>
</div>
