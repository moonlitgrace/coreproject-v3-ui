<script lang="ts">
    import { page } from "$app/stores";
    import { OpengraphGenerator } from "$functions/opengraph";
    import AnimeCore from "$icons/logos/anime_core.svelte";

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

<div class="flex h-screen items-center justify-center gap-3 md:gap-[0.75vw]">
    <a href="/anime" class="flex items-center gap-3 md:gap-[1vw]">
        <span class="text-3xl md:text-[2vw] font-semibold text-surface-50">Explore</span>
        <AnimeCore class="w-40 md:w-[12vw] border-b-[0.15vw] border-surface-300" />
    </a>
</div>
