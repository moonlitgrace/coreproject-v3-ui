<script>
    /**
     * This is a JavaScript only file.
     *
     * Due to `marked-smartypants` not supporting `typescript` or having a type defination
     * * {@Link https://github.com/markedjs/marked-smartypants/issues/16#issuecomment-1537463695}
     * Due to `marked-xhtml` not supporting `typescript` or having a type defination
     * * {@link https://github.com/markedjs/marked-xhtml/issues/37}
     *
     * Should the issue be solved please convert it to `typescript` again
     */
    import { emojis } from "$data/emojis";
    import { sanitize } from "$functions/sanitize";
    import hljs from "highlight.js";

    import { Marked } from "marked";
    import { markedEmoji } from "marked-emoji";
    import { markedHighlight } from "marked-highlight";
    import { mangle } from "marked-mangle";
    // @ts-ignore
    import { markedXhtml } from "marked-xhtml";
    // @ts-ignore
    import { markedSmartypants } from "marked-smartypants";

    export let markdown = "";
    export { klass as class };

    let klass = "";

    const emoji_options = {
        emojis,
        unicode: false
    };

    // Override function
    const renderer = {
        /**
         * @param {string} text
         */
        del(text) {
            return `<del class='unstyled'>${text}</del>`;
        }
    };

    const marked = new Marked(
        // Highlight.js
        markedHighlight({
            langPrefix: "hljs language-",
            highlight: (code, lang) => {
                const language = hljs.getLanguage(lang) ? lang : "plaintext";
                return hljs.highlight(code, { language }).value;
            }
        }),
        // Emoji plugin
        markedEmoji(emoji_options),
        {
            extensions: [
                {
                    name: "emoji",
                    renderer: (token) => {
                        return `<img class="inline-flex w-4 justify-center align-center -translate-y-0.5 md:w-[1vw]" alt="${token.name}" src="${token.emoji}">`;
                    }
                }
            ]
        },
        // Smartypants plugin
        markedSmartypants(),
        // XHTML plugin
        markedXhtml(),
        // Mangle plugin
        mangle(),
        // Marked defaults
        {
            renderer,
            // We dont need github like header prefix
            headerIds: false
        }
    );

    /**
     * @type {string}
     */
    let html;
    $: html = sanitize(marked.parse(markdown));
</script>

<markdown class={klass}>
    {@html html}
</markdown>
