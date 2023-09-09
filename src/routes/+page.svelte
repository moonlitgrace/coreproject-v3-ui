<script lang="ts">
    import { page } from "$app/stores";
    import { OpengraphGenerator } from "$functions/opengraph";
    import AnimeCore from "$icons/anime_core.svelte";

    const opengraph_html = new OpengraphGenerator({
        title: "CoreProject - A modern anime, manga, sound streaming site",
        site_name: "CoreProject",
        image_url: "", // Use Opengraph later
        url: $page.url.href,
        locale: "en_US",
        description: "The most modern anime, manga, sound streaming site"
    }).generate_opengraph();
</script>

<svelte:head>
    {@html opengraph_html}
</svelte:head>

<div class="flex h-full w-full items-center justify-center gap-3 md:gap-[0.75vw]"></div>
