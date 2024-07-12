<script lang="ts">
    import * as _ from "lodash-es";

    import { fish_mapping } from "$data/fish_mapping";
    // Functions
    import { format_kokoro_color } from "$functions/format_kokoro";
    
    // Svelte things
    import { onMount } from "svelte";
    import { blur } from "svelte/transition";

    // Functions
    import { cn } from "$functions/classnames";

    // Icons
    import Chevron from "$icons/shapes/chevron.svelte";

    let mapping: (typeof fish_mapping)[0] | undefined;

    // onMount is here to prevent double mount of this.
    onMount(() => {
        mapping = _.sample(fish_mapping);
    });
</script>

<svelte:head>
    <link
        href={mapping?.image.src}
        rel="preload"
        as="image"
    />
    <style>
        #page {
            overflow: hidden;
        }
    </style>
</svelte:head>

{#if mapping}
    {@const is_image_left_or_right = _.sample(mapping.position)}
    {@const on_left = is_image_left_or_right === "left"}
    {@const on_right = is_image_left_or_right === "right"}

    <div
        transition:blur
        class={cn(mapping.class, "grid h-full grid-cols-12")}
    >
        <div
            class:md:order-1={on_right}
            class:md:order-2={on_left}
            class="col-span-12 row-span-6 flex flex-col items-center self-end leading-none md:col-span-6 md:mb-[13vw] md:items-start md:gap-[1vw] md:pl-[5vw]"
        >
            <div class="text-7xl font-bold md:text-[7vw]">
                {#each "404".split("") as code}
                    <span class="odd:text-warning-400">{code}</span>
                {/each}
            </div>
            <div class="text-base font-semibold text-primary-300 md:text-[1.25vw]">Oops! Page not found...</div>
            <span class="mt-2 text-base font-semibold italic md:mt-[1vw] md:text-[1.2vw]">
                Hi <u>{mapping.image.alt}</u>
                here!
            </span>
            <div class="select-none px-7 text-center text-xs font-semibold italic leading-snug text-surface-50 md:px-0 md:pr-[5vw] md:text-left md:text-[1.1vw] md:leading-[1.5vw]">
                {@html format_kokoro_color(`Uh-oh looks like our kokoro-chan is working really hard for the past few days and now has fall asleep. You can wait for her to wake up by looking at the status page, or come say hi to other fellow kokoro-chan's worksippers! ah- also let's wish her sweat dreams!`)}
            </div>
            <a
                href="../explore"
                class="btn mt-3 w-max gap-2 rounded-lg bg-primary-500 py-3 font-semibold leading-none md:mt-0 md:gap-[0.5vw] md:rounded-[0.5vw] md:px-[1.5vw] md:py-[1vw] md:text-[1.1vw]"
            >
                Explore Animes
                <Chevron class="w-5 -rotate-90 md:w-[1.1vw]" />
            </a>
        </div>
        <div
            class:md:order-1={on_left}
            class:md:order-2={on_right}
            class="pointer-events-none relative col-span-12 flex items-end justify-center md:col-span-6"
            style="--mobile-gradient:{mapping.gradient.mobile}; --desktop-gradient:{mapping.gradient.desktop}"
        >
            <gradient class={cn(mapping.gradient.class, "absolute [background:var(--mobile-gradient)] md:[background:var(--desktop-gradient)]")} />

            <img
                src={mapping.image.src}
                alt={mapping.image.alt}
                class={cn(mapping.image.class, "relative h-[40dvh] object-contain object-bottom md:h-[100dvh]")}
            />
        </div>
    </div>
{/if}
