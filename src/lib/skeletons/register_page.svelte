<div class="h-max w-full bg-surface-900 md:h-full">
    <div class="flex h-full w-full animate-pulse flex-col justify-between p-10 pb-[10vw] pt-[7vw] md:rounded-none md:p-0">
        <form-fields>
            <div class="placeholder mb-10 h-4 w-60 !bg-surface-400 md:mb-[1.6vw] md:h-[1.2vw] md:w-[20.375vw]" />

            <email-field>
                <div class="placeholder h-3 w-12 !bg-surface-400 md:h-[0.9vw] md:w-[4vw]" />
                <div class="placeholder mt-2 h-12 rounded-xl !bg-surface-400 md:mt-[0.75vw] md:h-[3.125vw] md:rounded-[0.75vw]" />

                <div class="mt-2 flex h-[0.5rem] gap-2 md:mt-[0.75vw] md:gap-[0.5vw]">
                    <div class="placeholder-circle h-full w-2 !bg-surface-400 md:h-full md:w-[0.75vw]" />
                    <div class="placeholder h-full w-80 !bg-surface-400 md:h-full md:w-[22vw]" />
                </div>
            </email-field>

            <password-field>
                <div class="placeholder mt-5 h-3 w-12 !bg-surface-400 md:mt-[2vw] md:h-[0.9vw] md:w-[4vw]" />
                <div class="placeholder mt-2 h-12 rounded-xl !bg-surface-400 md:mt-[0.75vw] md:h-[3.125vw] md:rounded-[0.75vw]" />

                <div class="grid grid-cols-4 gap-2 md:gap-[0.75vw]">
                    {#each Array(4) as _}
                        <div class="placeholder col-span-1 mt-2 h-2 rounded-[0.75vw] !bg-surface-400 md:mt-[0.75vw] md:h-[0.75vw]" />
                    {/each}
                </div>

                <div class="mt-4 md:mt-[1.5vw]">
                    <div class="placeholder h-3 w-20 !bg-surface-400 md:h-[1.1vw] md:w-[7vw]" />
                    <div class="ml-3 mt-3 flex flex-col gap-2 md:ml-[1vw] md:mt-[1vw] md:gap-[0.5vw]">
                        {#each Array(4) as _}
                            <div class="flex gap-2 md:gap-[1vw]">
                                <div class="placeholder-circle h-2 !bg-surface-400 md:h-[0.6vw]" />
                                <div class="placeholder h-2 w-36 !bg-surface-400 md:h-[0.5vw] md:w-[10vw]" />
                            </div>
                        {/each}
                    </div>
                </div>
            </password-field>

            <div class="placeholder mt-5 h-3 w-12 !bg-surface-400 md:mt-[1.5vw] md:h-[0.9vw] md:w-[9vw]" />
            <div class="placeholder mt-2 h-12 rounded-xl !bg-surface-400 md:mt-[0.75vw] md:h-[3.125vw] md:rounded-[0.75vw]" />
        </form-fields>

        <div class="mt-10 flex items-center justify-between md:mt-0">
            <div class="flex flex-col gap-1 md:gap-[0.5vw]">
                <div class="placeholder h-2 w-20 !bg-surface-400 md:h-[0.5vw] md:w-[8vw]" />
                <div class="placeholder h-3 w-12 !bg-surface-400 md:h-[0.75vw] md:w-[3vw]" />
            </div>
            <div class="placeholder h-12 w-32 !bg-surface-400 md:h-[2.75vw] md:w-[7.75vw]" />
        </div>
    </div>
</div>
