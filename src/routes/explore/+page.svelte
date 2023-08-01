<script lang="ts">
	import { OpengraphGenerator } from "$functions/opengraph";
	import { page } from "$app/stores";

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
</section>