<script lang="ts">
    import { afterUpdate } from "svelte";
    import React from "react";
    import { RedocStandalone } from "redoc";
    import { createRoot } from "react-dom/client";

    const e = React.createElement;
    class Documentation extends React.Component {
        render() {
            return e(
                "div",
                { className: "w-screen" },
                e(RedocStandalone, {
                    specUrl: "/openapi/schema.yaml",
                    options: {
                        nativeScrollbars: true
                    }
                })
            );
        }
    }

    let container: HTMLDivElement;
    afterUpdate(() => {
        createRoot(container).render(e(Documentation));
    });
</script>

<main>
    <div bind:this={container} />
</main>
