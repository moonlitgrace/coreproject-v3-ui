export const anime_girls_mapping: Array<{
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
                class: "h-[50dvh] w-[100dvw] md:h-[40dvw] md:w-[calc(100%*2)]",
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
                class: "h-[50dvh] w-[100dvw] md:h-[40dvw] md:w-[calc(100%*2)]",
                mobile: "radial-gradient(50dvh circle at center, rgba(243, 243, 243, 0.25) 0%, transparent 50%)",
                desktop: "radial-gradient(45dvw circle at center, rgba(243, 243, 243, 0.25) 0%, transparent 50%)"
            }
        }
    ];