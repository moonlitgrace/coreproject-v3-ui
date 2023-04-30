<script lang="ts">
    export let anime_name: string;
    export let anime_alternative_name: string;
    export let anime_episodes_count: number;
    export let anime_date: string;
    export let anime_synopsis: string;
    export let anime_banner: string;
    export let anime_cover: string;

    export let anime_episodes: any;

    import TopRounded from "$icons/top_rounded.svelte";
    import AnimeMainDetails from "./anime_main_details.svelte";
</script>

<div class="anime_info relative">
    <div
        class="relative h-screen bg-cover"
        style="background-image: url({anime_cover ?? ''})"
    >
        <TopRounded
            class="fixed z-10 text-surface-900"
            style="width: 1.5vw;"
        />
        <div
            class="gradient absolute h-full w-full bg-gradient-to-t from-surface-900 to-surface-900/50"
        />
        <div class="absolute h-full w-full md:p-[5vw]">
            <AnimeMainDetails
                {anime_name}
                {anime_alternative_name}
                {anime_episodes_count}
                {anime_date}
                {anime_synopsis}
                {anime_banner}
                {anime_episodes}
            />
        </div>
    </div>
</div>
