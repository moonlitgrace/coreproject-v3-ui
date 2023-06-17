<script lang="ts">
    import { marked } from "marked";
    import xss from "xss";

    export let markdown = "";
    export { klass as class };

    let klass = "";

    // Override function
    const renderer: marked.RendererObject = {
        del(text: string) {
            /** Dont convert s (tag) -> del (tag)
             * Reason 1: Skeleton.dev is formatting `del` tag | Source : https://www.skeleton.dev/elements/typography
             * Reason 2: Marked.js is not allowing us to add unstyled class to rendered text.
             */

            return `<s>${text}</s>`;
        }
    };

    marked.use({ renderer });

    let html: string;
    $: html = xss(marked.parse(markdown));
</script>

<markdown class={klass}>
    {@html html}
</markdown>
