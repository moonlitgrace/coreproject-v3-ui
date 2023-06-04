<script lang="ts">
    import ImageLoader from "$components/shared/image/image_loader.svelte";
    import TextEditor from "$components/shared/text_editor.svelte";
    import EmojiPicker from "$components/shared/tippies/emoji_picker.svelte";
    import { forum_posts } from "$data/mock/forum_posts";
    import { FormatDate } from "$functions/format_date";
    import { FormatTime } from "$functions/format_time";
    import Chevron from "$icons/chevron.svelte";
    import Cross from "$icons/cross.svelte";
    import Emoji from "$icons/emoji.svelte";
    import Listen from "$icons/listen.svelte";
    import MessageCircle from "$icons/message_circle.svelte";
    import PlayCircle from "$icons/play_circle.svelte";
    import Read from "$icons/read.svelte";
    import Search from "$icons/search.svelte";
    // icons
    import SettingsOutline from "$icons/settings_outline.svelte";
    import Warning from "$icons/warning.svelte";
    import tippy from "tippy.js";

    export let anime_episodes: any;

    /* Comment box logics */
    let comment_box: HTMLTextAreaElement;
    let comment_text: string;
</script>

<div class="my-[6vw]">
    <div class="flex gap-x-[0.75vw]">
        <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Episodes</span>
        <button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
            <SettingsOutline class="w-[0.9vw] opacity-75" />
        </button>
    </div>

    <div class="flex justify-between">
        <div class="flex items-end gap-[1.25vw]">
            <p class="flex gap-[0.75vw]">
                <span class="font-bold leading-[0.9vw] md:text-[2vw] md:leading-[1.9vw]">23</span>
                <span class="font-semibold md:text-[1vw]">episodes</span>
                <span class="inline-flex items-center text-[1vw]">▪</span>
            </p>

            <div>
                <div class="flex w-full items-center gap-[1vw] leading-[1.5vw]">
                    <span class="flex-shrink-0 text-[0.75vw] font-medium">Available in</span>
                    <div class="h-[0.08vw] w-full bg-surface-300" />
                </div>

                <div>
                    <div class="flex h-[1.8vw] gap-[0.75vw] text-[0.75vw] font-bold">
                        <span class="flex h-full place-items-center rounded-[0.25vw] bg-surface-400 px-[0.9vw] uppercase leading-[0.9vw]">sub</span>

                        <span class="flex h-full place-items-center rounded-[0.25vw] bg-surface-400 px-[0.9vw] uppercase leading-[0.9vw]">dub</span>

                        <span class="inline-flex items-center text-[1vw]">▪</span>

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
            <div class="group col-span-4 flex flex-col items-center text-center">
                <div class="relative h-[12.5vw] w-full border-b-[0.2vw] border-surface-400 bg-cover transition duration-300 group-hover:border-surface-300">
                    <ImageLoader
                        src={episode.episode_thumbnail ?? ""}
                        class="rounded-b-0 absolute h-full w-full rounded-[0.625vw] bg-cover bg-center"
                    />

                    <div class="absolute inset-0 bg-gradient-to-t from-surface-900 to-transparent transition duration-300 group-hover:to-surface-900/50" />
                    <div class="absolute bottom-[0.3vw] grid w-full grid-cols-1 place-items-center">
                        <p class="col-start-1 col-end-2 row-start-1 row-end-2 w-full text-center text-[0.9375vw] font-bold">
                            {episode.episode_number < 10 ? `0${episode.episode_number}` : episode.episode_number}
                        </p>
                        <p class="unstyled col-start-1 col-end-2 row-start-1 row-end-2 w-full pr-[0.7vw] text-end text-[0.75vw] font-semibold">
                            {new FormatTime(episode.episode_length).format_seconds_to_time_stamp_duration}
                        </p>
                    </div>
                    <div class="absolute inset-0 z-20 flex items-center justify-center gap-[0.75vw] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <button
                            type="button"
                            class="btn rounded-[0.625vw] bg-warning-400 font-bold text-surface-900 md:h-[4vw] md:w-[6.5vw] md:text-[0.87vw]"
                        >
                            <div class="flex place-items-center md:gap-[0.7vw]">
                                <PlayCircle class="w-[1.5vw]" />
                                <span class="text-[1vw] font-bold leading-none">
                                    Ep {episode.episode_number}
                                </span>
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
                                <div class="flex flex-col place-items-center md:gap-[0.35vw]">
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

    <div class="mt-[5vw] grid grid-cols-5 gap-[4.375vw]">
        <comment-box class="col-span-3">
            <div class="flex gap-[0.75vw]">
                <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Comments</span>
                <button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
                    <SettingsOutline class="w-[0.9vw] opacity-75" />
                </button>
            </div>

            <form class="mt-[1vw]">
                <div class="relative">
                    <TextEditor />
                    <!-- <textarea
                        class="h-[8vw] w-full rounded-[0.75vw] border-none bg-surface-900 p-[1vw] text-[1vw] leading-[1.5vw] text-surface-50 outline-none ring-2 ring-white/25 duration-300 ease-in-out placeholder:text-surface-200 focus:ring-2 focus:ring-white/50"
                        placeholder="Leave a comment"
                        bind:value={comment_text}
                        bind:this={comment_box}
                    /> -->
                    <!-- <button
                        class="btn btn-icon absolute bottom-[0.75vw] right-[0.75vw] w-auto p-0"
                        type="button"
                        use:tippy={{
                            trigger: "click",
                            interactive: true,
                            placement: "top-end",
                            arrow: false,
                            allowHTML: true,
                            animation: "shift-away",
                            hideOnClick: true,
                            appendTo: document.body,
                            onTrigger: async (instance) => {
                                const node = document.createElement("div");
                                new EmojiPicker({
                                    target: node,
                                    props: {
                                        text_element: comment_box
                                    }
                                });

                                instance.setContent(node);
                            }
                        }}
                    >
                        <Emoji class="w-[1.5vw] opacity-75" />
                    </button> -->
                </div>

                <div class="mt-[0.75vw] flex justify-between gap-[1vw]">
                    <div class="flex gap-[0.625vw]">
                        <Warning class="w-[1.2vw]" />
                        <p class="unstyled text-[0.75vw] font-light leading-[1.125vw] text-surface-300">
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

                    <button class="btn btn-sm h-[2.2vw] w-[7vw] rounded-[0.375vw] bg-primary-500 text-[0.85vw]">Comment</button>
                </div>
            </form>
        </comment-box>
        <forum-posts class="col-span-2">
            <div class="flex gap-[0.75vw]">
                <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Forum Posts</span>
                <button class="btn btn-icon rounded bg-surface-400 p-0 md:h-[1.5vw] md:w-[1.5vw]">
                    <SettingsOutline class="w-[0.9vw] opacity-75" />
                </button>
            </div>

            <div class="mt-[0.75vw]">
                <div class="flex justify-between">
                    <button class="btn btn-sm h-[2.4vw] w-[7.5vw] gap-2 rounded-[0.5vw] bg-surface-400 p-0 text-[0.875vw] font-semibold">
                        <Cross
                            color="surface-50"
                            class="w-[1vw] rotate-45"
                        />
                        Create New
                    </button>

                    <button class="btn h-[2.4vw] rounded-[0.5vw] bg-surface-400 px-[0.9vw] text-[0.9vw] font-semibold leading-[0.9vw]">
                        <span>Recent</span>
                        <Chevron
                            class="w-[1vw]"
                            color="lightgray"
                        />
                    </button>
                </div>

                <posts class="mt-[1.25vw] flex flex-col gap-[1vw]">
                    {#each forum_posts as post}
                        <a
                            href="/"
                            class="card grid w-full grid-cols-7 overflow-hidden rounded-[0.625vw] !bg-surface-400"
                        >
                            <div class="col-span-2">
                                <ImageLoader
                                    src={post.banner}
                                    alt={post.title}
                                    class="h-full w-full object-cover object-center"
                                />
                            </div>

                            <div class="col-span-5 flex flex-col gap-[0.375vw] p-[1vw]">
                                <div>
                                    <span class="line-clamp-2 text-[0.875vw] font-extrabold leading-[1.25vw]">
                                        {post.title}
                                    </span>
                                    <span class="mt-[0.5vw] line-clamp-2 text-[0.75vw] font-medium leading-[1.125vw] text-surface-50">
                                        {post.description}
                                    </span>
                                </div>

                                <div class="mt-[0.75vw] flex items-center justify-between text-[0.75vw] leading-none">
                                    <div>
                                        <span>
                                            Posted by <span class="text-[0.85vw] font-semibold">{post.auther}</span>
                                        </span>
                                        <span class="text-surface-50">
                                            {new FormatDate(post.posted_on).format_to_time_from_now}
                                        </span>
                                    </div>

                                    <div class="flex items-center gap-[0.25vw]">
                                        <MessageCircle class="w-[1vw]" />
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
