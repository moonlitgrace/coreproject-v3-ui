<script>
	// icons
	import SettingsOutline from '$icons/SettingsOutline.svelte';
	import Expand from '$icons/Expand.svelte';
	import ScrollArea from '$components/shared/ScrollArea.svelte';
	import GradientCard from '$components/shared/GradientCard.svelte';
	import Play from '$icons/Play.svelte';
</script>

<div class="w-[21.5625vw]">
	<div class="flex items-center gap-[0.625vw]">
		<span class="text-[1.25vw] font-bold">Latest Episodes</span>
		<button class="btn btn-icon h-[1.7vw] w-[1.7vw] rounded-[0.3vw] bg-surface-400">
			<SettingsOutline width="0.8vw" height="0.8vw" />
		</button>
		<button
			class="btn btn-icon h-[1.7vw] w-[6vw] rounded-[0.3vw] bg-surface-400 text-[0.9vw] font-semibold"
		>
			<Expand width="0.8vw" height="0.8vw" />
			<span>Expand</span>
		</button>
	</div>

	<ScrollArea offsetScrollbar parentClass="mt-[1.75vw]" class="max-h-[21.5625vw]">
		<GradientCard
			backgroundImage="https://dwgkfo5b3odmw.cloudfront.net/img/manga_series_header/632-SJ_SpyFamily_2000x800_jpg_wm"
			height="5vw"
			rounded="0.625vw"
			fromColor="from-surface-900/80"
			toColor="to-surface-900/40"
			direction="bg-gradient-to-t"
			class="[&:not(:first-child)]:mt-[1.25vw]"
		>
			<div class="flex items-center justify-between p-[1.3125vw]">
				<div class="flex flex-col gap-[0.4vw]">
					<span class="text-[1vw] font-semibold leading-[1.1875vw]">SpyxFamily</span>
					<div class="flex items-center gap-[0.5vw]">
						<span class="text-[0.75vw] after:ml-[0.5vw] after:content-['.']">Ep 06</span>
						<span class="text-[0.75vw]">1 hour ago</span>
					</div>
				</div>
				<button
					class="btn btn-icon h-[2.5vw] w-[2.5vw] rounded-full bg-warning-400 text-surface-900"
				>
					<Play width="1.25vw" height="1.25vw" />
				</button>
			</div>
		</GradientCard>

		<GradientCard
			backgroundImage="https://f1.econotimes.com/2020/09/xz8zrddkwz_th_1024x0.jpg"
			height="5vw"
			rounded="0.625vw"
			fromColor="from-surface-900/80"
			toColor="to-surface-900/40"
			direction="bg-gradient-to-t"
			class="[&:not(:first-child)]:mt-[1.25vw]"
		>
			<div class="flex items-center justify-between p-[1.3125vw]">
				<div class="flex flex-col gap-[0.4vw]">
					<span class="text-[1vw] font-semibold leading-[1.1875vw]">Kaguya-sama: Love Is War</span>
					<div class="flex items-center gap-[0.5vw]">
						<span class="text-[0.75vw] after:ml-[0.5vw] after:content-['.']">Ep 05</span>
						<span class="text-[0.75vw]">1 hour ago</span>
					</div>
				</div>
				<button
					class="btn btn-icon h-[2.5vw] w-[2.5vw] rounded-full bg-warning-400 text-surface-900"
				>
					<Play width="1.25vw" height="1.25vw" />
				</button>
			</div>
		</GradientCard>

		<GradientCard
			backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCWBn4FOJWr0Ocg_2XjySBAaeOKk90ShR2ryoyGk5-izOUdA1N3hUKMWHKFdpVbf26Ij5kyWcDHw&usqp=CAU&ec=48665698"
			height="5vw"
			rounded="0.625vw"
			fromColor="from-surface-900/80"
			toColor="to-surface-900/40"
			direction="bg-gradient-to-t"
			class="[&:not(:first-child)]:mt-[1.25vw]"
		>
			<div class="flex items-center justify-between p-[1.3125vw]">
				<div class="flex flex-col gap-[0.4vw]">
					<span class="text-[1vw] font-semibold leading-[1.1875vw]">Aharen-san wa Hakaraenai</span>
					<div class="flex items-center gap-[0.5vw]">
						<span class="text-[0.75vw] after:ml-[0.5vw] after:content-['.']">Ep 09</span>
						<span class="text-[0.75vw]">2 hour ago</span>
					</div>
				</div>
				<button
					class="btn btn-icon h-[2.5vw] w-[2.5vw] rounded-full bg-warning-400 text-surface-900"
				>
					<Play width="1.25vw" height="1.25vw" />
				</button>
			</div>
		</GradientCard>

		<GradientCard
			backgroundImage="https://images-geeknative-com.exactdn.com/wp-content/uploads/2021/10/18220337/Summer-Time-Rendering-banner-scaled.jpg?strip=all&lossy=1&sharp=1&ssl=1"
			height="5vw"
			rounded="0.625vw"
			fromColor="from-surface-900/80"
			toColor="to-surface-900/40"
			direction="bg-gradient-to-t"
			class="[&:not(:first-child)]:mt-[1.25vw]"
		>
			<div class="flex items-center justify-between p-[1.3125vw]">
				<div class="flex flex-col gap-[0.4vw]">
					<span class="text-[1vw] font-semibold leading-[1.1875vw]">Summer time Rendering</span>
					<div class="flex items-center gap-[0.5vw]">
						<span class="text-[0.75vw] after:ml-[0.5vw] after:content-['.']">Ep 12</span>
						<span class="text-[0.75vw]">3 hour ago</span>
					</div>
				</div>
				<button
					class="btn btn-icon h-[2.5vw] w-[2.5vw] rounded-full bg-warning-400 text-surface-900"
				>
					<Play width="1.25vw" height="1.25vw" />
				</button>
			</div>
		</GradientCard>
	</ScrollArea>

	<div class="flex items-start justify-between gap-[2vw] mt-[1.25vw] pr-[0.75vw]">
		<span class="text-[0.75vw] font-semibold">showing recently aired episodes from your Anime List</span>
		<button class="btn p-0 text-[0.75vw] font-semibold text-warning-400">Change to All</button>
	</div>
</div>
