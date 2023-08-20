<script lang="ts">
    import ImageLoader from "$components/shared/image/image_loader.svelte";
    import ScrollArea from "$components/shared/scroll_area.svelte";
    import { FormatDate } from "$functions/format_date";
    import Play from "$icons/play.svelte";
    import { slide } from "svelte/transition";

    export let anime: {
        id: number;
        cover: string;
        name: string;
        episode_number: number;
        release_date: string;
        synopsis: string;
    }

    let show_more_info = false;

</script>
<anime-episode
    on:mouseenter={() => show_more_info = true}
    on:mouseleave={() => show_more_info = false}
    role="group"
    class="group relative h-[5vw] hover:h-[16vw] duration-300 ease-in-out delay-100"
>
    <ImageLoader
        src={anime.cover}
        class="absolute h-full w-full rounded-[0.75vw] object-cover object-center"
    />
    <gradient-overlay class="gradient absolute inset-0 bg-gradient-to-t from-surface-900/75 to-surface-900/0" />
    <gradient-overlay class="gradient absolute inset-0 bg-gradient-to-r from-surface-900/50 to-surface-900/0" />

    <episode-info class="absolute inset-0 flex items-start justify-between p-[1.3125vw]">
        <div class="flex flex-col gap-[0.25vw]">
            <episode-name class="text-[1vw] font-semibold leading-[1.1875vw] text-white">
                {anime.name}
            </episode-name>
            <episode-dates class="flex items-center gap-[0.35vw] text-[0.8vw] text-surface-50">
                <span class="font-semibold">
                    Ep {String(anime.episode_number).padStart(2, "0")}
                </span>
                <span>
                    aired {new FormatDate(anime.release_date).format_to_time_from_now}
                </span>
            </episode-dates>
        </div>
        <a
            href="./mal/{anime.id}/episode/{anime.episode_number}"
            class="btn btn-icon h-[2.5vw] w-[2.5vw] rounded-full bg-warning-400 group-hover:bg-white text-surface-900 transition-colors duration-300"
        >
            <Play class="w-[1.25vw]" />
        </a>
    </episode-info>

    {#if show_more_info}
        <more-anime-info
            in:slide={{ duration: 300, delay: 200 }}
            out:slide={{ duration: 200 }}
            class="absolute inset-x-0 bottom-0 p-[1.3125vw] flex flex-col gap-[0.5vw]"
        >
            <genres class="flex items-center md:my-[0.35vw] md:gap-[0.5vw]">
                {#each ["Action", "Romance", "Hentai"] as genre}
                    <genre class="bg-surface-50 font-semibold leading-none text-black md:rounded-[0.35vw] md:px-[0.6vw] md:py-[0.3vw] md:text-[0.8vw]">
                        {genre}
                    </genre>
                {/each}
            </genres>
            <ScrollArea class="h-[6vw] text-[0.8vw] text-surface-50 leading-[1.15vw]">
                {anime.synopsis}
            </ScrollArea>
        </more-anime-info>
    {/if}
</anime-episode>