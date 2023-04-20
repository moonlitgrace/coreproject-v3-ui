<script lang="ts">
		
	import { latest_animes } from '$data/mock/latest_animes';
	import { swipe } from "svelte-gestures";
	import { blur } from "svelte/transition";
	import { formatDate } from '$functions/formatDate';
	import voca from 'voca';

	// icons
	import PlayCircle from '$icons/PlayCircle.svelte';
	import Info from '$icons/Info.svelte';
	import Edit from '$icons/Edit.svelte';
	import ChevronLeft from '$icons/Chevron-Left.svelte';
	import ChevronRight from '$icons/Chevron-Right.svelte';

	let mainHeroSlideActiveIndex = 0;
    let mainHeroRootElement: HTMLElement;

    const addOneToMainHeroSlideActiveIndex = () => {
        if (mainHeroSlideActiveIndex + 1 === latest_animes.length) {
            mainHeroSlideActiveIndex = 0;
            return;
        }
        mainHeroSlideActiveIndex += 1;
    };

    const minusOneToMainHeroSlideActiveIndex = () => {
        if (mainHeroSlideActiveIndex === 0) {
            mainHeroSlideActiveIndex = latest_animes.length - 1;
            return;
        }
        mainHeroSlideActiveIndex -= 1;
    };

    const swipeHandler = (event: CustomEvent) => {
        const direction = event.detail.direction;
        if (direction === "left") {
            addOneToMainHeroSlideActiveIndex();
        } else if (direction === "right") {
            minusOneToMainHeroSlideActiveIndex();
        }
    };
</script>

<div
	bind:this={mainHeroRootElement}
    use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: "pan-y" }}
    on:swipe={swipeHandler}
    transition:blur|local
    class="relative items-center h-[25.875vw] w-[42.1875vw]"
>	
	{#each latest_animes as anime, index}
		{#if index === mainHeroSlideActiveIndex}
			<div
				class="flex relative h-full w-full items-center rounded-[0.875vw] border-b-[0.2vw] border-surface-50 bg-cover bg-center"
				style="
					background-image: url('{anime.cover ?? ''}');
				"
			>
				<div
					class="gradient absolute h-full w-full bg-gradient-to-t from-surface-900/95 to-surface-900/25"
				/>
				<div class="absolute bottom-0 px-[3.75vw] py-[2.625vw]">
					<span class="text-[2vw] font-bold leading-[2.375vw]">{anime.name}</span>
					<p class="flex flex-wrap items-center gap-2 md:pt-[0.5vw]">
						<span
							class="font-semibold md:text-[0.9375vw] md:leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']"
						>
							{anime.source}
						</span>
						<span
							class="font-semibold md:text-[0.9375vw] md:leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']"
						>
							{anime.episodes_count} eps
						</span>
						<span
							class="font-semibold md:text-[0.9375vw] md:leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']"
						>
							Completed
						</span>
						<span
							class="font-semibold capitalize md:text-[0.9375vw] md:leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']"
						>
							{new formatDate(anime.aired_from).formatToSeason}
						</span>
						<span
							class="font-semibold md:text-[0.9375vw] md:leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']"
						>
							{anime.studios}
						</span>
					</p>

					<p class="mt-[0.875vw] !text-[0.85vw] !leading-[1vw] text-surface-50/75">
						{voca.truncate(anime.synopsis, 400)}
					</p>

					<div class="mt-[2.625vw] flex gap-[1vw]">
						<button
							class="btn btn-icon h-[3.125vw] w-[5.4375vw] gap-[0.625vw] rounded-[0.625vw] bg-warning-400 text-[0.875vw] font-bold text-surface-900"
						>
							<PlayCircle width="1.25vw" height="1.25vw" class="text-surface-900" />
							Ep 1
						</button>

						<button
							class="btn btn-icon h-[3.125vw] w-[6.5vw] gap-[0.625vw] rounded-[0.375vw] border-[0.2vw] border-surface-50/50 bg-surface-900 text-[0.875vw] font-bold text-surface-50"
						>
							<Info width="1.25vw" height="1.25vw" class="text-surface-50" />
							Details
						</button>

						<button
							class="btn btn-icon h-[3.125vw] w-[3.125vw] gap-[0.625vw] rounded-[0.375vw] border-[0.2vw] border-surface-50/50 bg-surface-900 text-[0.875vw] font-bold text-surface-50"
						>
							<Edit
								variant="with_underline_around_pencil"
								width="1.25vw"
								height="1.25vw"
								class="text-surface-50"
							/>
						</button>
					</div>
				</div>
			</div>
		{/if}
	{/each}

	<button
		class="btn btn-icon absolute -left-[1vw] top-[11.5vw] z-20 h-[2.25vw] w-[2.25vw] rounded-[0.375vw] bg-secondary-800"
		on:click={minusOneToMainHeroSlideActiveIndex}
	>
		<ChevronLeft 
			width="1.25vw" 
			height="1.25vw" 
			color="text-white"
		/>
	</button>
	<button
		class="btn btn-icon absolute -right-[1vw] top-[11.5vw] z-20 h-[2.25vw] w-[2.25vw] rounded-[0.375vw] bg-secondary-800"
		on:click={addOneToMainHeroSlideActiveIndex}
	>
		<ChevronRight 
			width="1.25vw" 
			height="1.25vw" 
			color="text-white" 
		/>
	</button>

	<div class="mt-[1.25vw] flex items-center gap-[0.9375vw]">
		<div class="h-[0.625vw] w-[6.25vw] rounded-[0.1875vw] border-[0.2vw] border-surface-50" />
		<div class="h-[0.625vw] w-[6.25vw] rounded-[0.1875vw] border-[0.2vw] border-surface-50" />
		<div
			class="h-[0.625vw] w-[6.25vw] rounded-[0.1875vw] border-[0.2vw] border-surface-50 bg-surface-50"
		/>
		<div class="h-[0.625vw] w-[6.25vw] rounded-[0.1875vw] border-[0.2vw] border-surface-50" />
		<div class="h-[0.625vw] w-[6.25vw] rounded-[0.1875vw] border-[0.2vw] border-surface-50" />
		<div class="h-[0.625vw] w-[6.25vw] rounded-[0.1875vw] border-[0.2vw] border-surface-50" />
	</div>
</div>
