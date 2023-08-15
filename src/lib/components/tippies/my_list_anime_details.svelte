<script lang="ts">
    import ScrollArea from "$components/shared/scroll_area.svelte";
    import { FormatDate } from "$functions/format_date";
    import { round_to_nearest_zero_point_five } from "$functions/math";
    import Circle from "$icons/circle.svelte";
    import Info from "$icons/info.svelte";
    import PlayCircle from "$icons/play_circle.svelte";
    import Star from "$icons/star.svelte";
    import { Ratings } from "@skeletonlabs/skeleton";

    export let anime_id: number;
    export let anime_name: string;
    export let anime_episodes_count: number;
    export let anime_current_episode: number;
    export let anime_type: string;
    export let anime_genres: string[];
    export let anime_studios: string[];
    export let anime_synopsis: string;
    export let anime_release_date: string;
</script>

<popup-container class="hidden flex-col overflow-hidden bg-surface-400 leading-none md:flex md:w-[20vw] md:rounded-[0.75vw]">
    <div class="flex flex-col md:gap-[0.5vw] md:p-[1.5vw]">
        <anime-name class="border-b-[0.1vw] border-white/10 font-semibold md:pb-[0.5vw] md:text-[1vw] md:leading-[1.25vw]">{anime_name}</anime-name>
        <rating class="flex items-center md:gap-[0.5vw]">
            <Ratings
                value={round_to_nearest_zero_point_five(4.5)}
                max={5}
                justify="start w-max"
            >
                <svelte:fragment slot="empty">
                    <Star
                        color="yellow"
                        variant="empty"
                        fill_color="yellow"
                        class="h-[1.1vw] w-[1.1vw]"
                    />
                </svelte:fragment>
                <svelte:fragment slot="half">
                    <Star
                        color="yellow"
                        variant="half"
                        fill_color="yellow"
                        class="h-[1.1vw] w-[1.1vw]"
                    />
                </svelte:fragment>
                <svelte:fragment slot="full">
                    <Star
                        color="yellow"
                        variant="full"
                        fill_color="yellow"
                        class="h-[1.1vw] w-[1.1vw]"
                    />
                </svelte:fragment>
            </Ratings>
            <span class="text-surface-50 md:text-[0.8vw]">2.8k ratings</span>
        </rating>

        <div class="flex items-center text-surface-50 md:mt-[0.5vw] md:gap-[0.35vw] md:text-[0.8vw]">
            <anime-type>{anime_type}</anime-type>
            <Circle class="opacity-50 md:w-[0.25vw]" />
            <episodes-count>{anime_episodes_count} episdoes</episodes-count>
        </div>
        <studio class="text-surface-50 md:text-[0.75vw]">
            <span>Studio:</span>
            {#each anime_studios as studio}
                <span>{studio}</span>
            {/each}
        </studio>
        <release-date class="text-surface-50 md:text-[0.75vw]">
            <span>Release date:</span>
            <span>{new FormatDate(anime_release_date).format_to_human_readable_form}</span>
        </release-date>
        <status class="text-surface-50 md:text-[0.75vw]">
            <span>Status:</span>
            <span>Completed</span>
        </status>
        <genres class="flex items-center md:my-[0.35vw] md:gap-[0.5vw]">
            {#each anime_genres as genre}
                <genre class="bg-surface-50 font-semibold leading-none text-black md:rounded-[0.35vw] md:px-[0.6vw] md:py-[0.3vw] md:text-[0.8vw]">
                    {genre}
                </genre>
            {/each}
        </genres>
        <ScrollArea
            parentClass="md:max-h-[5vw]"
            offsetScrollbar
            class="text-surface-50 md:text-[0.85vw] md:leading-[1vw]"
        >
            {anime_synopsis}
        </ScrollArea>

        <options class="flex items-center border-t-[0.1vw] border-white/10 md:mt-[0.25vw] md:gap-[0.5vw] md:pt-[0.75vw]">
            <a
                href="/mal/{anime_id}/episode/{anime_current_episode}"
                class="btn h-[2.3vw] flex-1 bg-primary-500 leading-none md:rounded-[0.5vw]"
            >
                <PlayCircle class="md:w-[1vw]" />
                <span class="font-semibold md:text-[0.9vw]">Continue Ep {anime_current_episode}</span>
            </a>
            <a
                href="/mal/{anime_id}"
                class="btn aspect-square h-[2.3vw] bg-primary-500/25 p-0 leading-none md:rounded-[0.5vw]"
            >
                <Info class="md:w-[1.2vw]" />
            </a>
        </options>
    </div>
</popup-container>
