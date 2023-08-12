<script lang="ts">
    import ScrollArea from "$components/shared/scroll_area.svelte";
    import { FormatDate } from "$functions/format_date";
    import Add from "$icons/add.svelte";
    import Circle from "$icons/circle.svelte";
    import Cross from "$icons/cross.svelte";
    import PlayCircle from "$icons/play_circle.svelte";
    import Star from "$icons/star.svelte";
    import { ProgressBar } from "@skeletonlabs/skeleton";

    export let anime_name: string;
    export let anime_episodes_count: number;
    export let anime_current_episode: number;
    export let anime_type: string;
    export let anime_genres: string[];
    export let anime_studios: string[];
    export let anime_synopsis: string;
</script>

<popup-container class="hidden md:flex md:w-[20vw] leading-none bg-surface-400 flex-col md:rounded-[0.75vw] overflow-hidden">
    <div class="md:p-[1.5vw] flex flex-col md:gap-[0.5vw]">
        <!-- Add image dominant color for anime-name -->
        <anime-name class="md:text-[1vw] font-semibold md:leading-[1.25vw] border-b-[0.1vw] md:pb-[0.5vw] border-white/10">{anime_name}</anime-name>
        <div class="flex items-center md:gap-[0.35vw] md:text-[0.8vw] text-surface-50">
            <anime-raing class="flex items-center md:gap-[0.25vw]">
                <Star variant="full" class="md:w-[0.9vw] h-auto" fill_color="white" />
                <span>4.5</span>
            </anime-raing>
            <Circle class="md:w-[0.25vw] opacity-50" />
            <anime-type>{anime_type}</anime-type>
            <Circle class="md:w-[0.25vw] opacity-50" />
            <episodes-count>{anime_episodes_count} episdoes</episodes-count>
        </div>
        {#each anime_studios as studio}
            <studio class="md:text-[0.75vw] text-surface-50">{studio}</studio>
        {/each}
        <genres class="flex items-center md:gap-[0.5vw] md:my-[0.35vw]">
            {#each anime_genres as genre}
                <genre class="leading-none font-semibold bg-primary-500 md:px-[0.6vw] md:py-[0.3vw] md:text-[0.8vw] md:rounded-[0.35vw]">
                    {genre}
                </genre>
            {/each}
        </genres>
        <ScrollArea
            parentClass="md:max-h-[5vw]"
            class="md:text-[0.85vw] md:leading-[1vw] text-surface-50"
        >
            {anime_synopsis}
        </ScrollArea>

        <options class="md:mt-[0.25vw] border-t-[0.1vw] md:pt-[0.75vw] border-white/10 flex items-center md:gap-[0.5vw]">
            <button class="btn leading-none bg-primary-500 md:rounded-[0.5vw] flex-1 h-[2.3vw]">
                <PlayCircle class="md:w-[1vw]" />
                <span class="md:text-[0.9vw] font-semibold">Continue Ep {anime_current_episode}</span>
            </button>
            <button class="btn leading-none bg-primary-500/25 md:rounded-[0.5vw] p-0 h-[2.3vw] aspect-square">
                <Add class="md:w-[1vw]" />
            </button>
        </options>
    </div>
</popup-container>