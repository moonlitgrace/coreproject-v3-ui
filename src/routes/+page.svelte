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

<main>
    <navbar></navbar>
    <landing class="flex justify-between h-screen md:px-[10vw]">
        <content></content>
        <mascot class="flex md:h-[40vw] self-end">
            <img src="images/characters/hibiki/hibiki.png" alt="Hibiki" class="h-full" />
        </mascot>
    </landing>
</main>
