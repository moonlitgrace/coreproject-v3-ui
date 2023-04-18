<script>
	import PlayCircle from '$icons/PlayCircle.svelte';
	import Info from '$icons/Info.svelte';
	import Edit from '$icons/Edit.svelte';
	import ChevronLeft from '$icons/Chevron-Left.svelte';
	import ChevronRight from '$icons/Chevron-Right.svelte';
</script>

<div>
	<div
		class="relative flex h-[25.875vw] w-[42.1875vw] items-center rounded-[0.875vw] border-b-[0.2vw] border-surface-50 bg-cover bg-center"
		style="
			background-image: url('https://cdn-cfmok.nitrocdn.com/juJsjTwdTqWjkJBaBrLnvLeovPsDevAD/assets/images/optimized/rev-37d38d6/wp-content/uploads/1587837891_336_Demon-Slayer-Kimetsu-No-Yaiba-4K-Wallpapers-2020.jpg');
		"
	>
		<div
			class="gradient absolute h-full w-full bg-gradient-to-t from-surface-900/95 to-surface-900/25"
		/>
		<button
			class="btn btn-icon absolute -left-[1vw] z-20 h-[2.25vw] w-[2.25vw] rounded-[0.375vw] bg-secondary-800"
		>
			<ChevronLeft width="1.25vw" height="1.25vw" color="text-white" />
		</button>
		<button
			class="btn btn-icon absolute -right-[1vw] z-20 h-[2.25vw] w-[2.25vw] rounded-[0.375vw] bg-secondary-800"
		>
			<ChevronRight width="1.25vw" height="1.25vw" color="text-white" />
		</button>
		<div class="absolute bottom-0 px-[3.75vw] py-[2.625vw]">
			<span class="text-[2vw] font-bold leading-[2.375vw]">Kimetsu no Yaiba</span>
			<p class="flex flex-wrap items-center gap-2 md:pt-[0.5vw]">
				<span
					class="font-semibold md:text-[0.9375vw] md:leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']"
				>
					TV
				</span>
				<span
					class="font-semibold md:text-[0.9375vw] md:leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']"
				>
					26 eps
				</span>
				<span
					class="font-semibold md:text-[0.9375vw] md:leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']"
				>
					Completed
				</span>
				<span
					class="font-semibold capitalize md:text-[0.9375vw] md:leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']"
				>
					Spring 2019
				</span>
				<span
					class="font-semibold md:text-[0.9375vw] md:leading-[1.125vw] [&:not(:last-child)]:after:ml-1 [&:not(:last-child)]:after:content-['▪']"
				>
					ufotable
				</span>
			</p>

			<p class="mt-[0.875vw] !text-[0.85vw] !leading-[1vw] text-surface-50/75">
				It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a
				living, finds his family slaughtered by a demon. To make matters worse, his younger sister
				Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by
				this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his
				sister back into a human, and kill the demon that massacred his family.
			</p>

			<div class="mt-[2.625vw] flex gap-[1vw]">
				<button
					class="btn btn-icon h-[3.125vw] w-[5.4375vw] gap-[0.625vw] rounded-[0.625vw] bg-warning-400 text-[0.875vw] font-bold text-surface-900"
				>
					<PlayCircle width="1.25vw" height="1.25vw" class="text-surface-900" />
					Ep 1
				</button>

				<button
					class="btn btn-icon h-[3.125vw] w-[6.5vw] gap-[0.625vw] rounded-[0.375vw] border-[0.2vw] border-surface-50/50 bg-surface-900 text-[0.875vw] font-bold text-surface-50"
				>
					<Info width="1.25vw" height="1.25vw" class="text-surface-50" />
					Details
				</button>

				<button
					class="btn btn-icon h-[3.125vw] w-[3.125vw] gap-[0.625vw] rounded-[0.375vw] border-[0.2vw] border-surface-50/50 bg-surface-900 text-[0.875vw] font-bold text-surface-50"
				>
					<Edit
						variant="with_underline_around_pencil"
						width="1.25vw"
						height="1.25vw"
						class="text-surface-50"
					/>
				</button>
			</div>
		</div>
	</div>
</div>
