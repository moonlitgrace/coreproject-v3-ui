<script lang="ts">
	import StarRating from 'svelte-star-rating';

	// icons
	import SettingsOutline from '$icons/SettingsOutline.svelte';
	import TrendingUp from '$icons/Trending-Up.svelte';
	import Edit from '$icons/Edit.svelte';
	import ExternalLink from '$icons/ExternalLink.svelte';
</script>

<div>
	<div class="flex items-center gap-3">
		<span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Ratings</span>
		<button class="btn btn-icon rounded-[0.1875vw] bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
			<SettingsOutline width="0.9vw" height="0.9vw" class="opacity-75" />
		</button>
	</div>

	<div class="md:mt-[1.56vw]">
		<div class="flex items-center gap-1">
			<span class="!border-b-2 !border-white/25 !pb-2 font-bold md:text-[2vw] md:leading-[1.5vw]"
				>92%</span
			>
			<span
				class="divider-vertical !m-0 !border-surface-50 font-semibold text-surface-50 md:pl-1 md:text-[0.75vw] md:leading-[0.8vw]"
				>2.8k ratings</span
			>
		</div>

		<div class="md:mt-[1.125vw]">
			<div class="flex items-center md:gap-[0.25vw]">
				<span class="md:text-[1vw] md:leading-[1.5vw]">#80</span>
				<span class="text-surface-50 md:text-[0.625vw] md:leading-[0.75vw]"
					>Trending of all time</span
				>
			</div>
			<div class="flex items-center md:gap-[0.25vw]">
				<span class="md:text-[1vw] md:leading-[1.5vw]">#108</span>
				<span class="text-surface-50 md:text-[0.625vw] md:leading-[0.75vw]"
					>Most popular anime</span
				>
			</div>
		</div>

		<button
			class="btn bg-secondary-100 text-surface-500 md:mt-[1.125vw] md:h-[2vh] md:w-[9vw] md:rounded-[0.18vw] md:text-[0.75vw] md:leading-[0.9vw]"
		>
			<div class="flex items-center justify-center gap-1">
				<TrendingUp width="0.75vw" height="0.75vw" />
				Detailed Distribution
			</div>
		</button>

		<div class="md:mt-[0.4vw]">
			<span class="font-semibold md:text-[0.75vw] md:leading-[0.9vw]">Your rating</span>
			<div class="flex items-center gap-3 md:mt-[0.375vw]">
				<StarRating
					rating={4.5}
					config={{ fullColor: '#DCD9F7', emptyColor: 'rgb(220, 217, 247, 0.4)' }}
					style={'margin: 0; gap: 5px'}
				/>
				<span class="font-bold md:text-[0.95vw] md:leading-[1.125vw]"
					>92%</span
				>
				<button
					class="btn btn-icon bg-secondary-100 p-1 text-surface-500 md:w-[1.375vw] md:rounded-[0.19vw]"
				>
					<Edit
						width="0.75vw"
						height="0.75vw"
						variant="without_underline_around_pencil"
						color="bg-surface-500"
					/>
				</button>
			</div>
		</div>

		<button
			class="btn btn-sm flex items-center gap-2 p-0 md:mt-[1.25vw] md:text-[0.75vw] md:leading-[0.9vw]"
		>
			Add a review
			<ExternalLink width="0.75vw" height="0.75vw" />
		</button>
	</div>
</div>
