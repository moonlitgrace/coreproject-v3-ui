<script lang="ts">
    import ArrowUpRight from "$icons/shapes/arrow_up_right.svelte";
    import Info from "$icons/shapes/info.svelte";
    import { focusTrap } from "@skeletonlabs/skeleton";
</script>

<form
    use:focusTrap={true}
    class="flex h-max w-full flex-col bg-surface-900 p-10 pb-[10vw] pt-[7vw] md:h-full md:justify-between md:rounded-none md:p-0"
>
    <span class="flex items-center pb-[5vw] text-base font-bold uppercase tracking-widest text-white md:pb-[1vw] md:text-[1.2vw]">forgot password? don't worry!</span>

    <email-field class="flex flex-col">
        <label
            for="email"
            class="text-lg font-semibold md:text-[1.1vw]"
        >
            Email
        </label>
        <input
            name="email"
            id="email"
            placeholder="sora@coreproject.moe"
            class="mt-[0.25vw] h-12 w-full rounded-xl border-[0.4vw] border-primary-500 bg-transparent pl-5 text-base font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400 md:h-[3.125vw] md:rounded-[0.75vw] md:border-[0.2vw] md:pl-[1vw] md:text-[1.1vw]"
        />

        <div slot="placeholder">
            <info class="mt-[0.75vw] flex items-center gap-2 md:mt-[0.5vw]">
                <Info class="w-3 opacity-70 md:w-[0.9vw]" />
                <span class="text-xs text-surface-300 md:text-[0.75vw]">we’ll send you a reset password link on your registered email address</span>
            </info>
        </div>
    </email-field>

    <div class="mt-10 flex items-center justify-between md:mt-0">
        <div class="flex flex-col gap-1 md:gap-0">
            <span class="text-xs text-surface-100 md:text-[0.75vw]">Don't have a core account?</span>
            <a
                href="./register"
                class="text-base md:text-[1.1vw]"
            >
                Register
            </a>
        </div>
        <button
            type="submit"
            class="btn h-12 rounded-lg bg-secondary-800 p-0 px-5 text-base font-semibold md:h-[2.75vw] md:rounded-[0.5vw] md:px-[1.25vw] md:text-[0.95vw]"
        >
            <span>Continue</span>
            <ArrowUpRight class="w-4 rotate-45 md:w-[1vw]" />
        </button>
    </div>
</form>
