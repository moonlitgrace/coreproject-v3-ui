<script lang="ts">
    import ScrollArea from "$components/shared/scroll_area.svelte";

	export let items: Array<{
        text: string;
        value: string;
    }> | undefined;
</script>

<div class="md:w-[11vw] bg-surface-400 md:rounded-[0.5vw]">
	{#if items}
		<ScrollArea
			offsetScrollbar
			parentClass="md:max-h-[5vw]"
			class="md:p-[0.75vw]"
		>
			{#each items as item}
				<span>{item.text}</span>
			{/each}
		</ScrollArea>
	{/if}
</div>