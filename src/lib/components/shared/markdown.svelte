<script lang="ts">
    import { marked } from "marked";
    import xss from "xss";

    export let markdown = "";
    export { klass as class };

    let klass = "";

    marked.use({
        mangle: false, // Isn't supported by typescript
        pedantic: true,
        gfm: true,
        // Disable
        headerIds: false
    });

    let html: string;
    $: html = xss(marked.parse(markdown));
</script>

<markdown class={klass}>
    {@html html}
</markdown>
