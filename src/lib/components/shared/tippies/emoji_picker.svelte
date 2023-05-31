<script lang="ts">
    import insertTextAtCursor from "insert-text-at-cursor";
    import { onMount } from "svelte";

    export let text_element: HTMLTextAreaElement;

    onMount(async () => {
        await import("emoji-picker-element");
        const picker = document.querySelector("emoji-picker");

        picker?.addEventListener("emoji-click", (event) => insertTextAtCursor(text_element, event.detail.unicode ?? ""));

        /* Shadow DOM styling */
        const style = document.createElement("style");
        style.textContent = `
        	.picker {
        		border-radius: 0.5vw;
        	}
        `;
        picker?.shadowRoot?.appendChild(style);
    });
</script>

<emoji-picker />

<style>
    emoji-picker {
        height: 25vw;
        --num-columns: 7;
        --emoji-size: 1.5vw;
        --background: #1e2036;
        --button-hover-background: #3e405b;
        --button-active-background: #4d4f68;
        --input-border-color: #72717c;
        --input-border-radius: 0.5vw;
        --input-border-size: 0.1vw;
        --outline-size: 0.1vw;
        --outline-color: #9c9ba3;
        --input-font-size: 1vw;
        --input-padding: 0.35vw 0.75vw;
    }
</style>
