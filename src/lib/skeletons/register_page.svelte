<div class="flex h-full flex-col justify-between animate-pulse">
    <form-fields>
        <div class="placeholder mb-[1.6vw] h-[1.2vw] w-[20.375vw]" />

        <email-field>
            <div class="placeholder h-[0.9vw] w-[4vw]" />
            <div class="placeholder mt-[0.75vw] h-[3.125vw] rounded-[0.75vw]" />

            <div class="mt-[0.75vw] flex h-[0.75vw] gap-[0.5vw]">
                <div class="placeholder-circle h-full w-[0.75vw]" />
                <div class="placeholder h-full w-[22vw]" />
            </div>
        </email-field>

        <password-field>
            <div class="placeholder mt-[2vw] h-[0.9vw] w-[4vw]" />
            <div class="placeholder mt-[0.75vw] h-[3.125vw] rounded-[0.75vw]" />

            <div class="grid grid-cols-4 gap-[0.75vw]">
                {#each Array(4) as _}
                    <div class="placeholder col-span-1 mt-[0.75vw] h-[0.75vw] rounded-[0.75vw]" />
                {/each}
            </div>

            <div class="mt-[1.5vw]">
                <div class="placeholder w-[7vw] h-[1.1vw]" />
                <div class="mt-[1vw] ml-[1vw] flex flex-col gap-[0.5vw]">
                    {#each Array(4) as _}
                        <div class="flex gap-[1vw]">
                            <div class="placeholder w-[0.6vw] h-[0.6vw]" />
                            <div class="placeholder w-[10vw] h-[0.5vw]" />
                        </div>
                    {/each}
                </div>
            </div>
        </password-field>

        <div class="placeholder mt-[1.5vw] h-[0.9vw] w-[9vw]" />
        <div class="placeholder mt-[0.75vw] h-[3.125vw] rounded-[0.75vw]" />
    </form-fields>

    <div class="flex items-center justify-between">
        <div class="flex flex-col gap-[0.5vw]">
            <div class="placeholder w-[8vw] h-[0.5vw]" />
            <div class="placeholder w-[3vw] h-[0.75vw]" />
        </div>
        <div class="placeholder w-[7.75vw] h-[2.75vw]" />
    </div>
</div>

<style lang="scss">
    .placeholder,
    .placeholder-circle {
        background-color: #1e2036 !important;
    }
</style>
