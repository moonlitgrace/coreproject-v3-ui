<script>
	import LatestAnimes from "./LatestAnimes.svelte";
	import LatestEpisodes from "./LatestEpisodes.svelte";
	import NavigationCard from "./NavigationCard.svelte";
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