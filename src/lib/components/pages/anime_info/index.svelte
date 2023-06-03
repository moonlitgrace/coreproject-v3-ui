<script lang="ts">
    import ImageLoader from "$components/shared/image/image_loader.svelte";

    import AnimeMainDetails from "./anime_main_details.svelte";

    export let anime_name: string;
    export let anime_alternative_name: string;
    export let anime_episodes_count: number;
    export let anime_date: string;
    export let anime_synopsis: string;
    export let anime_banner: string;
    export let anime_cover: string;

    export let anime_episodes: any;
</script>

<div class="anime_info relative">
    <div class="relative h-screen bg-cover">
        <ImageLoader
            src={anime_cover ?? ""}
            class="absolute h-full w-full rounded-tl-[1.5vw] object-cover object-center"
        />

        <div class="gradient absolute inset-0 bg-gradient-to-t from-surface-900 to-surface-900/50" />
        <div class="absolute inset-0 md:p-[5vw]">
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
