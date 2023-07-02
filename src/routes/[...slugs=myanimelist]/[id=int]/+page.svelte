<script lang="ts">
    import { page } from "$app/stores";
    import AnimeInfoPage from "$components/pages/anime_info/index.svelte";
    import { anime_episodes } from "$data/mock/anime_episodes";
    import { anime_list } from "$data/mock/anime_list";
    import { OpengraphGenerator } from "$functions/opengraph";
    import Chevron from "$icons/chevron.svelte";
    import Ghost from "$icons/ghost.svelte";
    import TopRounded from "$icons/top_rounded.svelte";

    let anime_id = Number($page.params.id);

    let anime = anime_list?.find((anime) => anime.id === anime_id);

    const opengraph_html = new OpengraphGenerator({
        title: `Watch ${anime?.name} on AnimeCore`,
        url: $page.url.href,
        description: anime?.synopsis ?? "",
        site_name: "CoreProject",
        locale: "en_US",
        image_url: anime?.banner ?? ""
    }).generate_opengraph();
</script>

<svelte:head>
    {@html opengraph_html}
</svelte:head>

{#if anime}
    <TopRounded class="fixed z-10 hidden w-[1.5vw] text-surface-900 md:flex" />
    <AnimeInfoPage
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
    <container class="relative flex h-[80vh] w-full flex-col items-center justify-center md:h-[90vh] md:gap-[1vw]">
        <radial-gradient
            class="pointer-events-none absolute inset-0 hidden h-[40vw] w-[40vw] translate-x-[27vw] md:flex"
            style="
                background-image: radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 75%);
            "
        />
        <four-zero-four class="flex items-center gap-5 text-[5rem] font-bold md:gap-[2vw] md:text-[7vw]">
            <span>4</span>
            <Ghost class="w-20 animate-bounce md:w-[7vw]" />
            <span>4</span>
        </four-zero-four>

        <context class="flex max-w-[90vw] flex-col items-center gap-5 md:max-w-[60vw] md:gap-[1.5vw] md:leading-[1.5vw]">
            <status-code class="text-xl font-semibold text-primary-400 md:text-[1.5vw]">404 - Page not found!</status-code>
            <status class="text-center text-sm font-semibold text-surface-50 md:text-[1.1vw] md:leading-[1.5vw]">
                Uh-oh, looks like our
                {#each "kokoro-chan".split("") as letter}
                    <span class="inline-grid odd:text-warning-400 even:text-white">
                        {letter}
                    </span>
                {/each}
                is worked really hard for the past few days and now has fallen asleep. You can wait for her to wake up by looking at the status page, or come say hi to other fellow
                {#each "kokoro-chan".split("") as letter}
                    <span class="inline-grid odd:text-warning-400 even:text-white">
                        {letter}
                    </span>
                {/each}
                worksippers! ah- also let's wish her sweat dreams!
            </status>
            <a
                href="/"
                class="btn w-max gap-2 rounded-xl bg-primary-500 px-7 py-4 text-base font-semibold leading-none md:gap-[0.5vw] md:rounded-[0.75vw] md:px-[2vw] md:py-[1vw] md:text-[1.1vw]"
            >
                Go Home
                <Chevron class="w-4 -rotate-90 md:w-[1.25vw]" />
            </a>
        </context>
    </container>
{/if}
