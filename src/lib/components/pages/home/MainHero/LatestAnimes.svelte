<script>
	import PlayCircle from "$icons/PlayCircle.svelte";
	import Info from '$icons/Info.svelte';
	import Edit from '$icons/Edit.svelte';
</script>

<div>
	<div class="relative w-[42.1875vw] h-[25.875vw] bg-cover bg-center rounded-[0.875vw] border-b-[0.2vw] border-surface-50" style="background-image: url('https://cdn-cfmok.nitrocdn.com/juJsjTwdTqWjkJBaBrLnvLeovPsDevAD/assets/images/optimized/rev-37d38d6/wp-content/uploads/1587837891_336_Demon-Slayer-Kimetsu-No-Yaiba-4K-Wallpapers-2020.jpg')">
		<div
			class="gradient absolute h-full w-full bg-gradient-to-t from-surface-900/95 to-surface-900/25"
		/>
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

			<p class="!text-[0.85vw] !leading-[1vw] text-surface-50/75 mt-[0.875vw]">
				It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.
			</p>

			<div class="mt-[2.625vw] flex gap-[1vw]">
				<button class="btn btn-icon bg-warning-400 text-surface-900 w-[5.4375vw] h-[3.125vw] rounded-[0.625vw] gap-[0.625vw] text-[0.875vw] font-bold">
					<PlayCircle width="1.25vw" height="1.25vw" class="text-surface-900" />
					Ep 1
				</button>

				<button class="btn btn-icon bg-surface-900 border-[0.2vw] border-surface-50/50 text-surface-50 w-[6.5vw] h-[3.125vw] rounded-[0.375vw] gap-[0.625vw] text-[0.875vw] font-bold">
					<Info width="1.25vw" height="1.25vw" class="text-surface-50" />
					Details
				</button>

				<button class="btn btn-icon bg-surface-900 border-[0.2vw] border-surface-50/50 text-surface-50 w-[3.125vw] h-[3.125vw] rounded-[0.375vw] gap-[0.625vw] text-[0.875vw] font-bold">
					<Edit variant="with_underline_around_pencil" width="1.25vw" height="1.25vw" class="text-surface-50" />
				</button>
			</div>
		</div>
	</div>
</div>