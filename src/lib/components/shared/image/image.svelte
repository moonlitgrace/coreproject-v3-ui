<script lang="ts">
    import { fade } from "svelte/transition";

    export let src: string;
    export let alt: string;
    let klass: string;
    export { klass as class };

    let image: HTMLImageElement;
</script>

<img
    class={klass}
    {src}
    {alt}
    bind:this={image}
    transition:fade
/>
