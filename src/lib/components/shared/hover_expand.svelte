<script lang="ts">
    import { cn } from "$functions/classnames";
    import ScrollArea from "./scroll_area.svelte";

    let klass: string = "";
    export { klass as class };
    export let height: string = "";
    export let duration: string = "duration-300";
    export let line_clamp: number = 1;
</script>

<ScrollArea class="{cn( klass, height, duration )} overflow-hidden ease-in-out scrollbar-none hover:overflow-y-scroll">
    <span class="line-clamp-{line_clamp} md:line-clamp-none mask-right">
        <slot />
    </span>
</ScrollArea>

<style lang="scss">
    .mask-right {
        &:not(:hover) {
            /* if we need to change the width, we should change the 75% to higher  */
            mask-image: linear-gradient(90deg, rgba(7, 5, 25) 75%, rgba(0, 0, 0, 0) 100%);
            mask-position: right;
        }
    }
</style>