<script lang="ts">
    import DOMPurify from "isomorphic-dompurify";
    import { marked } from "marked";

    export let markdown = "";
    export { klass as class };

    let klass = "";

    marked.use({
        mangle: true,
        pedantic: false,
        gfm: true
    });

    let html: string;
    $: html = DOMPurify.sanitize(marked.parse(markdown));
</script>

<markdown class={klass}>
    {@html html}
</markdown>
