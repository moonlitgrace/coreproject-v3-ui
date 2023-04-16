<script>
	// icons
	import SettingsOutline from '$icons/SettingsOutline.svelte';
	import ChevronDown from '$icons/Chevron-Down.svelte';
</script>

<div class="md:my-[6vw]">
	<div class="flex items-center gap-3">
		<span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Details</span>
		<button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
			<SettingsOutline width="0.9vw" height="0.9vw" class="opacity-75" />
		</button>
	</div>

	<div class="md:mt-[1.56vw]">
		<animedetails class="flex flex-col gap-[1.125vw]">
			<div class="text-[0.9375vw] text-surface-50">
				<span class="font-semibold text-white">Format</span> <br> TV
			</div>
			<div class="text-[0.9375vw] text-surface-50">
				<span class="font-semibold text-white">Episodes</span> <br> 22
			</div>
			<div class="text-[0.9375vw] text-surface-50">
				<span class="font-semibold text-white">Episode Duration</span> <br> 26 mins
			</div>
			<div class="text-[0.9375vw] text-surface-50">
				<span class="font-semibold text-white">Status</span> <br> Finished
			</div>
			<div class="text-[0.9375vw] text-surface-50">
				<span class="font-semibold text-white">Start Date</span> <br> Apr 23, 2012
			</div>
			<div class="text-[0.9375vw] text-surface-50">
				<span class="font-semibold text-white">End Date</span> <br> Sep 16, 2012
			</div>
			<div class="text-[0.9375vw] text-surface-50">
				<span class="font-semibold text-white">Season</span> <br> Spring 2012
			</div>
			<div class="text-[0.9375vw] text-surface-50">
				<span class="font-semibold text-white">Studios</span> <br> Kyoto Animation
			</div>
			<div class="text-[0.9375vw] flex flex-col text-surface-50">
				<span class="font-semibold text-white">Producers</span>
				<span>Lantis</span>
				<span>Kadokawa Shoten</span>
				<span>Klock Worx</span>
				<span>chara-ani.com</span>
				<span>Animation Do</span>
			</div>
			<div class="text-[0.9375vw] text-surface-50">
				<span class="font-semibold text-white">Source</span> <br> Night Novel
			</div>
			<div class="text-[0.9375vw] flex flex-col text-surface-50">
				<span class="font-semibold text-white">Tags</span>
				<span>School Club <span class="font-semibold">95%</span></span>
				<span>Detective <span class="font-semibold">91%</span></span>
				<span>School <span class="font-semibold">87%</span></span>
				<span>Male Protogonist <span class="font-semibold">81%</span></span>
				<span>Surreal Comedy <span class="font-semibold">79%</span></span>
				<span>Philosophy <span class="font-semibold">78%</span></span>
				<span>Comming of Age <span class="font-semibold">73%</span></span>
				<span>Episodic <span class="font-semibold">67%</span></span>
				<span>Classic Literature <span class="font-semibold">65%</span></span>
				<span>Felmale Protogonist <span class="font-semibold">65%</span></span>
				<span>Hetrosexual <span class="font-semibold">65%</span></span>
				<span>Rural <span class="font-semibold">52%</span></span>
				<span>Primarily Teen Cast <span class="font-semibold">50%</span></span>
				<span>Cosplay <span class="font-semibold">37%</span></span>
				
				<button class="btn btn-sm mt-[0.3vw] gap-1 p-0 bg-surface-400 w-[6vw] h-[1.875vw] text-[0.75vw] rounded-[0.375vw]">
					Load more
					<ChevronDown width="0.9vw" color="surface-50" />
				</button>
			</div>
		</animedetails>
	</div>
</div>