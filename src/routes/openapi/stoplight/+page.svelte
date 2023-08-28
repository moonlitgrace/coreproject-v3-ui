<svelte:head>
    <script src="https://unpkg.com/@stoplight/elements/web-components.min.js"></script>
    <link
        rel="stylesheet"
        href="https://unpkg.com/@stoplight/elements/styles.min.css"
    />
</svelte:head>

<elements-api
    class="w-full"
    apiDescriptionUrl="/openapi/schema.yaml"
    router="hash"
    layout="sidebar"
/>
