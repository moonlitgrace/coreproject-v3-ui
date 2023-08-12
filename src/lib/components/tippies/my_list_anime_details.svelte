<script lang="ts">
    import { FormatDate } from "$functions/format_date";
    import Circle from "$icons/circle.svelte";
    import Star from "$icons/star.svelte";
    import { ProgressBar } from "@skeletonlabs/skeleton";

    export let anime_name: string;
    export let anime_episodes_count: number;
    export let anime_type: string;
    export let anime_genres: string[];
    export let anime_studios: string[];
    export let anime_synopsis: string;
</script>

<popup-container class="hidden md:flex md:w-[17vw] leading-none bg-surface-400 flex-col md:rounded-[0.75vw] overflow-hidden">
    <div class="md:p-[1.5vw] flex flex-col md:gap-[0.35vw]">
        <!-- Add image dominant color for anime-name -->
        <anime-name class="md:text-[1vw] font-semibold md:leading-[1.25vw]">{anime_name}</anime-name>
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
        <genres class="flex items-center md:gap-[0.5vw] md:my-[0.5vw]">
            {#each anime_genres as genre}
                <genre class="leading-none font-semibold bg-primary-500 md:px-[0.6vw] md:py-[0.3vw] md:text-[0.8vw] md:rounded-[0.3vw]">
                    {genre}
                </genre>
            {/each}
        </genres>
        <synopsis class="md:text-[0.85vw] md:leading-[1vw] line-clamp-5 text-surface-50">
            {anime_synopsis}
        </synopsis>
    </div>

    <ProgressBar
        label="Progress Bar"
        value={80}
        max={100}
        height="h-3 md:h-[0.25vw]"
        rounded="rounded-none"
        track="bg-transparent"
        meter="bg-primary-500 md:rounded-r-full"
    />
</popup-container>