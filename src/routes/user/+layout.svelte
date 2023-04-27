<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { blur } from 'svelte/transition';

	let choice_number: number;
	let choices: Array<{
		type: string;
		name: string;
		image: string;
		credit?: string;
	}> = [
		{
			type: 'anime',
			name: 'Demon Slayer',
			image:
				'https://cdn-cfmok.nitrocdn.com/juJsjTwdTqWjkJBaBrLnvLeovPsDevAD/assets/images/optimized/rev-37d38d6/wp-content/uploads/1587837891_336_Demon-Slayer-Kimetsu-No-Yaiba-4K-Wallpapers-2020.jpg',
			credit: 'https://www.reddit.com/r/DemonSlayerAnime/comments/tpgpid/demon_slayer_4k_wallpaper/'
		},
		{
			type: 'anime',
			name: 'Attack on Titan',
			image:
				'https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDQ0NTI1OTEyMDczODYy/attack-on-titan-season-1-review.jpg'
		},
		{
			type: 'anime',
			name: 'The Rise of the Shield Hero',
			image: 'https://anitrendz.net/news/wp-content/uploads/2021/03/Shield-Hero-2.jpg'
		}
	];

	const change_index = () => {
		const index = Math.floor(Math.random() * choices.length);
		choice_number = index;
	};
	let interval: NodeJS.Timer | undefined;
	onMount(() => {
		interval = setInterval(() => {
			change_index();
		}, 10000);
		change_index();
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="relative grid h-[90vh] w-full">
	{#each choices as item, index} 
		{#if index === choice_number} 
			{@const type = () => { 
				switch (item.type) { 
					case "anime": 
						return "the anime"; 
					case "pixiv": 
						return "the artist"; 
					default: return""; 
					} 
				}
			}

			<div class="fixed relative w-1/2" transition:blur|local={{duration:500}}>
				<div
					class="h-[90vh] w-full bg-cover bg-center bg-no-repeat"
					style="background-image: url('{item.image ?? ''}')"
				/>
				<div class="absolute inset-0 bg-gradient-to-r from-surface-900 to-surface-900/60" />
				<div class="absolute inset-0 bg-gradient-to-t from-surface-900/50 to-surface-900/0" />
				<div class="absolute bottom-[1.85vw] left-[2vw]">
					<div class="flex flex-col">
						<span class="text-[0.75vw] font-semibold uppercase tracking-widest text-surface-300/75">
							Background from {type()}
						</span>
						<span class="text-[1vw] font-bold uppercase tracking-widest text-warning-400">
							{item.name}
						</span>
					</div>
				</div>
			</div>
		{/if} 
	{/each}
	<div class="absolute right-0 h-full w-1/2 px-[8vw] py-[3vw]">
		<slot />
	</div>
</div>
