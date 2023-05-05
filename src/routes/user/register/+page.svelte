<script lang="ts">
    import type { SvelteComponent } from "svelte";

    // We import our page components (similar to the one above).
    import One from "./1.svelte";
    import Two from "./2.svelte";
    import Three from "./3.svelte";

    const pages = [One, Two, Three];

    // The current page of our form.
    let page = 0;

    // The state of all of our pages
    let pages_state: { [key: number]: {} } = [];

    // Our handlers
    function onSubmit(values: CustomEvent) {
        if (page === pages.length - 1) {
            // end of the page. do something.. Maybe seek for anime girls with stockings and leggings
        } else {
            // If we're not on the last page, store our data and increase a step
            pages_state[page] = values.detail;
            page += 1;
        }
    }

    let current_page: typeof SvelteComponent;

    $: current_page = pages[page];
</script>

<svelte:head>
    <title>Register | CoreProject</title>
</svelte:head>

<!-- We display the current step here -->
<svelte:component
    this={current_page}
    on:submit={onSubmit}
/>
