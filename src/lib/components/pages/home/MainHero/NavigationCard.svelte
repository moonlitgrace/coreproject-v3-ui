<script>
	import GradientCard from "$components/shared/GradientCard.svelte";

	// icons
	import Forum from "$icons/Forum.svelte";
	import Recent from "$icons/Recent.svelte";
	import Notifications from "$icons/Notifications.svelte";
</script>


<GradientCard
	backgroundImage="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDEzMzE1NzI3MzA0MzI2/animes-like-kono-subarashii-sekai-ni-shukufuku-wo.jpg"
	rounded="0.875vw"
	fromColor="from-surface-900"
	toColor="to-surface-900/10"
	direction="bg-gradient-to-tr"
	class="h-[24.3125vw] w-[16.625vw] mt-[3.4vw] ring-[0.13vw] ring-surface-50"
>
	<div class="px-[1.875vw] pt-[2vw]">
		<div class="flex flex-col gap-[0.9375vw]">
			<span class="text-[1.5vw] font-bold">Welcome</span>
			<span class="text-[0.875vw] font-semibold">Jump quickly into</span>
		</div>

		<div class="mt-[1.0625vw] flex flex-col gap-[0.625vw]">
			<div class="flex items-center gap-[1vw]">
				<button class="btn w-[2.5vw] h-[2.5vw] p-0 bg-surface-50 rounded-[0.375vw]">
					<Forum width="1.25vw" height="1.25vw" class="text-surface-900" />
				</button>
				<span class="text-[1vw] font-bold">Forums</span>
			</div>

			<div class="flex items-center gap-[1vw]">
				<button class="btn w-[2.5vw] h-[2.5vw] p-0 bg-surface-50 rounded-[0.375vw]">
					<Recent width="1.25vw" height="1.25vw" class="text-surface-900" />
				</button>
				<span class="text-[1vw] font-bold">Last watched anime</span>
			</div>

			<div class="flex items-center gap-[1vw]">
				<button class="btn w-[2.5vw] h-[2.5vw] p-0 bg-surface-50 rounded-[0.375vw]">
					<Notifications width="1.25vw" height="1.25vw" class="text-surface-900" />
				</button>
				<span class="text-[1vw] font-bold">Notifications</span>
			</div>
		</div>
	</div>
</GradientCard>
