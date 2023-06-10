<script lang="ts">
    import { Avatar } from "@skeletonlabs/skeleton";
    import type { SvelteComponentDev } from "svelte/internal";
    import voca from "voca";

    export let dropdown_icons: {
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
</script>

<div class="rounded-lg bg-surface-400 p-4 shadow-lg shadow-surface-900/50 md:rounded-[0.5vw] md:px-[0.75vw] md:py-[1.125vw]">
    <div class="flex items-center gap-[3vw] md:gap-[0.8vw]">
        <Avatar
            rounded="rounded-[1.2vw] md:rounded-[0.375vw]"
            width="w-10 md:w-[2.5vw]"
            src="https://i.postimg.cc/6pNGq1YL/345336.png"
            initials="JD"
        />
        <div class="flex flex-col md:gap-[0.5vw]">
            <span class="text-base font-semibold md:text-[1vw] md:leading-none">soraamamiya</span>
            <span class="text-xs font-medium md:text-[0.8vw] md:leading-none">{voca.truncate("sora_amamiya@coreproject.moe", 17)}</span>
        </div>
    </div>

    <div class="mt-3 md:mt-[1vw]">
        {#each Object.entries(dropdown_icons) as item}
            {@const item_icon = item[1].icon}
            {@const item_href = item[1].url}
            {@const item_name = item[1].name}

            <a
                href={item_href}
                class="{item_href ?? 'pointer-events-none'} unstyled"
            >
                <div class="flex cursor-pointer items-center gap-2 rounded-[0.2vw] p-[0.4rem] transition duration-100 md:gap-[0.75vw] md:p-[0.5vw] md:py-[0.5vw] md:hover:bg-surface-300/20">
                    <svelte:component
                        this={item_icon.component}
                        class="hidden basis-[12%] md:flex {item_icon.class}"
                    />
                    <svelte:component
                        this={item_icon.component}
                        class="flex w-5 basis-[12%] md:hidden"
                    />
                    <span class=" text-xs font-medium text-white md:text-[0.9vw]">
                        {item_name}
                    </span>
                </div>
            </a>
        {/each}
    </div>
</div>
