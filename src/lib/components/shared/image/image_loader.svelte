<script lang="ts">
    import IntersectionObserver from "../intersection_observer.svelte";
    import Image from "./image.svelte";

    export let src: string;
    export let alt: string;
    let klass: string;
    export { klass as class };
    export let placeholder_class: string;
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
    <!-- we can add another html place holder here with alt name -->
        <span class={placeholder_class}>{alt}</span>
    {/if}
</IntersectionObserver>
