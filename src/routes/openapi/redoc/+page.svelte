<script>
    import { onMount } from "svelte";
    import React from "react";
    import { RedocStandalone } from "redoc";
    import { createRoot } from "react-dom/client";

    const e = React.createElement;
    class Documentation extends React.Component {
        render() {
            return e(RedocStandalone, {
                specUrl: "http://petstore.swagger.io/v2/swagger.json",
                options: {
                    nativeScrollbars: true,
                    theme: { colors: { primary: { main: "#dd5522" } } }
                }
            });
        }
    }
    /**
     * @type {HTMLDivElement}
     */
    let container;
    onMount(function () {
        createRoot(container).render(e(Documentation));
    });
</script>

<main>
    <div bind:this={container} />
</main>
