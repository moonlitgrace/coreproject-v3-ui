<script lang="ts">
    import { cn } from "$functions/classnames";
    import ScrollArea from "./scroll_area.svelte";

    let klass: string = "";
    export { klass as class };
    export let height: string = "";
    export let duration: number = 300;
    export let line_clamp: number = 1;
</script>

<ScrollArea class="{cn( klass, height )} overflow-hidden duration-{duration} ease-in-out scrollbar-none hover:overflow-y-scroll">
    <span class="line-clamp-{line_clamp} md:line-clamp-none">
        <slot />
    </span>
</ScrollArea>