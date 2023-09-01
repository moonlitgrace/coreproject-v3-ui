<script lang="ts">
    import { cn } from "$functions/classnames";
    import ScrollArea from "./scroll_area.svelte";

    let klass = "";
    export { klass as class };
    export let height = "";
</script>

<ScrollArea class="{cn( klass, height )} overflow-hidden duration-300 ease-in-out scrollbar-none hover:overflow-y-scroll">
    <span class="line-clamp-1 md:line-clamp-none">
        <slot />
    </span>
</ScrollArea>