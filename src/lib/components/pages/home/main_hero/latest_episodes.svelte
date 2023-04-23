<script lang="ts">
	import { latest_episodes } from '$data/mock/latest_episodes';
	import { formatDate } from '$functions/format_date';
	import _ from 'lodash';

	// icons
	import SettingsOutline from '$icons/settings_outline.svelte';
	import Expand from '$icons/expand.svelte';
	import ScrollArea from '$components/shared/scroll_area.svelte';
	import Play from '$icons/play.svelte';

	let sorted_latest_episodes = _.orderBy(
		latest_episodes,
		[(obj) => new Date(obj.release_date)],
		['desc']
	);
</script>

<div class="w-[21.5625vw]">
	<div class="flex items-center gap-[0.625vw]">
		<span class="text-[1.25vw] font-bold">Latest Episodes</span>
		<button class="btn btn-icon h-[1.7vw] w-[1.7vw] rounded-[0.3vw] bg-surface-400">
			<SettingsOutline width="0.8vw" height="0.8vw" />
		</button>
		<button
			class="btn btn-icon h-[1.7vw] w-[6vw] rounded-[0.3vw] bg-surface-400 text-[0.9vw] font-semibold"
		>
			<Expand width="0.8vw" height="0.8vw" />
			<span>Expand</span>
		</button>
	</div>

	<ScrollArea offsetScrollbar parentClass="mt-[1.5vw] max-h-[21.5625vw]" class="flex flex-col gap-[1vw]">
		{#each sorted_latest_episodes as anime}
			<div
				class="h-[5vw] rounded-[0.75vw] relative flex items-center overflow-hidden bg-cover bg-center"
				style="background-image: url({anime.cover ?? ''})"
			>
				<div class="gradient from-surface-900 to-surface-900/50 bg-gradient-to-tr absolute h-full w-full" />
				<div class="absolute h-full w-full">
					<div class="flex items-center justify-between p-[1.3125vw]">
						<div class="flex flex-col gap-[0.4vw]">
							<span class="text-[1vw] font-semibold leading-[1.1875vw]">{anime.name}</span>
							<div class="flex items-center gap-[0.5vw]">
								<span class="text-[0.75vw] after:ml-[0.5vw] after:content-['.']">
									Ep {anime.episode_number < 10 ? '0' + anime.episode_number : anime.episode_number}
								</span>
								<span class="text-[0.75vw]"
									>{new formatDate(anime.release_date).formatToTimeFromNow}</span
								>
							</div>
						</div>
						<button
							class="btn btn-icon h-[2.5vw] w-[2.5vw] rounded-full bg-warning-400 text-surface-900"
						>
							<Play width="1.25vw" height="1.25vw" />
						</button>
					</div>
				</div>
			</div>
		{/each}
	</ScrollArea>

	<div class="mt-[1vw] flex items-start justify-between gap-[2vw] pr-[0.75vw]">
		<span class="text-[0.75vw] font-semibold"
			>showing recently aired episodes from your Anime List</span
		>
		<button class="btn p-0 text-[0.75vw] font-semibold text-warning-400">Change to All</button>
	</div>
</div>
