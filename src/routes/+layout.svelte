<script lang="ts">
    import { afterNavigate, beforeNavigate } from "$app/navigation";
    import { page } from "$app/stores";
    import SearchPanel from "$components/shared/search_panel.svelte";
    // import icons
    import AnimeCore from "$icons/anime_core.svelte";
    import Explore from "$icons/explore.svelte";
    import Forum from "$icons/forum.svelte";
    import Home from "$icons/home.svelte";
    import List from "$icons/list.svelte";
    import Logo from "$icons/logo.svelte";
    import Misc from "$icons/misc.svelte";
    import Moon from "$icons/moon.svelte";
    import MoreVertical from "$icons/more_vertical.svelte";
    import Schedule from "$icons/schedule.svelte";
    import Search from "$icons/search.svelte";
    import Settings from "$icons/settings.svelte";
    import SettingsOutline from "$icons/settings_outline.svelte";
    import User from "$icons/user.svelte";
    import { navbar_middle_section_variant } from "$store/navbar";
    import { arrow, autoUpdate, computePosition, flip, offset, shift } from "@floating-ui/dom";
    import { AppShell, Avatar } from "@skeletonlabs/skeleton";
    import { Modal, modalStore } from "@skeletonlabs/skeleton";
    import type { ModalComponent, ModalSettings } from "@skeletonlabs/skeleton";
    // skeleton and floating-ui
    import { popup } from "@skeletonlabs/skeleton";
    import type { PopupSettings } from "@skeletonlabs/skeleton";
    import { storePopup } from "@skeletonlabs/skeleton";
    // This contains the bulk of Skeletons required styles:
    import "@skeletonlabs/skeleton/styles/all.css";
    // NProgress
    import NProgress from "nprogress";
    import { beforeUpdate } from "svelte";
    import type { SvelteComponentDev } from "svelte/internal";
    import { blur } from "svelte/transition";
    import voca from "voca";

    // Most of your app wide CSS should be put in this file
    import "../app.scss";
    // Custom SCSS
    import "../nprogress.scss";
    // Your custom Skeleton theme:
    import "../theme.scss";

    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    // Local
    const icon_mapping: {
        // Top,middle,bottom
        [key in "top" | "middle" | "bottom" | "profile_dropdown"]: {
            // Icon name
            [key in string]: {
                name?: string;
                icon: {
                    component: typeof SvelteComponentDev;
                    class: string;
                };
                url?: string;
                show_on_mobile?: boolean | undefined;
            };
        };
    } = {
        top: {
            search: {
                icon: {
                    component: Search,
                    class: "w-[1.25vw] text-black"
                }
            }
        },
        middle: {
            home: {
                icon: {
                    component: Home,
                    class: "w-[1.25vw] text-white"
                },
                url: "/",
                show_on_mobile: true
            },

            discover: {
                icon: {
                    component: Explore,
                    class: "w-[1.25vw] text-white"
                },
                url: undefined,
                show_on_mobile: true
            },
            list: {
                icon: {
                    component: List,
                    class: "w-[1.7vw] text-white"
                },
                url: undefined,
                show_on_mobile: false
            },
            schedule: {
                icon: {
                    component: Schedule,
                    class: "w-[1.25vw] text-white"
                },
                url: undefined,
                show_on_mobile: false
            },
            forum: {
                icon: {
                    component: Forum,
                    class: "w-[1.25vw] text-white"
                },
                url: undefined,
                show_on_mobile: true
            }
        },
        bottom: {
            settings: {
                icon: {
                    component: Settings,
                    class: "w-[1.25vw] text-white"
                },
                url: undefined
            },
            "misc.": {
                icon: {
                    component: Misc,
                    class: "w-[1.25vw] text-white"
                },
                url: undefined
            }
        },
        profile_dropdown: {
            profile: {
                name: "Profile",
                url: undefined,
                icon: {
                    component: User,
                    class: "w-[1.25vw] text-white"
                }
            },
            my_list: {
                name: "My List",
                url: undefined,
                icon: {
                    component: List,
                    class: "w-[1.5vw] text-white"
                }
            },
            theme: {
                name: "Theme",
                url: undefined,
                icon: {
                    component: Moon,
                    class: "w-[1.1vw] text-white"
                }
            },
            settings: {
                name: "Settings",
                url: undefined,
                icon: {
                    component: SettingsOutline,
                    class: "w-[1.1vw] text-white"
                }
            }
        }
    };

    // Run after navigation
    beforeNavigate(async () => {
        NProgress.start();
    });
    afterNavigate(() => {
        NProgress.done();
    });

    // Run first time
    beforeUpdate(() => {
        // Configure NProgress
        NProgress.configure({
            // Full list: https://github.com/rstacruz/nprogress#configuration
            showSpinner: false,
            minimum: 0.16
        });
    });

    let popupSettings: PopupSettings = {
        event: "click", // event
        target: "profile_dropdown" // data-popup value
    };

    // search panel //

    function show_search_modal(): void {
        const search_component: ModalComponent = { ref: SearchPanel };
        const search_modal: ModalSettings = {
            type: "component",
            component: search_component,
            backdropClasses: "!bg-surface-900/95",
            position: "items-start"
        };
        modalStore.trigger(search_modal);
    }
</script>

<div class="relative h-[100dvh]">
    <Modal />

    <AppShell>
        <svelte:fragment slot="header">
            <div class="relative flex h-[4.5rem] items-center justify-between px-[3vw] md:h-[10vh] md:py-[0.9375vw] md:pl-[2.1vw] md:pr-[3.75vw]">
                <a href="/">
                    <Logo class="w-9 md:w-[2vw]" />
                </a>

                {#if $navbar_middle_section_variant === "logo"}
                    <a
                        href="/"
                        transition:blur|local
                    >
                        <AnimeCore class="w-36 md:w-[10vw]" />
                    </a>
                {:else if $navbar_middle_section_variant === "form"}
                    <div
                        class="absolute left-1/2 transform -translate-x-1/2"
                    >
                        <a
                            href="/"
                            class="hidden md:flex"
                            transition:blur|local
                        >
                            <AnimeCore class="w-[10vw]" />
                        </a>

                        <!-- Search form for mobile device -->
                        <form class="relative flex h-12 w-[65vw] items-center md:hidden">
                            <button class="btn absolute left-4 p-0">
                                <Search class="w-5 opacity-75" />
                            </button>
                            <input
                                type="text"
                                placeholder="Search for animes, mangas..."
                                class="h-full w-full rounded-[0.4rem] border-none bg-surface-400 pl-12 text-sm font-semibold text-white shadow-lg !ring-0 placeholder:font-medium placeholder:text-surface-200"
                            />
                            <button class="btn absolute right-[3vw] top-[3vw] hidden p-0">
                                <MoreVertical class="w-[5vw] opacity-90" />
                            </button>
                        </form>
                    </div>
                {/if}

                <button
                    class="avatar"
                    use:popup={popupSettings}
                >
                    <Avatar
                        rounded="rounded-[0.4rem] md:rounded-[0.375vw]"
                        width="w-12 md:w-[3.125vw]"
                        src="https://i.postimg.cc/6pNGq1YL/345336.png"
                        initials="JD"
                    />
                </button>

                <div
                    class="w-[40vw] rounded-[1.75vw] bg-surface-400 px-[4vw] py-[4.5vw] shadow-lg shadow-surface-900/50 md:!left-[84.5vw] md:!top-[4.5vw] md:w-[13vw] md:rounded-[0.375vw] md:px-[0.75vw] md:py-[1.125vw]"
                    data-popup="profile_dropdown"
                >
                    <div class="flex items-center gap-[3vw] md:gap-[0.8vw]">
                        <Avatar
                            rounded="rounded-[1.2vw] md:rounded-[0.375vw]"
                            width="w-[8vw] md:w-[2.5vw]"
                            cursor="cursor-pointer"
                            src="https://i.postimg.cc/6pNGq1YL/345336.png"
                            initials="JD"
                        />
                        <div class="flex flex-col">
                            <span class="text-[3vw] font-semibold md:text-[0.9vw]">soraamamiya</span>
                            <span class="text-[2vw] font-medium md:text-[0.8vw]">{voca.truncate("sora_amamiya@coreproject.moe", 17)}</span>
                        </div>
                    </div>

                    <div class="mt-[3vw] md:mt-[1vw]">
                        {#each Object.entries(icon_mapping.profile_dropdown) as item}
                            {@const item_icon = item[1].icon}
                            {@const item_href = item[1].url}
                            {@const item_name = item[1].name}

                            <a
                                href={item_href}
                                class="{item_href ?? 'pointer-events-none'} unstyled"
                            >
                                <div class="grid cursor-pointer grid-cols-5 items-center rounded-[0.2vw] p-[0.5vw] py-[1.25vw] transition duration-100 md:py-[0.5vw] md:hover:bg-surface-300/20">
                                    <svelte:component
                                        this={item_icon.component}
                                        class="col-span-1 hidden md:flex {item_icon.class}"
                                    />
                                    <svelte:component
                                        this={item_icon.component}
                                        class="col-span-1 flex w-[4vw] md:hidden"
                                    />
                                    <span class="col-span-4 text-[2.7vw] font-medium text-white md:text-[1vw]">
                                        {item_name}
                                    </span>
                                </div>
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
        </svelte:fragment>
        <svelte:fragment slot="sidebarLeft">
            <div class="hidden h-full w-[6.25vw] flex-col justify-between py-[2vw] md:flex">
                <div>
                    <div class="flex flex-col items-center gap-5">
                        {#each Object.entries(icon_mapping.top) as item}
                            {@const item_icon = item[1].icon}
                            <button
                                type="button"
                                class="btn btn-icon w-[2.5vw] rounded-[0.375vw] bg-warning-400 p-0"
                                on:click={show_search_modal}
                            >
                                <svelte:component
                                    this={item_icon.component}
                                    class={item_icon.class}
                                />
                            </button>
                        {/each}
                    </div>

                    <div class="mt-[2.8125vw] flex flex-col items-center gap-[1.5vw]">
                        {#each Object.entries(icon_mapping.middle) as item}
                            {@const item_name = item[0]}
                            {@const item_icon = item[1].icon}
                            {@const item_href = item[1].url}

                            {@const component = item_icon.component}

                            {@const is_active = $page.url.pathname === item_href}

                            <a
                                href={item_href ?? "javascript:void(0)"}
                                type="button"
                                class="{item_href ?? 'pointer-events-none'} {is_active ? 'relative bg-secondary-100 before:absolute before:-left-0.5 before:z-10 before:h-[0.875vw] before:w-[0.25vw] before:rounded-lg before:bg-primary-500' : 'bg-initial'} btn btn-icon relative w-[3.375vw] rounded-[0.5vw] p-0"
                            >
                                <div class="inline-grid">
                                    {#if is_active}
                                        <div
                                            class="absolute inset-0 flex items-center justify-center"
                                            transition:blur|local
                                        >
                                            <svelte:component
                                                this={component}
                                                class="!text-black {item_icon.class}"
                                            />
                                        </div>
                                    {:else}
                                        <div
                                            class="absolute inset-0 flex flex-col items-center justify-center gap-[0.75vw]"
                                            transition:blur|local
                                        >
                                            <svelte:component
                                                this={component}
                                                class={item_icon.class}
                                            />
                                            <span class="text-[0.875vw] capitalize leading-[1.05vw]">
                                                {item_name}
                                            </span>
                                        </div>
                                    {/if}
                                </div>
                            </a>
                        {/each}
                    </div>
                </div>

                <div class="flex flex-col-reverse items-center gap-[1.5vw]">
                    {#each Object.entries(icon_mapping.bottom) as item}
                        {@const item_name = item[0]}
                        {@const item_icon = item[1].icon}
                        <button
                            type="button"
                            class="bg-initial btn btn-icon w-[3.375vw] flex-col justify-center gap-[0.75vw] p-0 text-sm"
                        >
                            <svelte:component
                                this={item_icon.component}
                                class={item_icon.class}
                            />
                            <span class="!m-0 text-[0.875vw] capitalize leading-[1.05vw]">
                                {item_name}
                            </span>
                        </button>
                    {/each}
                </div>
            </div>
        </svelte:fragment>

        <svelte:fragment slot="footer">
            <div class="flex h-20 items-center justify-center md:hidden">
                <div class="flex items-start justify-center gap-4 md:gap-[5vw]">
                    {#each Object.entries(icon_mapping.middle).filter(([_, value]) => value.show_on_mobile) as item}
                        {@const item_name = item[0]}
                        {@const item_icon = item[1].icon}
                        {@const item_href = item[1].url}

                        {@const component = item_icon.component}

                        {@const is_active = $page.url.pathname === item_href}

                        <a
                            href={item_href ?? "javascript:void(0)"}
                            type="button"
                            class="unstyled flex flex-col items-center gap-[0.5vh]"
                        >
                            <div class="{is_active ? 'bg-secondary-100' : 'bg-initial'} btn btn-icon relative h-11 w-[4.5rem] rounded-[0.75rem] p-0">
                                <div transition:blur|local>
                                    {#if is_active}
                                        <svelte:component
                                            this={component}
                                            class="w-5 text-surface-900"
                                        />
                                    {:else}
                                        <svelte:component
                                            this={component}
                                            class="w-5 text-white"
                                        />
                                    {/if}
                                </div>
                            </div>
                            <span class="text-xs font-bold capitalize text-surface-50">
                                {item_name}
                            </span>
                        </a>
                    {/each}
                </div>
            </div>
        </svelte:fragment>

        <slot />
    </AppShell>
</div>
