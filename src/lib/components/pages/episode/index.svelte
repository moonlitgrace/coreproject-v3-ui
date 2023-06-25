<script lang="ts">
    import ImageLoader from "$components/shared/image/image_loader.svelte";
    import Chevron from "$icons/chevron.svelte";

</script>

<episode-container class="md:pr-[3.75vw] md:pl-[1vw] md:py-[2vw] block">
    <episode-content class="grid grid-cols-12 md:gap-[5vw]">
        <video-player class="md:col-span-8 flex flex-col md:gap-[0.75vw]">
            <player class="w-full md:h-[35vw]">
                <!-- adding a image for now -->
                <ImageLoader
                    src="/images/DemonSlayer-episode.webp"
                    alt="Episode image"
                    class="w-full md:h-[35vw] object-cover md:rounded-[0.5vw]"
                />
            </player>
            <video-player-options class="flex justify-between items-center">
                <preferences>
                    <sub-dub class="flex items-center md:gap-[0.75vw]">
                        <span class="uppercase md:text-[1vw] font-semibold">sub/dub:</span>
                        <!-- need to make this a dropdown or add tippy js -->
                        <button class="btn flex items-center md:gap-[0.5vw] bg-surface-400 md:text-[1vw] md:px-[1vw] md:py-[0.5vw] md:rounded-[0.35vw] leading-none">
                            Vidstreaming (sub)
                            <Chevron class="md:w-[1vw]" />
                        </button>
                    </sub-dub>
                </preferences>
                <video-options>
                    
                </video-options>
            </video-player-options>
        </video-player>
        <episode-info class="col-span-4">
            <episodes-picker>
                
            </episodes-picker>
            <episode-detail>
               
            </episode-detail>
        </episode-info>
    </episode-content>
</episode-container>