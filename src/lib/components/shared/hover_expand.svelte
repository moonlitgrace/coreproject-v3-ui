<script lang="ts">
    import ScrollArea from "./scroll_area.svelte";

    let klass = "";
    export { klass as class };
    export let height = "";
    export let hover_height = "";

    $: base_class = `${klass} ${height} ${hover_height}`;
</script>

<ScrollArea class="{base_class} overflow-hidden duration-300 ease-in-out scrollbar-none hover:overflow-y-scroll">
    <span class="line-clamp-1 md:line-clamp-none">
        <slot />
    </span>
</ScrollArea>