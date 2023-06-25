<script lang="ts">
    import ImageLoader from "$components/shared/image/image_loader.svelte";
    import Chevron from "$icons/chevron.svelte";

    const video_player_preferences: {
        [key: string]: {
            enabled: boolean;
            text: string;
        };
    } = {
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

                    {#each Object.entries(video_player_preferences) as item}
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
                <video-options />
            </video-player-options>
        </video-player>
        <episode-info class="col-span-4">
            <episodes-picker />
            <episode-detail />
        </episode-info>
    </episode-content>
</episode-container>
