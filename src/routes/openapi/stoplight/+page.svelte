<script lang="ts">
    import { OpengraphGenerator } from "$functions/opengraph";
    import { page } from "$app/stores";
    import "@stoplight/elements/styles.min.css";

    import { beforeUpdate } from "svelte";
    import React from "react";
    import { API } from "@stoplight/elements";
    import { createRoot } from "react-dom/client";

    const e = React.createElement;
    class Documentation extends React.Component {
        render() {
            return e(
                "div",
                { className: "w-screen" },
                e(API, {
                    apiDescriptionUrl: "/openapi/schema.yaml"
                })
            );
        }
    }
    let container: HTMLDivElement;
    beforeUpdate(() => {
        createRoot(container).render(e(Documentation));
    });
</script>

<svelte:head>
    {@html new OpengraphGenerator({
        title: "Stoplight | CoreProject",
        url: $page.url.href,
        description: "Explore backend of coreproject",
        site_name: "CoreProject",
        locale: "en_US",
        image_url: ""
    }).generate_opengraph()}
</svelte:head>

<main>
    <div bind:this={container} />
</main>
