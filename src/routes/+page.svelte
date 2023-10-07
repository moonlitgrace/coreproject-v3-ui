<script lang="ts">
    import { page } from "$app/stores";
    import { OpengraphGenerator } from "$functions/opengraph";
    import Chevron from "$icons/shapes/chevron.svelte";
    import CoreProject from "$icons/logos/core_project.svelte";
    import Logo from "$icons/logos/main.svelte";
    import { onMount } from "svelte";
    import Typed from "typed.js";

    let typewriter_el: HTMLElement;

    onMount(() => {
        const typewriter = new Typed(typewriter_el, {
            strings: ['<a href="/anime" class="bg-gradient-to-r from-primary-500 to-primary-200 bg-clip-text text-transparent">Anime. </a>', '<a href="/manga" class="bg-gradient-to-r from-primary-400 to-error-400 bg-clip-text text-transparent">Manga. </a>', '<a href="/sound" class="bg-gradient-to-r from-warning-400 to-error-300 bg-clip-text text-transparent">Sound. </a>'],
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            cursorChar: '<span class="md:text-[5vw] bg-gradient-to-b from-primary-400 to-error-400 bg-clip-text text-transparent">|</span>'
        });
    });

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

<main class="relative">
    <navbar class="absolute inset-x-0 flex items-center justify-between md:h-[4vw] md:px-[1vw]">
        <a href="/"><Logo class="md:w-[2vw]" /></a>
        <a
            href="/"
            class="absolute left-1/2 -translate-x-1/2"
        >
            <CoreProject />
        </a>
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
    <landing class="grid h-screen grid-cols-10 md:px-[10vw]">
        <content class="relative flex flex-col self-center md:col-span-6 md:gap-[2vw]">
            <div class="flex flex-col font-bold md:text-[5vw] md:leading-[4.5vw]">
                <span>Unlock the World of</span>
                <typewriter-content>
                    <typewriter bind:this={typewriter_el} />
                </typewriter-content>
            </div>
            <div class="flex flex-col md:gap-[1vw]">
                <div class="flex w-max flex-col leading-none md:gap-[0.25vw]">
                    <span class="font-semibold text-surface-50 md:text-[1.5vw]">Welcome to CoreProject</span>
                    <gradient-border class="flex w-full bg-gradient-to-r from-primary-500 to-error-500 md:h-[0.2vw]" />
                </div>
                <cta-buttons class="flex w-max items-center md:gap-[1vw]">
                    <button class="btn rounded-[0.4rem] bg-gradient-to-r from-primary-500 to-error-500 px-5 py-4 text-base font-semibold leading-none shadow-2xl shadow-primary-800 md:rounded-[0.5vw] md:px-[1.25vw] md:py-[1vw] md:text-[1vw]">
                        <span>Get Started</span>
                        <Chevron class="-rotate-90 md:w-[1.25vw]" />
                    </button>
                </cta-buttons>
            </div>
        </content>
        <mascot class="relative flex self-end md:col-span-4 md:h-[40vw]">
            <img
                src="images/characters/hibiki/hibiki.png"
                alt="Hibiki"
                class="z-10"
            />
            <!-- gradients -->
            <gradient class="absolute left-1/4 rotate-45 bg-primary-900 md:h-[20vw] md:w-[15vw] md:rounded-[2vw] md:blur-[3.5vw]" />
            <gradient class="absolute right-0 rotate-45 bg-primary-900 md:bottom-[2.5vw] md:h-[20vw] md:w-[15vw] md:rounded-[2vw] md:blur-[4vw]" />
            <gradient class="absolute left-1/4 rotate-45 bg-surface-400 md:bottom-[1vw] md:h-[20vw] md:w-[10vw] md:rounded-[2vw] md:blur-[3.5vw]" />
        </mascot>
    </landing>
</main>
