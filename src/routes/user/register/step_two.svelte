<script lang="ts">
    import ArrowUpRight from "$icons/arrow_up_right.svelte";
    import Info from "$icons/info.svelte";
</script>

<form class="flex h-full flex-col justify-between">
    <div class="flex flex-col items-start gap-[1.5vw]">
        <form-title>
            <span class="text-[1.2vw] font-bold uppercase tracking-widest">choose your username and verify</span>
        </form-title>

        <username-field class="mt-[4vw] w-full">
            <label
                for="username"
                class="text-[1.1vw] font-semibold"
            >
                Username
            </label>
            <input
                name="username"
                id="username"
                placeholder="choose any username"
                class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
            />
            <div slot="placeholder">
                <info class="mt-[0.5vw] flex items-center gap-[0.5vw]">
                    <Info class="w-[0.9vw] opacity-70" />
                    <span class="text-[0.75vw] text-surface-300">you can change username in your user settings later, so go bonkers!</span>
                </info>
            </div>
        </username-field>

        <otp-field class="w-full">
            <label
                for="otp"
                class="text-[1.1vw] font-semibold"
            >
                One Time Verification Code
            </label>
            <input
                name="otp"
                id="otp"
                placeholder="enter the code"
                class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
            />
            <div slot="placeholder">
                <info class="mt-[0.5vw] flex items-center gap-[0.5vw]">
                    <Info class="w-[0.9vw] opacity-70" />
                    <span class="text-[0.75vw] text-surface-300">if you didn’t receive the code, check your spam folder. Or use the resend button</span>
                </info>
            </div>
            <!-- Error logics here -->
        </otp-field>

        <div class="flex flex-col">
            <button
                type="button"
                class="btn p-0 text-[1vw] font-semibold text-primary-600 underline"
            >
                &#60; resend code &#62;
            </button>
            <button
                type="button"
                class="btn p-0 text-[1vw] font-semibold text-primary-600 underline"
            >
                &#60; change email &#62;
            </button>
        </div>
    </div>

    <div class="flex items-center justify-between">
        <div class="flex flex-col">
            <span class="text-[0.75vw] text-surface-100">Already have an account?</span>
            <a
                href="/user/login"
                class="text-[1.1vw]"
            >
                Login
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
