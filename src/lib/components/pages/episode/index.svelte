<script lang="ts">
    import { page } from "$app/stores";
    import ForumPosts from "$components/shared/forum_posts.svelte";
    import ImageLoader from "$components/shared/image/image_loader.svelte";
    import Markdown from "$components/shared/markdown.svelte";
    import TextEditor from "$components/shared/text_editor.svelte";
    import { episode_comments } from "$data/mock/episode_comments";
    import { forum_posts } from "$data/mock/forum_posts";
    import { FormatDate } from "$functions/format_date";
    import Chevron from "$icons/chevron.svelte";
    import Cross from "$icons/cross.svelte";
    import Download from "$icons/download.svelte";
    import Filter from "$icons/filter.svelte";
    import Heart from "$icons/heart.svelte";
    import Next from "$icons/next.svelte";
    import Warning from "$icons/warning.svelte";
    import type { SvelteComponentDev } from "svelte/internal";
    import tippy from "tippy.js";

    $: episode_id = Number($page.params.id);

    const video_player_mapping: {
        preferences: {
            [key: string]: {
                enabled: boolean;
                text: string;
            };
        };
        options: {
            [key: string]: {
                component: typeof SvelteComponentDev;
                link: string;
                class: string;
                text: string;
            };
        };
    } = {
        preferences: {
            lights: {
                enabled: false,
                text: "Lights"
            },
            auto_play: {
                enabled: true,
                text: "Auto Play"
            },
            auto_next: {
                enabled: true,
                text: "Auto Next"
            },
            auto_skip_intro: {
                enabled: true,
                text: "Auto Skip Intro"
            }
        },
        options: {
            download: {
                component: Download,
                link: "./",
                class: "w-[1.4vw]",
                text: "Download"
            },
            prev: {
                component: Next,
                link: "./",
                class: "w-[1.4vw] rotate-180",
                text: "Previous Episode"
            },
            next: {
                component: Next,
                link: "./",
                class: "w-[1.4vw]",
                text: "Next Episode"
            }
        }
    };
</script>

<episode-container class="block md:py-[2vw] md:pl-[1vw] md:pr-[3.75vw]">
    <episode-content class="grid grid-cols-12 md:gap-[5vw]">
        <video-player class="flex flex-col md:col-span-8 md:gap-[0.75vw]">
            <player class="w-full md:h-[35vw]">
                <!-- adding a image for now -->
                <ImageLoader
                    src="/images/DemonSlayer-episode.webp"
                    alt="Episode image"
                    class="w-full object-cover md:h-[35vw] md:rounded-[0.5vw]"
                />
            </player>
            <video-player-options class="flex items-center justify-between">
                <preferences class="flex items-center md:gap-[1vw]">
                    <sub-dub class="flex items-center md:gap-[0.75vw]">
                        <span class="font-semibold uppercase md:text-[1vw]">sub/dub:</span>
                        <!-- need to make this a dropdown or add tippy js -->
                        <button class="btn flex items-center bg-surface-400 leading-none md:gap-[0.5vw] md:rounded-[0.35vw] md:px-[0.75vw] md:py-[0.5vw] md:text-[1vw]">
                            Vidstreaming (sub)
                            <Chevron class="md:w-[1vw]" />
                        </button>
                    </sub-dub>

                    {#each Object.entries(video_player_mapping.preferences) as item}
                        {@const text = item[1].text}
                        {@const enabled = item[1].enabled}

                        {@const status = (() => {
                            switch (enabled) {
                                case true:
                                    return "On";
                                default:
                                    return "Off";
                            }
                        })()}

                        <button class="btn flex items-center p-0 leading-none md:text-[0.9vw]">
                            <span>{text}:</span>
                            <status class="{enabled ? 'text-warning-500' : 'text-primary-300'} font-semibold">{status}</status>
                        </button>
                    {/each}
                </preferences>
                <video-options class="flex items-center gap-[0.75vw]">
                    {#each Object.entries(video_player_mapping.options) as item}
                        {@const component = item[1].component}
                        {@const link = item[1].link}
                        {@const _class = item[1].class}
                        {@const text = item[1].text}

                        <a
                            href={link}
                            class="unstyled"
                            class:pointer-events-none={!link}
                            use:tippy={{
                                content: `<div class='leading-none w-max whitespace-nowrap rounded-lg bg-surface-400 px-2 py-1 text-[0.65rem] text-surface-50 md:px-[0.75vw] md:py-[0.5vw] md:rounded-[0.35vw] md:text-[1vw]'>${text}</div>`,
                                placement: "bottom",
                                allowHTML: true,
                                arrow: false,
                                offset: [0, 17],
                                appendTo: document.body,
                                animation: "shift-away"
                            }}
                        >
                            <svelte:component
                                this={component}
                                class={_class}
                            />
                        </a>
                    {/each}
                </video-options>
            </video-player-options>
        </video-player>
        <episode-info class="col-span-4 flex flex-col justify-between">
            <episodes-container class="flex flex-col justify-between md:gap-[1.5vw]">
                <header class="flex items-center justify-between">
                    <span class="font-semibold md:text-[1.35vw]">Episodes</span>
                    <button class="btn flex items-center bg-surface-400 font-semibold leading-none md:gap-[0.5vw] md:rounded-[0.35vw] md:px-[0.75vw] md:py-[0.5vw] md:text-[1vw]">
                        EPS: 1 - 20
                        <Chevron class="md:w-[1vw]" />
                    </button>
                </header>

                <episodes class="grid grid-cols-6 md:gap-[0.75vw]">
                    {#each Array(30) as item, index}
                        {@const episode_index = index + 1}
                        <a
                            href="./{episode_index}"
                            class="{episode_index === episode_id ? 'bg-primary-500' : 'bg-surface-400'} unstyled btn font-semibold leading-none md:rounded-[0.35vw] md:py-[0.75vw] md:text-[1.2vw]"
                        >
                            {episode_index}
                        </a>
                    {/each}
                </episodes>
            </episodes-container>
            <episode-detail class="block flex items-end md:gap-[1.5vw]">
                <anime-banner class="relative md:h-[13vw] md:w-[9vw] md:flex-shrink-0">
                    <ImageLoader
                        class="h-full w-full object-cover object-center md:rounded-[0.5vw]"
                        src="/images/DemonSlayer-bg.avif"
                        alt="Demon Slayer"
                    />
                    <overlay-gradient class="absolute inset-0 bg-gradient-to-t from-surface-900/50 to-surface-900/25" />
                </anime-banner>
                <episode-main-detail class="flex flex-col leading-none md:gap-[0.25vw]">
                    <anime-title class="font-bold text-surface-50 duration-300 ease-in-out md:h-auto md:max-h-[1.75vw] md:overflow-hidden md:text-[1.5vw] md:leading-[1.75vw] md:hover:max-h-[5vw] md:hover:overflow-y-scroll">Deamon Slayer</anime-title>

                    <span class="text-surface-50 md:text-[1vw]">currently watching</span>
                    <span class="font-semibold md:my-[0.5vw] md:text-[1.25vw]">Episode: {episode_id}</span>

                    <episode-name class="text-surface-50 duration-300 ease-in-out md:h-auto md:max-h-[2.5vw] md:overflow-hidden md:text-[1vw] md:leading-[1.25vw] md:hover:max-h-[5vw] md:hover:overflow-y-scroll">A Connected Bond: Daybreak and First Light</episode-name>

                    <button
                        type="button"
                        class="btn flex items-center bg-primary-600 p-0 font-bold text-white md:mt-[1vw] md:h-[3vw] md:gap-[0.5vw] md:rounded-[0.5vw]"
                    >
                        <span class="md:text-[1.1vw]">More Details</span>
                        <Chevron class="-rotate-90 md:w-[1.25vw]" />
                    </button>
                </episode-main-detail>
            </episode-detail>
        </episode-info>
    </episode-content>

    <episode-media class="grid grid-cols-12 md:mt-[5vw] md:gap-[5vw]">
        <comments-section class="flex flex-col md:col-span-7 md:gap-[0.75vw]">
            <span class="font-semibold md:text-[1.35vw]">Comments</span>

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

                    <button class="btn btn-sm h-9 w-40 rounded bg-primary-500 text-sm font-semibold md:h-[2.2vw] md:w-[7vw] md:rounded-[0.375vw] md:text-[0.85vw]">Comment</button>
                </div>
            </form>

            <comments class="flex flex-col md:mt-[2vw] md:gap-[1.5vw]">
                {#each episode_comments as comment}
                    <comment class="flex md:gap-[1vw]">
                        <a
                            href="/user/"
                            class="flex-shrink-0 md:h-[2vw] md:w-[2vw]"
                        >
                            <ImageLoader
                                src={comment.user.profile_pic}
                                alt="Avatar"
                                class="h-full w-full shrink-0 rounded-full object-cover"
                            />
                        </a>
                        <comment-details class="flex flex-col items-start">
                            <a
                                href="/user/"
                                class="unstyled leading-none md:text-[1vw]"
                            >
                                <username>{comment.user.username}</username>
                                <comment-time class="text-surface-300 md:text-[0.75vw] md:leading-[1.5vw]">{new FormatDate(comment.date).format_to_time_from_now}</comment-time>
                            </a>

                            <Markdown
                                class="text-surface-50 md:text-[1vw] md:leading-[1.5vw]"
                                markdown={comment.content}
                            />

                            <button class="btn p-0">
                                <Heart class="text-surface-300 md:w-[1vw]" />
                                <likes class="md:text-[0.75vw]">{comment.likes}</likes>
                            </button>
                        </comment-details>
                    </comment>
                {/each}
            </comments>
        </comments-section>
        <forum-posts class="flex flex-col md:col-span-5 md:gap-[0.75vw]">
            <span class="font-semibold md:text-[1.35vw]">Forum Posts</span>

            <forum-options class="flex items-center justify-between md:mt-[0.75vw]">
                <posts-count class="flex items-center gap-1 md:hidden">
                    <span class="text-base font-bold leading-none">106</span>
                    <span class="text-sm font-semibold text-surface-50">posts</span>
                </posts-count>

                <forum-buttons class="flex items-center gap-2 md:w-full md:justify-between">
                    <button class="btn btn-sm h-7 gap-2 rounded bg-surface-400 px-2 text-xs font-semibold md:h-[2.4vw] md:rounded-[0.5vw] md:px-[0.9vw] md:text-[0.875vw]">
                        <Cross
                            color="surface-50"
                            class="w-4 rotate-45 md:w-[1vw]"
                        />
                        Create New
                    </button>

                    <button
                        class="btn btn-icon h-7 w-auto rounded bg-surface-400 p-0 font-semibold md:ml-0 md:h-[2.4vw] md:w-[2.4vw] md:rounded-[0.5vw] md:leading-[0.9vw]"
                        aria-label="Filter"
                    >
                        <Filter
                            class="w-3 md:w-[1vw]"
                            color="lightgray"
                        />
                    </button>
                </forum-buttons>
            </forum-options>

            <posts class="mt-4 grid grid-cols-2 flex-col gap-4 md:mt-[1vw] md:flex md:gap-[1vw]">
                {#each forum_posts as post}
                    <ForumPosts
                        post_title={post.title}
                        post_banner={post.banner}
                        post_description={post.description}
                        auther={post.auther}
                        posted_on_date={post.posted_on}
                        link={post.link}
                        responses={Number(post.responses)}
                    />
                {/each}
            </posts>
        </forum-posts>
    </episode-media>
</episode-container>

<style lang="scss">
    anime-title,
    episode-name {
        scrollbar-width: none;
    }
</style>
