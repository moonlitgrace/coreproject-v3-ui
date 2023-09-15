<script lang="ts">
    import { beforeUpdate } from "svelte";
    import { OpengraphGenerator } from "$functions/opengraph";
    import { page } from "$app/stores";

    beforeUpdate(async () => {
        // @ts-ignore
        await import("@stoplight/elements/web-components.min.js");
        await import("@stoplight/elements/styles.min.css");
    });

    const opengraph = new OpengraphGenerator({
        title: "Stoplight | CoreProject",
        url: $page.url.href,
        description: "Explore backend of coreproject",
        site_name: "CoreProject",
        locale: "en_US",
        image_url: ""
    }).generate_opengraph();
</script>

<svelte:head>
    {@html opengraph}
</svelte:head>

<elements-api
    data-theme="dark"
    class="w-screen"
    apiDescriptionUrl="/openapi/schema.yaml"
    router="hash"
    layout="sidebar"
/>
