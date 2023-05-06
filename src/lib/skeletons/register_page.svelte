<div class="flex h-full animate-pulse flex-col justify-between">
    <form-fields>
        <div class="placeholder mb-[1.6vw] h-[1.2vw] w-[20.375vw] !bg-surface-400" />

        <email-field>
            <div class="placeholder h-[0.9vw] w-[4vw] !bg-surface-400" />
            <div class="placeholder mt-[0.75vw] h-[3.125vw] rounded-[0.75vw] !bg-surface-400" />

            <div class="mt-[0.75vw] flex h-[0.75vw] gap-[0.5vw]">
                <div class="placeholder-circle h-full w-[0.75vw] !bg-surface-400" />
                <div class="placeholder h-full w-[22vw] !bg-surface-400" />
            </div>
        </email-field>

        <password-field>
            <div class="placeholder mt-[2vw] h-[0.9vw] w-[4vw] !bg-surface-400" />
            <div class="placeholder mt-[0.75vw] h-[3.125vw] rounded-[0.75vw] !bg-surface-400" />

            <div class="grid grid-cols-4 gap-[0.75vw]">
                {#each Array(4) as _}
                    <div class="placeholder col-span-1 mt-[0.75vw] h-[0.75vw] rounded-[0.75vw] !bg-surface-400" />
                {/each}
            </div>

            <div class="mt-[1.5vw]">
                <div class="placeholder h-[1.1vw] w-[7vw] !bg-surface-400" />
                <div class="ml-[1vw] mt-[1vw] flex flex-col gap-[0.5vw]">
                    {#each Array(4) as _}
                        <div class="flex gap-[1vw]">
                            <div class="placeholder h-[0.6vw] w-[0.6vw] !bg-surface-400" />
                            <div class="placeholder h-[0.5vw] w-[10vw] !bg-surface-400" />
                        </div>
                    {/each}
                </div>
            </div>
        </password-field>

        <div class="placeholder mt-[1.5vw] h-[0.9vw] w-[9vw] !bg-surface-400" />
        <div class="placeholder mt-[0.75vw] h-[3.125vw] rounded-[0.75vw] !bg-surface-400" />
    </form-fields>

    <div class="flex items-center justify-between">
        <div class="flex flex-col gap-[0.5vw]">
            <div class="placeholder h-[0.5vw] w-[8vw] !bg-surface-400" />
            <div class="placeholder h-[0.75vw] w-[3vw] !bg-surface-400" />
        </div>
        <div class="placeholder h-[2.75vw] w-[7.75vw] !bg-surface-400" />
    </div>
</div>
