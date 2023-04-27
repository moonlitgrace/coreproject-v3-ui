<script lang="ts">
	import { onDestroy, onMount } from "svelte";
    import { blur } from "svelte/transition";

    let choice_number: number;
    let choices: Array<{
        type: string;
        name: string;
        image: string;
        credit?: string;
    }> = [
        {
            type: "anime",
            name: "Demon Slayer",
            image: "/posters/demon-slayer.webp",
            credit: "https://www.reddit.com/r/DemonSlayerAnime/comments/tpgpid/demon_slayer_4k_wallpaper/"
        },
        {
            type: "anime",
            name: "Attack on Titan",
            image: "/posters/attack-on-titan.jpg"
        },
        {
            type: "anime",
            name: "Comic Girls",
            image: "/posters/Comic-Girls-Image.png"
        }
    ];

    const change_index = () => {
        const index = Math.floor(Math.random() * choices.length);
        choice_number = index;
    };
    let interval: NodeJS.Timer | undefined;
    onMount(() => {
        interval = setInterval(() => {
            change_index();
        }, 20000);
        change_index();
    });
    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<slot />