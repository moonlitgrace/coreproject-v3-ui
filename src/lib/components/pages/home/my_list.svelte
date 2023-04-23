<script lang="ts">
	import { my_list } from '$data/mock/my_list';
	import voca from 'voca';

	import GradientCard from '$components/shared/gradient_card.svelte';
	// icons
	import SettingsOutline from '$icons/settings_outline.svelte';
	import Chevron from '$icons/chevron.svelte';
	import ArrowUpRight from '$icons/arrow_up_right.svelte';
	import Circle from '$icons/circle.svelte';

		// skeleton and floating-ui
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let popupSettings: PopupSettings = {
		event: 'hover', // event
		target: 'my_list_popup' // data-popup value
	};
</script>

<div class="w-[68.125vw] h-20 mt-[2.1875vw]">
	<div class="flex items-center gap-[0.625vw]">
		<span class="text-[1.25vw] font-bold">My List</span>
		<button class="btn btn-icon h-[1.7vw] w-[1.7vw] rounded-[0.3vw] bg-surface-400">
			<SettingsOutline width="0.8vw" height="0.8vw" />
		</button>
	</div>

	<div class="flex items-center justify-between mt-[1.6875vw]">
		<span class="text-[1vw] font-semibold text-surface-50">{my_list.length} anime in Watching</span>

		<div class="flex items-center gap-[1vw]">
			<button class="btn btn-icon p-0 bg-surface-400 w-[6.625vw] h-[2.25vw] rounded-[0.375vw] text-[0.875vw] font-semibold gap-[0.625vw]">
				Watching
				<Chevron width="1vw" />
			</button>
			<button class="btn btn-icon p-0 bg-surface-400 w-[5.625vw] h-[2.25vw] rounded-[0.375vw] text-[0.875vw] font-semibold gap-[0.625vw]">
				Full List
				<ArrowUpRight width="1vw" />
			</button>
		</div>
	</div>

	<div class="mt-[1.5vw] mb-[2vw] flex gap-[1.5625vw] relative">
		{#each my_list as anime}
			<div>
				<a href="/mylist/{anime.id}" class="transition duration-300" use:popup={popupSettings}>
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

				<div data-popup="my_list_popup" class="w-[18.75vw] h-[15.625vw] !rounded-[1vw] !-top-[17vw]">
					<GradientCard
						backgroundImage={anime.cover}
						rounded="1vw"
						fromColor="from-surface-900"
						toColor="to-surface-900/25"
						direction="bg-gradient-to-tr"
						class="w-full h-full relative"
					>
						
						<div class="px-[1.5625vw] pt-[2vw] flex flex-col">
							<span class="text-[1vw] font-semibold text-white">{anime.name}</span>
							<span class="text-[0.75vw] font-semibold text-surface-50 uppercase">{anime.name}</span>

							<span class="mt-[0.75vw] text-[0.75vw] leading-[1vw] font-medium text-surface-50">
								{voca.truncate(`
									Azur Lane, a combination of all the different Camps in the world, was once successful in repelling the underwater menace, the Siren. Now splintered, they must face a new threat in Red Axis, former allies who crave to wield this otherworldly Siren technology for their own nefarious desires! Who will be victorious in the never-ending war between these battleship girls!?

									Akagami no Shirayuki-hime depicts Shirayuki's journey toward a new life at the royal palace of Clarines, as well as Zen's endeavor to become a prince worthy of his title. As loyal friendships are forged and deadly enemies formed, Shirayuki and Zen slowly learn to support each other as they walk their own paths.
								`, 130)}
							</span>
						</div>

						<div class="absolute bottom-0 w-full h-6 bg-surface-50 flex items-center justify-center gap-[0.5vw] text-[0.9vw] text-surface-900 font-semibold">
							<span>Watching</span>
							<Circle width="0.2vw" class="text-surface-900" />
							<span>
								{anime.current_episode}/{anime.episodes_count}
							</span>
						</div>
					</GradientCard>
					<div class="arrow bg-surface-50" />
				</div>
			</div>
		{/each}
	</div>
</div>