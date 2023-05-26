<script>
    import voca from "voca";
    import { FormatDate } from "$functions/format_date";

    // icons
    import SettingsOutline from "$icons/settings_outline.svelte";
    import Chevron from "$icons/chevron.svelte";

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

<div class="md:my-[6vw]">
    <div class="flex items-center gap-3">
        <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Details</span>
        <button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
            <SettingsOutline class="w-[0.9vw] opacity-75" />
        </button>
    </div>

    <div class="md:mt-[1.56vw]">
        <animedetails class="flex flex-col gap-[1.125vw]">
            <div class="text-[0.9375vw] text-surface-50">
                <span class="font-semibold text-white">Format</span>
                <br />
                TV
            </div>
            <div class="text-[0.9375vw] text-surface-50">
                <span class="font-semibold text-white">Episodes</span>
                <br />
                22
            </div>
            <div class="text-[0.9375vw] text-surface-50">
                <span class="font-semibold text-white">Episode Duration</span>
                <br />
                26 mins
            </div>
            <div class="text-[0.9375vw] text-surface-50">
                <span class="font-semibold text-white">Status</span>
                <br />
                Finished
            </div>
            <div class="text-[0.9375vw] text-surface-50">
                <span class="font-semibold text-white">Start Date</span>
                <br />
                Apr 23, 2012
            </div>
            <div class="text-[0.9375vw] text-surface-50">
                <span class="font-semibold text-white">End Date</span>
                <br />
                Sep 16, 2012
            </div>
            <div class="text-[0.9375vw] text-surface-50">
                <span class="font-semibold text-white">Season</span>
                <br />
                Spring 2012
            </div>
            <div class="text-[0.9375vw] text-surface-50">
                <span class="font-semibold text-white">Studios</span>
                <br />
                Kyoto Animation
            </div>
            <div class="flex flex-col text-[0.9375vw] text-surface-50">
                <span class="font-semibold text-white">Producers</span>
                <span>Lantis</span>
                <span>Kadokawa Shoten</span>
                <span>Klock Worx</span>
                <span>chara-ani.com</span>
                <span>Animation Do</span>
            </div>
            <div class="text-[0.9375vw] text-surface-50">
                <span class="font-semibold text-white">Source</span>
                <br />
                Night Novel
            </div>
            <div class="flex flex-col text-[0.9375vw] text-surface-50">
                <span class="font-semibold text-white">Tags</span>
                <span>
                    School Club <span class="font-semibold">95%</span>
                </span>
                <span>
                    Detective <span class="font-semibold">91%</span>
                </span>
                <span>
                    School <span class="font-semibold">87%</span>
                </span>
                <span>
                    Male Protogonist <span class="font-semibold">81%</span>
                </span>
                <span>
                    Surreal Comedy <span class="font-semibold">79%</span>
                </span>
                <span>
                    Philosophy <span class="font-semibold">78%</span>
                </span>
                <span>
                    Comming of Age <span class="font-semibold">73%</span>
                </span>
                <span>
                    Episodic <span class="font-semibold">67%</span>
                </span>
                <span>
                    Classic Literature <span class="font-semibold">65%</span>
                </span>
                <span>
                    Felmale Protogonist <span class="font-semibold">65%</span>
                </span>
                <span>
                    Hetrosexual <span class="font-semibold">65%</span>
                </span>
                <span>
                    Rural <span class="font-semibold">52%</span>
                </span>
                <span>
                    Primarily Teen Cast <span class="font-semibold">50%</span>
                </span>
                <span>
                    Cosplay <span class="font-semibold">37%</span>
                </span>

                <button class="btn btn-sm mt-[0.3vw] h-[1.875vw] w-[6vw] gap-1 rounded-[0.375vw] bg-surface-400 p-0 text-[0.75vw]">
                    Load more
                    <Chevron
                        class="w-[0.9vw]"
                        color="surface-50"
                    />
                </button>
            </div>
        </animedetails>

        <voiceovercase>
            <div class="mt-[2.5vw]">
                <div class="flex items-center gap-3">
                    <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Voiceover Cast</span>
                    <button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
                        <SettingsOutline class="w-[0.9vw] opacity-75" />
                    </button>
                </div>

                <div class="mt-[1.25vw] flex flex-col">
                    <span class="text-[0.9375vw] text-surface-50">VAs</span>
                    <button class="btn btn-sm mt-[0.3vw] h-[2.25vw] w-[6.625vw] gap-1 rounded-[0.375vw] bg-surface-400 p-0 text-[0.875vw]">
                        Japanese
                        <Chevron
                            class="w-[0.9vw]"
                            color="surface-50"
                        />
                    </button>
                </div>

                <casts>
                    <div class="mt-[1.875vw]">
                        <div class="relative grid h-[7.5vw] w-[12.5vw] grid-cols-2 gap-[2px] overflow-hidden rounded-[0.875vw]">
                            <div
                                class="col-span-1 w-full bg-cover"
                                style="
									background-image: url(https://s4.anilist.co/file/anilistcdn/character/large/b55131-ypodHQCyHbzD.png);
								"
                            >
                                <span
                                    style="grid-area: 1 / 1 / 2 / 2"
                                    class="absolute bottom-[0.3vw] z-10 w-full text-center text-[0.9vw] font-bold"
                                >
                                    Houtarou Oreki
                                </span>
                            </div>
                            <div
                                class="col-span-1 w-full bg-cover"
                                style="
									background-image: url(https://cdn.myanimelist.net/images/voiceactors/1/74056.jpg);
								"
                            >
                                <span
                                    style="grid-area: 1 / 1 / 2 / 2"
                                    class="absolute bottom-[0.3vw] z-10 w-full text-center text-[0.9vw] font-bold"
                                >
                                    Yuuichi Nakamura
                                </span>
                            </div>
                            <div class="gradient absolute h-full w-full rounded-b-[0.45vw] bg-gradient-to-t from-surface-900/75 to-surface-900/25" />
                        </div>

                        <div class="mt-[2.5vw] flex flex-col">
                            <div class="flex h-[2.25vw] w-[6.625vw]">
                                <button class="btn btn-icon h-full w-full rounded-[0.5vw] rounded-r-none bg-surface-400 p-0 font-semibold leading-[0.9vw]">
                                    <Chevron
                                        color="lightgray"
                                        class="w-[1vw] rotate-180"
                                    />
                                </button>
                                <button class="btn btn-icon h-full w-full rounded-none bg-surface-400 p-0 text-[1vw] font-semibold leading-[0.9vw]">01</button>
                                <button class="btn btn-icon h-full w-full rounded-[0.5vw] rounded-l-none bg-surface-400 p-0 font-semibold leading-[0.9vw]">
                                    <Chevron
                                        class="w-[1vw]"
                                        color="lightgray"
                                    />
                                </button>
                            </div>
                            <span class="mt-[0.9375vw] text-[0.75vw] text-surface-50">Showing 1-5, out of 58 Voiceover Casts</span>
                        </div>
                    </div>
                </casts>
            </div>
        </voiceovercase>

        <recommendations>
            <div class="mt-[2.5vw]">
                <div class="flex items-center gap-3">
                    <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Recommendations</span>
                    <button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
                        <SettingsOutline class="w-[0.9vw] opacity-75" />
                    </button>
                </div>

                <div class="mt-[1.875vw]">
                    <div class="grid grid-cols-2 gap-[1.5vw]">
                        <div
                            class="relative col-span-1 h-[9.375vw] w-full overflow-hidden rounded-[0.875vw] bg-cover bg-center"
                            style="
								background-image: url(https://wallup.net/wp-content/uploads/2017/10/27/112470-Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru-Yuigahama_Yui-Hikigaya_Hachiman.jpg);
							"
                        >
                            <span
                                style="grid-area: 1 / 1 / 2 / 2"
                                class="absolute bottom-[0.3vw] z-10 w-full text-center text-[0.75vw] font-medium"
                            >
                                {voca.truncate("Yahari Ore no Seishun Love Come wa Machigatteiru.", 30)}
                            </span>
                            <div class="gradient absolute h-full w-full rounded-b-[0.45vw] bg-gradient-to-t from-surface-900/75 to-surface-900/25" />
                        </div>
                        <div
                            class="relative col-span-1 h-[9.375vw] w-full overflow-hidden rounded-[0.875vw] bg-cover"
                            style="
								background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHBqVsDb9uqO0weu_Hi4DdFs-AywgumizkZnLQys-TJc19oks1tofYGDqijII7qDxzZEMqVdstNg&usqp=CAU&ec=48665698);
							"
                        >
                            <span
                                style="grid-area: 1 / 1 / 2 / 2"
                                class="absolute bottom-[0.3vw] z-10 w-full text-center text-[0.75vw] font-medium"
                            >
                                {voca.truncate("Suzumiya Haruhi no Yuuutsu", 30)}
                            </span>
                            <div class="gradient absolute h-full w-full rounded-b-[0.45vw] bg-gradient-to-t from-surface-900/75 to-surface-900/25" />
                        </div>
                    </div>

                    <div class="mt-[2.5vw] flex flex-col">
                        <div class="flex h-[2.25vw] w-[6.625vw]">
                            <button class="btn btn-icon h-full w-full rounded-[0.5vw] rounded-r-none bg-surface-400 p-0 font-semibold leading-[0.9vw]">
                                <Chevron
                                    color="lightgray"
                                    class="w-[1vw] rotate-180"
                                />
                            </button>
                            <button class="btn btn-icon h-full w-full rounded-none bg-surface-400 p-0 text-[1vw] font-semibold leading-[0.9vw]">01</button>
                            <button class="btn btn-icon h-full w-full rounded-[0.5vw] rounded-l-none bg-surface-400 p-0 font-semibold leading-[0.9vw]">
                                <Chevron
                                    class="w-[1vw]"
                                    color="lightgray"
                                />
                            </button>
                        </div>
                        <span class="mt-[0.9375vw] text-[0.75vw] text-surface-50">Showing 1-8, out of 47 Recommendations</span>
                    </div>
                </div>
            </div>
        </recommendations>
    </div>
</div>
