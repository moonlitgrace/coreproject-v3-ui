<script lang="ts">
	import { my_list } from '$data/mock/my_list';
	import voca from 'voca';
	import { format_date } from '$functions/format_date';

	// icons
	import SettingsOutline from '$icons/settings_outline.svelte';
	import Chevron from '$icons/chevron.svelte';
	import ArrowUpRight from '$icons/arrow_up_right.svelte';
	import Circle from '$icons/circle.svelte';
	import PlayCircle from '$icons/play_circle.svelte';
	import Info from '$icons/info.svelte';

	// skeleton and floating-ui
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let anime_name: string | undefined = undefined;
	let anime_cover: string | undefined = undefined;
	let anime_synopsis: string | undefined = undefined;
	let anime_current_episode: string | undefined = undefined;
	let anime_episodes_count: string | undefined = undefined;
	let anime_genres: string[] = [];
	let anime_type: string | undefined = undefined;
	let anime_release_date: string;
	let anime_studio_name: string | undefined = undefined;

	let show_popup = false;
	let popupSettings: PopupSettings = {
		event: 'hover', // event
		target: 'my_list_popup' // data-popup value
	};
</script>

<div class="mt-[2.1875vw] h-20 w-[68.125vw]">
	<div class="flex items-center gap-[0.625vw]">
		<span class="text-[1.25vw] font-bold">My List</span>
		<button class="btn btn-icon h-[1.7vw] w-[1.7vw] rounded-[0.3vw] bg-surface-400">
			<SettingsOutline style="width: 0.9vw;" />
		</button>
	</div>

	<div class="mt-[0.5vw] flex items-center justify-between">
		<span class="text-[1vw] font-semibold text-surface-50">{my_list.length} anime in Watching</span>

		<div class="flex items-center gap-[1vw]">
			<button
				class="btn btn-icon h-[2.25vw] w-[6.625vw] gap-[0.625vw] rounded-[0.375vw] bg-surface-400 p-0 text-[0.875vw] font-semibold"
			>
				Watching
				<Chevron style="width: 1vw;" />
			</button>
			<button
				class="btn btn-icon h-[2.25vw] w-[5.625vw] gap-[0.625vw] rounded-[0.375vw] bg-surface-400 p-0 text-[0.875vw] font-semibold"
			>
				Full List
				<ArrowUpRight style="width: 1vw;" />
			</button>
		</div>
	</div>

	<div class="relative mb-[2vw] mt-[1.5vw] flex gap-[1.5625vw] grid grid-cols-7">
		{#each my_list as anime}
			<div
				on:mouseenter={() => {
					anime_name = anime.name;
					anime_cover = anime.cover;
					anime_synopsis = anime.synopsis;
					anime_current_episode = String(anime.current_episode);
					anime_episodes_count = String(anime.episodes_count);
					anime_genres = anime.genres;
					anime_type = anime.type;
					anime_release_date = String(anime.release_date);
					anime_studio_name = String(anime.studios[0]);

					// show popup on hover after some time
					setTimeout(() => {
						show_popup = true;
					}, 500);
				}}
				on:mouseleave={() => {
					// remove popup
					show_popup = false;
				}}
				class="group"
				use:popup={popupSettings}
			>
				<div
					class="relative flex h-[12.5vw] w-full col-span-1 items-center rounded-[0.875vw] bg-cover bg-center"
					style="background-image: url({anime.cover});"
				>
					<div
						class="gradient absolute h-full w-full bg-gradient-to-t from-surface-900 to-surface-900/25 transition duration-300 group-hover:to-surface-900/50"
					/>
					<div
						class="absolute inset-0 grid w-full grid-cols-1 place-items-center transition duration-300 group-hover:opacity-0"
					>
						<span class="text-center text-[1vw] font-semibold text-white">{anime.name}</span>
						<span class="absolute bottom-[1vw] text-center text-[1vw] font-medium text-surface-200">
							{anime.current_episode}/{anime.episodes_count}
						</span>
					</div>

					<div
						class="absolute inset-0 grid w-full grid-cols-1 place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						<div class="flex flex-col gap-[0.5vw]">
							<button
								class="btn btn-icon h-[3.125vw] w-[5.4375vw] gap-[0.625vw] rounded-[0.625vw] bg-surface-50 text-[0.875vw] font-bold text-surface-900"
							>
								<PlayCircle style="width: 1.25vw;" class="text-surface-900" />
								Ep {anime.current_episode}
							</button>

							<button
								class="btn btn-icon h-[3.125vw] w-[5.4375vw] gap-[0.625vw] rounded-[0.375vw] border-[0.2vw] border-surface-50/50 bg-surface-900 text-[0.875vw] font-bold text-surface-50"
							>
								<Info style="width: 1.25vw;" class="text-surface-50" />
								Info
							</button>
						</div>
					</div>
				</div>
				<div
					data-popup="my_list_popup"
					class="!-top-[17vw] h-[15.625vw] w-[20vw] rounded-[1vw] hover:!hidden"
				>
					<div
						class="relative flex h-full w-full items-center overflow-hidden rounded-[1vw] border-[0.25vw] border-b-0 border-surface-300/75 bg-cover bg-center"
						style="background-image: url({anime_cover});"
					>
						<div
							class="gradient absolute h-full w-full bg-gradient-to-t from-surface-900 to-surface-900/50 transition duration-300 group-hover:to-surface-900/50"
						/>
						<div class="absolute flex h-full flex-col justify-end px-[1.5625vw] pb-[3vw]">
							<span class="text-[1vw] font-semibold text-white"
								>{voca.truncate(anime_name, 30)}</span
							>
							<span class="text-[0.75vw] font-semibold uppercase text-surface-50"
								>{voca.truncate(anime_name, 50)}</span
							>

							<span class="mt-[0.75vw] text-[0.75vw] font-medium leading-[1vw] text-surface-50">
								{voca.truncate(anime_synopsis, 130)}
							</span>

							<div class="mt-[0.5vw] flex gap-[1vw]">
								{#each anime_genres as genre}
									<span
										class="h-[1.25vw] rounded-[0.25vw] bg-secondary-800 px-[0.625vw] py-[0.25vw] text-[0.625vw] leading-[0.75vw]"
										>{genre}</span
									>
								{/each}
							</div>

							<div class="mt-[0.45vw] flex items-center gap-[0.5vw] text-[0.75vw]">
								<span>{anime_type}</span>
								<Circle width="0.2vw" class="text-surface-50" />
								<span class="capitalize"
									>{new format_date(anime_release_date).format_to_season}</span
								>
								<span>{anime_episodes_count} episodes</span>
							</div>

							<div class="mt-[0.1vw] flex items-center gap-[0.5vw] text-[0.75vw]">
								<span>69% <span class="text-surface-200">[7852 ratings]</span></span>
								<Circle width="0.2vw" class="text-surface-50" />
								<span>{anime_studio_name}</span>
							</div>
						</div>

						<div
							class="absolute bottom-0 flex h-6 w-full items-center justify-center gap-[0.5vw] bg-surface-50 text-[0.9vw] font-semibold text-surface-900"
						>
							<span>Watching</span>
							<Circle width="0.2vw" class="text-surface-900" />
							<span>
								{anime_current_episode}/{anime_episodes_count}
							</span>
						</div>
					</div>
					<div class="arrow bg-surface-50" />
				</div>
			</div>
		{/each}
	</div>
</div>
