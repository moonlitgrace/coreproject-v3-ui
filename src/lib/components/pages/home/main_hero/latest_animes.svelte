<script lang="ts">
	import { latest_animes } from '$data/mock/latest_animes';
	import { swipe } from 'svelte-gestures';
	import { formatDate } from '$functions/format_date';
	import voca from 'voca';

	// skeleton
	import { ProgressBar } from '@skeletonlabs/skeleton';

	import { Timer as EasyTimer } from 'easytimer.js';
	import { onDestroy, onMount } from 'svelte';
	import { timer as timerStore } from '$store/timer';
	import { blur } from 'svelte/transition';
	import { tweened } from 'svelte/motion';

	// icons
	import PlayCircle from '$icons/play_circle.svelte';
	import Info from '$icons/info.svelte';
	import Edit from '$icons/edit.svelte';
	import Chevron from '$icons/chevron.svelte';

	// Slider codes //
	let mainHeroSlideActiveIndex = 0;

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
		timer.reset();
		if (direction === 'left') {
			addOneToMainHeroSlideActiveIndex();
		} else if (direction === 'right') {
			minusOneToMainHeroSlideActiveIndex();
		}
	};

	// Progress bar code //
	const SWIPER_DELAY = 10;
	let progressValue = 0;

	let tweenedProgressValue = tweened(progressValue);
	$: tweenedProgressValue.set(progressValue);

	let timer = new EasyTimer({
		target: {
			seconds: SWIPER_DELAY
		},
		precision: 'secondTenths'
	});

	timer.on('targetAchieved', () => {
		// change slider
		addOneToMainHeroSlideActiveIndex();
		timer.reset();
	});

	timer.on('secondTenthsUpdated', () => {
		const time = timer.getTotalTimeValues().secondTenths;
		const value = (100 / SWIPER_DELAY) * (time / 10);
		progressValue = value;
	});

	$: {
		switch ($timerStore) {
			case 'start':
				timer?.start();
				break;
			case 'pause':
				timer?.pause();
				break;
			case 'reset':
				timer?.reset();
				timer?.start();
				break;
		}
	}
	onMount(() => {
		$timerStore = 'start';
	});
	onDestroy(() => {
		timer.reset();
		timer.stop();
	});

	// slide buttons colors
	let slide_buttons_bg_colors = [
		"bg-error-400",
		"bg-white",
		"bg-surface-50",
		"bg-warning-400",
		"bg-secondary-300",
		"bg-primary-400",
	]
	let slide_buttons_border_colors = [
		"border-error-400",
		"border-white",
		"border-surface-50",
		"border-warning-400",
		"border-secondary-300",
		"border-primary-400",
	]
</script>

<svelte:window
	on:focus={() => {
		$timerStore = 'start';
	}}
	on:blur={() => {
		$timerStore = 'pause';
	}}
/>

<div class="h-[27.875vw] w-[42.1875vw]">
	<div
		use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }}
		on:swipe={swipeHandler}
		class="relative inline-grid h-full w-full"
	>
		{#each latest_animes as anime, index}
			{#if index === mainHeroSlideActiveIndex}
				<div
					class="relative flex h-full w-full items-center rounded-t-[0.875vw] bg-cover bg-center"
					style="
						background-image: url('{anime.cover ?? ''}');
						grid-area: 1 / 1 / 1000 / 1;
					"
					transition:blur
					on:mouseenter={() => {
						$timerStore = 'pause';
					}}
					on:mouseleave={() => {
						$timerStore = 'start';
					}}
					on:touchstart={() => {
						$timerStore = 'pause';
					}}
					on:touchend={() => {
						$timerStore = 'start';
					}}
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
								{anime.type}
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
								{anime.studios[0]}
							</span>
						</p>

						<p class="mt-[0.875vw] !text-[0.85vw] !leading-[1vw] text-surface-50/75">
							{voca.truncate(anime.synopsis, 400)}
						</p>

						<div class="mt-[2.625vw] flex gap-[1vw]">
							<button
								class="btn btn-icon h-[3.125vw] w-[5.4375vw] gap-[0.625vw] rounded-[0.625vw] bg-warning-400 text-[0.875vw] font-bold text-surface-900"
							>
								<PlayCircle style="width: 1.25vw;" class="text-surface-900" />
								Ep 1
							</button>

							<button
								class="btn btn-icon h-[3.125vw] w-[6.5vw] gap-[0.625vw] rounded-[0.375vw] border-[0.2vw] border-surface-50/50 bg-surface-900 text-[0.875vw] font-bold text-surface-50"
							>
								<Info style="width: 1.25vw;" class="text-surface-50" />
								Details
							</button>

							<button
								class="btn btn-icon h-[3.125vw] w-[3.125vw] gap-[0.625vw] rounded-[0.375vw] border-[0.2vw] border-surface-50/50 bg-surface-900 text-[0.875vw] font-bold text-surface-50"
							>
								<Edit
									variant="with_underline_around_pencil"
									style="width: 1.25vw;"
									class="text-surface-50"
								/>
							</button>
						</div>
					</div>
				</div>
			{/if}
		{/each}

		<div>
			<ProgressBar label="Progress Bar" class="h-[0.1vw]" value={$tweenedProgressValue} max={100} />
		</div>

		<button
			class="btn btn-icon absolute -left-[1vw] top-[12vw] z-20 h-[2.25vw] w-[2.25vw] rounded-[0.375vw] bg-secondary-800"
			on:click={() => {
				timer?.reset();
				timer?.start();
				minusOneToMainHeroSlideActiveIndex();
			}}
		>
			<Chevron style="width: 1.25vw;" color="text-white" class="rotate-90" />
		</button>
		<button
			class="btn btn-icon absolute -right-[1vw] top-[12vw] z-20 h-[2.25vw] w-[2.25vw] rounded-[0.375vw] bg-secondary-800"
			on:click={() => {
				timer?.reset();
				timer?.start();
				addOneToMainHeroSlideActiveIndex();
			}}
		>
			<Chevron style="width: 1.25vw;" color="text-white" class="-rotate-90" />
		</button>

		<div class="mt-[1.25vw] flex items-center gap-[0.9375vw]">
			{#each latest_animes as _, index}
				<button
					class="h-[0.625vw] w-[6.25vw] rounded-[0.1875vw] border-[0.2vw] {slide_buttons_border_colors[index]} transition duration-300 hover:border-surface-50/50 {index === mainHeroSlideActiveIndex ? slide_buttons_bg_colors[index] : ""}"
					on:click={() => {
						timer?.reset();
						timer?.start();
						mainHeroSlideActiveIndex = index;
					}}
				/>
			{/each}
		</div>
	</div>
</div>
