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

	let hovered_popup_id: number | undefined = undefined;
	let popupSettings: PopupSettings = {
		event: 'hover', // event
		target: `my_list_popup_${hovered_popup_id}` // data-popup value
	};
</script>

<div class="mt-[2.1875vw] h-20 w-[68.125vw]">
	<div class="flex items-center gap-[0.625vw]">
		<span class="text-[1.25vw] font-bold">My List</span>
		<button class="btn btn-icon h-[1.7vw] w-[1.7vw] rounded-[0.3vw] bg-surface-400">
			<SettingsOutline width="0.8vw" height="0.8vw" />
		</button>
	</div>

	<div class="mt-[1.6875vw] flex items-center justify-between">
		<span class="text-[1vw] font-semibold text-surface-50">{my_list.length} anime in Watching</span>

		<div class="flex items-center gap-[1vw]">
			<button
				class="btn btn-icon h-[2.25vw] w-[6.625vw] gap-[0.625vw] rounded-[0.375vw] bg-surface-400 p-0 text-[0.875vw] font-semibold"
			>
				Watching
				<Chevron width="1vw" />
			</button>
			<button
				class="btn btn-icon h-[2.25vw] w-[5.625vw] gap-[0.625vw] rounded-[0.375vw] bg-surface-400 p-0 text-[0.875vw] font-semibold"
			>
				Full List
				<ArrowUpRight width="1vw" />
			</button>
		</div>
	</div>

	<div class="relative mb-[2vw] mt-[1.5vw] flex gap-[1.5625vw]">
		{#each my_list as anime}
			<div
				on:mouseenter={() => {
					hovered_popup_id = anime.id;
				}}
			>
				<a href="/mylist/{anime.id}" class="transition duration-300" use:popup={popupSettings}>
					<GradientCard
						backgroundImage={anime.cover}
						rounded="0.875vw"
						class="h-[12.5vw] w-[8.4375vw]"
						fromColor="from-surface-900"
						toColor="to-surface-900/0"
						direction="bg-gradient-to-tr"
					>
						<div class="absolute inset-0 grid w-full grid-cols-1 place-items-center">
							<span class="text-center text-[1vw] font-semibold text-white">{anime.name}</span>
							<span
								class="absolute bottom-[1.25vw] text-center text-[1vw] font-medium text-surface-200"
							>
								{anime.current_episode}/{anime.episodes_count}
							</span>
						</div>
					</GradientCard>
				</a>

				<div
					data-popup="my_list_popup_{anime.id}"
					class="!-top-[17vw] h-[15.625vw] w-[18.75vw] !rounded-[1vw]"
				>
					<GradientCard
						backgroundImage={anime.cover}
						rounded="1vw"
						fromColor="from-surface-900"
						toColor="to-surface-900/25"
						direction="bg-gradient-to-tr"
						class="relative h-full w-full"
					>
						<div class="flex flex-col px-[1.5625vw] pt-[2vw]">
							<span class="text-[1vw] font-semibold text-white">{anime.name}</span>
							<span class="text-[0.75vw] font-semibold uppercase text-surface-50">{anime.name}</span
							>

							<span class="mt-[0.75vw] text-[0.75vw] font-medium leading-[1vw] text-surface-50">
								{voca.truncate(
									`
									Azur Lane, a combination of all the different Camps in the world, was once successful in repelling the underwater menace, the Siren. Now splintered, they must face a new threat in Red Axis, former allies who crave to wield this otherworldly Siren technology for their own nefarious desires! Who will be victorious in the never-ending war between these battleship girls!?

									Akagami no Shirayuki-hime depicts Shirayuki's journey toward a new life at the royal palace of Clarines, as well as Zen's endeavor to become a prince worthy of his title. As loyal friendships are forged and deadly enemies formed, Shirayuki and Zen slowly learn to support each other as they walk their own paths.
								`,
									130
								)}
							</span>
						</div>

						<div
							class="absolute bottom-0 flex h-6 w-full items-center justify-center gap-[0.5vw] bg-surface-50 text-[0.9vw] font-semibold text-surface-900"
						>
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
