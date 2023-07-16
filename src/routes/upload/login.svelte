<script lang="ts">
    import ArrowUpRight from "$icons/arrow_up_right.svelte";
    import Chevron from "$icons/chevron.svelte";
</script>

<login-container class="grid h-full w-full grid-cols-12 md:gap-[5vw] md:px-[3.75vw]">
    <form class="flex flex-col md:col-span-7 md:mt-[2vw]">
        <span class="font-semibold md:text-[1.5vw] md:leading-[1.5vw]">
            Paste your
            <span class="inline-flex text-warning-400">API</span>
            token to continue
        </span>
        <span class="text-surface-50 md:text-[1vw] md:leading-[2vw]">for seamless integration</span>

        <providers class="md:mt-[5vw]">
            <streamsb class="flex flex-col">
                <span class="font-semibold md:text-[1.25vw] md:leading-[1.5vw]">Stream SB</span>
                <span class="text-surface-50 md:text-[1vw] md:leading-[1.25vw]">Insert your unique API token here to unlock the full potential of Streamsb's video services</span>

                <token-input class="flex justify-between md:mt-[1vw] md:gap-[1vw]">
                    <input
                        placeholder="StreamSB token"
                        class="h-12 w-full rounded-xl border-[0.4vw] border-primary-500 bg-transparent px-5 text-base font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400 md:h-[3.125vw] md:rounded-[0.6vw] md:border-[0.2vw] md:px-[1vw] md:text-[1.1vw]"
                    />
                    <button class="unstyled btn bg-primary-500 font-semibold leading-none md:rounded-[0.6vw] md:px-[1vw] md:py-[0.5vw] md:text-[1vw]">
                        <span>Continue</span>
                        <Chevron class="-rotate-90 md:w-[1vw]" />
                    </button>
                </token-input>
            </streamsb>
        </providers>
    </form>
    <characters class="md:col-span-5">Character</characters>
</login-container>
