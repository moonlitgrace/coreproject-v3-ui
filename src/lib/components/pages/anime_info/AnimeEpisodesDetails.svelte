<script lang="ts">
	// icons
	import SettingsOutline from '$icons/SettingsOutline.svelte';
	import ChevronDown from '$icons/Chevron-Down.svelte';
	import Search from '$icons/Search.svelte';
</script>

<div class="md:mt-[6vw] w-full">
	<div class="flex items-center gap-3">
		<span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Episodes</span>
		<button class="btn btn-icon rounded p-0 bg-surface-400 md:w-[1.5vw] md:h-[1.5vw]">
			<SettingsOutline width="11" height="11" class="opacity-75" />
		</button>

	</div>

	<div class="md:mt-[3vw] flex justify-between w-full">
		<div class="flex items-center gap-[1.25vw]">
			<p class="flex items-end gap-[0.75vw]">
				<span class="md:text-[2vw] md:leading-[1.9vw] leading-[0.9vw] font-bold">23</span>
				<span class="md:text-[1vw] font-semibold">episodes</span>
				<span class="md:text-[0.6vw]">▪</span>
			</p>

			<div>
				<div class="w-max relative flex items-center">
					<span class="pr-[4.5vw] text-[0.75vw] font-medium">available in</span>
					<div class="absolute right-0 h-[0.08vw] w-[4vw] bg-white"></div>
				</div>

				<div>
					<div class="h-[1.8vw] flex items-center gap-[0.75vw]">
						<button class="btn btn-sm text-[0.8vw] leading-[0.9vw] rounded-[0.25vw] px-[0.9vw] h-full font-bold bg-surface-400 uppercase">
							sub
						</button>

						<button class="btn btn-sm text-[0.8vw] leading-[0.9vw] rounded-[0.25vw] px-[0.9vw] h-full font-bold bg-surface-400 uppercase">
							dub
						</button>

						<span class="md:text-[0.6vw]">▪</span>

						<button class="btn btn-sm text-[0.8vw] leading-[0.9vw] rounded-[0.25vw] px-[0.9vw] h-full font-bold bg-surface-400">
							1080p
						</button>

						<button class="btn btn-sm text-[0.8vw] leading-[0.9vw] rounded-[0.25vw] px-[0.9vw] h-full font-bold bg-surface-400">
							720p
						</button>
						<button class="btn btn-sm text-[0.8vw] leading-[0.9vw] rounded-[0.25vw] px-[0.9vw] h-full font-bold bg-surface-400">
							480p
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="flex items-end gap-[0.75vw]">
			<div class="flex flex-col gap-[0.5vw]">
				<span class="text-[0.75vw] text-surface-50 leading-[0.9vw]">Type</span>
				<button class="btn text-[0.9vw] leading-[0.9vw] rounded-[0.5vw] px-[0.9vw] h-[2.4vw] font-semibold bg-surface-400">
					<span>Subbed</span>
					<ChevronDown width="15" color="lightgray" />
				</button>
			</div>
			<div class="flex flex-col gap-[0.5vw]">
				<span class="text-[0.75vw] text-surface-50 leading-[0.9vw]">Type</span>
				<button class="btn text-[0.9vw] leading-[0.9vw] rounded-[0.5vw] px-[0.9vw] h-[2.4vw] font-semibold bg-surface-400">
					<span>Subbed</span>
					<ChevronDown width="15" color="lightgray" />
				</button>
			</div>
			<button class="btn btn-icon h-[2.4vw] w-[2.4vw] p-0 leading-[0.9vw] rounded-[0.5vw] font-semibold bg-surface-400">
				<Search width="15" color="lightgray" />
			</button>
		</div>
	</div>
</div>