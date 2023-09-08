<script lang="ts">
    import { page } from "$app/stores";
    import HoverExpand from "$components/shared/hover_expand.svelte";
    import ImageLoader from "$components/shared/image/image_loader.svelte";
    import ScrollArea from "$components/shared/scroll_area.svelte";
    import { trending_animes } from "$data/mock/trending";
    import { OpengraphGenerator } from "$functions/opengraph";
    import { remove_slash_from_end } from "$functions/urls/remove_slash_at_end";
    import Chevron from "$icons/chevron.svelte";
    import Circle from "$icons/circle.svelte";
    import Edit from "$icons/edit.svelte";
    import Info from "$icons/info.svelte";
    import PlayCircle from "$icons/play_circle.svelte";
    import Read from "$icons/read.svelte";

    // first manga only for testing
    const manga = trending_animes[0];

    const opengraph_html = new OpengraphGenerator({
        title: "MangaCore - A modern manga streaming site",
        site_name: "CoreProject",
        image_url: "", // Use Opengraph later
        url: $page.url.href,
        locale: "en_US",
        description: "The most modern manga streaming site"
    }).generate_opengraph()
</script>

<svelte:head>
    {@html opengraph_html}
</svelte:head>

<main>
    <landing class="grid grid-cols-12 md:p-[2vw] md:pt-[1vw]">
        <slider class="col-span-8 bg-[url(/images/cover/one_piece.webp)] md:rounded-[0.75vw] bg-cover bg-center w-full h-96 md:h-[35vw] relative">
            <overlay class="absolute inset-0 bg-surface-900/90" />

            <manga class="absolute inset-0 flex md:gap-[5vw] items-center justify-between md:px-[4vw]">
                <manga-info class="flex flex-col leading-none">
                    <manga-chapters class="md:text-[1vw] font-semibold text-surface-50">Chapters: 69 [EN]</manga-chapters>
                    <HoverExpand
                        class="font-bold md:text-[2vw] md:mt-[0.5vw] md:mb-[1vw]"
                        height="md:max-h-[2vw] md:hover:max-h-[10vw]"
                    >
                        {manga.name}
                    </HoverExpand>
                    <ScrollArea
                        gradientMask
                        offsetScrollbar
                        class="md:max-h-[6vw] md:text-[0.9vw] md:leading-[1.25vw]"
                    >
                        {manga.synopsis}
                    </ScrollArea>
                    <manga-other-details class="flex items-center md:gap-[0.5vw] md:my-[1vw] font-semibold md:text-[1vw]">
                        <!-- for now hardcoded data -->
                        {#each ["Manga", "Airing", manga.studios] as item, index}
                            <span>{item}</span>
                            <Circle class="{index === 2 && "hidden"} md:w-[0.35vw] opacity-50" />
                        {/each}
                    </manga-other-details>
                    <genres class="flex items-center md:gap-[0.75vw]">
                        {#each manga.genres as genre}
                            <genre class="leading-none bg-white/10 backdrop-blur border-[0.01vw] border-white/25 md:px-[0.65vw] md:py-[0.35vw] md:rounded-[0.25vw] md:text-[0.9vw]">{genre}</genre>
                        {/each}
                    </genres>
                    <options class="flex md:mt-[2.5vw] items-center md:gap-[1vw]">
                        <button class="btn md:gap-[0.25vw] rounded-xl bg-warning-400 text-[3vw] font-bold text-surface-900 md:rounded-[0.5vw] md:text-[0.875vw] leading-none p-4 md:p-[1vw]">
                            <Read class="md:w-[1.25vw]" />
                            <span class="md:text-[1vw] font-semibold">Read Now</span>
                        </button>
                        <button class="btn md:gap-[0.25vw] rounded-xl bg-surface-900 text-[3vw] font-bold text-surface-50 md:rounded-[0.5vw] md:text-[0.875vw] leading-none p-4 md:p-[1vw]">
                            <Info class="md:w-[1.25vw]" />
                            <span class="md:text-[1vw] font-semibold">Details</span>
                        </button>
                        <button class="btn rounded-xl bg-surface-900 text-[3vw] font-bold text-surface-50 md:rounded-[0.5vw] md:text-[0.875vw] leading-none p-4 md:p-[1vw]">
                            <Edit
                                variant="with_underline_around_pencil"
                                class="w-4 text-surface-50 md:w-[1.25vw]"
                            />
                        </button>
                    </options>
                </manga-info>
                <manga-cover class="flex md:h-[25vw] shrink-0">
                    <ImageLoader src={manga.cover} class="h-full w-full md:rounded-[0.5vw]" />
                </manga-cover>
            </manga>

            <slider-buttons>
                <button
                    class="btn btn-icon absolute -left-[1vw] top-1/2 -translate-y-1/2 z-20 hidden h-[2.25vw] w-[2.25vw] rounded-[0.375vw] bg-secondary-800 md:flex"
                >
                    <Chevron
                        color="text-white"
                        class="w-[1.25vw] rotate-90"
                    />
                </button>
                <button
                    class="btn btn-icon absolute -right-[1vw] top-1/2 -translate-y-1/2 z-20 hidden h-[2.25vw] w-[2.25vw] rounded-[0.375vw] bg-secondary-800 md:flex"
                >
                    <Chevron
                        color="text-white"
                        class="w-[1.25vw] -rotate-90"
                    />
                </button>
            </slider-buttons>
        </slider>
    </landing>
</main>