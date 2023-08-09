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

    /* Filter pages */
    let filter_pages_mapping: {
        [key in typeof active_filter_page]: { 
            title: string;
            description: string;
        }
    } = {
        trending: { 
            title: "Trending Now",
            description: "Crowd Favorites: Anime Hits and Hype" 
        },
        popular: {
            title: "Popular this Season",
            description: "Seasonal Gems: Discovering the Best of the Moment"
        },
        upcoming: {
            title: "Upcoming",
            description: "Crowd Favorites: Anime Hits and Hype"
        },
        alltime: {
            title: "All-time Popular",
            description: "Seasonal Gems: Discovering the Best of the Moment"
        },
    }
    let active_filter_page: "trending" | "popular" | "upcoming" | "alltime" = "trending";

    function change_filter_page(page: string) {
        active_filter_page = page as typeof active_filter_page;
    }

    let filter_options_mapping: {
        [key: string]: {
            title: string;
            value: string;
            hide_on_mobile?: boolean;
        }
    } = {
        time_range: {
            title: "Time Range",
            value: "All-Time",
            hide_on_mobile: true,
        },
        genres: {
            title: "Genres",
            value: "Any"
        },
        year: {
            title: "Year",
            value: "Any",
            hide_on_mobile: true,
        },
        season: {
            title: "Season",
            value: "Any"
        },
        format: {
            title: "Format",
            value: "Any",
            hide_on_mobile: true,
        },
        airing_status: {
            title: "Airing Status",
            value: "Any",
            hide_on_mobile: true,
        },
        sort_by: {
            title: "Sort by",
            value: "Popularity"
        }
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

<section class="md:pb-[2.5vw] md:pl-[1.5vw] md:pr-[3.75vw] flex flex-col md:gap-[1.5vw] mt-20 md:mt-0 p-5 md:pt-0">
    <section-headings class="flex flex-col gap-2 md:gap-[0.5vw]">
        <span class="font-bold leading-none text-2xl md:text-[2vw]">
            Anime <span class="text-warning-400">Explore</span>
        </span>
        <span class="font-semibold leading-none text-surface-50 text-base font-normal md:text-[1.1vw]">Unleash your inner Otaku: Explore anime wonders</span>
    </section-headings>

    <explore-options class="mt-7 md:mt-[2vw] flex flex-col gap-5 md:gap-0 md:flex-row md:items-end justify-between">
        <search class="flex flex-col gap-1 md:gap-[0.35vw]">
            <span class="leading-none text-surface-50 text-base md:text-[1vw]">Search Animes</span>
            <div class="relative flex items-center">
                <Search class="pointer-events-none absolute text-surface-50 ml-4 md:ml-[1vw] w-5 md:w-[1.25vw]" />
                <input
                    type="text"
                    placeholder="Looking for specific anime? Start from here..."
                    class="border-none bg-surface-400 leading-none placeholder:text-surface-50 focus:ring-0 w-full md:w-[50vw] rounded-lg md:rounded-[0.5vw] py-3 pl-14 md:py-[0.8vw] md:pl-[3vw] md:text-[1vw]"
                />
            </div>
        </search>
        <filter_page_tabs class="flex items-center justify-between">
            {#each Object.entries(filter_pages_mapping) as page}
                {@const page_key = page[0]}
                {@const page_title = page[1].title}

                {@const is_active = active_filter_page === page_key}

                <button
                    class="cursor-pointer text-base px-3 py-2 h-14 leading-tight md:h-auto rounded-lg md:px-[1.25vw] md:py-[0.9vw] md:rounded-[0.5vw] font-semibold md:text-[1vw] hover:text-white transition-colors leading-none"
                    class:bg-surface-400={is_active}
                    class:text-surface-50={!is_active}
                    on:click={() => change_filter_page(page_key)}
                >
                    {page_title}
                </button>
            {/each}
        </filter_page_tabs>
    </explore-options>

    <filter-options class="flex items-end gap-3 md:gap-0 justify-between mt-5 md:mt-0">
        {#each Object.entries(filter_options_mapping) as option}
            {@const title = option[1].title}
            {@const value = option[1].value}
            {@const hide_on_mobile = option[1].hide_on_mobile}

            <div class="md:flex flex-col md:gap-[0.35vw]" class:hidden={hide_on_mobile}>
                <span class="leading-none text-surface-50 md:text-[1vw]">{title}</span>
                <div class="relative flex items-center">
                    <button class="btn absolute right-0 p-0 mr-3 md:mr-[1vw] w-4 md:w-[1.25vw]">
                        <Chevron class="text-surface-50" />
                    </button>
                    <input
                        type="text"
                        class="border-none bg-surface-400 leading-none placeholder:text-surface-50 focus:ring-0 md:w-[11vw] w-full py-3 rounded-lg text-base md:rounded-[0.5vw] md:py-[0.8vw] md:pl-[1vw] md:text-[1vw]"
                        value={value}
                    />
                </div>
            </div>
        {/each}
        <more-filter-option>
            <button class="btn bg-surface-400 md:rounded-[0.5vw] p-3 md:p-[0.79vw]">
                <MoreBox class="w-5 md:w-[1.25vw]" />
            </button>
        </more-filter-option>
    </filter-options>

    <active-filter-page class="mt-20 md:mt-[2vw]">
        <headings class="flex flex-col md:gap-[0.35vw]">
            <span class="font-semibold leading-none text-xl md:text-[1.25vw]">
                {filter_pages_mapping[active_filter_page].title}
            </span>
            <span class="text-surface-50 leading-none text-base md:text-[1vw]">
                {filter_pages_mapping[active_filter_page].description}
            </span>
        </headings>

        <result-animes class="grid grid-cols-2 md:grid-cols-6 gap-5 md:gap-[1.25vw] md:gap-y-[3vw] mt-5 md:mt-[1.25vw]">
            {#each trending_animes as anime}
                <anime class="flex flex-col leading-none gap-2 md:gap-[0.75vw]">
                    <ImageLoader
                        src={anime.cover}
                        class="w-full h-80 rounded-lg object-cover md:h-[20vw] md:rounded-[0.75vw]"
                    />
                    <div class="flex flex-col md:gap-[0.35vw]">
                        <anime_name class="line-clamp-1 font-semibold text-base md:text-[1.1vw]">{anime.name}</anime_name>
                        <anime_info class="flex items-center text-surface-50 gap-2 md:gap-[0.5vw] text-sm md:text-[0.9vw]">
                            <genre>{anime.genre}</genre>
                            <Circle class="w-1 md:w-[0.25vw]" />
                            <year>{anime.year}</year>
                            <Circle class="w-1 md:w-[0.25vw]" />
                            <episodes_count>{anime.episodes_count} eps</episodes_count>
                        </anime_info>
                    </div>
                </anime>
            {/each}
        </result-animes>
    </active-filter-page>
</section>
