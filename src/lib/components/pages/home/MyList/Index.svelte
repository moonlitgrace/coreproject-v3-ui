<script>
	
	import { my_list } from '$data/mock/my_list';

	import GradientCard from '$components/shared/GradientCard.svelte';
	// icons
	import SettingsOutline from '$icons/SettingsOutline.svelte';
	import ChevronDown from '$icons/Chevron-Down.svelte';
	import ArrowUpRight from '$icons/ArrowUpRight.svelte';
</script>

<div class="w-[68.125vw] h-20 mt-[2.1875vw]">
	<div class="flex items-center gap-[0.625vw]">
		<span class="text-[1.25vw] font-bold">My List</span>
		<button class="btn btn-icon h-[1.7vw] w-[1.7vw] rounded-[0.3vw] bg-surface-400">
			<SettingsOutline width="0.8vw" height="0.8vw" />
		</button>
	</div>

	<div class="flex items-center justify-between mt-[1.6875vw]">
		<span class="text-[1vw] font-semibold text-surface-50">7 anime in Watching</span>

		<div class="flex items-center gap-[1vw]">
			<button class="btn btn-icon p-0 bg-surface-400 w-[6.625vw] h-[2.25vw] rounded-[0.375vw] text-[0.875vw] font-semibold gap-[0.625vw]">
				Watching
				<ChevronDown width="1vw" />
			</button>
			<button class="btn btn-icon p-0 bg-surface-400 w-[5.625vw] h-[2.25vw] rounded-[0.375vw] text-[0.875vw] font-semibold gap-[0.625vw]">
				Full List
				<ArrowUpRight width="1vw" />
			</button>
		</div>
	</div>

	<div class="mt-[1.5vw] mb-[2vw] flex gap-[1.5625vw]">
		{#each my_list as anime}
			<a href="/mylist/{anime.id}" class="transition duration-300">
				<GradientCard
					backgroundImage={anime.cover}
					rounded="0.875vw"
					class="w-[8.4375vw] h-[12.5vw]"
					fromColor="from-surface-900"
					toColor="to-surface-900/0"
					direction="bg-gradient-to-tr"
				>
					<div class="absolute inset-0 grid w-full grid-cols-1 place-items-center">
						<span class="text-[1vw] text-white font-semibold text-center">{anime.name}</span>
						<span class="absolute bottom-[1.25vw] text-[1vw] text-center font-medium text-surface-200">
							{anime.current_episode}/{anime.episodes_count}
						</span>
					</div>
				</GradientCard>
			</a>
		{/each}
	</div>
</div>