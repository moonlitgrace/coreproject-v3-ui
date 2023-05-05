<script lang="ts">
    import Tick from "$icons/tick.svelte";

    const core_color_mapping: { [key: string]: string } = {
        c: "text-surface-50",
        e: "text-surface-50",
        o: "text-warning-400",
        r: "text-surface-50"
    };
</script>

<form class="flex h-full flex-col justify-between">
    <div class="flex flex-col items-start gap-[3vw]">
        <span class="flex items-center pb-[1vw] text-[1.2vw] font-bold uppercase tracking-widest text-white">
            welcome to&nbsp;
            <p class="inline-flex items-center text-surface-50">
                {#each "core".split("") as item}
                    <span class={core_color_mapping[item]}>{item}</span>
                {/each}
            </p>
            project
        </span>

        <user-info class="flex flex-col">
            <span class="pb-[0.75vw] text-[1.5vw] font-semibold text-primary-500">Summary</span>

            <username class="flex flex-col pt-[1vw]">
                <span class="text-[1.1vw] font-medium">Username</span>
                <span class="text-[1.1vw] font-medium text-surface-300">soraamamiya#5017</span>
            </username>

            <email class="flex flex-col pt-[1.5vw]">
                <span class="text-[1.1vw] font-medium">Email</span>
                <span class="text-[1.1vw] font-medium text-surface-300">sora@amamiya.moe</span>
            </email>
        </user-info>

        <div class="flex flex-col items-start">
            <button
                type="button"
                class="btn p-0 text-[1vw] font-semibold text-primary-600 underline"
            >
                {@html `< change username >`}
            </button>
            <button
                type="button"
                class="btn p-0 text-[1vw] font-semibold text-primary-600 underline"
            >
                {@html `< change email >`}
            </button>
        </div>
    </div>

    <div class="flex items-center justify-between">
        <div class="flex flex-col">
            <span class="text-[0.75vw] text-surface-100">Already have an account?</span>
            <a
                href="./login"
                class="text-[1.1vw]"
            >
                Login
            </a>
        </div>
        <button
            type="submit"
            class="btn h-[2.75vw] rounded-[0.5vw] bg-secondary-800 p-0 px-[1.25vw] text-[0.95vw] font-semibold"
        >
            <span>Finish</span>
            <Tick class="w-[0.75vw]" />
        </button>
    </div>
</form>
