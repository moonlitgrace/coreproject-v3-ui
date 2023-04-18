<script>
	// icons
	import SettingsOutline from '$icons/SettingsOutline.svelte';
	import Expand from '$icons/Expand.svelte';
</script>

<div class="w-[21.5625vw]">
	<div class="flex items-center gap-[0.625vw]">
		<span class="text-[1.25vw] font-bold">Latest Episodes</span>
		<button class="btn btn-icon bg-surface-400 w-[1.7vw] h-[1.7vw] rounded-[0.3vw]">
			<SettingsOutline width="0.9vw" height="0.9vw" />
		</button>
		<button class="btn btn-icon bg-surface-400 w-[6vw] h-[1.7vw] text-[0.9vw] font-semibold rounded-[0.3vw]">
			<Expand width="0.8vw" height="0.8vw" />
			<span>Expand</span>
		</button>
	</div>
</div>