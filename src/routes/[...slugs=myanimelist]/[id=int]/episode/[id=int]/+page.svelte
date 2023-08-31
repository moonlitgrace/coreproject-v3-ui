<script lang="ts">
    import { page } from "$app/stores";
    import EpisodePage from "$components/pages/episode/index.svelte";
    import { MetaTags } from "svelte-meta-tags";
    import { derived } from "svelte/store";

    let episode_number = derived(page, (page) => page.params.id);
</script>

<MetaTags
    title={`Watch  on AnimeCore | Episode ${episode_number}`}
    description={/**Add it later */ ""}
    openGraph={{
        images: [
            {
                url: "" // add later
            }
        ],
        locale: "en_US",
        siteName: "CoreProject"
    }}
/>

<EpisodePage episode_number={Number($episode_number)} />
