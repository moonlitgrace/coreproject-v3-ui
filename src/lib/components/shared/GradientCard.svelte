<script lang="ts">
	export let backgroundImage: string;
	export let fromColor = 'from-surface-900/25';
	export let toColor = 'to-transparent';
	export let direction = 'bg-gradient-to-t';
	export let width = '100%';
	export let height = '100%';
	export let rounded = '10px';
	let klass: string;
	export { klass as class };

	$: console.log(rounded);
</script>

<div
	class="{klass} w-[{width}] h-[{height}] rounded-[{rounded}] relative flex items-center overflow-hidden bg-cover bg-center"
	style="background-image: url({backgroundImage})"
>
	<div class="gradient {direction} {fromColor} {toColor} absolute h-full w-full" />
	<div class="absolute w-full">
		<slot />
	</div>
</div>
