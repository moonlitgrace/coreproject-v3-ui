<script lang="ts">
    import { page } from "$app/stores";
    import { OpengraphGenerator } from "$functions/opengraph";
    import Chevron from "$icons/chevron.svelte";
    import CoreProject from "$icons/core_project.svelte";
    import Logo from "$icons/logo.svelte";
    import { onMount } from "svelte";
    import Typed from "typed.js";

    let typewriter_el: HTMLElement;

    onMount(() => {
        const typewriter = new Typed(typewriter_el, {
            strings: [
                '<a href="/anime" class="bg-gradient-to-r from-primary-500 to-primary-200 bg-clip-text text-transparent">Anime. </a>',
                '<a href="/manga" class="bg-gradient-to-r from-primary-400 to-error-400 bg-clip-text text-transparent">Manga. </a>',
                '<a href="/sound" class="bg-gradient-to-r from-warning-400 to-error-300 bg-clip-text text-transparent">Sound. </a>'
            ],
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
    <navbar class="fixed z-50 inset-x-0 md:h-[4vw] md:px-[1vw] flex items-center justify-between">
        <a href="/"><Logo class="md:w-[2vw]" /></a>
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
    <landing class="flex items-center justify-between h-screen md:px-[10vw] sticky top-0">
        <content>
            <div class="flex flex-col md:gap-[2vw] relative">
                <div class="flex flex-col md:text-[5vw] font-bold md:leading-[4.5vw]">
                    <span>Unlock the World of</span>
                    <typewriter-content>
                        <typewriter bind:this={typewriter_el} />
                    </typewriter-content>
                </div>
                <div class="flex flex-col md:gap-[1vw]">
                    <div class="w-max flex flex-col md:gap-[0.25vw] leading-none">
                        <span class="md:text-[1.5vw] font-semibold text-surface-50">Welcome to CoreProject</span>
                        <gradient-border class="flex w-full md:h-[0.2vw] bg-gradient-to-r from-primary-500 to-error-500" />
                    </div>
                    <cta-buttons class="flex items-center md:gap-[1vw] w-max">
                        <button
                            class="btn rounded-[0.4rem] bg-gradient-to-r from-primary-500 to-error-500 px-5 py-4 text-base font-semibold leading-none md:rounded-[0.5vw] md:px-[1.25vw] md:py-[1vw] md:text-[1vw] shadow-2xl shadow-primary-800"
                        >
                            <span>Get Started</span>
                            <Chevron class="md:w-[1.25vw] -rotate-90" />
                        </button>
                    </cta-buttons>
                </div>
            </div>
        </content>
        <mascot class="relative flex flex-shrink-0 md:h-[40vw] self-end">
            <img src="images/characters/hibiki/hibiki.png" alt="Hibiki" class="z-10 h-full" />
            <!-- gradients -->
            <gradient class="absolute left-1/4 md:w-[15vw] md:h-[20vw] rotate-45 bg-primary-900 md:rounded-[2vw] md:blur-[3.5vw]" />
            <gradient class="absolute md:bottom-[2.5vw] right-0 md:w-[15vw] md:h-[20vw] rotate-45 bg-primary-800 md:rounded-[2vw] md:blur-[4vw]" />
            <gradient class="absolute md:bottom-[1vw] left-1/4 md:w-[10vw] md:h-[20vw] rotate-45 bg-surface-400 md:rounded-[2vw] md:blur-[3.5vw]" />
        </mascot>
    </landing>

    <section class="h-screen md:p-[5vw] text-center bg-surface-900 sticky top-0">
        <span class="md:text-[2vw] font-semibold">Another section starts here</span>
    </section>
</main>