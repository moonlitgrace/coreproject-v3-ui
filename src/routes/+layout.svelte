<script lang="ts">
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

    import { page, navigating } from "$app/stores";

    import { beforeUpdate, type SvelteComponentDev } from "svelte/internal";

    // skeleton and floating-ui
    import { popup } from "@skeletonlabs/skeleton";
    import type { PopupSettings } from "@skeletonlabs/skeleton";
    import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
    import { storePopup } from "@skeletonlabs/skeleton";

    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    // Local
    let active_button: keyof typeof icon_mapping.top | keyof typeof icon_mapping.middle | keyof typeof icon_mapping.bottom;

    const icon_mapping: {
        top: {
            search: {
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    color: string;
                };
            };
        };
        middle: {
            home: {
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    color: string;
                };
                url: undefined | string;
                show_on_mobile: boolean;
            };

            discover: {
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    color: string;
                };
                url: undefined | string;
                show_on_mobile: boolean;
            };
            list: {
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    color: string;
                };
                url: undefined | string;
                show_on_mobile: boolean;
            };
            schedule: {
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    color: string;
                };
                url: undefined | string;
                show_on_mobile: boolean;
            };
            forum: {
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    color: string;
                };
                url: undefined | string;
                show_on_mobile: boolean;
            };
        };
        bottom: {
            settings: {
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    color: string;
                };
                url: undefined | string;
            };
            "misc.": {
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    color: string;
                };
                url: undefined | string;
            };
        };
        profile_dropdown: {
            profile: {
                name: string;
                url: undefined | string;
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    color: string;
                };
            };
            my_list: {
                name: string;
                url: undefined | string;
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    color: string;
                };
            };
            theme: {
                name: string;
                url: undefined | string;
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    color: string;
                };
            };
            settings: {
                name: string;
                url: undefined | string;
                icon: {
                    component: typeof SvelteComponentDev;
                    style: string;
                    color: string;
                };
            };
        };
    } = {
        top: {
            search: {
                icon: {
                    component: Search,
                    style: "width: 1.25vw;",
                    color: "black"
                }
            }
        },
        middle: {
            home: {
                icon: {
                    component: Home,
                    style: "width: 1.25vw;",
                    color: "white"
                },
                url: "/",
                show_on_mobile: true
            },

            discover: {
                icon: {
                    component: Explore,
                    style: "width: 1.25vw;",
                    color: "white"
                },
                url: undefined,
                show_on_mobile: true
            },
            list: {
                icon: {
                    component: List,
                    style: "width: 1.7vw",
                    color: "white"
                },
                url: undefined,
                show_on_mobile: false
            },
            schedule: {
                icon: {
                    component: Schedule,
                    style: "width: 1.25vw;",
                    color: "white"
                },
                url: undefined,
                show_on_mobile: false
            },
            forum: {
                icon: {
                    component: Forum,
                    style: "width: 1.25vw;",
                    color: "white"
                },
                url: undefined,
                show_on_mobile: true
            }
        },
        bottom: {
            settings: {
                icon: {
                    component: Settings,
                    style: "width: 1.25vw;",
                    color: "white"
                },
                url: undefined
            },
            "misc.": {
                icon: {
                    component: Misc,
                    style: "width: 1.25vw;",
                    color: "white"
                },
                url: undefined
            }
        },
        profile_dropdown: {
            profile: {
                name: "Profile",
                url: "/profile/",
                icon: {
                    component: User,
                    style: "width: 1.25vw;",
                    color: "white"
                }
            },
            my_list: {
                name: "My List",
                url: "/mylist/",
                icon: {
                    component: List,
                    style: "width: 1.5vw;",
                    color: "white"
                }
            },
            theme: {
                name: "Theme",
                url: "/theme/",
                icon: {
                    component: Moon,
                    style: "width: 1.1vw;",
                    color: "white"
                }
            },
            settings: {
                name: "Settings",
                url: "/settings/",
                icon: {
                    component: SettingsOutline,
                    style: "width: 1.1vw;",
                    color: "white"
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

    $: if ($navigating) {
        change_url();
    }
    beforeUpdate(() => {
        change_url();
    });

    let popupSettings: PopupSettings = {
        event: "click", // event
        target: "profileDropdown" // data-popup value
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

<div class="relative h-screen">
    <Modal />

    <AppShell>
        <svelte:fragment slot="header">
            <div class="relative flex h-[6vh] items-center justify-between px-[5vw] py-[10vw] md:h-[10vh] md:py-[0.9375vw] md:pl-[2.1vw] md:pr-[3.75vw]">
                <a
                    href="/"
                    class="hidden md:flex"
                >
                    <Logo style="width: 2vw;" />
                </a>

                <a
                    href="/"
                    class="hidden md:flex"
                >
                    <AnimeCore style="width: 10vw;" />
                </a>

                <!-- Search form for mobile device -->
                <form class="relative flex h-[11vw] w-[72.2vw] items-center md:hidden">
                    <button class="btn absolute left-[3vw] p-0">
                        <Search style="width: 5vw; opacity: 0.75;" />
                    </button>
                    <!-- svelte-ignore a11y-autofocus -->
                    <input
                        type="text"
                        placeholder="Search for animes, mangas, etc..."
                        autofocus
                        class="h-full w-full rounded-[1.66vw] border-none bg-surface-400 px-[10.5vw] text-[3.33vw] font-semibold text-white shadow-lg !ring-0 placeholder:font-medium placeholder:text-surface-50"
                    />
                    <button class="btn absolute right-[3vw] top-[3vw] p-0">
                        <MoreVertical style="width: 5vw; opacity: 0.9;" />
                    </button>
                </form>

                <button
                    class="avatar"
                    use:popup={popupSettings}
                >
                    <Avatar
                        rounded="rounded-[1.66vw] md:rounded-[0.375vw]"
                        width="w-[11vw] md:w-[3.125vw]"
                        src="https://i.postimg.cc/MKgxM4Hv/Screenshot-from-2023-04-22-16-59-33.png"
                        initials="JD"
                    />
                </button>

                <div
                    class="!left-[55vw] !top-[17.5vw] w-[40vw] rounded-[1.75vw] bg-surface-400 px-[4vw] py-[4.5vw] shadow-lg shadow-surface-900/50 md:!left-[84.5vw] md:!top-[4.5vw] md:w-[12vw] md:rounded-[0.375vw] md:px-[0.75vw] md:py-[1.125vw]"
                    data-popup="profileDropdown"
                >
                    <div class="flex gap-[3vw] md:gap-[0.8vw]">
                        <Avatar
                            rounded="rounded-[1.2vw] md:rounded-[0.375vw]"
                            width="w-[8vw] md:w-[2.5vw]"
                            cursor="cursor-pointer"
                            src="https://i.postimg.cc/MKgxM4Hv/Screenshot-from-2023-04-22-16-59-33.png"
                            initials="JD"
                        />
                        <div class="flex flex-col">
                            <span class="text-[3vw] font-semibold md:text-[0.9vw]">Username</span>
                            <span class="text-[2vw] font-medium md:text-[0.8vw]">email@domain.xyz</span>
                        </div>
                    </div>

                    <div class="mt-[4vw] md:mt-[1vw]">
                        {#each Object.entries(icon_mapping.profile_dropdown) as item}
                            {@const item_icon = item[1].icon}
                            {@const item_url = item[1].url}
                            {@const item_name = item[1].name}

                            <a
                                href={item_url}
                                style="text-decoration: none;"
                            >
                                <div class="grid cursor-pointer grid-cols-5 items-center rounded-[0.2vw] p-[0.5vw] py-[1.25vw] transition duration-100 hover:bg-surface-300/20 md:py-[0.5vw]">
                                    <svelte:component
                                        this={item_icon.component}
                                        style={item_icon.style}
                                        color={item_icon.color}
                                        class="col-span-1"
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
                                    style={item_icon.style}
                                    color={item_icon.color}
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
                                class="{is_active ? 'relative bg-secondary-100 before:absolute before:-left-0.5 before:z-10 before:h-[0.875vw] before:w-[0.25vw] before:rounded-lg before:bg-primary-500' : 'bg-initial'} btn btn-icon relative w-[3.375vw] rounded-[0.5vw] p-0"
                            >
                                <div class="inline-grid">
                                    {#if !is_active}
                                        <div
                                            class="absolute inset-0 flex flex-col items-center justify-center gap-[0.75vw]"
                                            transition:blur|local
                                        >
                                            <svelte:component
                                                this={component}
                                                style={item_icon.style}
                                                color={item_icon.color}
                                            />
                                            <span class="text-[0.875vw] capitalize leading-[1.05vw]">
                                                {item_name}
                                            </span>
                                        </div>
                                    {:else}
                                        <div
                                            class="absolute inset-0 flex items-center justify-center"
                                            transition:blur|local
                                        >
                                            <svelte:component
                                                this={component}
                                                style={item_icon.style}
                                                color="black"
                                            />
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
                                style={item_icon.style}
                                color={item_icon.color}
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
            <div class="flex items-center justify-center h-max px-[8.8vw] md:hidden">
                <div class="flex h-[4.5rem] w-full items-start justify-center gap-[7vw]">
                    {#each Object.entries(icon_mapping.middle).filter(([key, value]) => value.show_on_mobile) as item}
                        {@const item_name = item[0]}
                        {@const item_icon = item[1].icon}
                        {@const item_href = item[1].url}

                        {@const component = item_icon.component}

                        {@const is_active = active_button === item_name}

                        <a
                            href={item_href ?? "javascript:void(0)"}
                            type="button"
                            style="text-decoration: none;"
                            class="flex w-[15vw] flex-col items-center gap-[3vw]"
                        >
                            <div class="{is_active ? 'bg-secondary-100' : 'bg-initial'} btn btn-icon relative h-full w-full rounded-[2.5vw] p-0 h-[2.5rem]">
                                <div transition:blur|local>
                                    {#if !is_active}
                                        <svelte:component
                                            this={component}
                                            style="width: 5vw;"
                                            color={item_icon.color}
                                        />
                                    {:else}
                                        <svelte:component
                                            this={component}
                                            style="width: 5vw;"
                                            color="black"
                                        />
                                    {/if}
                                </div>
                            </div>
                            <span class="text-[3vw] font-bold capitalize leading-[1.05vw] text-surface-50">
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
