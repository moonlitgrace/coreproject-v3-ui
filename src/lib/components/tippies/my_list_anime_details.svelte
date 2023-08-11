<script lang="ts">
    import { FormatDate } from "$functions/format_date";
    import Circle from "$icons/circle.svelte";

    export let anime_cover: string;
    export let anime_name: string;
    export let anime_type: string;
    export let anime_release_date: string;
    export let anime_episodes_count: number;
    export let anime_genres: string[];
    export let anime_studios: string[];
    export let anime_synopsis: string;
    export let anime_current_episode: number;
</script>

<popup-container class="md:w-[17vw] md:h-[10vw] bg-surface-400 md:rounded-[0.75vw] block">
    <!-- Add more things -->
</popup-container>