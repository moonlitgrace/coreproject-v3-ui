<script>

	import GradientCard from '$components/shared/GradientCard.svelte';
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

	<div class="mt-[1.5vw] mb-[2vw] flex gap-[1.5625vw]">
		<GradientCard
			backgroundImage="https://i1.sndcdn.com/artworks-000640004677-8hkhau-t500x500.jpg"
			rounded="0.875vw"
			class="w-[8.4375vw] h-[12.5vw]"
			fromColor="from-surface-900"
			toColor="to-surface-900/0"
			direction="bg-gradient-to-tr"
		>
			<div class="absolute inset-0 grid w-full grid-cols-1 place-items-center">
				<span class="text-[1vw] font-semibold text-center">Azur Lane</span>
				<span class="absolute bottom-[1.25vw] text-[1vw] text-center font-medium text-surface-200">4/12</span>
			</div>
		</GradientCard>

		<GradientCard
			backgroundImage="https://e0.pxfuel.com/wallpapers/822/772/desktop-wallpaper-akagami-no-shirayuki-hime-akagami-no-shirayukihime-thumbnail.jpg"
			rounded="0.875vw"
			class="w-[8.4375vw] h-[12.5vw]"
			fromColor="from-surface-900"
			toColor="to-surface-900/0"
			direction="bg-gradient-to-tr"
		>
			<div class="absolute inset-0 grid w-full grid-cols-1 place-items-center">
				<span class="text-[1vw] font-semibold text-center">Akagami no Shirayuki-hime</span>
				<span class="absolute bottom-[1.25vw] text-[1vw] text-center font-medium text-surface-200">11/12</span>
			</div>
		</GradientCard>

		<GradientCard
			backgroundImage="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx268-O1hqy3Uea1ns.png"
			rounded="0.875vw"
			class="w-[8.4375vw] h-[12.5vw]"
			fromColor="from-surface-900"
			toColor="to-surface-900/0"
			direction="bg-gradient-to-tr"
		>
			<div class="absolute inset-0 grid w-full grid-cols-1 place-items-center">
				<span class="text-[1vw] font-semibold text-center">GOLDEN BOY: Sasurai no Obenkyou Yarou</span>
				<span class="absolute bottom-[1.25vw] text-[1vw] text-center font-medium text-surface-200">1/6</span>
			</div>
		</GradientCard>

		<GradientCard
			backgroundImage="https://socialanime.it/upload_serie/s_12775_small.jpg"
			rounded="0.875vw"
			class="w-[8.4375vw] h-[12.5vw]"
			fromColor="from-surface-900"
			toColor="to-surface-900/0"
			direction="bg-gradient-to-tr"
		>
			<div class="absolute inset-0 grid w-full grid-cols-1 place-items-center">
				<span class="text-[1vw] font-semibold text-center">7SEEDS</span>
				<span class="absolute bottom-[1.25vw] text-[1vw] text-center font-medium text-surface-200">5/12</span>
			</div>
		</GradientCard>

		<GradientCard
			backgroundImage="https://imagecache.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7ae19317-50ed-4a41-2cd6-8ae4424a4200/width=450/245470-1742259591-masterpiece,%20best%20quality,%20absurdres,%20perfect%20antomy,%20cinematic%20lighting,%20Shana,%20red%20hair,%20red%20eyes,%20kimono,%20flower-print,%20stand.jpeg"
			rounded="0.875vw"
			class="w-[8.4375vw] h-[12.5vw]"
			fromColor="from-surface-900"
			toColor="to-surface-900/0"
			direction="bg-gradient-to-tr"
		>
			<div class="absolute inset-0 grid w-full grid-cols-1 place-items-center">
				<span class="text-[1vw] font-semibold text-center">Shakugan no Shana</span>
				<span class="absolute bottom-[1.25vw] text-[1vw] text-center font-medium text-surface-200">19/24</span>
			</div>
		</GradientCard>

		<GradientCard
			backgroundImage="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12445-hKIXQW3vA4iz.jpg"
			rounded="0.875vw"
			class="w-[8.4375vw] h-[12.5vw]"
			fromColor="from-surface-900"
			toColor="to-surface-900/0"
			direction="bg-gradient-to-tr"
		>
			<div class="absolute inset-0 grid w-full grid-cols-1 place-items-center">
				<span class="text-[1vw] font-semibold text-center">Shakugan no Shana</span>
				<span class="absolute bottom-[1.25vw] text-[1vw] text-center font-medium text-surface-200">19/24</span>
			</div>
		</GradientCard>

		<GradientCard
			backgroundImage="https://cdn.myanimelist.net/images/anime/9/79330.jpg"
			rounded="0.875vw"
			class="w-[8.4375vw] h-[12.5vw]"
			fromColor="from-surface-900"
			toColor="to-surface-900/0"
			direction="bg-gradient-to-tr"
		>
			<div class="absolute inset-0 grid w-full grid-cols-1 place-items-center">
				<span class="text-[1vw] font-semibold text-center">To LOVE-Ru</span>
				<span class="absolute bottom-[1.25vw] text-[1vw] text-center font-medium text-surface-200">9/26</span>
			</div>
		</GradientCard>
	</div>
</div>