<script>
	// icons
	import SettingsOutline from '$icons/SettingsOutline.svelte';
	import ChevronDown from '$icons/Chevron-Down.svelte';
	import ArrowUpRight from '$icons/ArrowUpRight.svelte';
</script>

<div class="w-[68.125vw] h-20 mt-[2.1875vw]">
	<div class="flex items-center gap-[0.625vw]">
		<span class="text-[1.25vw] font-bold">My List</span>
		<button class="btn btn-icon h-[1.7vw] w-[1.7vw] rounded-[0.3vw] bg-surface-400">
			<SettingsOutline width="0.8vw" height="0.8vw" />
		</button>
	</div>

	<div class="flex items-center justify-between mt-[1.6875vw]">
		<span class="text-[1vw] font-semibold text-surface-50">7 anime in Watching</span>

		<div class="flex items-center gap-[1vw]">
			<button class="btn btn-icon p-0 bg-surface-400 w-[6.625vw] h-[2.25vw] rounded-[0.375vw] text-[0.875vw] font-semibold gap-[0.625vw]">
				Watching
				<ChevronDown width="1vw" />
			</button>
			<button class="btn btn-icon p-0 bg-surface-400 w-[5.625vw] h-[2.25vw] rounded-[0.375vw] text-[0.875vw] font-semibold gap-[0.625vw]">
				Full List
				<ArrowUpRight width="1vw" />
			</button>
		</div>
	</div>
</div>