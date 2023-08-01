<script lang="ts">
	import { OpengraphGenerator } from "$functions/opengraph";
	import { page } from "$app/stores";
	import Search from "$icons/search.svelte";

	const opengraph_html = new OpengraphGenerator({
        title: "Explore the Anime Universe: Your Gateway to Otaku Delights!",
        site_name: "CoreProject",
        image_url: "", // Use Opengraph later
        url: $page.url.href,
        locale: "en_US",
        description: "The most modern anime streaming site"
    }).generate_opengraph();
</script>

<svelte:head>
    {@html opengraph_html}
</svelte:head>

<section>
	<section-headings class="flex flex-col md:gap-[0.5vw]">
		<span class="md:text-[2vw] font-bold leading-none">Anime <span class="text-warning-400">Explore</span></span>
		<span class="leading-none md:text-[1.1vw] font-semibold text-surface-50">Unleash your inner Otaku: Explore anime wonders</span>
	</section-headings>

	<filter-options class="md:mt-[2vw] block">
		<search class="flex flex-col md:gap-[0.5vw]">
			<span class="md:text-[1.1vw] leading-none font-semibold text-surface-50">Search Animes</span>
			<div class="relative flex items-center">
				<Search class="md:w-[1.25vw] text-surface-50 absolute md:ml-[1vw]" />
				<input
					type="text"
					placeholder="Looking for specific anime? start here..."
					class="md:pl-[3vw] focus:ring-0 bg-surface-400 placeholder:text-surface-50 md:rounded-[0.5vw] border-none md:py-[0.8vw] md:text-[1vw] leading-none"
				/>
			</div>
		</search>
	</filter-options>
</section>