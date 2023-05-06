<script lang="ts">
    // NProgress
    import NProgress from "nprogress";
    // NProgress css
    import "nprogress/nprogress.css";

    import voca from 'voca';
    // Your custom Skeleton theme:
    import "../theme.scss";

    // This contains the bulk of Skeletons required styles:
    import "@skeletonlabs/skeleton/styles/all.css";
    // Most of your app wide CSS should be put in this file
    import "../app.scss";
    import { AppShell, Avatar } from "@skeletonlabs/skeleton";
    import { Modal, modalStore } from "@skeletonlabs/skeleton";
    import type { ModalSettings, ModalComponent } from "@skeletonlabs/skeleton";

    import { blur } from "svelte/transition";

    import SearchPanel from "$components/shared/search_panel.svelte";

    // import icons
    import AnimeCore from "$icons/anime_core.svelte";
    import Logo from "$icons/logo.svelte";
    import Search from "$icons/search.svelte";
    import Home from "$icons/home.svelte";
    import Explore from "$icons/explore.svelte";
    import List from "$icons/list.svelte";
    import Schedule from "$icons/schedule.svelte";
    import Forum from "$icons/forum.svelte";
    import Settings from "$icons/settings.svelte";
    import Misc from "$icons/misc.svelte";
    import User from "$icons/user.svelte";
    import Moon from "$icons/moon.svelte";
    import SettingsOutline from "$icons/settings_outline.svelte";
    import MoreVertical from "$icons/more_vertical.svelte";

    import { page } from "$app/stores";

    import type { SvelteComponentDev } from "svelte/internal";
    import { beforeUpdate } from "svelte";
    import { beforeNavigate, afterNavigate } from "$app/navigation";

    // skeleton and floating-ui
    import { popup } from "@skeletonlabs/skeleton";
    import type { PopupSettings } from "@skeletonlabs/skeleton";
    import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
    import { storePopup } from "@skeletonlabs/skeleton";

    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    // Configure NProgress
    NProgress.configure({
        // Full list: https://github.com/rstacruz/nprogress#configuration
        showSpinner: false,
        minimum: 0.16
    });

    // Local
    let active_button: keyof typeof icon_mapping.top | keyof typeof icon_mapping.middle | keyof typeof icon_mapping.bottom;
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
                },
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

    // Activate button based on Urls
    function change_url() {
        Object.values(icon_mapping).forEach((_) => {
            Object.entries(_).forEach((item) => {
                const button_name = item[0] as typeof active_button;
                const internal_object = item[1];

                if ("url" in internal_object) {
                    const url = internal_object.url as String;
                    if (url === $page.url.pathname) {
                        active_button = button_name;
                    }
                }
            });
        });
    }
    // Run after navigation
    beforeNavigate(async () => {
        change_url();
        NProgress.start();
    });
    afterNavigate(() => {
        NProgress.done();
    });
    // Run first time
    beforeUpdate(() => {
        change_url();
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

<div class="relative h-[100dvh] w-screen sm:h-screen">
    <Modal />

    <AppShell>
        <svelte:fragment slot="header">
            <div class="relative flex h-[6vh] items-center justify-between px-[3vw] py-[8vw] sm:h-[10vh] sm:py-[0.9375vw] sm:pl-[2.1vw] sm:pr-[3.75vw]">
                <a href="/">
                    <Logo class="w-[7vw] sm:w-[2vw]" />
                </a>

                <a
                    href="/"
                    class="hidden sm:flex"
                >
                    <AnimeCore class="w-[10vw]" />
                </a>

                <!-- Search form for mobile device -->
                <form class="relative flex h-[11vw] w-[65vw] items-center sm:hidden">
                    <button class="btn absolute left-[3vw] p-0">
                        <Search class="w-[5vw] opacity-75" />
                    </button>
                    <input
                        type="text"
                        placeholder="Search for animes, mangas..."
                        class="h-full w-full rounded-[1.66vw] border-none bg-surface-400 px-[10.5vw] text-[3.33vw] font-semibold text-white shadow-lg !ring-0 placeholder:font-medium placeholder:text-surface-50"
                    />
                    <button class="btn absolute right-[3vw] top-[3vw] hidden p-0">
                        <MoreVertical class="w-[5vw] opacity-90" />
                    </button>
                </form>

                <button
                    class="avatar"
                    use:popup={popupSettings}
                >
                    <Avatar
                        rounded="rounded-[1.66vw] sm:rounded-[0.375vw]"
                        width="w-[11vw] sm:w-[3.125vw]"
                        src="https://i.postimg.cc/6pNGq1YL/345336.png"
                        initials="JD"
                    />
                </button>

                <div
                    class="!left-[57.5vw] !top-[17.5vw] w-[40vw] rounded-[1.75vw] bg-surface-400 px-[4vw] py-[4.5vw] shadow-lg shadow-surface-900/50 sm:!left-[84.5vw] sm:!top-[4.5vw] sm:w-[13vw] sm:rounded-[0.375vw] sm:px-[0.75vw] sm:py-[1.125vw]"
                    data-popup="profile_dropdown"
                >
                    <div class="flex items-center gap-[3vw] sm:gap-[0.8vw]">
                        <Avatar
                            rounded="rounded-[1.2vw] sm:rounded-[0.375vw]"
                            width="w-[8vw] sm:w-[2.5vw]"
                            cursor="cursor-pointer"
                            src="https://i.postimg.cc/6pNGq1YL/345336.png"
                            initials="JD"
                        />
                        <div class="flex flex-col">
                            <span class="text-[3vw] font-semibold sm:text-[0.9vw]">soraamamiya</span>
                            <span class="text-[2vw] font-medium sm:text-[0.8vw]">{voca.truncate("sora_amamiya@coreproject.moe", 17)}</span>
                        </div>
                    </div>

                    <div class="mt-[3vw] sm:mt-[1vw]">
                        {#each Object.entries(icon_mapping.profile_dropdown) as item}
                            {@const item_icon = item[1].icon}
                            {@const item_href = item[1].url}
                            {@const item_name = item[1].name}

                            <a
                                href={item_href}
                                class="{item_href ?? 'pointer-events-none'} unstyled"
                            >
                                <div class="grid cursor-pointer grid-cols-5 items-center rounded-[0.2vw] p-[0.5vw] py-[1.25vw] transition duration-100 sm:py-[0.5vw] sm:hover:bg-surface-300/20">
                                    <svelte:component
                                        this={item_icon.component}
                                        class="col-span-1 hidden sm:flex {item_icon.class}"
                                    />
                                    <svelte:component
                                        this={item_icon.component}
                                        class="col-span-1 flex w-[4vw] sm:hidden"
                                    />
                                    <span class="col-span-4 text-[2.7vw] font-medium text-white sm:text-[1vw]">
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
            <div class="hidden h-full w-[6.25vw] flex-col justify-between py-[2vw] sm:flex">
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

                            {@const is_active = active_button === item_name}

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
            <div class="flex h-[17vw] items-center justify-center sm:hidden">
                <div class="flex items-start justify-center gap-[5vw]">
                    {#each Object.entries(icon_mapping.middle).filter(([_, value]) => value.show_on_mobile) as item}
                        {@const item_name = item[0]}
                        {@const item_icon = item[1].icon}
                        {@const item_href = item[1].url}

                        {@const component = item_icon.component}

                        {@const is_active = active_button === item_name}

                        <a
                            href={item_href ?? "javascript:void(0)"}
                            type="button"
                            class="unstyled flex flex-col items-center gap-[2.5vw]"
                        >
                            <div class="{is_active ? 'bg-secondary-100' : 'bg-initial'} btn btn-icon relative h-[9vw] w-[15vw] rounded-[2.5vw] p-0">
                                <div transition:blur|local>
                                    {#if is_active}
                                        <svelte:component
                                            this={component}
                                            class="w-[4.75vw] text-surface-900"
                                        />
                                    {:else}
                                        <svelte:component
                                            this={component}
                                            class="w-[4.5vw] text-white"
                                        />
                                    {/if}
                                </div>
                            </div>
                            <span class="text-[2.75vw] font-bold capitalize leading-[1.05vw] text-surface-50">
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
