<script lang="ts">
    import { page } from "$app/stores";
    import AnimeInfoErrorPage from "$components/pages/anime_info/error.svelte";
    import AnimeInfoPage from "$components/pages/anime_info/index.svelte";
    import { anime_episodes } from "$data/mock/anime_episodes";
    import { anime_list } from "$data/mock/anime_list";
    import { MetaTags } from "svelte-meta-tags";

    let anime_id = Number($page.params.id),
        anime = anime_list?.find((anime) => anime.id === anime_id);
</script>

<MetaTags
    title={`Watch ${anime?.name} on AnimeCore`}
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
