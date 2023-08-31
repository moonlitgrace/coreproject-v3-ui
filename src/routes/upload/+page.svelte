<script lang="ts">
    import { page } from "$app/stores";
    import { MetaTags } from "svelte-meta-tags";

    import Login from "./login.svelte";
    import UploadPage from "./upload_page.svelte";

    let token: string | null = null; // check if token is valid

    function on_submit(values: CustomEvent) {
        token = values.detail;
    }
</script>

<MetaTags
    title="Upload on AnimeCore"
    description="Upload on animecore"
    openGraph={{
        images: [
            {
                url: "" // Add satori later
            }
        ],
        locale: "en_US",
        siteName: "CoreProject"
    }}
/>

{#if token}
    <UploadPage />
{:else}
    <!-- logic for testing -->
    <Login on:submit={on_submit} />
{/if}
