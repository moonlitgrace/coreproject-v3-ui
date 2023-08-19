<script lang="ts">
    import ScrollArea from "$components/shared/scroll_area.svelte";
    import Tick from "$icons/tick.svelte";
    import { createEventDispatcher } from "svelte";
    import type { Writable } from "svelte/store";
    export let input_store: Writable<string>;
    export let items: Record<string, string> | undefined;
    export let selected_items: Array<[string, string]>;

    const dispatch = createEventDispatcher();

    function handle_select(item: [string, string]) {
        dispatch("select", item);
    }

    $: console.log($input_store);
</script>

<div class="w-[8.5rem] overflow-x-hidden rounded-lg bg-surface-900 md:w-[11vw] md:rounded-[0.5vw]">
    {#if items}
        <ScrollArea
            class="flex flex-col md:p-[0.5vw]"
            parentClass="md:max-h-[30vw] bg-surface-400/75"
        >
            {#each Object.entries(items) as item}
                {@const key = item[0]}
                {@const value = item[1]}

                {@const is_selected = selected_items.some((selected_item) => selected_item[0] === key)}

                <button
                    on:click={() => handle_select(item)}
                    class="btn flex items-center justify-between p-3 text-sm leading-none text-surface-50 hover:bg-surface-400 md:rounded-[0.35vw] md:px-[1vw] md:py-[0.75vw] md:text-[0.9vw]"
                >
                    {value}

                    {#if is_selected}
                        <tick class="rounded-full bg-primary-500 p-1 text-white md:p-[0.3vw]">
                            <Tick class="w-2 md:w-[0.5vw]" />
                        </tick>
                    {/if}
                </button>
            {/each}
        </ScrollArea>
    {/if}
</div>
