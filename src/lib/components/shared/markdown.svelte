<script lang="ts">
    import { emojis } from "$data/emojis";
    import hljs from "highlight.js";
    import "highlight.js/scss/github-dark.scss";
    import DOMPurify from "isomorphic-dompurify";
    import type { marked as markedType } from "marked";
    import { Marked } from "marked";
    import { markedEmoji } from "marked-emoji";
    import { markedHighlight } from "marked-highlight";

    export let markdown = "";
    export { klass as class };

    let klass = "";

    const emoji_options = {
        emojis,
        unicode: false
    };

    // Override function
    const renderer: markedType.RendererObject = {
        del(text: string) {
            /** Dont convert s (tag) -> del (tag)
             * Reason 1: Skeleton.dev is formatting `del` tag | Source : https://www.skeleton.dev/elements/typography
             * Reason 2: Marked.js is not allowing us to add unstyled class to rendered text.
             */

            return `<s class='unstyled'>${text}</s>`;
        }
    };

    const marked = new Marked(
        // Highlight.js
        markedHighlight({
            langPrefix: "hljs language-",
            highlight: (code, lang) => {
                const language = hljs.getLanguage(lang) ? lang : "plaintext";
                const return_value = hljs.highlight(code, { language }).value;
                console.log(return_value);
                return return_value;
            }
        }),
        // Emoji plugin
        markedEmoji(emoji_options),
        {
            renderer,
            // Disable it as marked-mangle doesn't support typescript
            mangle: false,
            // We dont need github like header prefix
            headerIds: false
        }
    );

    let html: string;
    $: html = DOMPurify.sanitize(marked.parse(markdown));
</script>

<markdown class={klass}>
    {@html html}
</markdown>
