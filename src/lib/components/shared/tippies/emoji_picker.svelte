<script lang="ts">
    import insertTextAtCursor from "insert-text-at-cursor";
    import { onMount } from "svelte";

    export let text_element: HTMLTextAreaElement;

    onMount(async () => {
        await import("emoji-picker-element");

        const emoji_picker = document.querySelector("emoji-picker");
        if (emoji_picker) {
            emoji_picker.addEventListener("emoji-click", event => {
                insertTextAtCursor(text_element, event.detail.unicode ?? "");
            });
        }
    });
</script>

<emoji-picker />
