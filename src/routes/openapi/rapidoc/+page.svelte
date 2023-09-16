<script lang="ts">
    import { onMount } from "svelte";

    onMount(async () => {
        // @ts-ignore
        await import("rapidoc");
    });
</script>

<rapi-doc
    spec-url="/openapi/schema.yaml"
    render-style="read"
    style={{ height: "100vh", width: "100%" }}
></rapi-doc>
