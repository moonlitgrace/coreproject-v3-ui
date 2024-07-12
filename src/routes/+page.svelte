<script lang="ts">
    import { page } from "$app/stores";
    import { OpengraphGenerator } from "$functions/opengraph";
    import AnimeCore from "$icons/logos/anime_core.svelte";
    import Github from "$icons/logos/github.svelte";

    const opengraph_html = new OpengraphGenerator({
        title: "CoreProject - Imagine a new platform",
        site_name: "CoreProject",
        image_url: "", // Use Opengraph later
        url: $page.url.href,
        locale: "en_US",
        description: "The most modern anime, manga, sound streaming platform."
    }).generate_opengraph();
</script>

<svelte:head>
    {@html opengraph_html}
</svelte:head>

<div class="md:grid md:grid-cols-2 h-screen gap-3 md:gap-[0.75vw] flex flex-col justify-center">
    <div class="flex flex-col justify-center md:pl-[15vw] gap-5 md:gap-[1.5vw] p-5">
        <img src="favicon.svg" class="size-20 md:size-[3vw]" alt="fabicon.svg" />
        <p class="md:text-[1.25vw] text-lg leading-snug font-semibold text-surface-50 md:leading-[1.75vw]">
            Out with the old, in with the new! We've upgraded our working repo, so pardon our dust as we refresh our live site with the latest and greatest. Stay tuned for an enhanced experience!
        </p>
        <div class="flex items-center md:gap-[0.5vw] gap-3">
            <span class="md:text-[1.25vw] font-semibold text-warning-400">Try (alpha v3 Ui) :</span>
            <a href="/anime" class="md:border-b-[0.2vw] border-b-4 border-primary-500"><AnimeCore class="w-36 md:w-[10vw]" /></a>
        </div>
        <a class="w-max flex items-center gap-2" href="https://github.com/coreproject-moe/CoreProject-Monorepo" target="_blank">
            <Github class="md:size-[2vw] size-10" />
            <span class="md:hidden font-semibold">coreproject-moe/CoreProject-Monorepo</span>
        </a>
    </div>
    <div class="grid place-items-center">
        <img src="stickers/Keqing_2.png" class="md:w-1/2 w-56 shrink-0" alt="Keqing_2.png" />
    </div>
</div>
