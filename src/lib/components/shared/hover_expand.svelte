<script lang="ts">
    import ScrollArea from "./scroll_area.svelte";
    import clsx from "clsx";

    let klass = "";
    export { klass as class };
    export let height = "";
</script>

<ScrollArea class="{clsx(klass, height)} overflow-hidden duration-300 ease-in-out scrollbar-none hover:overflow-y-scroll">
    <span class="line-clamp-1 md:line-clamp-none">
        <slot />
    </span>
</ScrollArea>