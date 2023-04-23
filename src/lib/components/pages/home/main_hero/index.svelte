<script>
	import LatestAnimes from './latest_animes.svelte';
	import LatestEpisodes from './latest_episodes.svelte';
	import NavigationCard from './navigation_card.svelte';
</script>

<div class="flex justify-between">
	<div>
		<LatestAnimes />
	</div>
	<div>
		<LatestEpisodes />
	</div>
	<div>
		<NavigationCard />
	</div>
</div>
