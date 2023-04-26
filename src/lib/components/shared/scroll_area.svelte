<script lang="ts">
	import type { UIEventHandler } from 'svelte/elements';

	let klass = '';
	export let parentClass = '';
	export { klass as class };
	export let offsetScrollbar = false;
	export let gradientMask = false;

	let mask_top = 0;
	let scrollbar_type: string;

	const onScroll: UIEventHandler<HTMLDivElement> = (event) => {
		if (gradientMask) {
			const el = event?.currentTarget as HTMLElement;
			mask_top = Math.round((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
		}
	};

	$: if (gradientMask) {
		if (mask_top > 90 && mask_top <= 100) {
			scrollbar_type = 'mask-top';
		} else if (mask_top >= 10 && mask_top <= 90) {
			scrollbar_type = 'mask-middle';
		} else {
			scrollbar_type = 'mask-bottom';
		}
	}
</script>

<div
	on:scroll={onScroll}
	class="{parentClass} {scrollbar_type} {offsetScrollbar
		? 'pr-[0.75vw]'
		: 'pr-0'} scrollbar overflow-y-scroll overscroll-y-contain"
>
	<div class="{klass} whitespace-pre-line">
		<slot />
	</div>
</div>

<style lang="scss">
	.scrollbar {
		scrollbar-width: thin;
		scrollbar-color: rgba(255, 255, 255, 0.12);
		/* fill parent */
		display: block;
		width: 100%;
		height: 100%;
		/* set to some transparent color */
		border-color: rgba(255, 255, 255, 0);
		/* here we make the color transition */
		transition: border-color 0.2s linear;
		&:hover {
			/* the color we want the scrollbar on hover */
			border-color: rgba(255, 255, 255, 0.15);
		}
		&::-webkit-scrollbar,
		&::-webkit-scrollbar-corner,
		&::-webkit-scrollbar-thumb {
			width: 5px;
			border-radius: 16px;
			/* add border to act as background-color */
			border-right-style: inset;
			/* sum viewport dimensions to guarantee border will fill scrollbar */
			border-right-width: calc(100vw + 100vh);
			/* inherit border-color to inherit transitions */
			border-color: inherit;
		}
		&::-webkit-scrollbar-track {
			background: transparent !important;
		}
	}

	.mask-top {
		mask-image: linear-gradient(0deg, rgba(7, 5, 25, 0.95) 80%, rgba(0, 0, 0, 0) 100%);
		mask-repeat: no-repeat;
		mask-position: top;
	}
	.mask-bottom {
		mask-image: linear-gradient(180deg, rgba(7, 5, 25, 0.95) 80%, rgba(0, 0, 0, 0) 100%);
		mask-repeat: no-repeat;
		mask-position: bottom;
	}
	.mask-middle {
		mask-image: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.6) 20%,
			rgba(7, 5, 25, 0.95) 40%,
			rgba(7, 5, 25, 0.95) 80%,
			rgba(0, 0, 0, 0.6) 100%
		);
		mask-repeat: no-repeat;
		mask-position: bottom;
	}
</style>
