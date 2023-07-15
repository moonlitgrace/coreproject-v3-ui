<script lang="ts">
    import { format_kokoro_color } from "$functions/format_kokoro";
    import Chevron from "$icons/chevron.svelte";
    import sample from "lodash/sample";

    const mapping = sample([{ image: "/images/characters/eliane.png", alt: "Elaine" }]);
</script>

<svelte:head>
    <style>
        #page {
            overflow: hidden;
        }
    </style>
</svelte:head>

<section class="relative flex h-full grid-cols-5 flex-col items-center justify-end gap-20 md:grid md:items-end md:gap-0 md:px-[5vw]">
    <error-context class="col-span-5 flex flex-col items-center leading-none md:col-span-3 md:mb-[13vw] md:items-start md:gap-[1vw]">
        <status-code class="text-7xl font-bold md:text-[7vw]">
            {#each "404".split("") as number}
                <span class="odd:text-warning-400">{number}</span>
            {/each}
        </status-code>
        <status-text class="text-base font-semibold text-primary-300 md:text-[1.25vw]">Oops! Page not found...</status-text>
        <span class="mt-5 text-base font-semibold italic md:mt-[1vw] md:text-[1.2vw]">
            Hi <u>{mapping?.alt}</u>
            here!
        </span>
        <context class="px-7 text-center text-xs font-semibold italic leading-snug text-surface-50 md:px-0 md:pr-[5vw] md:text-left md:text-[1.1vw] md:leading-[1.5vw]">
            {@html format_kokoro_color(`Uh-oh looks like our kokoro-chan is working really hard for the past few days and now has fall asleep. You can wait for her to wake up by looking at the status page, or come say hi to other fellow kokoro-chan's worksippers! ah- also let's wish her sweat dreams!`)}
        </context>
        <a
            href="/explore"
            class="btn mt-5 w-max gap-2 bg-primary-500 py-4 font-semibold leading-none md:mt-0 md:gap-[0.5vw] md:py-[1vw] md:text-[1.1vw]"
        >
            Explore animes
            <Chevron class="w-5 -rotate-90 md:w-[1.1vw]" />
        </a>
    </error-context>
    <character-image class="relative col-span-5 flex justify-center md:col-span-2">
        <gradient class="absolute" />

        <img
            src={mapping?.image}
            alt={mapping?.alt}
            class="z-10 h-full w-64 md:w-full"
        />
    </character-image>
</section>

<style lang="postcss">
    /* For small screens */
    gradient {
        height: 50dvh;
        width: 100dvw;
        background: radial-gradient(50dvh circle at center, rgba(117, 105, 225, 0.25) 0%, transparent 50%);
    }

    @media screen(md) {
        gradient {
            height: 40dvw;
            width: calc(100% * 2);
            background: radial-gradient(40dvw circle at center, rgba(117, 105, 225, 0.25) 0%, transparent 50%);
        }
    }
</style>
