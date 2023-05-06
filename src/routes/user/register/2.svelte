<script lang="ts">
    import ArrowUpRight from "$icons/arrow_up_right.svelte";
    import Info from "$icons/info.svelte";
    import { createForm } from "felte";
    import { z } from "zod";
    import { createEventDispatcher } from "svelte";
    import { onMount, onDestroy } from "svelte";
    import { validator } from "@felte/validator-zod";
    import { reporter, ValidationMessage } from "@felte/reporter-svelte";
    import { focusTrap } from "@skeletonlabs/skeleton";

    // Broken
    // See : https://github.com/pablo-abc/felte/issues/223#issuecomment-1510467575
    // Dont remove this unless you know what you are doing
    // Is meant to be a temporary workaround
    let mounted = false;
    onMount(() => {
        mounted = true;
    });
    onDestroy(() => {
        mounted = false;
    });

    const dispatch = createEventDispatcher();

    const schema = z.object({
        username: z.string(),
        otp: z.string()
    });
    const { form } = createForm<z.infer<typeof schema>>({
        initialValues: {
            username: "",
            otp: ""
        },
        onSubmit: async (values) => {
            dispatch("submit", values);
        },
        extend: [reporter, validator({ schema })]
    });
</script>

<form
    class="flex h-full flex-col justify-between"
    use:form
        use:focusTrap={true}

>
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
                placeholder="choose any username"
                class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
            />
            {#if mounted}
                <ValidationMessage
                    for="username"
                    let:messages={message}
                >
                    <span class="mt-[0.5vw] text-[0.75vw] text-surface-300">{@html message}</span>
                    <div slot="placeholder">
                        <info class="mt-[0.5vw] flex items-center gap-[0.5vw]">
                            <Info class="w-[0.9vw] opacity-70" />
                            <span class="text-[0.75vw] text-surface-300">you can change username in your user settings later, so go bonkers!</span>
                        </info>
                    </div>
                </ValidationMessage>
            {/if}
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
                placeholder="enter the code"
                class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
            />
            {#if mounted}
                <ValidationMessage
                    for="otp"
                    let:messages={message}
                >
                    <span class="mt-[0.5vw] text-[0.75vw] text-surface-300">{@html message}</span>

                    <div slot="placeholder">
                        <info class="mt-[0.5vw] flex items-center gap-[0.5vw]">
                            <Info class="w-[0.9vw] opacity-70" />
                            <span class="text-[0.75vw] text-surface-300">if you didn’t receive the code, check your spam folder. Or use the resend button</span>
                        </info>
                    </div>
                </ValidationMessage>
            {/if}
        </otp-field>

        <div class="flex flex-col">
            <button
                type="button"
                class="btn p-0 text-[1vw] font-semibold text-primary-600 underline"
            >
                {@html `< resend code >`}
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
            <span>Continue</span>
            <ArrowUpRight class="w-[1vw] rotate-45" />
        </button>
    </div>
</form>
