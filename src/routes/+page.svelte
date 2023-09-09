<script lang="ts">
    import { page } from "$app/stores";
    import { OpengraphGenerator } from "$functions/opengraph";
    import AnimeCore from "$icons/anime_core.svelte";
    import CoreProject from "$icons/core_project.svelte";
    import Logo from "$icons/logo.svelte";

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
    <navbar class="absolute inset-x-0 md:h-[4vw] md:px-[1vw] flex items-center justify-between">
        <div class="flex items-center md:gap-[2vw]">
            <Logo class="md:w-[2vw]" />
            <span class="md:text-[1vw]">What are the links to be add here?</span>
        </div>
        <a href="/" class="absolute left-1/2 -translate-x-1/2"><CoreProject /></a>
        <div class="flex items-center md:gap-[1vw]">
            <a
                href="/user/register"
                class="btn hidden bg-surface-400 font-semibold leading-none md:flex md:rounded-[0.5vw] md:px-[1.25vw] md:py-[0.85vw] md:text-[1vw]"
            >
                Register
            </a>
            <a
                href="/user/login"
                class="btn rounded-[0.4rem] bg-primary-500 px-5 py-4 text-base font-semibold leading-none md:rounded-[0.5vw] md:px-[1.25vw] md:py-[0.85vw] md:text-[1vw]"
            >
                Login
            </a>
        </div>
    </navbar>
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
