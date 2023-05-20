<script lang="ts">
    import IntersectionObserver from "../intersection_observer.svelte";
    import Image from "./image.svelte";

    export let src: string;
    export let alt: string;
    let klass: string;
    export { klass as class };
</script>

<IntersectionObserver
    once={true}
    let:intersecting
>
    {#if intersecting}
        <Image
            class={klass}
            {src}
            {alt}
        />
    {:else}
        <div
            class="placeholder h-full w-full animate-pulse !bg-surface-400"
            class:absolute={klass.includes("absolute")}
        />
    {/if}
</IntersectionObserver>
