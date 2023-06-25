<script lang="ts">
    import { page } from "$app/stores";
    import ImageLoader from "$components/shared/image/image_loader.svelte";
    import Chevron from "$icons/chevron.svelte";
    import Download from "$icons/download.svelte";
    import Next from "$icons/next.svelte";
    import Search from "$icons/search.svelte";
    import type { SvelteComponentDev } from "svelte/internal";
    import tippy from "tippy.js";

    $: episode_id = Number($page.params.id);

    const video_player_mapping: {
        preferences: {
            [key: string]: {
                enabled: boolean;
                text: string;
            };
        };
        options: {
            [key: string]: {
                component: typeof SvelteComponentDev;
                link: string;
                class: string;
                text: string;
            };
        };
    } = {
        preferences: {
            lights: {
                enabled: false,
                text: "Lights"
            },
            auto_play: {
                enabled: true,
                text: "Auto Play"
            },
            auto_next: {
                enabled: true,
                text: "Auto Next"
            },
            auto_skip_intro: {
                enabled: true,
                text: "Auto Skip Intro"
            }
        },
        options: {
            download: {
                component: Download,
                link: "./",
                class: "w-[1.4vw]",
                text: "Download"
            },
            prev: {
                component: Next,
                link: "./",
                class: "w-[1.4vw] rotate-180",
                text: "Previous Episode"
            },
            next: {
                component: Next,
                link: "./",
                class: "w-[1.4vw]",
                text: "Next Episode"
            }
        }
    };
</script>

<episode-container class="block md:py-[2vw] md:pl-[1vw] md:pr-[3.75vw]">
    <episode-content class="grid grid-cols-12 md:gap-[5vw]">
        <video-player class="flex flex-col md:col-span-8 md:gap-[0.75vw]">
            <player class="w-full md:h-[35vw]">
                <!-- adding a image for now -->
                <ImageLoader
                    src="/images/DemonSlayer-episode.webp"
                    alt="Episode image"
                    class="w-full object-cover md:h-[35vw] md:rounded-[0.5vw]"
                />
            </player>
            <video-player-options class="flex items-center justify-between">
                <preferences class="flex items-center md:gap-[1vw]">
                    <sub-dub class="flex items-center md:gap-[0.75vw]">
                        <span class="font-semibold uppercase md:text-[1vw]">sub/dub:</span>
                        <!-- need to make this a dropdown or add tippy js -->
                        <button class="btn flex items-center bg-surface-400 leading-none md:gap-[0.5vw] md:rounded-[0.35vw] md:px-[0.75vw] md:py-[0.5vw] md:text-[1vw]">
                            Vidstreaming (sub)
                            <Chevron class="md:w-[1vw]" />
                        </button>
                    </sub-dub>

                    {#each Object.entries(video_player_mapping.preferences) as item}
                        {@const text = item[1].text}
                        {@const enabled = item[1].enabled}

                        {@const status = (() => {
                            switch (enabled) {
                                case true:
                                    return "On";
                                default:
                                    return "Off";
                            }
                        })()}

                        <button class="btn flex items-center p-0 leading-none md:text-[0.9vw]">
                            <span>{text}:</span>
                            <status class="{enabled ? 'text-warning-500' : 'text-primary-300'} font-semibold">{status}</status>
                        </button>
                    {/each}
                </preferences>
                <video-options class="flex items-center gap-[0.75vw]">
                    {#each Object.entries(video_player_mapping.options) as item}
                        {@const component = item[1].component}
                        {@const link = item[1].link}
                        {@const _class = item[1].class}
                        {@const text = item[1].text}

                        <a
                            href={link}
                            class="unstyled"
                            class:pointer-events-none={!link}
                            use:tippy={{
                                content: `<div class='leading-none w-max whitespace-nowrap rounded-lg bg-surface-400 px-2 py-1 text-[0.65rem] text-surface-50 md:px-[0.75vw] md:py-[0.5vw] md:rounded-[0.35vw] md:text-[1vw]'>${text}</div>`,
                                placement: "bottom",
                                allowHTML: true,
                                arrow: false,
                                offset: [0, 17],
                                appendTo: document.body,
                                animation: "shift-away"
                            }}
                        >
                            <svelte:component
                                this={component}
                                class={_class}
                            />
                        </a>
                    {/each}
                </video-options>
            </video-player-options>
        </video-player>
        <episode-info class="col-span-4 flex flex-col justify-between">
            <episodes-container class="flex flex-col justify-between md:gap-[1.5vw]">
                <header class="flex items-center justify-between">
                    <span class="font-semibold md:text-[1.35vw]">Episodes</span>
                    <button class="btn flex items-center bg-surface-400 font-semibold leading-none md:gap-[0.5vw] md:rounded-[0.35vw] md:px-[0.75vw] md:py-[0.5vw] md:text-[1vw]">
                        EPS: 1 - 20
                        <Chevron class="md:w-[1vw]" />
                    </button>
                </header>

                <episodes class="grid grid-cols-6 md:gap-x-[1vw] md:gap-y-[0.5vw]">
                    {#each Array(30) as item, index}
                        {@const episode_index = index + 1}
                        <a
                            href="./{episode_index}"
                            class="{episode_index === episode_id ? 'bg-primary-500' : 'bg-surface-400'} unstyled btn font-semibold leading-none md:rounded-[0.35vw] md:px-[2vw] md:py-[0.75vw] md:text-[1.2vw]"
                        >
                            {episode_index}
                        </a>
                    {/each}
                </episodes>
            </episodes-container>
            <episode-detail class="block flex items-end md:gap-[1.5vw]">
                <anime-banner class="relative md:h-[13vw] md:w-[9vw] md:flex-shrink-0">
                    <ImageLoader
                        class="h-full w-full object-cover object-center md:rounded-[0.5vw]"
                        src="/images/DemonSlayer-bg.avif"
                        alt="Demon Slayer"
                    />
                    <overlay-gradient class="absolute inset-0 bg-gradient-to-t from-surface-900/50 to-surface-900/25" />
                </anime-banner>
                <episode-main-detail class="flex flex-col leading-none md:gap-[0.25vw]">
                    <anime-title class="font-bold text-surface-50 duration-300 ease-in-out md:h-auto md:max-h-[1.75vw] md:overflow-hidden md:text-[1.5vw] md:leading-[1.75vw] md:hover:max-h-[5vw] md:hover:overflow-y-scroll">Deamon Slayer</anime-title>

                    <span class="text-surface-50 md:text-[1vw]">currently watching</span>
                    <span class="font-semibold md:my-[0.5vw] md:text-[1.25vw]">Episode: {episode_id}</span>

                    <episode-name class="text-surface-50 duration-300 ease-in-out md:h-auto md:max-h-[2.5vw] md:overflow-hidden md:text-[1vw] md:leading-[1.25vw] md:hover:max-h-[5vw] md:hover:overflow-y-scroll">A Connected Bond: Daybreak and First Light</episode-name>

                    <button
                        type="button"
                        class="btn flex items-center bg-primary-600 p-0 font-bold text-white md:mt-[1vw] md:h-[3vw] md:gap-[0.5vw] md:rounded-[0.5vw]"
                    >
                        <span class="md:text-[1.1vw]">More Details</span>
                        <Chevron class="-rotate-90 md:w-[1.25vw]" />
                    </button>
                </episode-main-detail>
            </episode-detail>
        </episode-info>
    </episode-content>
</episode-container>

<style lang="scss">
    anime-title,
    episode-name {
        scrollbar-width: none;
    }
</style>
