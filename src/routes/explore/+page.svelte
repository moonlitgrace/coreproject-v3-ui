<script lang="ts">
    import { OpengraphGenerator } from "$functions/opengraph";
    import { page } from "$app/stores";
    import Search from "$icons/search.svelte";
    import Chevron from "$icons/chevron.svelte";
    import Circle from "$icons/circle.svelte";
    import ImageLoader from "$components/shared/image/image_loader.svelte";
    import MoreBox from "$icons/more_box.svelte";
    import { trending_animes } from "$data/mock/trending";
    import tippy from "tippy.js";
    import Caption from "$icons/caption.svelte";
    import Mic from "$icons/mic.svelte";
    import AnimeCard from "$components/tippies/anime_card.svelte";
    import FilterOptions from "$components/tippies/filter_options.svelte";

    let filter_options_mapping: {
        [key: string]: {
            title: string;
            class: string;
            items?: Record<string, string> | undefined;
            selected_item?: [string, string] | undefined;
        };
    } = {
        time_range: {
            title: "Time Range",
            class: "hidden flex-col md:gap-[0.35vw]",
        },
        genres: {
            title: "Genres",
            class: "md:flex flex-col md:gap-[0.35vw]",
            items: {
                action: "Action",
                romance: "Romance",
            },
        },
        year: {
            title: "Year",
            class: "md:flex flex-col md:gap-[0.35vw]",
            items: {
                2023: "2023",
                2022: "2022",
                2021: "2021",
                2020: "2020",
            }
        },
        season: {
            title: "Season",
            class: "md:flex flex-col md:gap-[0.35vw]",
            items: {
                winter: "Winter",
                spring: "Spring",
                summer: "Summer",
                fall: "Fall",
            }
        },
        format: {
            title: "Format",
            class: "hidden md:flex flex-col md:gap-[0.35vw]",
            items: {
                tv_show: "TV Show",
                movie: "Movie",
            }
        },
        airing_status: {
            title: "Airing Status",
            class: "hidden flex-col md:gap-[0.35vw]"
        },
        sort_by: {
            title: "Sort by",
            class: "hidden flex-col md:gap-[0.35vw]"
        }
    };

    function update_selected_item(key: string, selected_item: [string, string]) {
        // update filer_options_mapping
        filter_options_mapping = {
            ...filter_options_mapping,
            [key]: {
                ...filter_options_mapping[key],
                selected_item: selected_item,
            }
        };
    };

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

<section class="mt-20 flex flex-col p-5 md:mt-0 md:gap-[1.5vw] md:pb-[2.5vw] md:pl-[1.5vw] md:pr-[3.75vw] md:pt-0">
    <section-headings class="flex flex-col gap-2 md:gap-[0.5vw]">
        <span class="text-2xl font-bold leading-none md:text-[2vw]">
            Anime <span class="text-warning-400">Explore</span>
        </span>
        <span class="text-base font-normal leading-none text-surface-50 md:text-[1.1vw]">Unleash your inner Otaku: Explore anime wonders</span>
    </section-headings>

    <search class="flex md:hidden flex-col gap-1 mt-10">
        <span class="text-base leading-none font-semibold text-surface-50">Search Animes</span>
        <div class="relative flex items-center">
            <Search
                class="pointer-events-none absolute ml-4 w-4 text-surface-300"
            />
            <input
                type="text"
                placeholder="Looking for specific anime? Start from here..."
                class="rounded-lg border-none bg-surface-400 md:bg-surface-400/75 py-3 pl-12 leading-none placeholder:text-surface-50 text-surface-50 focus:ring-0 w-full"
            />
        </div>
    </search>
    <filter-options class="mt-3 flex items-end justify-between gap-3 md:mt-0 md:gap-0">
        <div class="flex items-center gap-3 md:gap-[1.5vw]">
            <search class="hidden md:flex flex-col gap-[0.35vw]">
                <span class="leading-none font-semibold text-surface-50 text-[1vw]">Search Animes</span>
                <div class="relative flex items-center">
                    <Search
                        class="pointer-events-none absolute text-surface-300 ml-[1vw] w-[1vw]"
                    />
                    <input
                        type="text"
                        placeholder="Looking for specific anime? Start from here..."
                        class="border-none bg-surface-400 md:bg-surface-400/75 leading-none placeholder:text-surface-50 text-surface-50 focus:ring-0 rounded-[0.5vw] py-[0.8vw] pl-[3vw] text-[1vw] w-[30vw]"
                    />
                </div>
            </search>
            {#each Object.entries(filter_options_mapping) as option, index}
                {@const title = option[1].title}
                {@const selected_item = option[1].selected_item}
                {@const klass = option[1].class}
                {@const filter_items = option[1].items}

                <div
                    class="{klass} group"
                    use:tippy={{
                        trigger: "click",
                        arrow: false,
                        allowHTML: true,
                        placement: "bottom",
                        animation: "shift-away",
                        duration: [150, 150],
                        interactive: true,
                        appendTo: document.body,
                        onTrigger: async (instance) => {
                            const node = document.createElement("div");
                            const FilterOptionsComponent = new FilterOptions({
                                target: node,
                                props: {
                                    items: filter_items,
                                }
                            });
                            // dispathced event from component
                            FilterOptionsComponent.$on("select", (e) => update_selected_item(option[0], e.detail));

                            instance.setContent(node);
                        }
                    }}
                >
                    <span class="leading-none text-surface-50 font-semibold md:text-[1vw]">{title}</span>
                    <div class="relative flex items-center">
                        <span class="absolute left-4 cursor-pointer text-surface-50 opacity-100 group-focus-within:opacity-0 duration-300">
                            {selected_item ? selected_item[1] : "Any"}
                        </span>
                        <input
                            type="text"
                            class="w-full rounded-lg border-none bg-surface-400 md:bg-surface-400/75 py-3 text-base leading-none placeholder:text-surface-50 focus:ring-0 md:w-[11vw] md:rounded-[0.5vw] md:py-[0.8vw] md:pl-[1vw] md:text-[1vw] text-surface-50 peer"
                        />
                        <button class="btn absolute right-0 mr-3 w-4 p-0 md:mr-[1vw] md:w-[1vw]">
                            <Chevron class="text-surface-300" />
                        </button>
                    </div>
                </div>
            {/each}
        </div>

        <more-filter-option>
            <button class="btn bg-surface-400 md:bg-surface-400/75 p-[0.85rem] rounded-lg md:rounded-[0.5vw] md:p-[0.9vw]">
                <MoreBox class="w-4 md:w-[1vw] text-surface-50" />
            </button>
        </more-filter-option>
    </filter-options>

    <div class="mt-16 md:mt-[1.5vw]">
        <headings class="flex flex-col gap-2 md:gap-[0.35vw]">
            <span class="text-xl font-semibold leading-none md:text-[1.35vw]">
                Trending Now
            </span>
            <span class="text-base leading-none text-surface-50 md:text-[1vw]">
                Crowd Favorites: Anime Hits and Hype
            </span>
        </headings>

        <result-animes class="mt-5 grid grid-cols-3 gap-3 md:mt-[1.25vw] md:grid-cols-6 md:gap-[1vw] md:gap-y-[2vw]">
            {#each trending_animes as anime}
                <a
                    href="/mal/{anime.id}"
                    class="unstyled col-span-1 relative flex flex-col gap-2 md:gap-[0.5vw]"
                >
                    <div
                        class="relative"
                        use:tippy={{
                            arrow: false,
                            allowHTML: true,
                            placement: "right",
                            offset: [100, -100],
                            animation: "scale",
                            duration: [150, 10],
                            interactive: true,
                            appendTo: document.body,
                            onTrigger: async (instance) => {
                                const node = document.createElement("div");
                                new AnimeCard({
                                    target: node,
                                    props: {
                                        anime_id: anime.id,
                                        anime_name: anime.name,
                                        anime_type: anime.type,
                                        anime_genres: anime.genres,
                                        anime_studios: anime.studios,
                                        anime_episodes_count: anime.episodes_count,
                                        anime_synopsis: anime.synopsis,
                                        anime_release_date: anime.release_date,
                                    }
                                });

                                instance.setContent(node);
                            }
                        }}
                    >
                        <ImageLoader
                            src={anime.cover}
                            alt={anime.name}
                            class="h-52 md:h-[20vw] w-full rounded-md object-cover object-center md:rounded-[0.35vw]"
                        />
                        <overlay class="absolute inset-0 flex items-end p-2 md:p-[0.5vw] leading-none bg-gradient-to-t from-surface-900/75 to-transparent">
                            <div class="rounded md:rounded-[0.3vw] overflow-hidden flex gap-1 md:gap-[0.2vw]">
                                <subs class="bg-warning-400 text-black p-1 md:px-[0.35vw] md:py-[0.25vw] flex items-center gap-1 md:gap-[0.25vw]">
                                    <Caption class="h-4 md:h-[1.25vw]" />
                                    <span class="text-xs md:text-[0.8vw] font-semibold">{anime.episodes_count}</span>
                                </subs>
                                <dubs class="bg-white/25 backdrop-blur p-1 md:px-[0.45vw] md:py-[0.25vw] flex items-center gap-1 md:gap-[0.25vw]">
                                    <Mic class="h-3 md:h-[0.8vw]" />
                                    <span class="text-xs md:text-[0.8vw] font-semibold">{anime.episodes_count}</span>
                                </dubs>
                            </div>
                        </overlay>
                    </div>

                    <anime-details class="flex flex-col gap-2 md:gap-[0.5vw] text-surface-50">
                        <anime_name class="line-clamp-1 text-xs md:text-[1vw] font-semibold leading-none">
                            {anime.name}
                        </anime_name>
                        <anime_info class="flex items-center gap-2 text-xs text-surface-50 md:gap-[0.5vw] md:text-[0.9vw] leading-none">
                            <genre>{anime.genres[0]}</genre>
                            <Circle class="w-1 md:w-[0.25vw] opacity-75" />
                            <episodes_count>{anime.episodes_count} eps</episodes_count>
                        </anime_info>
                    </anime-details>
                </a>
            {/each}
        </result-animes>
    </div>
</section>
