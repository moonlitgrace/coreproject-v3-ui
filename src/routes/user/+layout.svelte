<script lang="ts">
    import { latest_animes } from "$data/mock/latest_animes";
    import CoreProject from "$icons/core_project.svelte";
    import Refresh from "$icons/refresh.svelte";
    import { beforeUpdate, onDestroy } from "svelte";
    import { blur } from "svelte/transition";

    let CHOICE: number = 1;
    let INTERVAL = 20_000;

    const change_index = () => {
        const index = Math.floor(Math.random() * latest_animes.length);
        CHOICE = index;
    };

    // let interval: NodeJS.Timer | undefined;
    // // Run it before the UI is updated to show current behaviour
    // beforeUpdate(() => {
    //     interval = setInterval(() => {
    //         change_index();
    //     }, INTERVAL);
    //     change_index();
    // });

    // onDestroy(() => {
    //     clearInterval(interval);
    // });
</script>

<root class="relative inline-grid h-full w-full md:grid-cols-2">
    {#each latest_animes as item, index}
        {#if index === CHOICE}
            <div
                class="relative col-start-1 col-end-2 row-start-1 row-end-2"
                transition:blur|local={{ duration: 500 }}
            >
                <div
                    class="h-full w-full bg-cover bg-center bg-no-repeat"
                    style="background-image: url('{item.cover ?? ''}')"
                />
                <div class="absolute inset-0 bg-gradient-to-r from-surface-900 to-surface-900/60" />
                <div class="absolute inset-0 bg-gradient-to-t from-surface-900/50 to-surface-900/0" />

                <div class="absolute inset-0 bottom-[6vw] hidden flex-col items-center justify-center text-center md:flex">
                    <span class="text-[0.75vw] font-semibold uppercase text-surface-50">welcome to</span>
                    <div class="mt-[0.5vw] flex items-center">
                        <CoreProject />
                        {#each ".moe".split("") as letter}
                            <span class="inline-flex text-[1.75vw] font-bold text-surface-300">{letter}</span>
                        {/each}
                    </div>
                    <span class="mt-[2.875vw] max-w-[22vw] text-[1.25vw] font-semibold leading-[1.75vw]">Bridging the gap between streaming and torrenting sites with a modern and clean interface.</span>

                    <span class="mt-[4vw] text-[0.9vw] font-semibold">With a coreproject account, you can</span>
                    <span class="mt-[0.75vw] max-w-[20.375vw] text-[0.9vw] font-medium leading-[1vw] text-surface-200">continue on animecore, mangacore and soundcore with same account.</span>
                </div>

                <div class="absolute bottom-[1.85vw] left-10 md:left-[2vw] md:flex">
                    <div class="flex flex-col">
                        <span class="text-[2.25vw] font-semibold uppercase tracking-widest text-surface-300/75 md:text-[0.75vw]">Background from anime</span>
                        <div class="flex items-center gap-[2vw] md:gap-[0.5vw]">
                            <span class="text-[3vw] font-bold uppercase tracking-widest text-warning-400 md:text-[1vw]">
                                {item.name}
                            </span>
                            <button
                                class="btn p-0"
                                on:click={change_index}
                            >
                                <Refresh class="hidden w-[2vw] md:flex md:w-[0.8vw]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    {/each}
    <div class="z-0 col-start-1 col-end-1 row-start-1 row-end-1 flex items-center justify-center md:col-start-2 md:col-end-2 md:block md:items-end md:px-[8vw] md:py-[2.2vw]">
        <slot />
    </div>
</root>

<style lang="postcss">
    :global(#page) {
        @apply overflow-y-hidden;
    }
    /* :global(#shell-footer) {
        display: none !important;
    } */
</style>
