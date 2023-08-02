<script lang="ts">
	import { OpengraphGenerator } from "$functions/opengraph";
	import { page } from "$app/stores";
	import Search from "$icons/search.svelte";
	import Chevron from "$icons/chevron.svelte";
	import Preference from "$icons/preference.svelte";
	import Circle from "$icons/circle.svelte";
	import { trending_animes } from "$data/mock/trending";
	import ImageLoader from "$components/shared/image/image_loader.svelte";
    import { blur } from "svelte/transition";

	/* Anime cards scroll */
	// no:of items to show on each scroll
	let NO_SHOW_NEW_ITEMS = 2,
	trending_animes_scroll_element: HTMLElement,
	show_scroll_buttons = {
		left: false,
		right: true,
	}

	function handle_scroll_right(element: HTMLElement) {
		element.scrollLeft += NO_SHOW_NEW_ITEMS * 200;
	}
	function handle_scroll_left(element: HTMLElement) {
		element.scrollLeft -= NO_SHOW_NEW_ITEMS * 200;
	}

	function handle_scroll(event: UIEvent) {
		const element = event.target as HTMLElement;
		// check if scroll end is not reached
		show_scroll_buttons.right = Math.abs(element.scrollLeft) !== element.scrollWidth - element.clientWidth;
		// check if its not scroll start pos
		show_scroll_buttons.left = Math.abs(element.scrollLeft) !== 0;
	}

	const opengraph_html = new OpengraphGenerator({
        title: "Explore the Anime Universe: Your Gateway to Otaku Delights!",
        site_name: "CoreProject",
        image_url: "", // Use Opengraph later
        url: $page.url.href,
        locale: "en_US",
        description: "The most modern anime streaming site"
    }).generate_opengraph();
</script>

<svelte:head>
    {@html opengraph_html}
</svelte:head>

<section class="md:pr-[3.75vw] md:pl-[1.5vw]">
	<section-headings class="flex flex-col md:gap-[0.5vw]">
		<span class="md:text-[2vw] font-bold leading-none">Anime <span class="text-warning-400">Explore</span></span>
		<span class="leading-none md:text-[1.1vw] font-semibold text-surface-50">Unleash your inner Otaku: Explore anime wonders</span>
	</section-headings>

	<filter-options class="md:mt-[2vw] block flex justify-between items-end">
		<search class="flex flex-col md:gap-[0.5vw]">
			<span class="md:text-[1.1vw] leading-none font-semibold text-surface-50">Search Animes</span>
			<div class="relative flex items-center">
				<Search class="md:w-[1.25vw] text-surface-50 absolute md:ml-[1vw] pointer-events-none" />
				<input
					type="text"
					placeholder="Looking for specific anime? start here..."
					class="md:pl-[3vw] focus:ring-0 bg-surface-400 placeholder:text-surface-50 md:rounded-[0.5vw] border-none md:py-[0.8vw] md:text-[1vw] leading-none md:w-[40vw]"
				/>
			</div>
		</search>
		<genres class="flex flex-col md:gap-[0.5vw]">
			<span class="md:text-[1.1vw] leading-none font-semibold text-surface-50">Genres</span>
			<div class="relative flex items-center">
				<Chevron class="md:w-[1.25vw] text-surface-50 absolute right-0 md:mr-[1vw] pointer-events-none" />
				<input
					type="text"
					placeholder="Any"
					class="md:pl-[1vw] focus:ring-0 bg-surface-400 placeholder:text-surface-50 md:rounded-[0.5vw] border-none md:py-[0.8vw] md:text-[1vw] leading-none md:w-[12.5vw]"
				/>
			</div>
		</genres>
		<year class="flex flex-col md:gap-[0.5vw]">
			<span class="md:text-[1.1vw] leading-none font-semibold text-surface-50">Year</span>
			<div class="relative flex items-center">
				<Chevron class="md:w-[1.25vw] text-surface-50 absolute right-0 md:mr-[1vw] pointer-events-none" />
				<input
					type="text"
					placeholder="Any"
					class="md:pl-[1vw] focus:ring-0 bg-surface-400 placeholder:text-surface-50 md:rounded-[0.5vw] border-none md:py-[0.8vw] md:text-[1vw] leading-none md:w-[12.5vw]"
				/>
			</div>
		</year>
		<season class="flex flex-col md:gap-[0.5vw]">
			<span class="md:text-[1.1vw] leading-none font-semibold text-surface-50">Season</span>
			<div class="relative flex items-center">
				<Chevron class="md:w-[1.25vw] text-surface-50 absolute right-0 md:mr-[1vw] pointer-events-none" />
				<input
					type="text"
					placeholder="Any"
					class="md:pl-[1vw] focus:ring-0 bg-surface-400 placeholder:text-surface-50 md:rounded-[0.5vw] border-none md:py-[0.8vw] md:text-[1vw] leading-none md:w-[12.5vw]"
				/>
			</div>
		</season>
		<more-filter-option>
			<button class="btn md:p-[1vw] md:rounded-[0.5vw] bg-surface-400">
				<Preference class="md:w-[1vw]" />
			</button>
		</more-filter-option>
	</filter-options>

	<results-section class="md:mt-[4vw] block">
		<trending-now>
			<headings class="flex flex-col leading-none md:gap-[0.35vw]">
				<span class="md:text-[1.25vw] font-semibold">Trending Now</span>
				<span class="md:text-[1vw] text-surface-50">Crowd Favorites: Anime Hits and Hype</span>
			</headings>

			<result-animes class="md:mt-[1.25vw] block relative">
				<div
					class="flex md:gap-[1.25vw] overflow-x-scroll scroll-smooth scrollbar-none snap-x"
					bind:this={trending_animes_scroll_element}
					on:scroll={handle_scroll}
				>
					{#each trending_animes as anime}
						<anime class="leading-none md:w-[13.7vw] snap-start flex-shrink-0 flex flex-col md:gap-[0.75vw]">
							<ImageLoader src={anime.cover} class="w-full md:h-[20vw] md:rounded-[0.75vw]" />
							<div class="flex flex-col md:gap-[0.35vw]">
								<anime_name class="line-clamp-1 md:text-[1.1vw] font-semibold">{anime.name}</anime_name>
								<anime_info class="md:text-[0.9vw] text-surface-50 flex items-center md:gap-[0.5vw]">
									<genre>{anime.genre}</genre>
									<Circle class="md:w-[0.25vw]" />
									<year>{anime.year}</year>
									<Circle class="md:w-[0.25vw]" />
									<episodes_count>{anime.episodes_count} eps</episodes_count>
								</anime_info>
							</div>
						</anime>
					{/each}
				</div>

				<scroll-buttons>
					{#if show_scroll_buttons.left}
						<left-scroll transition:blur={{ duration: 300 }} class="absolute -left-[1.5vw] top-[8.5vw] z-10">
							<button
								class="btn rounded-full md:p-[1vw] bg-surface-400"
								on:click={() => handle_scroll_left(trending_animes_scroll_element)}
							>
								<Chevron class="md:w-[1.5vw] rotate-90" />
							</button>
						</left-scroll>
					{/if}
					{#if show_scroll_buttons.right}
						<right-scroll transition:blur={{ duration: 300 }} class="absolute -right-[1.5vw] top-[8.5vw] z-10">
							<button
								class="btn rounded-full md:p-[1vw] bg-surface-400"
								on:click={() => handle_scroll_right(trending_animes_scroll_element)}
							>
								<Chevron class="md:w-[1.5vw] -rotate-90" />
							</button>
						</right-scroll>
					{/if}
				</scroll-buttons>
			</result-animes>
		</trending-now>
	</results-section>
</section>