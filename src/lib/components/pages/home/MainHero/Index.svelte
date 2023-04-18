<script>
	import LatestAnimes from "./LatestAnimes.svelte";
	import LatestEpisodes from "./LatestEpisodes.svelte";
	import NavigationCard from "./NavigationCard.svelte";
</script>


<div class="flex justify-between">
	<div class="col-span-6">
		<LatestAnimes />
	</div>
	<div class="col-span-3 hidden">
		<LatestEpisodes />
	</div>
	<div class="col-span-3 hidden">
		<NavigationCard />
	</div>
</div>