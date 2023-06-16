<script lang="ts">
    import ImageLoader from "$components/shared/image/image_loader.svelte";
    import TextEditor from "$components/shared/text_editor.svelte";
    import { forum_posts } from "$data/mock/forum_posts";
    import { FormatDate } from "$functions/format_date";
    import { FormatTime } from "$functions/format_time";
    import Chevron from "$icons/chevron.svelte";
    import Circle from "$icons/circle.svelte";
    import Cross from "$icons/cross.svelte";
    import EyeOpen from "$icons/eye_open.svelte";
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

<div class="my-7 md:my-[6vw]">
    <div class="flex gap-x-[0.75vw]">
        <span class="text-lg font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Episodes</span>
        <button class="btn btn-icon hidden rounded bg-surface-400 p-0 md:flex md:h-[1.5vw] md:w-[1.5vw]">
            <SettingsOutline class="w-[0.9vw] opacity-75" />
        </button>
    </div>

    <div class="mt-5 flex flex-col justify-between gap-y-5 md:mt-0 md:flex-row md:gap-y-0">
        <div class="flex items-end gap-2 md:gap-[1.25vw]">
            <p class="flex items-center gap-1 md:gap-[0.75vw]">
                <span class="text-base font-bold leading-none md:text-[2vw] md:leading-[1.9vw]">23</span>
                <span class="text-xs font-semibold md:text-[1vw]">episodes</span>
                <span class="inline-flex items-center text-[0.4rem] md:text-[1vw]">▪</span>
            </p>

            <div>
                <div class="flex w-full items-center gap-2 leading-4 md:gap-[1vw] md:leading-[1.5vw]">
                    <span class="flex-shrink-0 text-[0.5rem] font-medium md:text-[0.75vw]">Available in</span>
                    <div class="h-[0.1rem] w-full bg-surface-50/25 md:h-[0.08vw] md:bg-surface-300" />
                </div>

                <div>
                    <div class="flex h-5 gap-2 text-[0.5rem] font-bold md:h-[1.8vw] md:gap-[0.75vw] md:text-[0.75vw]">
                        {#each ["sub", "dub"] as item}
                            <span class="flex h-full place-items-center rounded bg-surface-400 px-2 uppercase leading-[0.9vw] md:rounded-[0.25vw] md:px-[0.9vw]">
                                {item}
                            </span>
                        {/each}

                        <span class="inline-flex items-center text-[0.4rem] md:text-[1vw]">▪</span>

                        {#each ["1080p", "720p", "480p"] as resolution}
                            <span class="flex h-full place-items-center rounded bg-surface-400 px-2 leading-[0.9vw] md:rounded-[0.25vw] md:px-[0.9vw]">
                                {resolution}
                            </span>
                        {/each}
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-end gap-2 md:gap-[0.75vw]">
            <div class="group flex flex-col gap-2 md:gap-[0.5vw]">
                <span class="text-[0.65rem] leading-[0.9vw] text-surface-50 transition-colors duration-300 group-hover:text-white md:text-[0.75vw]">Type</span>
                <button class="btn h-7 rounded bg-surface-400 px-3 text-[0.65rem] font-semibold md:h-[2.4vw] md:rounded-[0.5vw] md:px-[0.9vw] md:text-[0.9vw] md:leading-[0.9vw]">
                    <span>Subbed</span>
                    <Chevron
                        class="w-3 md:w-[1vw]"
                        color="lightgray"
                    />
                </button>
            </div>
            <div class="group flex flex-col gap-2 md:gap-[0.5vw]">
                <span class="text-[0.65rem] leading-[0.9vw] text-surface-50 transition-colors duration-300 group-hover:text-white md:text-[0.75vw]">Display Mode</span>
                <button class="btn h-7 rounded bg-surface-400 px-3 text-[0.65rem] font-semibold leading-[0.9vw] md:h-[2.4vw] md:rounded-[0.5vw] md:px-[0.9vw] md:text-[0.9vw]">
                    <span>Thumbnails</span>
                    <Chevron
                        class="w-3 md:w-[1vw]"
                        color="lightgray"
                    />
                </button>
            </div>
            <button class="btn btn-icon ml-auto h-7 w-auto rounded bg-surface-400 p-0 font-semibold md:ml-0 md:h-[2.4vw] md:w-[2.4vw] md:rounded-[0.5vw] md:leading-[0.9vw]">
                <Search
                    class="w-3 md:w-[1vw]"
                    color="lightgray"
                />
            </button>
        </div>
    </div>

    <div class="mt-4 grid grid-cols-12 gap-5 md:mt-[2.5vw] md:gap-[2.5vw]">
        {#each anime_episodes as episode}
            {@const thumbnail = episode.thumbnail}
            {@const title = episode.title}
            {@const episode_number = episode.number}
            {@const japanese_name = episode.japanese_title}
            {@const duration = episode.duration}

            <a
                href="/mal/1/watch?ep={episode_number}"
                class="group relative col-span-6 flex flex-col !text-inherit !no-underline transition duration-300 md:col-span-4"
            >
                <div class="relative h-32 w-full border-b-2 border-none border-surface-400 bg-cover transition duration-300 group-hover:border-surface-300 md:h-[19vw] md:border-b-[0.2vw]">
                    <div class="md:h-[12vw]">
                        <ImageLoader
                            src={thumbnail ?? ""}
                            class="h-full w-full shrink-0 rounded-t-lg bg-cover bg-center md:rounded-t-[0.625vw]"
                        />
                    </div>

                    <overlay-effect class="absolute inset-0 bg-gradient-to-t from-surface-900 to-transparent transition duration-300" />
                    <div class="absolute top-0 flex w-full items-center justify-between p-[0.5vw]">
                        <p class="rounded bg-surface-900/50 p-[0.45vw] text-xs font-bold tracking-wider text-surface-50 md:text-[0.8vw]">
                            EP {episode_number < 10 ? `0${episode_number}` : episode_number}
                        </p>
                        <p class="unstyled rounded bg-surface-900/50 p-[0.45vw] text-xs font-semibold tracking-wider text-surface-50 md:text-[0.75vw]">
                            {new FormatTime(duration).format_seconds_to_time_stamp_duration}
                        </p>
                    </div>
                </div>

                <episode-info class="absolute bottom-0 flex h-auto w-full flex-col items-start justify-between bg-surface-900/75 p-[1vw] transition duration-300 md:gap-[0.75vw] md:backdrop-blur-xl">
                    <div class="relative flex flex-col items-start md:gap-[0.25vw]">
                        <span class="w-[18vw] overflow-hidden whitespace-nowrap font-light text-surface-50/90 transition duration-300 group-hover:whitespace-normal group-hover:text-surface-50 md:text-[0.9vw] md:leading-[1.25vw]">
                            {title}
                        </span>

                        <span class="line-clamp-1 font-light text-surface-50/75 transition duration-300 group-hover:line-clamp-none group-hover:text-surface-50 md:text-[0.85vw] md:leading-[1.25vw]">
                            {japanese_name}
                        </span>

                        <gradient class="absolute right-0 h-full w-[3.5vw] bg-gradient-to-l from-surface-900 to-transparent group-hover:hidden" />
                    </div>
                    <div class="flex w-full items-center md:mt-[0.25vw] md:gap-[0.65vw]">
                        {#each episode.formats as format}
                            <p class="unstyled rounded bg-surface-400/50 p-[0.45vw] py-[0.35vw] text-xs font-semibold uppercase tracking-wider text-surface-50 md:text-[0.8vw]">{format}</p>
                        {/each}

                        {#each episode.resolutions as resolution, index}
                            {@const hd = resolution === "720p"}
                            {@const fhd = resolution === "1080p"}

                            <p
                                class="unstyled rounded bg-surface-400/25 p-[0.45vw] py-[0.35vw] text-xs font-semibold uppercase tracking-wider text-surface-50 md:text-[0.8vw]"
                                class:md:ml-[0.5vw]={index === 0}
                            >
                                {hd ? "hd" : fhd ? "fhd" : "sd"}
                            </p>
                        {/each}
                    </div>
                </episode-info>
            </a>
        {/each}
    </div>

    <div class="mt-[5vw] flex grid-cols-5 flex-col gap-5 md:grid md:gap-[4.375vw]">
        <comment-box class="md:col-span-3">
            <div class="flex gap-2 md:gap-[0.75vw]">
                <span class="text-base font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Comments</span>
                <button class="btn btn-icon hidden rounded bg-surface-400 p-0 md:flex md:h-[1.5vw] md:w-[1.5vw]">
                    <SettingsOutline class="w-[0.9vw] opacity-75" />
                </button>
            </div>

            <form class="mt-3 md:mt-[1vw]">
                <div class="relative">
                    <TextEditor />
                </div>

                <div class="mt-4 flex justify-between gap-5 md:mt-[0.75vw] md:gap-[1vw]">
                    <div class="flex items-center gap-3 md:gap-[0.625vw]">
                        <Warning class="w-10 md:w-[1.2vw]" />
                        <p class="unstyled text-[0.65rem] font-light leading-tight text-surface-300 md:text-[0.75vw] md:leading-[1.125vw]">
                            Please remember to follow our
                            <a
                                href="/"
                                class="unstyled text-surface-200 underline"
                            >
                                community guidelines
                            </a>
                            while commenting. Also please refrain from posting spoilers.
                        </p>
                    </div>

                    <button class="btn btn-sm h-10 w-40 rounded-md bg-primary-500 text-sm md:h-[2.2vw] md:w-[7vw] md:rounded-[0.375vw] md:text-[0.85vw]">Comment</button>
                </div>
            </form>
        </comment-box>
        <forum-posts class="md:col-span-2">
            <div class="flex gap-[0.75vw]">
                <span class="text-base font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Forum Posts</span>
                <button class="btn btn-icon hidden rounded bg-surface-400 p-0 md:flex md:h-[1.5vw] md:w-[1.5vw]">
                    <SettingsOutline class="w-[0.9vw] opacity-75" />
                </button>
            </div>

            <div class="mt-3 md:mt-[0.75vw]">
                <div class="flex justify-between">
                    <button class="btn btn-sm h-8 gap-2 rounded bg-surface-400 p-0 px-4 text-xs font-semibold md:h-[2.4vw] md:rounded-[0.5vw] md:px-[0.9vw] md:text-[0.875vw]">
                        <Cross
                            color="surface-50"
                            class="w-4 rotate-45 md:w-[1vw]"
                        />
                        Create New
                    </button>

                    <button class="btn h-8 rounded bg-surface-400 px-4 text-xs font-semibold leading-[0.9vw] md:h-[2.4vw] md:rounded-[0.5vw] md:px-[0.9vw] md:text-[0.9vw]">
                        <span>Recent</span>
                        <Chevron
                            class="w-4 md:w-[1vw]"
                            color="lightgray"
                        />
                    </button>
                </div>

                <posts class="mt-4 grid grid-cols-2 flex-col gap-5 md:mt-[1.25vw] md:flex md:gap-[1vw]">
                    {#each forum_posts as post}
                        <a
                            href="/"
                            class="card w-full grid-cols-7 overflow-hidden rounded-lg !bg-surface-400 md:grid md:rounded-[0.625vw]"
                        >
                            <div class="col-span-2 h-16 md:h-full md:w-full">
                                <ImageLoader
                                    src={post.banner}
                                    alt={post.title}
                                    class="h-full w-full object-cover object-center"
                                />
                            </div>

                            <div class="flex h-32 flex-col justify-between p-3 md:col-span-5 md:h-full md:gap-[0.375vw] md:p-[1vw]">
                                <div>
                                    <span class="line-clamp-2 text-xs font-extrabold md:text-[0.875vw] md:leading-[1.25vw]">
                                        {post.title}
                                    </span>
                                    <span class="mt-2 line-clamp-3 text-[0.6rem] font-medium leading-snug text-surface-50 md:mt-[0.5vw] md:line-clamp-2 md:text-[0.75vw] md:leading-[1.125vw]">
                                        {post.description}
                                    </span>
                                </div>

                                <div class=" flex items-center justify-between text-[0.6rem] leading-none md:mt-[0.75vw] md:text-[0.75vw]">
                                    <div>
                                        <span>
                                            Posted by <span class="text-[0.65rem] font-semibold md:text-[0.85vw]">{post.auther}</span>
                                        </span>
                                        <span class="text-surface-50">
                                            {new FormatDate(post.posted_on).format_to_time_from_now}
                                        </span>
                                    </div>

                                    <div class="flex items-center gap-1 md:gap-[0.25vw]">
                                        <MessageCircle class="w-3 md:w-[1vw]" />
                                        <span>{post.responses}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    {/each}
                </posts>
            </div>
        </forum-posts>
    </div>
</div>
