<script lang="ts">
    import { emojis } from "$data/emojis";
    import { sanitize } from "$functions/sanitize";
    import hljs from "highlight.js";
    import "highlight.js/scss/github-dark.scss";
    import { Marked } from "marked";
    import type { MarkedEmojiOptions } from "marked-emoji";
    import { markedEmoji } from "marked-emoji";
    import { markedHighlight } from "marked-highlight";
    import { mangle } from "marked-mangle";

    export let markdown = "";
    export { klass as class };

    let klass = "";

    // Override function

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
        markedEmoji({
            emojis,
            unicode: false
        }),
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
        // Mangle plugin
        mangle(),
        // Marked defaults
        {
            renderer: {
                del(text: string) {
                    return `<del class='unstyled'>${text}</del>`;
                },
                code(code, language, isEscaped) {
                    return `<pre class="unstyled">
                                <code class="language-${language}">${code}</code>
                            </pre>`
                },
            },
            // We dont need github like header prefix
            headerIds: false
        }
    );

    let promise_html: Promise<string>;
    $: promise_html = sanitize(marked.parse(markdown));
</script>

{#await promise_html then html}
    <markdown class={klass}>
        {@html html}
    </markdown>
{/await}
