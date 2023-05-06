<script lang="ts">
    import ArrowUpRight from "$icons/arrow_up_right.svelte";
    import Info from "$icons/info.svelte";
</script>

<form class="flex h-full flex-col justify-between">
    <span class="flex items-center text-[1.2vw] font-bold uppercase tracking-widest text-white">forgot password? don't worry!</span>

    <email-field>
        <label
            for="email"
            class="text-[1.1vw] font-semibold"
        >
            Email address
        </label>
        <input
            name="email"
            placeholder="sora@amamiya.moe"
            class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
        />
        <div slot="placeholder">
            <info class="mt-[0.5vw] flex items-center gap-[0.5vw]">
                <Info class="w-[0.9vw] opacity-70" />
                <span class="text-[0.75vw] text-surface-300">we’ll send you a reset password link on your registered email address.</span>
            </info>
        </div>
    </email-field>

    <div class="flex items-center justify-between">
        <div class="flex flex-col">
            <span class="text-[0.75vw] text-surface-100">don't have a core account?</span>
            <a
                href="./register"
                class="text-[1.1vw]"
            >
                Register
            </a>
        </div>
        <button
            type="submit"
            class="btn h-[2.75vw] rounded-[0.5vw] bg-secondary-800 p-0 px-[1.25vw] text-[0.95vw] font-semibold"
        >
            <span>Continue</span>
            <ArrowUpRight class="w-[1vw] rotate-45" />
        </button>
    </div>
</form>
