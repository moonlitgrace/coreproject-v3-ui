<script lang="ts">
    import { page } from "$app/stores";
    import AnimeInfoPage from "$components/pages/anime_info/index.svelte";
    import { anime_episodes } from "$data/mock/anime_episodes";
    import { anime_list } from "$data/mock/anime_list";
    import { OpengraphGenerator } from "$functions/opengraph";
    import Chevron from "$icons/chevron.svelte";
    import TopRounded from "$icons/top_rounded.svelte";

    let anime_id = Number($page.params.id);

    let anime = anime_list?.find((anime) => anime.id === anime_id);

    const opengraph_html = new OpengraphGenerator({
        title: anime ? `Watch ${anime?.name} on AnimeCore` : "404 - Page not found!",
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
    <section class="grid h-full grid-cols-5 items-end justify-between md:px-[5vw]">
        <radial-gradient
            class="pointer-events-none absolute inset-0 z-10 translate-x-[30vw]"
            style="
                background-image: radial-gradient(circle at center, rgba(117, 105, 225, 0.1) 0%, transparent 100%);
            "
        />
        <error-context class="col-span-3 flex flex-col leading-none md:mb-[12vw] md:gap-[1vw]">
            <status-code class="font-bold md:text-[7vw]">
                {#each "404".split("") as number}
                    <span class="odd:text-warning-400">{number}</span>
                {/each}
            </status-code>
            <status-text class="font-semibold text-primary-300 md:text-[1.25vw]">Oops! Page not found...</status-text>
            <span class="font-semibold italic md:mt-[1vw] md:text-[1.2vw]">
                Hi <u>Ealime</u>
                here!
            </span>
            <context class="font-semibold italic text-surface-50 md:pr-[5vw] md:text-[1.1vw] md:leading-[1.5vw]">
                Uh-oh looks like our
                {#each "kokoro-chan".split("") as letter}
                    <span class="inline-grid odd:text-warning-400">
                        {letter}
                    </span>
                {/each}
                is working really hard for the past few days and now has fall asleep. You can wait for her to wake up by looking at the status page, or come say hi to other fellow
                {#each "kokoro-chan".split("") as letter}
                    <span class="inline-grid odd:text-warning-400">
                        {letter}
                    </span>
                {/each}
                's worksippers! ah- also let's wish her sweat dreams!
            </context>
            <a
                href="/"
                class="btn w-max bg-primary-500 font-semibold leading-none md:gap-[0.5vw] md:py-[1vw] md:text-[1.1vw]"
            >
                Explore animes
                <Chevron class="-rotate-90 md:w-[1.1vw]" />
            </a>
        </error-context>
        <character class="col-span-2">
            <img
                src="/images/characters/eliane.png"
                alt="Character 1"
                class="h-full w-full"
            />
        </character>
    </section>
{/if}
