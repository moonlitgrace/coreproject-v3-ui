<script lang="ts">
	export let backgroundImage: string;
	export let fromColor = 'from-surface-900/25';
	export let toColor = 'to-transparent';
	export let direction = 'bg-gradient-to-t';
	export let width = '100%';
	export let height = '100%';
	export let rounded = '10px';
	let klass: string;
	export {klass as class}

	$: console.log(rounded)
</script>

<div class="{klass} relative flex items-center w-[{width}] h-[{height}] bg-cover bg-center rounded-[{rounded}] overflow-hidden" style="background-image: url({backgroundImage})">
	<div
		class="gradient absolute h-full w-full {direction} {fromColor} {toColor}"
	/>
	<div class="absolute">
		<slot />
	</div>
</div>