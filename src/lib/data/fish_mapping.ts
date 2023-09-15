export const fish_mapping: Array<{
    image: { src: string; alt: string; class?: string };
    class?: string;
    gradient: { mobile: string; desktop: string; class?: string };
    position: Array<"left" | "right">;
}> = [
    {
        image: {
            src: "/images/characters/eliane/eliane.avif",
            alt: "Elaine"
        },
        gradient: {
            class: "h-[50dvh] w-[100dvw] md:h-[100dvh] md:w-[calc(100%*2)]",
            mobile: "radial-gradient(50dvh circle at center, rgba(218, 202, 207, 0.25) 0%, transparent 50%)",
            desktop: "radial-gradient(100dvh circle at center, rgba(218, 202, 207, 0.25) 0%, transparent 50%)"
        },
        position: ["left", "right"]
    },
    {
        image: {
            src: "/images/characters/eliane/eliane_2.avif",
            alt: "Elaine"
        },
        gradient: {
            class: "h-[50dvh] w-[100dvw] md:h-[100dvh] md:w-[calc(100%*2)]",
            mobile: "radial-gradient(50dvh circle at center, rgba(231, 220, 221, 0.2) 0%, transparent 50%)",
            desktop: "radial-gradient(100dvh circle at center, rgba(231, 220, 221, 0.25) 0%, transparent 50%)"
        },
        position: ["left", "right"]
    },
    // Doesn't look good on mobile
    {
        image: {
            src: "/images/characters/ichigo/ichigo.avif",
            alt: "Ichigo",
            class: "ml-auto"
        },
        class: "items-end",
        gradient: {
            class: "h-[50dvh] w-[100dvw] md:h-[100dvh] md:w-[calc(100%*2)]",
            mobile: "radial-gradient(45dvh circle at right, rgba(137, 155, 206, 0.25) 0%, transparent 50%)",
            desktop: "radial-gradient(100dvh circle at center, rgba(137, 155, 206, 0.25) 0%, transparent 50%)"
        },
        position: ["right"]
    },
    {
        image: {
            src: "/images/characters/sasha/sasha.avif",
            alt: "Sasha"
        },
        gradient: {
            class: "h-[50dvh] w-[100dvw] md:h-[100dvh] md:w-[calc(100%*2)]",
            mobile: "radial-gradient(50dvh circle at center, rgba(181, 124, 82, 0.25) 0%, transparent 50%)",
            desktop: "radial-gradient(100dvh circle at center, rgba(181, 124, 82, 0.25) 0%, transparent 50%)"
        },
        position: ["left", "right"]
    },
    {
        // credit:'https://www.reddit.com/r/AnimeGirls/comments/pyil5n/my_girl_exy_in_a_plugsuit/',
        image: {
            src: "/images/characters/exy/exy.avif",
            alt: "Exy"
        },
        gradient: {
            class: "h-[50dvh] w-[100dvw] md:h-[100dvh] md:w-[calc(100%*2)]",
            mobile: "radial-gradient(50dvh circle at center, rgba(243, 243, 243, 0.25) 0%, transparent 50%)",
            desktop: "radial-gradient(100dvh circle at center, rgba(243, 243, 243, 0.25) 0%, transparent 50%)"
        },
        position: ["left", "right"]
    },
    {
        image: {
            src: "/images/characters/futaba/futaba.avif",
            alt: "Futaba"
        },
        gradient: {
            class: "h-[50dvh] w-[100dvw] md:h-[100dvh] md:w-[calc(100%*2)]",
            mobile: "radial-gradient(50dvh circle at center, rgba(171, 143, 125, 0.3) 0%, transparent 50%)",
            desktop: "radial-gradient(100dvh circle at center, rgba(171, 143, 125, 0.6) 0%, transparent 50%)"
        },
        position: ["right", "left"]
    }
];
