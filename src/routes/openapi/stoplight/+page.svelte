<script lang="ts">
    import { beforeUpdate } from "svelte";
    import { OpengraphGenerator } from "$functions/opengraph";
    import { page } from "$app/stores";
    import "@stoplight/elements/styles.min.css";

    import { onMount } from "svelte";
    import React from "react";
    import { API } from "@stoplight/elements";
    import { createRoot } from "react-dom/client";

    const e = React.createElement;
    class Documentation extends React.Component {
        render() {
            return e(API, {});
        }
    }

    let container: HTMLDivElement;
    onMount(function () {
        createRoot(container).render(e(Documentation));
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

<main>
    <div bind:this={container} />
</main>
