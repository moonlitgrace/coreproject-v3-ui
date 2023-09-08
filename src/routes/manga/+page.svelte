<script lang="ts">
    import { page } from "$app/stores";
    import { OpengraphGenerator } from "$functions/opengraph";

	const opengraph_html = new OpengraphGenerator({
        title: "MangaCore - A modern manga streaming site",
        site_name: "CoreProject",
        image_url: "", // Use Opengraph later
        url: $page.url.href,
        locale: "en_US",
        description: "The most modern manga streaming site"
    }).generate_opengraph()
</script>

<svelte:head>
	{@html opengraph_html}
</svelte:head>