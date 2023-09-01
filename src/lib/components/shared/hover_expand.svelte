<script lang="ts">
    import { cn } from "$functions/classnames";
    import ScrollArea from "./scroll_area.svelte";

    let klass: string = "";
    export { klass as class };
    export let height: string = "";
    export let options: {
        duration: number,
        line_clamp: number
    } = {
        duration: 300,
        line_clamp: 1
    };
</script>

<ScrollArea class="{cn( klass, height )} overflow-hidden duration-{options.duration} ease-in-out scrollbar-none hover:overflow-y-scroll">
    <span class="line-clamp-{options.line_clamp} md:line-clamp-none">
        <slot />
    </span>
</ScrollArea>