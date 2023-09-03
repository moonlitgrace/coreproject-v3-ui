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

<div class="flex gap-3 h-screen w-full items-center justify-center text-3xl">
    <span class="text-3xl md:text-[1.75vw]">Visit</span>
    <a
        href="/anime"
        class="border-b-[0.15vw] border-surface-50/50 hover:border-surface-50 transition-colors"
    >
        <AnimeCore class="w-48 md:w-[10vw]" />
    </a>
</div>
