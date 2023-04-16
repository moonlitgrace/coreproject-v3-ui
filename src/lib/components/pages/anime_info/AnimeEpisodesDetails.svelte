<script lang="ts">
	// icons
	import SettingsOutline from '$icons/SettingsOutline.svelte';
	import ChevronDown from '$icons/Chevron-Down.svelte';
	import Search from '$icons/Search.svelte';
</script>

<div class="md:mt-[6vw]">
	<div class="flex items-center gap-3">
		<span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Episodes</span>
		<button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
			<SettingsOutline width="0.9vw" height="0.9vw" class="opacity-75" />
		</button>
	</div>

	<div class="flex justify-between md:mt-[3vw]">
		<div class="flex items-end gap-[1.25vw]">
			<p class="flex items-end gap-[0.75vw]">
				<span class="font-bold leading-[0.9vw] md:text-[2vw] md:leading-[1.9vw]">23</span>
				<span class="font-semibold md:text-[1vw]">episodes</span>
				<span class="md:text-[0.6vw]">▪</span>
			</p>

			<div>
				<div class="relative flex w-max items-center">
					<span class="pr-[4.5vw] text-[0.75vw] font-medium">available in</span>
					<div class="absolute right-0 h-[0.08vw] w-[4vw] bg-white" />
				</div>

				<div>
					<div class="flex h-[1.8vw] items-center gap-[0.75vw]">
						<button
							class="btn btn-sm h-full rounded-[0.25vw] bg-surface-400 px-[0.9vw] text-[0.8vw] font-bold uppercase leading-[0.9vw]"
						>
							sub
						</button>

						<button
							class="btn btn-sm h-full rounded-[0.25vw] bg-surface-400 px-[0.9vw] text-[0.8vw] font-bold uppercase leading-[0.9vw]"
						>
							dub
						</button>

						<span class="md:text-[0.6vw]">▪</span>

						<button
							class="btn btn-sm h-full rounded-[0.25vw] bg-surface-400 px-[0.9vw] text-[0.8vw] font-bold leading-[0.9vw]"
						>
							1080p
						</button>

						<button
							class="btn btn-sm h-full rounded-[0.25vw] bg-surface-400 px-[0.9vw] text-[0.8vw] font-bold leading-[0.9vw]"
						>
							720p
						</button>
						<button
							class="btn btn-sm h-full rounded-[0.25vw] bg-surface-400 px-[0.9vw] text-[0.8vw] font-bold leading-[0.9vw]"
						>
							480p
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="flex items-end gap-[0.75vw]">
			<div class="flex flex-col gap-[0.5vw]">
				<span class="text-[0.75vw] leading-[0.9vw] text-surface-50">Type</span>
				<button
					class="btn h-[2.4vw] rounded-[0.5vw] bg-surface-400 px-[0.9vw] text-[0.9vw] font-semibold leading-[0.9vw]"
				>
					<span>Subbed</span>
					<ChevronDown width="1vw" color="lightgray" />
				</button>
			</div>
			<div class="flex flex-col gap-[0.5vw]">
				<span class="text-[0.75vw] leading-[0.9vw] text-surface-50">Display Mode</span>
				<button
					class="btn h-[2.4vw] rounded-[0.5vw] bg-surface-400 px-[0.9vw] text-[0.9vw] font-semibold leading-[0.9vw]"
				>
					<span>Thumbnails</span>
					<ChevronDown width="1vw" color="lightgray" />
				</button>
			</div>
			<button
				class="btn btn-icon h-[2.4vw] w-[2.4vw] rounded-[0.5vw] bg-surface-400 p-0 font-semibold leading-[0.9vw]"
			>
				<Search width="1vw" color="lightgray" />
			</button>
		</div>
	</div>
</div>
