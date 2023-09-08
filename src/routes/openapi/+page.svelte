<script lang="ts">
    import { onMount } from "svelte";

    onMount(async () => {
        // @ts-ignore
        await import("@stoplight/elements/web-components.min.js");
        await import("@stoplight/elements/styles.min.css");
    });
</script>

<elements-api
    class="w-screen"
    apiDescriptionUrl="/openapi/schema.yaml"
    router="hash"
    layout="sidebar"
/>
