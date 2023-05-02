<script lang="ts">
    /* Mock datas */
    import { latest_animes } from "$data/mock/latest_animes";
    import { my_list } from "$data/mock/my_list";

    import { swipe } from "svelte-gestures";
    import { format_date } from "$functions/format_date";
    import voca from "voca";
    import { latest_episodes } from "$data/mock/latest_episodes";
    import _ from "lodash";
    import { Timer as EasyTimer } from "easytimer.js";
    import { onDestroy, onMount } from "svelte";
    import { timer as timerStore } from "$store/timer";
    import { blur } from "svelte/transition";
    import { tweened } from "svelte/motion";
    import type { SvelteComponentDev } from "svelte/internal";

    // skeleton and floating-ui
    import { popup } from "@skeletonlabs/skeleton";
    import type { PopupSettings } from "@skeletonlabs/skeleton";
    import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
    import { storePopup } from "@skeletonlabs/skeleton";

    // icons
    import PlayCircle from "$icons/play_circle.svelte";
    import Info from "$icons/info.svelte";
    import Edit from "$icons/edit.svelte";
    import Chevron from "$icons/chevron.svelte";
    import SettingsOutline from "$icons/settings_outline.svelte";
    import Expand from "$icons/expand.svelte";
    import ScrollArea from "$components/shared/scroll_area.svelte";
    import Play from "$icons/play.svelte";
    import Forum from "$icons/forum.svelte";
    import Recent from "$icons/recent.svelte";
    import Notifications from "$icons/notifications.svelte";
    import Language from "$icons/language.svelte";
    import Preference from "$icons/preference.svelte";
    import Moon from "$icons/moon.svelte";
    import CoreProject from "$icons/core_project.svelte";
    import ArrowUpRight from "$icons/arrow_up_right.svelte";
    import Circle from "$icons/circle.svelte";

    /* Slider codes */
    let main_hero_slide_active_index = 0;

    const add_one_to_main_hero_slide_active_index = () => {
        if (main_hero_slide_active_index + 1 === latest_animes.length) {
            main_hero_slide_active_index = 0;
            return;
        }
        main_hero_slide_active_index += 1;
    };

    const minus_one_to_main_hero_slide_active_index = () => {
        if (main_hero_slide_active_index === 0) {
            main_hero_slide_active_index = latest_animes.length - 1;
            return;
        }
        main_hero_slide_active_index -= 1;
    };

    const swipe_handler = (event: CustomEvent) => {
        const direction = event.detail.direction;
        timer.reset();
        if (direction === "left") {
            add_one_to_main_hero_slide_active_index();
        } else if (direction === "right") {
            minus_one_to_main_hero_slide_active_index();
        }
    };

    // Progress bar code //
    const slider_delay = 10;
    let progress_value = 0;

    let tweened_progress_value = tweened(progress_value);
    $: tweened_progress_value.set(progress_value);

    let timer = new EasyTimer({
        target: {
            seconds: slider_delay
        },
        precision: "secondTenths"
    });

    timer.on("targetAchieved", () => {
        // change slider
        add_one_to_main_hero_slide_active_index();
        timer.reset();
    });

    timer.on("secondTenthsUpdated", () => {
        const time = timer.getTotalTimeValues().secondTenths;
        const value = (100 / slider_delay) * (time / 10);
        progress_value = value;
    });

    $: {
        switch ($timerStore) {
            case "start":
                timer?.start();
                break;
            case "pause":
                timer?.pause();
                break;
            case "reset":
                timer?.reset();
                timer?.start();
                break;
        }
    }

    onMount(() => {
        $timerStore = "start";
    });
    onDestroy(() => {
        timer.reset();
        timer.stop();
    });

    /* slide buttons colors */
    let slide_buttons = [
        { background: "bg-error-400", border: "border-error-400" },
        { background: "bg-white", border: "border-white" },
        { background: "bg-surface-50", border: "border-surface-50" },
        { background: "bg-warning-400", border: "border-warning-400" },
        { background: "bg-primary-300", border: "border-primary-300" },
        { background: "bg-error-300", border: "border-error-300" }
    ];

    /* My list popups */
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

    let popupSettings: PopupSettings = {
        event: "hover", // event
        target: "my_list_popup" // data-popup value
    };

    /* Icons */
    const icon_mapping: {
        left: {
            forums: {
                title: string;
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    class: string;
                };
            };
            last_watched: {
                title: string;
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    class: string;
                };
            };
            notifications: {
                title: string;
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    class: string;
                };
            };
        };
        bottom: {
            language: {
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    class: string;
                };
            };
            preferences: {
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    class: string;
                };
            };
            theme: {
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    class: string;
                };
            };
            settings: {
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    class: string;
                };
            };
        };
    } = {
        left: {
            forums: {
                title: "Forums",
                icon: {
                    component: Forum,
                    style: "width: 1.25vw;",
                    class: "text-surface-900"
                }
            },
            last_watched: {
                title: "Last watched anime",
                icon: {
                    component: Recent,
                    style: "width: 1.25vw;",
                    class: "text-surface-900"
                }
            },
            notifications: {
                title: "Notifications",
                icon: {
                    component: Notifications,
                    style: "width: 1.25vw;",
                    class: "text-surface-900"
                }
            }
        },
        bottom: {
            language: {
                icon: {
                    component: Language,
                    style: "width: 1.25vw;",
                    class: "text-surface-900"
                }
            },
            preferences: {
                icon: {
                    component: Preference,
                    style: "width: 1.25vw;",
                    class: "text-surface-900"
                }
            },
            theme: {
                icon: {
                    component: Moon,
                    style: "width: 1.25vw;",
                    class: "text-surface-900"
                }
            },
            settings: {
                icon: {
                    component: SettingsOutline,
                    style: "width: 1.25vw;",
                    class: "text-surface-900"
                }
            }
        }
    };
</script>

<svelte:window
    on:focus={() => {
        $timerStore = "start";
    }}
    on:blur={() => {
        $timerStore = "pause";
    }}
/>

<svelte:head>
    <title>AnimeCore - A modern anime streaming site</title>
</svelte:head>

<div class="px-[3vw] sm:p-[1.25vw] sm:pr-[3.75vw]">
    <div class="flex justify-between">
        <latest-animes class="h-[55vw] sm:h-[27.875vw] w-full sm:w-[42.1875vw]">
            <div
                use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: "pan-y" }}
                on:swipe={swipe_handler}
                class="relative inline-grid h-full w-full"
            >
                {#each latest_animes as anime, index}
                    {#if index === main_hero_slide_active_index}
                        <div
                            class="relative flex h-full w-full items-center rounded-t-[2vw] sm:rounded-t-[0.875vw] bg-cover bg-center"
                            style="
								background-image: url('{anime.cover ?? ''}');
								grid-area: 1 / 1 / 1000 / 1;
							"
                            transition:blur|local
                            on:mouseenter={() => {
                                $timerStore = "pause";
                            }}
                            on:mouseleave={() => {
                                $timerStore = "start";
                            }}
                            on:touchstart={() => {
                                $timerStore = "pause";
                            }}
                            on:touchend={() => {
                                $timerStore = "start";
                            }}
                        >
                            <div class="gradient absolute h-full w-full bg-gradient-to-t from-surface-900/95 to-surface-900/25" />
                            <div class="absolute bottom-0 px-[3.75vw] py-[2.625vw]">
                                <span class="text-[2vw] font-bold leading-[2.375vw]">
                                    {anime.name}
                                </span>
                                <p class="flex flex-wrap items-center gap-2 pt-[0.5vw]">
                                    <span class="text-[0.9375vw] font-semibold leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']">
                                        {anime.type}
                                    </span>
                                    <span class="text-[0.9375vw] font-semibold leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']">
                                        {anime.episodes_count} eps
                                    </span>
                                    <span class="text-[0.9375vw] font-semibold leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']">Completed</span>
                                    <span class="text-[0.9375vw] font-semibold capitalize leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']">
                                        {new format_date(anime.aired_from).format_to_season}
                                    </span>
                                    <span class="text-[0.9375vw] font-semibold leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']">
                                        {anime.studios[0]}
                                    </span>
                                </p>

                                <p class="mt-[0.875vw] !text-[0.85vw] !leading-[1vw] text-surface-50/75">
                                    {voca.truncate(anime.synopsis, 400)}
                                </p>

                                <div class="mt-[2.625vw] flex gap-[1vw]">
                                    <button class="btn btn-icon h-[3.125vw] w-[5.4375vw] gap-[0.625vw] rounded-[0.625vw] bg-warning-400 text-[0.875vw] font-bold text-surface-900">
                                        <PlayCircle
                                            style="width: 1.25vw;"
                                            class="text-surface-900"
                                        />
                                        Ep 1
                                    </button>

                                    <button class="btn btn-icon h-[3.125vw] w-[6.5vw] gap-[0.625vw] rounded-[0.375vw] border-[0.2vw] border-surface-50/50 bg-surface-900 text-[0.875vw] font-bold text-surface-50">
                                        <Info
                                            style="width: 1.25vw;"
                                            class="text-surface-50"
                                        />
                                        Details
                                    </button>

                                    <button class="btn btn-icon h-[3.125vw] w-[3.125vw] gap-[0.625vw] rounded-[0.375vw] border-[0.2vw] border-surface-50/50 bg-surface-900 text-[0.875vw] font-bold text-surface-50">
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
                    <div
                        class="h-[0.15vw] {slide_buttons[main_hero_slide_active_index].background}"
                        style="width: {$tweened_progress_value}%;"
                    />
                </div>

                <button
                    class="btn btn-icon absolute -left-[1vw] top-[12vw] z-20 h-[2.25vw] w-[2.25vw] rounded-[0.375vw] bg-secondary-800"
                    on:click={() => {
                        timer?.reset();
                        timer?.start();
                        minus_one_to_main_hero_slide_active_index();
                    }}
                >
                    <Chevron
                        style="width: 1.25vw;"
                        color="text-white"
                        class="rotate-90"
                    />
                </button>
                <button
                    class="btn btn-icon absolute -right-[1vw] top-[12vw] z-20 h-[2.25vw] w-[2.25vw] rounded-[0.375vw] bg-secondary-800"
                    on:click={() => {
                        timer?.reset();
                        timer?.start();
                        add_one_to_main_hero_slide_active_index();
                    }}
                >
                    <Chevron
                        style="width: 1.25vw;"
                        color="text-white"
                        class="-rotate-90"
                    />
                </button>

                <div class="mt-[1.25vw] flex items-center gap-[0.9375vw]">
                    {#each latest_animes as _, index}
                        <button
                            class="h-[0.625vw] w-[6.25vw] rounded-[0.1875vw] border-[0.2vw] {slide_buttons[index].border} transition duration-300 hover:border-surface-50/50 {index === main_hero_slide_active_index ? slide_buttons[index].background : ''}"
                            on:click={() => {
                                timer?.reset();
                                timer?.start();
                                main_hero_slide_active_index = index;
                            }}
                        />
                    {/each}
                </div>
            </div>
        </latest-animes>

        <latest-episodes class="w-[21.5625vw] hidden sm:block">
            <div class="flex items-center gap-[0.625vw]">
                <span class="text-[1.25vw] font-bold">Latest Episodes</span>
                <button class="btn btn-icon h-[1.7vw] w-[1.7vw] rounded-[0.3vw] bg-surface-400">
                    <SettingsOutline style="width: 0.8vw;" />
                </button>
                <button class="btn btn-icon h-[1.7vw] w-[6vw] rounded-[0.3vw] bg-surface-400 text-[0.9vw] font-semibold">
                    <Expand style="width: 0.8vw;" />
                    <span>Expand</span>
                </button>
            </div>

            <ScrollArea
                gradientMask
                offsetScrollbar
                parentClass="mt-[1.5vw] max-h-[21.5625vw]"
                class="flex flex-col gap-[1vw]"
            >
                {#each latest_episodes as anime}
                    <div
                        class="relative flex h-[5vw] items-center rounded-[0.75vw] bg-cover bg-center"
                        style="background-image: url({anime.cover ?? ''})"
                    >
                        <div class="gradient absolute h-full w-full bg-gradient-to-tr from-surface-900 to-surface-900/0" />
                        <div class="absolute h-full w-full">
                            <div class="flex items-center justify-between p-[1.3125vw]">
                                <div class="flex flex-col gap-[0.4vw]">
                                    <span class="text-[1vw] font-semibold leading-[1.1875vw] text-white">
                                        {anime.name}
                                    </span>
                                    <div class="flex items-center gap-[0.5vw]">
                                        <span class="text-[0.75vw] after:ml-[0.5vw] after:content-['.']">
                                            Ep {anime.episode_number < 10 ? "0" + anime.episode_number : anime.episode_number}
                                        </span>
                                        <span class="text-[0.75vw]">
                                            {new format_date(anime.release_date).format_to_time_from_now}
                                        </span>
                                    </div>
                                </div>
                                <button class="btn btn-icon h-[2.5vw] w-[2.5vw] rounded-full bg-warning-400 text-surface-900">
                                    <Play style="width: 1.25vw;" />
                                </button>
                            </div>
                        </div>
                    </div>
                {/each}
            </ScrollArea>

            <div class="mt-[1vw] flex items-start justify-between gap-[2vw] pr-[0.75vw]">
                <span class="text-[0.75vw] font-semibold">showing recently aired episodes from your Anime List</span>
                <button class="btn p-0 text-[0.75vw] font-semibold text-warning-400">Change to All</button>
            </div>
        </latest-episodes>

        <navigation-card
            class="relative hidden sm:block mt-[3.4vw] h-[24.1325vw] w-[16.625vw] rounded-[0.875vw] bg-cover bg-center"
            style="background-image: url(https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDEzMzE1NzI3MzA0MzI2/animes-like-kono-subarashii-sekai-ni-shukufuku-wo.jpg)"
        >
            <div class="gradient absolute h-full w-full bg-gradient-to-t from-surface-900/95 to-surface-900/25" />
            <div class="gradient absolute h-full w-full bg-gradient-to-r from-surface-900/50 to-surface-900/25" />
            <div class="absolute px-[1.875vw] pt-[2vw]">
                <div class="flex flex-col gap-[0.2w]">
                    <span class="text-[1.5vw] font-bold">Welcome</span>
                    <span class="text-[0.875vw] font-semibold">Jump quickly into</span>
                </div>

                <div class="mt-[1vw] flex flex-col gap-[0.625vw]">
                    {#each Object.entries(icon_mapping.left) as item}
                        {@const item_title = item[1].title}
                        {@const item_icon = item[1].icon}

                        <div class="flex items-center gap-[1vw]">
                            <button class="btn h-[2.5vw] w-[2.5vw] rounded-[0.375vw] bg-surface-50 p-0">
                                <svelte:component
                                    this={item_icon.component}
                                    style={item_icon.style}
                                    class={item_icon.class}
                                />
                            </button>
                            <span class="text-[1vw] font-bold">{item_title}</span>
                        </div>
                    {/each}
                </div>

                <div class="mt-[0.4vw]">
                    <span class="text-[0.9vw] font-semibold">More</span>
                    <div class="mt-[0.75vw] flex gap-[0.9375vw]">
                        {#each Object.entries(icon_mapping.bottom) as item}
                            {@const item_icon = item[1].icon}

                            <button class="btn h-[2.5vw] w-[2.5vw] rounded-[0.375vw] bg-surface-50 p-0">
                                <svelte:component
                                    this={item_icon.component}
                                    style={item_icon.style}
                                    class={item_icon.class}
                                />
                            </button>
                        {/each}
                    </div>
                </div>

                <div class="mt-[1vw] grid place-items-center">
                    <CoreProject style="width: 6.375vw;" />
                </div>
            </div>
        </navigation-card>
    </div>

    <my-list>
        <div class="mt-[2.1875vw] h-20 w-[68.125vw]">
            <div class="flex items-center gap-[0.625vw]">
                <span class="text-[1.25vw] font-bold">My List</span>
                <button class="btn btn-icon h-[1.7vw] w-[1.7vw] rounded-[0.3vw] bg-surface-400">
                    <SettingsOutline style="width: 0.9vw;" />
                </button>
            </div>

            <div class="mt-[0.5vw] flex items-center justify-between">
                <span class="text-[1vw] font-semibold text-surface-50">
                    {my_list.length} anime in Watching
                </span>

                <div class="flex items-center gap-[1vw]">
                    <button class="btn btn-icon h-[2.25vw] w-[6.625vw] gap-[0.625vw] rounded-[0.375vw] bg-surface-400 p-0 text-[0.875vw] font-semibold">
                        Watching
                        <Chevron style="width: 1vw;" />
                    </button>
                    <button class="btn btn-icon h-[2.25vw] w-[5.625vw] gap-[0.625vw] rounded-[0.375vw] bg-surface-400 p-0 text-[0.875vw] font-semibold">
                        Full List
                        <ArrowUpRight style="width: 1vw;" />
                    </button>
                </div>
            </div>

            <div class="relative mb-[2vw] mt-[1.5vw] grid grid-cols-7 gap-[1.5625vw]">
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
                        }}
                        class="group"
                        use:popup={popupSettings}
                    >
                        <div
                            class="relative col-span-1 flex h-[12.5vw] w-full items-center rounded-[0.875vw] bg-cover bg-center"
                            style="background-image: url({anime.cover});"
                        >
                            <div class="gradient absolute h-full w-full bg-gradient-to-t from-surface-900 to-surface-900/25 transition duration-300 group-hover:to-surface-900/50" />
                            <div class="absolute inset-0 grid w-full grid-cols-1 place-items-center transition duration-300 group-hover:opacity-0">
                                <span class="text-center text-[1vw] font-semibold text-white">
                                    {anime.name}
                                </span>
                                <span class="absolute bottom-[1vw] text-center text-[1vw] font-medium text-surface-200">
                                    {anime.current_episode}/{anime.episodes_count}
                                </span>
                            </div>

                            <div class="absolute inset-0 grid w-full grid-cols-1 place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div class="flex flex-col gap-[0.5vw]">
                                    <button class="btn btn-icon h-[3.125vw] w-[5.4375vw] gap-[0.625vw] rounded-[0.625vw] bg-surface-50 text-[0.875vw] font-bold text-surface-900">
                                        <PlayCircle
                                            style="width: 1.25vw;"
                                            class="text-surface-900"
                                        />
                                        Ep {anime.current_episode}
                                    </button>

                                    <button class="btn btn-icon h-[3.125vw] w-[5.4375vw] gap-[0.625vw] rounded-[0.375vw] border-[0.2vw] border-surface-50/50 bg-surface-900 text-[0.875vw] font-bold text-surface-50">
                                        <Info
                                            style="width: 1.25vw;"
                                            class="text-surface-50"
                                        />
                                        Info
                                    </button>
                                </div>
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
                            <div class="gradient absolute h-full w-full bg-gradient-to-t from-surface-900 to-surface-900/50 transition duration-300 group-hover:to-surface-900/50" />
                            <div class="absolute flex h-full flex-col justify-end px-[1.5625vw] pb-[3vw]">
                                <span class="text-[1vw] font-semibold text-white">
                                    {voca.truncate(anime_name, 30)}
                                </span>
                                <span class="text-[0.75vw] font-semibold uppercase text-surface-50">
                                    {voca.truncate(anime_name, 50)}
                                </span>

                                <span class="mt-[0.75vw] text-[0.75vw] font-medium leading-[1vw] text-surface-50">
                                    {voca.truncate(anime_synopsis, 130)}
                                </span>

                                <div class="mt-[0.5vw] flex gap-[1vw]">
                                    {#each anime_genres as genre}
                                        <span class="h-[1.25vw] rounded-[0.25vw] bg-secondary-800 px-[0.625vw] py-[0.25vw] text-[0.625vw] leading-[0.75vw]">
                                            {genre}
                                        </span>
                                    {/each}
                                </div>

                                <div class="mt-[0.45vw] flex items-center gap-[0.5vw] text-[0.75vw]">
                                    <span>{anime_type}</span>
                                    <Circle
                                        style="width: 0.2vw;"
                                        class="text-surface-50"
                                    />
                                    <span class="capitalize">
                                        {new format_date(anime_release_date).format_to_season}
                                    </span>
                                    <span>{anime_episodes_count} episodes</span>
                                </div>

                                <div class="mt-[0.1vw] flex items-center gap-[0.5vw] text-[0.75vw]">
                                    <span>
                                        69% <span class="text-surface-200">[7852 ratings]</span>
                                    </span>
                                    <Circle
                                        style="width: 0.2vw;"
                                        class="text-surface-50"
                                    />
                                    <span>{anime_studio_name}</span>
                                </div>
                            </div>

                            <div class="absolute bottom-0 flex h-6 w-full items-center justify-center gap-[0.5vw] bg-surface-50 text-[0.9vw] font-semibold text-surface-900">
                                <span>Watching</span>
                                <Circle
                                    style="width: 0.2vw;"
                                    class="text-surface-900"
                                />
                                <span>
                                    {anime_current_episode}/{anime_episodes_count}
                                </span>
                            </div>
                        </div>
                        <div class="arrow bg-surface-50" />
                    </div>
                {/each}
            </div>
        </div>
    </my-list>
</div>
