<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { blur } from "svelte/transition";

    /* Icons */
    import CoreProject from "$icons/core_project.svelte";
    import Refresh from "$icons/refresh.svelte";

    let choice_number: number;
    let choices: Array<{
        type: string;
        name: string;
        image: string;
        credit?: string;
    }> = [
        {
            type: "anime",
            name: "Demon Slayer",
            image: "https://cdn-cfmok.nitrocdn.com/juJsjTwdTqWjkJBaBrLnvLeovPsDevAD/assets/images/optimized/rev-37d38d6/wp-content/uploads/1587837891_336_Demon-Slayer-Kimetsu-No-Yaiba-4K-Wallpapers-2020.jpg",
            credit: "https://www.reddit.com/r/DemonSlayerAnime/comments/tpgpid/demon_slayer_4k_wallpaper/"
        },
        {
            type: "anime",
            name: "Attack on Titan",
            image: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDQ0NTI1OTEyMDczODYy/attack-on-titan-season-1-review.jpg"
        },
        {
            type: "anime",
            name: "The Rise of the Shield Hero",
            image: "https://anitrendz.net/news/wp-content/uploads/2021/03/Shield-Hero-2.jpg"
        }
    ];
    let previous_index: number | undefined;
    const change_index = () => {
        let index = Math.floor(Math.random() * choices.length);

        // Ensure the new index is not the same as the previous index
        while (index === previous_index) {
            index = Math.floor(Math.random() * choices.length);
        }
        // Update the previous index
        previous_index = index;
        choice_number = index;
    };
    let interval: NodeJS.Timer | undefined;
    onMount(() => {
        interval = setInterval(() => {
            change_index();
        }, 20000);
        change_index();
    });
    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="relative inline-grid h-full w-full grid-cols-1 md:grid-cols-2">
    {#each choices as item, index}
        {#if index === choice_number}
            {@const type = () => {
                switch (item.type) {
                    case "anime":
                        return "the anime";
                    case "pixiv":
                        return "the artist";
                    default:
                        return "";
                }
            }}

            <div
                class="relative"
                style="grid-area: 1 / 1 / 1 / 1;"
                transition:blur|local={{ duration: 500 }}
            >
                <div
                    class="h-full w-full bg-cover bg-center bg-no-repeat"
                    style="background-image: url('{item.image ?? ''}')"
                />
                <div class="absolute inset-0 bg-gradient-to-r from-surface-900 to-surface-900/60" />
                <div class="absolute inset-0 bg-gradient-to-t from-surface-900/50 to-surface-900/0" />

                <div class="hidden absolute inset-0 bottom-[6vw] md:flex flex-col items-center justify-center text-center">
                    <span class="text-[0.75vw] font-semibold uppercase text-surface-50">welcome to</span>
                    <div class="mt-[0.5vw] flex items-center">
                        <CoreProject class="w-[10vw]" />
                        <span class="text-[1.75vw] font-bold text-surface-300">.moe</span>
                    </div>
                    <span class="mt-[2.875vw] max-w-[22vw] text-[1.25vw] font-semibold">Bridging the gap between streaming and torrenting sites with a modern and clean interface.</span>

                    <span class="mt-[4vw] text-[0.9vw] font-semibold">With a coreproject account, you can</span>
                    <span class="mt-[0.75vw] max-w-[20.375vw] text-[0.9vw] font-medium text-surface-200">you can continue on animecore, mangacore and soundcore at same time</span>
                </div>

                <div class="absolute bottom-[1.85vw] hidden md:flex left-[2vw]">
                    <div class="flex flex-col">
                        <span class="text-[2.25vw] md:text-[0.75vw] font-semibold uppercase tracking-widest text-surface-300/75">
                            Background from {type()}
                        </span>
                        <div class="flex items-center gap-[2vw] md:gap-[0.5vw]">
                            <span class="text-[3vw] md:text-[1vw] font-bold uppercase tracking-widest text-warning-400">
                                {item.name}
                            </span>
                            <button
                                class="btn p-0"
                                on:click={change_index}
                            >
                                <Refresh class="w-[2vw] hidden md:flex md:w-[0.8vw]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    {/each}
    <div
        class="md:px-[8vw] md:py-[2.2vw] flex items-end justify-center md:block slot"
        style="grid-area: 1 / 2 / 1 / 2;"
    >
        <slot />
    </div>
</div>

<style>
    @media (max-width: 639px) {
        .slot{
            grid-area: 1 /1 /1 /1 !important;
            z-index: 9999;;
        }
    }
</style>