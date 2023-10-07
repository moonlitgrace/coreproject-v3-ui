<script lang="ts">
    import HoverExpand from "$components/shared/hover_expand.svelte";
    import VercelHover from "$components/shared/vercel_hover.svelte";
    import List from "$icons/shapes/list.svelte";
    import Moon from "$icons/shapes/moon.svelte";
    import SettingsOutline from "$icons/shapes/settings_outline.svelte";
    import User from "$icons/shapes/user.svelte";
    import type { SvelteComponent } from "svelte";

    // Icons mapping
    const dropdown_icons: {
        [key in string]: {
            name: string;
            icon: {
                component: typeof SvelteComponent<{}>;
                class: string;
            };
            url: string | undefined;
            show_on_mobile?: boolean | undefined;
        };
    } = {
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
    };
</script>

<div class="w-48 md:w-[14vw] rounded-lg bg-gradient-to-tr to-surface-400 from-surface-500 p-4 shadow-lg shadow-surface-900/50 md:rounded-[0.5vw] md:p-0">
    <div class="flex flex-col md:gap-[0.25vw] md:p-[1.15vw] md:pb-0">
        <HoverExpand
            class="capitalize text-base font-semibold scrollbar-none break-words md:text-[1vw] md:leading-none"
            height="md:max-h-[1vw] md:hover:max-h-[10vw]"
        >
            soraamamiya#0001
        </HoverExpand>
        <HoverExpand
            class="text-xs text-surface-100 break-words md:text-[0.8vw] md:leading-none"
            height="md:max-h-[0.85vw] md:hover:max-h-[10vw]"
        >
            sora@coreproject.moe
        </HoverExpand>
    </div>

    <hr class="divider md:mb-[0.25vw] md:mt-[0.75vw] border-surface-50/20" />

    <div class="mt-3 md:mt-0 md:p-[0.5vw]">
        <VercelHover
            direction="vertical"
            glider_container_class="flex flex-col relative"
            active_element_class="rounded-[0.35vw] bg-primary-500"
            let:handle_mouseenter
            let:handle_mouseleave
        >
            {#each Object.entries(dropdown_icons) as item}
                {@const item_icon = item[1].icon}
                {@const item_href = item[1].url}
                {@const item_name = item[1].name}

                <a
                    on:mouseenter={handle_mouseenter}
                    on:mouseleave={handle_mouseleave}
                    href={item_href}
                    class="z-10"
                >
                    <div class="flex cursor-pointer items-center gap-2 rounded-[0.35vw] p-[0.4rem] transition-colors md:gap-[0.75vw] md:p-[0.5vw] md:py-[0.5vw] md:text-surface-50 md:hover:text-white">
                        <svelte:component
                            this={item_icon.component}
                            class="hidden opacity-75 basis-[10%] md:flex {item_icon.class}"
                        />
                        <svelte:component
                            this={item_icon.component}
                            class="flex w-5 opacity-75 basis-[12%] md:hidden"
                        />
                        <span class=" text-xs font-medium md:text-[0.9vw]">
                            {item_name}
                        </span>
                    </div>
                </a>
            {/each}
        </VercelHover>
    </div>
</div>
