<script>
    import { onMount } from "svelte";

    onMount(async () => {
        await import("@stoplight/elements/styles.min.css");
        // @ts-ignore
        await import("@stoplight/elements/web-components.min.js");
    });
</script>

<elements-api
    class="w-screen"
    apiDescriptionUrl="/openapi/schema.yaml"
    router="hash"
    layout="sidebar"
/>
