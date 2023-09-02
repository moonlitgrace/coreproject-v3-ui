<script lang="ts">
    import { page } from "$app/stores";
    import { OpengraphGenerator } from "$functions/opengraph";

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

<div class="flex h-screen w-full items-center justify-center text-3xl">
    Visit &nbsp;
    <a
        href="/anime"
        class="underline"
    >
        AnimeCore
    </a>
</div>
