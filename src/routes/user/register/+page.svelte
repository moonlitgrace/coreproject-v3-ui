<script lang="ts">
    // We import our page components (similar to the one above).
    import One from "./1.svelte";
    import Two from "./2.svelte";
    import Three from "./3.svelte";

    const pages = [One, Two, Three];

    // The current page of our form.
    let page = 0;

    // The state of all of our pages
    let pagesState: Array<object> = [];

    // Our handlers
    function onSubmit(values: {}) {
        // If we're not on the last page, store our data and increase a step
        pagesState[page] = values;
        pagesState = pagesState; // Triggering update
        page += 1;
    }
</script>

<svelte:head>
    <title>Register | CoreProject</title>
</svelte:head>

<!-- We display the current step here -->
<svelte:component
    this={pages[page]}
    {onSubmit}
    initialValues={pagesState[page]}
/>
