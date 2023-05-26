<script lang="ts">
    import AnimeEpisodes from "$components/pages/anime_info/anime_episodes.svelte";
    import AnimeFullDetails from "$components/pages/anime_info/anime_full_details.svelte";
    import SidebarDetails from "$components/pages/anime_info/sidebar_details.svelte";
    import ScrollArea from "$components/shared/scroll_area.svelte";
    import { FormatDate } from "$functions/format_date";
    import Chevron from "$icons/chevron.svelte";
    import Download from "$icons/download.svelte";
    import Edit from "$icons/edit.svelte";
    import Listen from "$icons/listen.svelte";
    // icons
    import PlayCircle from "$icons/play_circle.svelte";
    import Read from "$icons/read.svelte";
    import SettingsOutline from "$icons/settings_outline.svelte";
    import Share from "$icons/share.svelte";
    import Video from "$icons/video.svelte";
    // types
    import type { SvelteComponentDev } from "svelte/internal";

    export let anime_name: string;
    export let anime_alternative_name: string;
    export let anime_episodes_count: number;
    export let anime_date: string;
    export let anime_synopsis: string;
    export let anime_banner: string;

    export let anime_episodes: any;

    const icon_mapping: {
        [key: string]: {
            [key: string]: {
                icon: {
                    component: typeof SvelteComponentDev;
                    class: string;
                    color?: string;
                    variant?: boolean | string;
                };
            };
        };
    } = {
        anime_options: {
            read: {
                icon: {
                    component: Read,
                    class: "w-[1.5vw] text-surface-500"
                }
            },
            listen: {
                icon: {
                    component: Listen,
                    class: "w-[1.5vw] text-surface-500"
                }
            }
        },
        user_options_icons: {
            video: {
                icon: {
                    component: Video,
                    variant: false,
                    class: "w-[1.125vw]"
                }
            },
            edit: {
                icon: {
                    component: Edit,
                    variant: "with_underline_around_pencil",
                    class: "w-[1.125vw]"
                }
            },
            download: {
                icon: {
                    component: Download,
                    class: "w-[1.125vw]"
                }
            },
            share: {
                icon: {
                    component: Share,
                    class: "w-[1.125vw]"
                }
            }
        }
    };
</script>

<div class="grid grid-cols-12 items-start">
    <div class="col-span-10 pr-[4vw]">
        <div class="grid grid-cols-12 items-end justify-between">
            <div class="col-span-7 flex items-end pr-[2vw] md:gap-[3.125vw]">
                <img
                    class="md:w-[12.5vw] md:rounded-[1vw]"
                    src={anime_banner}
                    alt={anime_name}
                />
                <div>
                    <span class="font-bold md:text-[2.5vw] md:leading-[3vw]">{anime_name}</span>

                    <p class="flex items-center gap-2 text-surface-100 md:pt-[0.625vw]">
                        <span class="font-medium md:text-[0.75vw] md:leading-[0.9vw] [&:not(:last-child)]:after:ml-2 [&:not(:last-child)]:after:content-['▪']">
                            {anime_alternative_name}
                        </span>
                        <span class="font-medium md:text-[0.75vw] md:leading-[0.9vw] [&:not(:last-child)]:after:ml-2 [&:not(:last-child)]:after:content-['▪']">
                            {anime_name}
                        </span>
                    </p>

                    <p class="flex flex-wrap items-center gap-2 md:pt-[0.5vw]">
                        <span class="font-semibold md:text-[0.625vw] md:leading-[0.75vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']">TV</span>
                        <span class="font-semibold md:text-[0.625vw] md:leading-[0.75vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']">
                            {anime_episodes_count} eps
                        </span>
                        <span class="font-semibold md:text-[0.625vw] md:leading-[0.75vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']">Completed</span>
                        <span class="font-semibold capitalize md:text-[0.625vw] md:leading-[0.75vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']">
                            {new FormatDate(anime_date).format_to_season}
                        </span>
                        <span class="font-semibold md:text-[0.625vw] md:leading-[0.75vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']">Kuschio animation</span>
                    </p>

                    <div class="flex items-center md:mt-[2.25vw] md:gap-[1.15vw]">
                        <button
                            type="button"
                            class="btn bg-primary-500 font-bold text-white md:h-[4.3vw] md:w-[6.75vw] md:rounded-[0.625vw] md:text-[0.87vw]"
                        >
                            <div class="flex items-center justify-center md:gap-[0.7vw]">
                                <PlayCircle class="w-[1.875vw]" />
                                <div class="flex flex-col items-start">
                                    <span class="leading-[1.05vw]">Watch</span>
                                    <span class="font-normal leading-[0.9375vw] text-surface-100 md:text-[0.625vw]">Ep 01</span>
                                </div>
                            </div>
                        </button>

                        {#each Object.entries(icon_mapping.anime_options) as item}
                            {@const item_name = item[0]}
                            {@const item_icon = item[1].icon}
                            {@const component = item_icon.component}
                            {@const component_class = item_icon.class}

                            <button
                                type="button"
                                class="btn bg-secondary-100 capitalize text-surface-500 md:h-[4.3vw] md:w-[4.3vw] md:rounded-[0.625vw] md:text-[0.87vw] md:font-semibold"
                            >
                                <div class="flex flex-col items-center justify-center md:gap-[0.68vw]">
                                    <svelte:component
                                        this={component}
                                        class={component_class}
                                    />
                                    <span class="md:leading-[1vw]">{item_name}</span>
                                </div>
                            </button>
                        {/each}
                    </div>

                    <div class="flex md:mt-[1.25vw] md:gap-[0.625vw]">
                        {#each Object.entries(icon_mapping.user_options_icons) as item}
                            {@const item_icon = item[1].icon}
                            {@const component = item_icon.component}
                            {@const component_class = item_icon.class}
                            {@const component_variant = item_icon.variant}

                            <button
                                type="button"
                                class="btn btn-icon bg-warning-400 p-0 text-surface-500 md:w-[1.875vw] md:rounded-[0.25vw]"
                            >
                                <svelte:component
                                    this={component}
                                    class={component_class}
                                    variant={component_variant}
                                />
                            </button>
                        {/each}
                    </div>
                </div>
            </div>

            <div class="col-span-5">
                <div class="flex items-center gap-3">
                    <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Synopsis</span>
                    <button class="btn btn-icon rounded-[0.1875vw] bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
                        <SettingsOutline class="w-[0.9vw] opacity-75" />
                    </button>
                </div>

                <ScrollArea
                    offsetScrollbar
                    gradientMask
                    parentClass="mt-5"
                    class="text-justify md:max-h-[9.5vw] md:text-[0.75vw] md:leading-[1vw]"
                >
                    {anime_synopsis}
                </ScrollArea>

                <div class="flex gap-2 md:mt-3">
                    <div class="rounded bg-surface-500 px-[0.95vw] text-white md:py-[0.375vw] md:text-[0.75vw] md:leading-[0.9vw]">Mystery</div>
                    <div class="rounded bg-surface-500 px-[0.95vw] text-white md:py-[0.375vw] md:text-[0.75vw] md:leading-[0.9vw]">Romance</div>
                    <div class="rounded bg-surface-500 px-[0.95vw] text-white md:py-[0.375vw] md:text-[0.75vw] md:leading-[0.9vw]">Horror</div>
                </div>

                <div class="flex w-max items-center gap-2 rounded bg-white/10 backdrop-blur-lg md:mt-3 md:px-[0.75vw] md:py-[0.375vw] md:text-[0.625vw] md:leading-[0.75vw]">
                    <div class="flex items-center gap-1">
                        Score:
                        <span class="text-warning-400">79</span>
                    </div>
                    <div class="flex items-center gap-1">
                        Status:
                        <span class="text-warning-400">Watching</span>
                        <Chevron class="w-[0.625vw] text-warning-400" />
                    </div>
                    <div class="flex items-center gap-1">
                        Episode:
                        <span class="text-warning-400">0/{anime_episodes_count}</span>
                    </div>
                    <div class="flex items-center gap-1">
                        Your Score:
                        <span class="text-warning-400">Not Rated</span>
                        <Chevron class="w-[0.625vw] text-warning-400" />
                    </div>
                </div>
            </div>
        </div>

        <AnimeEpisodes {anime_episodes} />
    </div>

    <div class="col-span-2">
        <SidebarDetails />

        <AnimeFullDetails />
    </div>
</div>
