<script lang="ts">
    import Chevron from "$icons/chevron.svelte";
    import { sample } from "lodash";

    const items: Array<{
        image: { src: string; alt: string; class?: string };
        class?: string;
        gradient: { mobile: string; desktop: string; class?: string };
    }> = [
        {
            image: {
                src: "/images/characters/eliane/eliane.png",
                alt: "Elaine"
            },
            gradient: {
                class: "h-[50dvh] w-[100dvw] md:h-[40dvw] md:w-[calc(100%*2)]",
                mobile: "radial-gradient(50dvh circle at center, rgba(218, 202, 207, 0.25) 0%, transparent 50%)",
                desktop: "radial-gradient(40dvw circle at center, rgba(218, 202, 207, 0.25) 0%, transparent 50%)"
            }
        },
        {
            image: {
                src: "/images/characters/ichigo/ichigo.png",
                alt: "Ichigo",
                class: "ml-auto"
            },
            class: "items-end",
            gradient: {
                class: "h-[50dvh] w-[100dvw] md:h-[40dvw] md:w-[calc(100%*2)]",
                mobile: "radial-gradient(45dvh circle at center, rgba(137, 155, 206, 0.25) 0%, transparent 50%)",
                desktop: "radial-gradient(45dvw circle at center, rgba(137, 155, 206, 0.25) 0%, transparent 50%)"
            }
        },
        {
            image: {
                src: "/images/characters/sasha/sasha.png",
                alt: "Sasha"
            },
            gradient: {
                class: "h-[50dvh] w-[100dvw] md:h-[50dvw] md:w-[calc(100%*2)]",
                mobile: "radial-gradient(50dvh circle at center, rgba(181, 124, 82, 0.25) 0%, transparent 50%)",
                desktop: "radial-gradient(45dvw circle at center, rgba(181, 124, 82, 0.25) 0%, transparent 50%)"
            }
        },
        {
            image: {
                src: "/images/characters/laura/laura.png",
                alt: "Laura"
            },
            gradient: {
                class: "h-[50dvh] w-[100dvw] md:h-[50dvw] md:w-[calc(100%*2)]",
                mobile: "radial-gradient(50dvh circle at center, rgba(243, 243, 243, 0.25) 0%, transparent 50%)",
                desktop: "radial-gradient(45dvw circle at center, rgba(243, 243, 243, 0.25) 0%, transparent 50%)"
            }
        }
    ];
    const mapping: {
        image: { src: string; alt: string; class?: string };
        class?: string;
        gradient: { mobile: string; desktop: string; class?: string };
    } = sample(items)!; // This logically can't be undefined or null
</script>

<login-container class="{mapping.class} flex h-full w-full grid-cols-12 flex-col justify-end md:grid md:gap-[5vw] md:pl-[3.75vw]">
    <form class="col-span-12 mb-32 flex flex-col p-5 md:col-span-7 md:mt-[2vw]">
        <span class="text-2xl font-semibold md:text-[1.5vw] md:leading-[1.5vw]">
            Paste your
            <span class="inline-flex text-warning-400">API</span>
            token
        </span>
        <span class="text-xl text-surface-50 md:text-[1vw] md:leading-[2vw]">for seamless integration</span>

        <providers class="mt-10 md:mt-[5vw]">
            <streamsb class="flex flex-col">
                <span class="text-xl font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Stream SB</span>
                <span class="text-lg leading-snug text-surface-50 md:text-[1vw] md:leading-[1.25vw]">Insert your unique API token here to unlock the full potential of Streamsb's video services</span>

                <token-input class="mt-5 flex justify-between gap-5 md:mt-[1vw] md:gap-[1vw]">
                    <input
                        placeholder="StreamSB token"
                        class="h-12 w-full rounded-xl border-2 border-primary-500 bg-transparent px-5 text-base font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400 md:h-[3.125vw] md:rounded-[0.6vw] md:border-[0.2vw] md:px-[1vw] md:text-[1.1vw]"
                    />
                    <button class="unstyled btn bg-primary-500 font-semibold leading-none md:rounded-[0.6vw] md:px-[1vw] md:py-[0.5vw] md:text-[1vw]">
                        <span>Continue</span>
                        <Chevron class="w-4 -rotate-90 md:w-[1vw]" />
                    </button>
                </token-input>
            </streamsb>
        </providers>
    </form>
    <character-image
        class="relative col-span-12 flex items-end justify-center md:col-span-5"
        style="--mobile-gradient:{mapping.gradient.mobile}; --desktop-gradient:{mapping.gradient.desktop}"
    >
        <gradient class="{mapping.gradient.class} absolute [background:var(--mobile-gradient)] md:[background:var(--desktop-gradient)]" />

        <img
            src={mapping.image.src}
            alt={mapping.image.alt}
            class="{mapping.image.class ?? ''} relative h-[40dvh] object-contain object-bottom md:h-[90dvh]"
        />
    </character-image>
</login-container>
