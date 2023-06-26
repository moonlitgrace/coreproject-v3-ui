<script lang="ts">
    import { page } from "$app/stores";
    import EpisodePage from "$components/pages/episode/index.svelte";

    let episode_number: number | undefined;
    $: episode_number = Number($page.params.id);
</script>

<EpisodePage {episode_number} />
