<script lang="ts">
    import { page } from "$app/stores";
    import AnimeInfoErrorPage from "$components/pages/anime_info/error.svelte";
    import AnimeInfoPage from "$components/pages/anime_info/index.svelte";
    import { anime_episodes } from "$data/mock/anime_episodes";
    import { anime_list } from "$data/mock/anime_list";
    import TopRounded from "$icons/top_rounded.svelte";
    import { derived } from "svelte/store";
    import { MetaTags } from "svelte-meta-tags";

    let anime_id = derived(page, (page) => page.params.id);
    let anime = anime_list?.find((anime) => anime.id === Number($anime_id));
</script>

<MetaTags
    title={anime ? `Watch ${anime?.name} on AnimeCore` : "404 - Page not found!"}
    description={anime?.synopsis ?? ""}
    openGraph={{
        images: [
            {
                url: anime?.banner ?? ""
            }
        ],
        locale: "en_US",

        siteName: "CoreProject"
    }}
/>

{#if anime}
    <!-- 
        TopRounded is due to how skeleton works with it's AppRail. 
        We are essentially monkeypatching border-top-left-radius
    -->
    <TopRounded class="fixed z-10 hidden w-[1.5vw] text-surface-900 md:flex" />
    <AnimeInfoPage
        anime_id={anime.id}
        anime_name={anime.name}
        japanese_name={anime.japanese_name}
        anime_episodes_count={anime.episodes_count}
        anime_date={anime.updated}
        anime_synopsis={anime.synopsis}
        anime_banner={anime.banner}
        anime_cover={anime.cover}
        {anime_episodes}
    />
{:else}
    <AnimeInfoErrorPage />
{/if}
