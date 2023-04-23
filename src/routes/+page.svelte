<script lang="ts">
	import MyList from '$components/pages/home/my_list.svelte';
	import LatestAnimes from '$components/pages/home/main_hero/latest_animes.svelte';
	import LatestEpisodes from '$components/pages/home/main_hero/latest_episodes.svelte';
	import NavigationCard from '$components/pages/home/main_hero/navigation_card.svelte';
</script>

<div class="p-[1.25vw] pr-[3.75vw]">
	<div class="flex justify-between">
		<LatestAnimes />
		<LatestEpisodes />
		<NavigationCard />
	</div>
	<MyList />
</div>
