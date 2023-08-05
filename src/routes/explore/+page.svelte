<script lang="ts">
    import { OpengraphGenerator } from "$functions/opengraph";
    import { page } from "$app/stores";
    import Search from "$icons/search.svelte";
    import Chevron from "$icons/chevron.svelte";
    import Preference from "$icons/preference.svelte";
    import Circle from "$icons/circle.svelte";
    import ImageLoader from "$components/shared/image/image_loader.svelte";
    import MoreBox from "$icons/more_box.svelte";
    import { trending_animes } from "$data/mock/trending";

    /* Anime cards scroll */
    // no:of items to show on each scroll
    let SHOW_NEW_CARDS_COUNT = 2,
        trending_animes_scroll_element: HTMLElement,
        popular_animes_scroll_element: HTMLElement;

    function handle_scroll_direction(element: HTMLElement, direction: "left" | "right"): void {
        // get one anime card width
        const child = element.firstChild as HTMLElement;
        const card_width = child.clientWidth;

        switch (direction) {
            case "left":
                element.scrollLeft -= SHOW_NEW_CARDS_COUNT * card_width;
                break;
            case "right":
                element.scrollLeft += SHOW_NEW_CARDS_COUNT * card_width;
                break;
            default:
                break;
        }
    }

    function handle_scroll(event: UIEvent): void {
        const element = event.target as HTMLElement;
        const { scrollLeft, scrollWidth, clientWidth } = element;
        // get <left-scroll> element
        const left_scroll_button = element.offsetParent?.children[1].firstChild as HTMLElement;
        // get <right-scroll> element
        const right_scroll_button = element.offsetParent?.children[1].lastChild as HTMLElement;

        switch (scrollLeft + clientWidth) {
            // scroll is on utter right
            case scrollWidth:
                right_scroll_button.style.opacity = "0";
                break;
            // scroll is on utter left
            case clientWidth:
                left_scroll_button.style.opacity = "0";
                break;
            // scroll is somewhere middle
            default:
                left_scroll_button.style.opacity = "1";
                right_scroll_button.style.opacity = "1";
                break;
        }
    }

    /* Filter pages */
    let filter_pages_mapping: {
        [key in typeof active_filter_page]: { title: string }
    } = {
        trending: { title: "Trending" },
        popular: { title: "Popular" },
        upcoming: { title: "Upcoming" },
        alltime: { title: "All-time Popular" },
    }
    let active_filter_page: "trending" | "popular" | "upcoming" | "alltime" = "trending";

    function change_filter_page(page: string) {
        active_filter_page = page as typeof active_filter_page;
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

<section class="md:pb-[2.5vw] md:pl-[1.5vw] md:pr-[3.75vw] flex flex-col md:gap-[1.5vw]">
    <section-headings class="flex flex-col md:gap-[0.5vw]">
        <span class="font-bold leading-none md:text-[2vw]">
            Anime <span class="text-warning-400">Explore</span>
        </span>
        <span class="font-semibold leading-none text-surface-50 md:text-[1.1vw]">Unleash your inner Otaku: Explore anime wonders</span>
    </section-headings>

    <explore-options class="md:mt-[2vw] flex items-end justify-between">
        <search class="flex flex-col md:gap-[0.35vw]">
            <span class="leading-none text-surface-50 md:text-[1vw]">Search Animes</span>
            <div class="relative flex items-center">
                <Search class="pointer-events-none absolute text-surface-50 md:ml-[1vw] md:w-[1.25vw]" />
                <input
                    type="text"
                    placeholder="Looking for specific anime? Start from here..."
                    class="border-none bg-surface-400 leading-none placeholder:text-surface-50 focus:ring-0 md:w-[50vw] md:rounded-[0.5vw] md:py-[0.8vw] md:pl-[3vw] md:text-[1vw]"
                />
            </div>
        </search>
        <filter_page_tabs class="flex items-center">
            {#each Object.entries(filter_pages_mapping) as page}
                {@const page_key = page[0]}
                {@const page_title = page[1].title}

                {@const is_active = active_filter_page === page_key}

                <button
                    class="cursor-pointer md:px-[1.25vw] md:py-[0.9vw] md:rounded-[0.5vw] font-semibold md:text-[1vw] hover:text-white transition-colors leading-none"
                    class:bg-surface-400={is_active}
                    class:text-surface-50={!is_active}
                    on:click={() => change_filter_page(page_key)}
                >
                    {page_title}
                </button>
            {/each}
        </filter_page_tabs>
    </explore-options>

    <filter-options class="flex items-end justify-between">
        <time-range class="flex flex-col md:gap-[0.35vw]">
            <span class="leading-none text-surface-50 md:text-[1vw]">Time Range</span>
            <div class="relative flex items-center">
                <button class="btn absolute right-0 p-0 md:mr-[1vw] md:w-[1.25vw]">
                    <Chevron class="text-surface-50" />
                </button>
                <input
                    type="text"
                    placeholder="Any"
                    class="border-none bg-surface-400 leading-none placeholder:text-surface-50 focus:ring-0 md:w-[11vw] md:rounded-[0.5vw] md:py-[0.8vw] md:pl-[1vw] md:text-[1vw]"
                    value="All-Time"
                />
            </div>
        </time-range>
        <genres class="flex flex-col md:gap-[0.35vw]">
            <span class="leading-none text-surface-50 md:text-[1vw]">Genres</span>
            <div class="relative flex items-center">
                <button class="btn absolute right-0 p-0 md:mr-[1vw] md:w-[1.25vw]">
                    <Chevron class="text-surface-50" />
                </button>
                <input
                    type="text"
                    placeholder="Any"
                    class="border-none bg-surface-400 leading-none placeholder:text-surface-50 focus:ring-0 md:w-[11vw] md:rounded-[0.5vw] md:py-[0.8vw] md:pl-[1vw] md:text-[1vw]"
                />
            </div>
        </genres>
        <year class="flex flex-col md:gap-[0.35vw]">
            <span class="leading-none text-surface-50 md:text-[1vw]">Year</span>
            <div class="relative flex items-center">
                <button class="btn absolute right-0 p-0 md:mr-[1vw] md:w-[1.25vw]">
                    <Chevron class="text-surface-50" />
                </button>
                <input
                    type="text"
                    placeholder="Any"
                    class="border-none bg-surface-400 leading-none placeholder:text-surface-50 focus:ring-0 md:w-[11vw] md:rounded-[0.5vw] md:py-[0.8vw] md:pl-[1vw] md:text-[1vw]"
                />
            </div>
        </year>
        <season class="flex flex-col md:gap-[0.35vw]">
            <span class="leading-none text-surface-50 md:text-[1vw]">Season</span>
            <div class="relative flex items-center">
                <button class="btn absolute right-0 p-0 md:mr-[1vw] md:w-[1.25vw]">
                    <Chevron class="text-surface-50" />
                </button>
                <input
                    type="text"
                    placeholder="Any"
                    class="border-none bg-surface-400 leading-none placeholder:text-surface-50 focus:ring-0 md:w-[11vw] md:rounded-[0.5vw] md:py-[0.8vw] md:pl-[1vw] md:text-[1vw]"
                />
            </div>
        </season>
        <format class="flex flex-col md:gap-[0.35vw]">
            <span class="leading-none text-surface-50 md:text-[1vw]">Format</span>
            <div class="relative flex items-center">
                <button class="btn absolute right-0 p-0 md:mr-[1vw] md:w-[1.25vw]">
                    <Chevron class="text-surface-50" />
                </button>
                <input
                    type="text"
                    placeholder="Any"
                    class="border-none bg-surface-400 leading-none placeholder:text-surface-50 focus:ring-0 md:w-[11vw] md:rounded-[0.5vw] md:py-[0.8vw] md:pl-[1vw] md:text-[1vw]"
                />
            </div>
        </format>
        <airing-status class="flex flex-col md:gap-[0.35vw]">
            <span class="leading-none text-surface-50 md:text-[1vw]">Airing Status</span>
            <div class="relative flex items-center">
                <button class="btn absolute right-0 p-0 md:mr-[1vw] md:w-[1.25vw]">
                    <Chevron class="text-surface-50" />
                </button>
                <input
                    type="text"
                    placeholder="Any"
                    class="border-none bg-surface-400 leading-none placeholder:text-surface-50 focus:ring-0 md:w-[11vw] md:rounded-[0.5vw] md:py-[0.8vw] md:pl-[1vw] md:text-[1vw]"
                />
            </div>
        </airing-status>
        <sort-by class="flex flex-col md:gap-[0.35vw]">
            <span class="leading-none text-surface-50 md:text-[1vw]">Sort by</span>
            <div class="relative flex items-center">
                <button class="btn absolute right-0 p-0 md:mr-[1vw] md:w-[1.25vw]">
                    <Chevron class="text-surface-50" />
                </button>
                <input
                    type="text"
                    placeholder="Any"
                    class="border-none bg-surface-400 leading-none placeholder:text-surface-50 focus:ring-0 md:w-[11vw] md:rounded-[0.5vw] md:py-[0.8vw] md:pl-[1vw] md:text-[1vw]"
                    value="Popularity"
                />
            </div>
        </sort-by>
        <more-filter-option>
            <button class="btn bg-surface-400 md:rounded-[0.5vw] md:p-[0.79vw]">
                <MoreBox class="md:w-[1.25vw]" />
            </button>
        </more-filter-option>
    </filter-options>

    <results-section class="flex flex-col md:mt-[2vw] md:gap-[4vw]">
        <trending-now>
            <headings class="flex flex-col leading-none md:gap-[0.35vw]">
                <span class="font-semibold md:text-[1.25vw]">Trending Now</span>
                <span class="text-surface-50 md:text-[1vw]">Crowd Favorites: Anime Hits and Hype</span>
            </headings>

            <result-animes class="relative block md:mt-[1.25vw]">
                <div
                    class="flex snap-x overflow-x-scroll scroll-smooth scrollbar-none md:gap-[1.25vw]"
                    bind:this={trending_animes_scroll_element}
                    on:scroll={handle_scroll}
                >
                    {#each trending_animes as anime}
                        <anime class="flex flex-shrink-0 snap-start flex-col leading-none md:w-[13.7vw] md:gap-[0.75vw]">
                            <ImageLoader
                                src={anime.cover}
                                class="w-full md:h-[20vw] md:rounded-[0.75vw]"
                            />
                            <div class="flex flex-col md:gap-[0.35vw]">
                                <anime_name class="line-clamp-1 font-semibold md:text-[1.1vw]">{anime.name}</anime_name>
                                <anime_info class="flex items-center text-surface-50 md:gap-[0.5vw] md:text-[0.9vw]">
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
                    <left-scroll class="absolute -left-[1.5vw] top-[8.5vw] z-10 opacity-0 transition-opacity duration-300">
                        <button
                            class="btn rounded-full bg-surface-400 md:p-[1vw]"
                            on:click={() => handle_scroll_direction(trending_animes_scroll_element, "left")}
                        >
                            <Chevron class="rotate-90 md:w-[1.5vw]" />
                        </button>
                    </left-scroll>
                    <right-scroll class="absolute -right-[1.5vw] top-[8.5vw] z-10 transition-opacity duration-300">
                        <button
                            class="btn rounded-full bg-surface-400 md:p-[1vw]"
                            on:click={() => handle_scroll_direction(trending_animes_scroll_element, "right")}
                        >
                            <Chevron class="-rotate-90 md:w-[1.5vw]" />
                        </button>
                    </right-scroll>
                </scroll-buttons>
            </result-animes>
        </trending-now>

        <popular-animes>
            <headings class="flex flex-col leading-none md:gap-[0.35vw]">
                <span class="font-semibold md:text-[1.25vw]">Popular this season</span>
                <span class="text-surface-50 md:text-[1vw]">Seasonal Gems: Discovering the Best of the Moment</span>
            </headings>

            <result-animes class="relative block md:mt-[1.25vw]">
                <div
                    class="flex snap-x overflow-x-scroll scroll-smooth scrollbar-none md:gap-[1.25vw]"
                    bind:this={popular_animes_scroll_element}
                    on:scroll={handle_scroll}
                >
                    {#each trending_animes.reverse() as anime}
                        <anime class="flex flex-shrink-0 snap-start flex-col leading-none md:w-[13.7vw] md:gap-[0.75vw]">
                            <ImageLoader
                                src={anime.cover}
                                class="w-full md:h-[20vw] md:rounded-[0.75vw]"
                            />
                            <div class="flex flex-col md:gap-[0.35vw]">
                                <anime_name class="line-clamp-1 font-semibold md:text-[1.1vw]">{anime.name}</anime_name>
                                <anime_info class="flex items-center text-surface-50 md:gap-[0.5vw] md:text-[0.9vw]">
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
                    <left-scroll class="absolute -left-[1.5vw] top-[8.5vw] z-10 opacity-0 transition-opacity duration-300">
                        <button
                            class="btn rounded-full bg-surface-400 md:p-[1vw]"
                            on:click={() => handle_scroll_direction(popular_animes_scroll_element, "left")}
                        >
                            <Chevron class="rotate-90 md:w-[1.5vw]" />
                        </button>
                    </left-scroll>
                    <right-scroll class="absolute -right-[1.5vw] top-[8.5vw] z-10 transition-opacity duration-300">
                        <button
                            class="btn rounded-full bg-surface-400 md:p-[1vw]"
                            on:click={() => handle_scroll_direction(popular_animes_scroll_element, "right")}
                        >
                            <Chevron class="-rotate-90 md:w-[1.5vw]" />
                        </button>
                    </right-scroll>
                </scroll-buttons>
            </result-animes>
        </popular-animes>
    </results-section>
</section>
