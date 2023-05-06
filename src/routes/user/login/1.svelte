<script lang="ts">
    import ArrowUpRight from "$icons/arrow_up_right.svelte";
    import Info from "$icons/info.svelte";
    import { createForm } from "felte";
    import { z } from "zod";
    import { createEventDispatcher } from "svelte";
    import { onMount, onDestroy } from "svelte";
    import { validator } from "@felte/validator-zod";
    import { reporter, ValidationMessage } from "@felte/reporter-svelte";

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
        email_or_username: z.string(),
        password: z.string()
    });
    const { form } = createForm<z.infer<typeof schema>>({
        initialValues: {
            email_or_username: "",
            password: ""
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
>
    <span class="flex items-center text-[1.2vw] font-bold uppercase tracking-widest text-white">hey there! welcome back</span>

    <form-fields>
        <email-or-username-field>
            <label
                for="email-or-username"
                class="text-[1.1vw] font-semibold"
            >
                Email / Username
            </label>
            <input
                name="email-or-username"
                id="email-or-username"
                placeholder="sora@amamiya.moe / soraamamiya"
                class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
            />
            <div slot="placeholder">
                <info class="mt-[0.5vw] flex items-center gap-[0.5vw]">
                    <Info class="w-[0.9vw] opacity-70" />
                    <span class="text-[0.75vw] text-surface-300">we’ll send you a verification email on your registered email, so please ensure it’s active</span>
                </info>
            </div>
        </email-or-username-field>

        <password-field>
            <label
                for="password"
                class="mt-[1.5vw] text-[1.1vw] font-semibold"
            >
                Password
            </label>
            <div>
                <div class="relative flex flex-col">
                    <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="enter your existing password"
                        class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
                    />
                </div>
            </div>
        </password-field>

        <div class="mt-[3vw] flex flex-col items-start">
            <a
                href="./reset-password"
                class="btn p-0 text-[1vw] font-semibold text-primary-600 underline"
            >
                {@html `< forgot password?>`}
            </a>
        </div>
    </form-fields>

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
