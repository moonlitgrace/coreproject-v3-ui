<script lang="ts">
    import ScrollArea from "$components/shared/scroll_area.svelte";
    import { createEventDispatcher } from "svelte";

	export let items: Record<string, string> | undefined;

	const dispatch = createEventDispatcher();

	function handle_select(item: [string, string]) {
	  	dispatch("select", item);
	}
</script>

<div class="md:w-[11vw] bg-surface-900 md:rounded-[0.5vw] overflow-x-hidden">
	{#if items}
		<ScrollArea
			class="md:p-[0.5vw] flex flex-col"
			parentClass="md:max-h-[30vw] bg-surface-400/75"
		>
			{#each Object.entries(items) as item}
				{@const key = item[0]}
				{@const value = item[1]}

				<button
					on:click={() => handle_select(item)}
					class="btn leading-none flex justify-start hover:bg-surface-400 md:rounded-[0.35vw] md:px-[1vw] md:py-[0.75vw] md:text-[0.9vw] text-surface-50">
					{value}
				</button>
			{/each}
		</ScrollArea>
	{/if}
</div>