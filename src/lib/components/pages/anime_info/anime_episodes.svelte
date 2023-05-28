<script lang="ts">
    import { FormatTime } from "$functions/format_time";
    import Chevron from "$icons/chevron.svelte";
    import Cross from "$icons/cross.svelte";
    import Listen from "$icons/listen.svelte";
    import MessageCircle from "$icons/message_circle.svelte";
    import PlayCircle from "$icons/play_circle.svelte";
    import Read from "$icons/read.svelte";
    import Search from "$icons/search.svelte";
    // icons
    import SettingsOutline from "$icons/settings_outline.svelte";
    import Warning from "$icons/warning.svelte";

    export let anime_episodes: any;
</script>

<div class="my-[6vw]">
    <div class="flex items-center gap-[0.75vw]">
        <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Episodes</span>
        <button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
            <SettingsOutline class="w-[0.9vw] opacity-75" />
        </button>
    </div>

    <div class="flex justify-between md:mt-[0.5vw]">
        <div class="flex items-end gap-[1.25vw]">
            <p class="flex items-center gap-[0.75vw]">
                <span class="font-bold leading-[0.9vw] md:text-[2vw] md:leading-[1.9vw]">23</span>
                <span class="font-semibold md:text-[1vw]">episodes</span>
                <span class="md:text-[0.6vw]">▪</span>
            </p>

            <div>
                <div class="flex w-full items-center gap-[1vw] leading-[1.5vw]">
                    <span class="flex-shrink-0 text-[0.75vw] font-medium">Available in</span>
                    <div class="h-[0.08vw] w-full bg-surface-300" />
                </div>

                <div>
                    <div class="flex h-[1.8vw] items-center gap-[0.75vw] text-[0.75vw] font-bold">
                        <span class="flex h-full place-items-center rounded-[0.25vw] bg-surface-400 px-[0.9vw] uppercase leading-[0.9vw]">sub</span>

                        <span class="flex h-full place-items-center rounded-[0.25vw] bg-surface-400 px-[0.9vw] uppercase leading-[0.9vw]">dub</span>

                        <span class="md:text-[0.6vw]">▪</span>

                        <span class="flex h-full place-items-center rounded-[0.25vw] bg-surface-400 px-[0.9vw] leading-[0.9vw]">1080p</span>

                        <span class="flex h-full place-items-center rounded-[0.25vw] bg-surface-400 px-[0.9vw] leading-[0.9vw]">720p</span>
                        <span class="flex h-full place-items-center rounded-[0.25vw] bg-surface-400 px-[0.9vw] leading-[0.9vw]">480p</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-end gap-[0.75vw]">
            <div class="group flex flex-col gap-[0.5vw]">
                <span class="text-[0.75vw] leading-[0.9vw] text-surface-50 group-hover:text-white">Type</span>
                <button class="btn h-[2.4vw] rounded-[0.5vw] bg-surface-400 px-[0.9vw] text-[0.9vw] font-semibold leading-[0.9vw]">
                    <span>Subbed</span>
                    <Chevron
                        class="w-[1vw]"
                        color="lightgray"
                    />
                </button>
            </div>
            <div class="group flex flex-col gap-[0.5vw]">
                <span class="text-[0.75vw] leading-[0.9vw] text-surface-50 group-hover:text-white">Display Mode</span>
                <button class="btn h-[2.4vw] rounded-[0.5vw] bg-surface-400 px-[0.9vw] text-[0.9vw] font-semibold leading-[0.9vw]">
                    <span>Thumbnails</span>
                    <Chevron
                        class="w-[1vw]"
                        color="lightgray"
                    />
                </button>
            </div>
            <button class="btn btn-icon h-[2.4vw] w-[2.4vw] rounded-[0.5vw] bg-surface-400 p-0 font-semibold leading-[0.9vw]">
                <Search
                    class="w-[1vw]"
                    color="lightgray"
                />
            </button>
        </div>
    </div>

    <div class="mt-[2.5vw] grid grid-cols-12 gap-[3.125vw]">
        {#each anime_episodes as episode}
            <div class="group col-span-4 flex cursor-pointer flex-col items-center text-center">
                <div
                    class="rounded-b-0 relative h-[12.5vw] w-full rounded-[0.625vw] border-b-2 border-surface-400 bg-cover transition duration-300 group-hover:border-surface-300"
                    style="background-image: url({episode.episode_thumbnail ?? ''})"
                >
                    <div class="absolute h-full w-full bg-gradient-to-t from-surface-900 to-transparent transition duration-300 group-hover:to-surface-900/50" />
                    <div class="absolute bottom-[0.3vw] grid w-full grid-cols-1 place-items-center">
                        <p
                            style="grid-area: 1 / 1 / 2 / 2"
                            class="w-full text-center text-[0.9375vw] font-bold"
                        >
                            {episode.episode_number < 10 ? `0${episode.episode_number}` : episode.episode_number}
                        </p>
                        <p
                            style="grid-area: 1 / 1 / 2 / 2"
                            class="unstyled w-full pr-[0.7vw] text-end text-[0.75vw] font-semibold"
                        >
                            {new FormatTime(episode.episode_length).format_seconds_to_time_stamp_duration}
                        </p>
                    </div>
                    <div class="absolute inset-0 z-20 flex items-center justify-center gap-[0.75vw] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <button
                            type="button"
                            class="btn rounded-[0.625vw] bg-warning-400 font-bold text-surface-900 md:h-[4vw] md:w-[6.5vw] md:text-[0.87vw]"
                        >
                            <div class="flex items-center justify-center md:gap-[0.7vw]">
                                <PlayCircle class="w-[1.5vw]" />
                                <div class="flex flex-col items-start gap-[0.25vw]">
                                    <span class="text-[1vw] font-bold leading-none">
                                        Ep {episode.episode_number}
                                    </span>
                                </div>
                            </div>
                        </button>
                        <div class="flex gap-[0.35vw]">
                            <button
                                type="button"
                                class="btn h-[4vw] w-[4vw] rounded-[0.625vw] bg-surface-900 text-[0.87vw] font-semibold text-surface-50"
                                disabled
                            >
                                <div class="flex flex-col items-center justify-center md:gap-[0.35vw]">
                                    <Read class="w-[1.3vw]" />
                                    <div class="flex flex-col items-start">
                                        <span class="leading-[1vw]">Read</span>
                                    </div>
                                </div>
                            </button>
                            <button
                                type="button"
                                class="btn h-[4vw] w-[4vw] rounded-[0.625vw] bg-surface-900 text-[0.87vw] font-semibold text-surface-50"
                                disabled
                            >
                                <div class="flex flex-col items-center justify-center md:gap-[0.35vw]">
                                    <Listen class="w-[1.3vw]" />
                                    <div class="flex flex-col items-start">
                                        <span class="leading-[1vw]">Lsiten</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <span class="pt-[0.75vw] text-[0.8vw] font-light leading-[0.9375vw] text-surface-50/75 transition duration-300 group-hover:text-surface-50">
                    {episode.episode_name}
                </span>
            </div>
        {/each}
    </div>

    <comments>
        <div class="mt-[6.25vw] grid grid-cols-5 gap-[4.375vw]">
            <div class="col-span-3">
                <div class="flex items-center gap-3">
                    <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Comments</span>
                    <button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
                        <SettingsOutline class="w-[0.9vw] opacity-75" />
                    </button>
                </div>

                <div class="mt-[1.5vw]">
                    <form>
                        <textarea
                            class="h-[9vw] w-full rounded-t-[0.875vw] border-none bg-surface-900 p-[1.5625vw] pb-[2vw] text-[1vw] leading-[1.5vw] text-surface-50 outline-none ring-2 ring-white/25 duration-300 ease-in-out placeholder:text-surface-200 focus:ring-2 focus:ring-white/50"
                            placeholder="Leave a comment
e.g One peice is great..."
                        />
                        <div class="h-[1.875vw] w-full rounded-b-[0.875vw] bg-surface-400 ring-2 ring-surface-400" />

                        <div class="mt-[1.375vw] flex justify-between gap-[1vw]">
                            <div class="flex gap-[0.625vw]">
                                <Warning class="w-[1.2vw]" />
                                <p class="unstyled text-[0.75vw] font-light leading-[1.125vw] text-surface-300">
                                    Please remember to follow our
                                    <a
                                        href="/"
                                        class="unstyled text-surface-300 underline"
                                    >
                                        community guidelines
                                    </a>
                                    while commenting. Also please refrain from posting spoilers.
                                </p>
                            </div>

                            <button class="btn btn-sm h-[2.2vw] w-[7vw] rounded-[0.375vw] bg-primary-500 text-[0.85vw]">Comment</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-span-2">
                <div class="flex items-center gap-3">
                    <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Forum Posts</span>
                    <button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
                        <SettingsOutline class="w-[0.9vw] opacity-75" />
                    </button>
                </div>

                <div class="mt-[0.7vw]">
                    <div class="flex items-end justify-between">
                        <button class="btn btn-sm mt-[0.3vw] h-[2.25vw] w-[7.3125vw] gap-2 rounded-[0.375vw] bg-surface-400 p-0 text-[0.875vw]">
                            <Cross
                                color="surface-50"
                                class="w-[1vw] rotate-45"
                            />
                            Create New
                        </button>

                        <div class="flex flex-col gap-[0.5vw]">
                            <span class="text-[0.75vw] leading-[0.9vw] text-surface-50">Sort by</span>
                            <button class="btn h-[2.4vw] rounded-[0.5vw] bg-surface-400 px-[0.9vw] text-[0.9vw] font-semibold leading-[0.9vw]">
                                <span>Recent</span>
                                <Chevron
                                    class="w-[1vw]"
                                    color="lightgray"
                                />
                            </button>
                        </div>
                    </div>

                    <posts>
                        <div class="mt-[1.25vw] flex flex-col gap-[1vw]">
                            {#each Array(2) as _}
                                <div class="flex h-[5vw] w-full cursor-pointer items-center justify-between rounded-[0.625vw] bg-surface-400/90 p-[0.9375vw] duration-100 hover:bg-surface-400 active:scale-[99%]">
                                    <div class="flex items-center gap-[0.9375vw]">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3d25tDiGpqytyz4lq6xVA7cRfr5ZzUxualk3sGvP9og69mx25t00e-fz5O0fd4up6EGJMQSSDlE&usqp=CAU&ec=48665698"
                                            alt=""
                                            class="h-[3.125vw] w-[3.125vw] rounded-[0.375vw] object-cover"
                                        />

                                        <div class="flex flex-col gap-[0.375vw]">
                                            <span class="text-[0.875vw] font-extrabold leading-[1.125vw]">Celebrating 10 years of Hyouka!</span>
                                            <span class="text-[0.625vw] leading-[1.125v]">
                                                <span>Posted by Eiennlaio</span>
                                                <span class="divider-vertical ml-1 !border-white pl-1">14 hours ago</span>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="flex flex-col items-center">
                                        <MessageCircle class="w-[1.25vw]" />
                                        <span class="mt-[0.125vw] text-[0.625vw] font-light leading-[1.125vw]">69</span>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </posts>
                </div>
            </div>
        </div>
    </comments>
</div>
