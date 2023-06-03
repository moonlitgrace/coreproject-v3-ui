<script>
    import voca from "voca";
    import { FormatDate } from "$functions/format_date";

    // icons
    import SettingsOutline from "$icons/settings_outline.svelte";
    import Chevron from "$icons/chevron.svelte";
    import TrendingUp from "$icons/trending_up.svelte";
    import StarRating from "svelte-star-rating";
    import Edit from "$icons/edit.svelte";
    import ExternalLink from "$icons/external_link.svelte";
    import ImageLoader from "$components/shared/image/image_loader.svelte";

    const anime_details = {
        format: "TV",
        episodes: "22",
        "episode Duration": "26 Minutes",
        status: "finished",
        "start date": new FormatDate("2012-04-23").format_to_human_readable_form,
        "end date": new FormatDate("2012-09-16").format_to_human_readable_form,
        season: new FormatDate("2012-4").format_to_season,
        studios: "Kyoto Animation",
        producers: ["Lantis", "Kadokawa Shoten", "Klock Worx", "chara-ani.com", "Animation Do"],
        source: "Night Novel"
        //tags: []
    };
</script>

<div class="flex gap-[0.75vw]">
    <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Ratings</span>
    <button class="btn btn-icon rounded-[0.1875vw] bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
        <SettingsOutline class="w-[0.9vw] opacity-75" />
    </button>
</div>

<div class="md:mt-[1.56vw]">
    <div class="flex items-center gap-[0.5vw]">
        <span class="border-b-2 border-surface-50/50 pb-[0.5vw] font-bold md:text-[2vw] md:leading-[1.5vw]">92%</span>
        <span class="divider-vertical m-0 !border-surface-50/50 font-semibold text-surface-50 md:pl-1 md:text-[0.75vw] md:leading-[0.8vw]">2.8k ratings</span>
    </div>

    <div class="md:mt-[1.125vw]">
        <div class="flex items-center md:gap-[0.25vw]">
            <span class="md:text-[1vw] md:leading-[1.5vw]">#80</span>
            <span class="text-surface-50 md:text-[0.75vw] md:leading-[0.75vw]">Trending of all time</span>
        </div>
        <div class="flex items-center md:gap-[0.25vw]">
            <span class="md:text-[1vw] md:leading-[1.5vw]">#108</span>
            <span class="text-surface-50 md:text-[0.75vw] md:leading-[0.75vw]">Most popular anime</span>
        </div>
    </div>

    <button class="btn bg-secondary-100 text-surface-500 md:mt-[1.125vw] md:h-[1.5vw] md:w-[9vw] md:rounded-[0.18vw] md:text-[0.75vw] md:leading-[0.9vw]">
        <div class="flex place-items-center gap-[0.25vw]">
            <TrendingUp class="w-[1vw]" />
            Detailed Distribution
        </div>
    </button>

    <div class="md:mt-[0.4vw]">
        <span class="font-semibold md:text-[0.9vw] md:leading-[0.9vw]">Your rating</span>
        <div class="flex items-end gap-[0.75vw] md:mt-[0.25vw]">
            <StarRating
                rating={4.5}
                config={{ fullColor: "#DCD9F7", emptyColor: "rgb(220, 217, 247, 0.4)" }}
                style="margin: 0; gap: 5px"
            />
            <span class="font-bold leading-none md:text-[0.95vw]">92%</span>
            <button class="btn btn-icon bg-secondary-100 p-[0.3vw] text-surface-500 md:w-[1.375vw] md:rounded-[0.19vw]">
                <Edit
                    variant="without_underline_around_pencil"
                    color="bg-surface-500"
                    style="width: 0.75vw;"
                />
            </button>
        </div>
    </div>

    <button class="btn btn-sm flex gap-[0.5vw] p-0 md:mt-[1vw] md:text-[0.8vw] md:leading-[0.9vw]">
        Add a review
        <ExternalLink class="w-[0.8vw]" />
    </button>
</div>

<div class="flex gap-[0.75vw] md:mt-[6vw]">
    <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Details</span>
    <button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
        <SettingsOutline class="w-[0.9vw] opacity-75" />
    </button>
</div>

<div class="md:mt-[1.25vw]">
    <animedetails class="flex flex-col gap-[1.125vw] capitalize">
        {#each Object.entries(anime_details) as details_item}
            {@const key = details_item[0]}
            {@const value = details_item[1]}

            {#if Array.isArray(value)}
                <!-- Only handle producers in this array field  -->
                <div class="flex flex-col gap-[0.75vw] text-[0.9375vw] leading-none text-surface-50">
                    <p class="font-semibold text-white">{key}</p>
                    {#each value.sort() as item}
                        <p>{item}</p>
                    {/each}
                </div>
            {:else}
                <!-- Handle everything else here  -->
                <div class="flex flex-col gap-[0.5vw] text-[0.9375vw] leading-none text-surface-50">
                    <p class="font-semibold text-white">{key}</p>
                    <p>{value}</p>
                </div>
            {/if}
        {/each}
    </animedetails>

    <voiceovercase>
        <div class="mt-[2.5vw]">
            <div class="flex gap-[0.75vw]">
                <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Voiceover Cast</span>
                <button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
                    <SettingsOutline class="w-[0.9vw] opacity-75" />
                </button>
            </div>

            <div class="mt-[1vw] flex flex-col">
                <span class="text-[0.9375vw] text-surface-50">VAs</span>
                <button class="btn btn-sm mt-[0.3vw] h-[2.25vw] w-[6.625vw] gap-1 rounded-[0.375vw] bg-surface-400 p-0 text-[0.875vw]">
                    Japanese
                    <Chevron class="w-[0.9vw]" />
                </button>
            </div>

            <casts>
                <div class="mt-[1vw]">
                    <div class="relative grid h-[7.5vw] w-[12.5vw] grid-cols-2 gap-[2px] overflow-hidden rounded-[0.75vw]">
                        <div class="relative col-span-1 w-full bg-cover">
                            <ImageLoader
                                src="https://s4.anilist.co/file/anilistcdn/character/large/b55131-ypodHQCyHbzD.png"
                                class="absolute h-full w-full object-cover object-center"
                            />

                            <span class="absolute bottom-[0.3vw] z-10 w-full text-center text-[0.9vw] font-bold leading-[1.25vw]">Houtarou Oreki</span>
                        </div>
                        <div class="relative col-span-1 w-full bg-cover">
                            <ImageLoader
                                src="https://cdn.myanimelist.net/images/voiceactors/1/74056.jpg"
                                class="absolute h-full w-full object-cover object-center"
                            />

                            <span class="absolute bottom-[0.3vw] z-10 w-full text-center text-[0.9vw] font-bold leading-[1.25vw]">Yuuichi Nakamura</span>
                        </div>
                        <div class="gradient absolute inset-0 rounded-b-[0.45vw] bg-gradient-to-t from-surface-900/75 to-surface-900/25" />
                    </div>

                    <div class="mt-[1.5vw] flex flex-col">
                        <div class="btn-group flex h-[2.25vw] w-1/2 rounded-[0.5vw] bg-surface-400">
                            <button class="h-full w-full bg-surface-400 !p-0 font-semibold">
                                <Chevron class="w-[1vw] rotate-180" />
                            </button>
                            <button class="h-full w-full bg-surface-400 !p-0 !text-[0.9vw] font-bold">01</button>
                            <button class="h-full w-full bg-surface-400 !p-0 font-semibold">
                                <Chevron class="w-[1vw]" />
                            </button>
                        </div>
                        <span class="mt-[1vw] text-[0.75vw] leading-none text-surface-50">Showing 1-5, out of 58 Voiceover Casts</span>
                    </div>
                </div>
            </casts>
        </div>
    </voiceovercase>

    <recommendations>
        <div class="mt-[2.5vw]">
            <div class="flex gap-3">
                <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Recommendations</span>
                <button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
                    <SettingsOutline class="w-[0.9vw] opacity-75" />
                </button>
            </div>

            <div class="mt-[1vw]">
                <div class="grid grid-cols-2 gap-[1vw]">
                    <a
                        href="/myanimelist/1"
                        class="card relative col-span-1 h-[9.375vw] w-full overflow-hidden rounded-[0.75vw] bg-cover bg-center"
                    >
                        <ImageLoader
                            src="https://wallup.net/wp-content/uploads/2017/10/27/112470-Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru-Yuigahama_Yui-Hikigaya_Hachiman.jpg"
                            class="absolute h-full w-full object-cover object-center"
                        />

                        <span class="absolute bottom-[0.3vw] z-10 line-clamp-2 w-full px-[0.5vw] text-center text-[0.9vw] font-semibold leading-[1.25vw]">Yahari Ore no Seishun Love Come wa Machigatteiru.</span>
                        <div class="gradient absolute inset-0 rounded-b-[0.45vw] bg-gradient-to-t from-surface-900/75 to-surface-900/25" />
                    </a>

                    <a
                        href="/myanimelist/1"
                        class="card relative col-span-1 h-[9.375vw] w-full overflow-hidden rounded-[0.75vw] bg-cover"
                    >
                        <ImageLoader
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHBqVsDb9uqO0weu_Hi4DdFs-AywgumizkZnLQys-TJc19oks1tofYGDqijII7qDxzZEMqVdstNg&usqp=CAU&ec=48665698"
                            class="absolute h-full w-full object-cover object-center"
                        />

                        <span class="absolute bottom-[0.3vw] z-10 line-clamp-2 w-full px-[0.5vw] text-center text-[0.9vw] font-semibold leading-[1.25vw]">Suzumiya Haruhi no Yuuutsu</span>
                        <div class="gradient absolute inset-0 rounded-b-[0.45vw] bg-gradient-to-t from-surface-900/75 to-surface-900/25" />
                    </a>
                </div>

                <div class="mt-[1.5vw] flex flex-col">
                    <div class="btn-group flex h-[2.25vw] w-1/2 rounded-[0.5vw] bg-surface-400">
                        <button class="h-full w-full bg-surface-400 !p-0 font-semibold">
                            <Chevron class="w-[1vw] rotate-180" />
                        </button>
                        <button class="h-full w-full bg-surface-400 !p-0 !text-[0.9vw] font-bold">01</button>
                        <button class="h-full w-full bg-surface-400 !p-0 font-semibold">
                            <Chevron class="w-[1vw]" />
                        </button>
                    </div>
                    <span class="mt-[1vw] text-[0.75vw] leading-none text-surface-50">Showing 1-8, out of 47 Recommendations</span>
                </div>
            </div>
        </div>
    </recommendations>
</div>
