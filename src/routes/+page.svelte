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
        <mascot class="relative flex md:h-[40vw] self-end">
            <img src="images/characters/hibiki/hibiki.png" alt="Hibiki" class="z-10 h-full" />
            <!-- gradients -->
            <gradient class="absolute left-1/4 md:w-[15vw] md:h-[20vw] rotate-45 bg-primary-900 md:rounded-[2vw] md:blur-[3.5vw]" />
            <gradient class="absolute md:bottom-[2.5vw] right-0 md:w-[15vw] md:h-[20vw] rotate-45 bg-primary-800 md:rounded-[2vw] md:blur-[4vw]" />
            <gradient class="absolute md:bottom-[1vw] left-1/4 md:w-[10vw] md:h-[20vw] rotate-45 bg-surface-400 md:rounded-[2vw] md:blur-[3.5vw]" />
        </mascot>
    </landing>
</main>
