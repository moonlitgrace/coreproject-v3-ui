<script lang="ts">
    import _ from "lodash";
    import { createForm } from "felte";
    import Info from "$icons/info.svelte";
    import Cross from "$icons/cross.svelte";
    import ArrowUpRight from "$icons/arrow_up_right.svelte";
    import Tick from "$icons/tick.svelte";
    import { validator } from "@felte/validator-zod";
    import { z } from "zod";
    import { reporter, ValidationMessage } from "@felte/reporter-svelte";
    import { onMount } from "svelte";

    import { zxcvbn, zxcvbnOptions } from "@zxcvbn-ts/core";
    import zxcvbnCommonPackage from "@zxcvbn-ts/language-common";
    import zxcvbnEnPackage from "@zxcvbn-ts/language-en";

    let password_strength = 0;

    const options = {
        dictionary: {
            ...zxcvbnCommonPackage.dictionary,
            ...zxcvbnEnPackage.dictionary
        }
    };

    zxcvbnOptions.setOptions(options);

    // Broken
    // See : https://github.com/pablo-abc/felte/issues/223#issuecomment-1510467575
    let mounted = false;
    onMount(() => {
        mounted = true;
    });

    export const schema = z.object({
        email: z.string().email("Please enter a valid email address"),

        password: z
            .string()
            .min(8, "atleast_8")
            .refine((val) => /(?=.*[!@#$%^&*()_+|~\-=?;:'",.<>{}[\]\\/])/.test(val), "missing_one_special_character")
            .refine((val) => /(?=.*\d)/.test(val), "missing_one_number")
            .refine((val) => /(?=.*[A-Z])|(?=.*[a-z])/.test(val), "missing_one_upper_or_lowercase"),

        confirm_password: z.string()
    });

    const { form, errors, data } = createForm<z.infer<typeof schema>>({
        extend: [reporter, validator({ schema })], // OR `extend: [validator],`
        onSubmit: (values) => {
            // ...
        },
        validate: (value) => {
            // Configure ZXCVBN
            if (value.password) {
                password_strength = zxcvbn(value.password).score;
            } else {
                password_strength = 0;
            }

            return undefined;
        }
    });

    const password_error_mapping: { [key: string]: string } = {
        atleast_8: "minimum 8 characters",
        missing_one_special_character: "minimum 1 special character",
        missing_one_number: "minimum 1 number",
        missing_one_upper_or_lowercase: "minimum 1 lower-case or upper-case character"
    };

    $: console.log($errors.password);
</script>

<svelte:head>
    <title>Register | CoreProject</title>
</svelte:head>

<register-page>
    <form
        class="flex h-full flex-col justify-between py-[1.5vw]"
        method="POST"
        use:form
    >
        <form-fields>
            <email-field>
                <label
                    for="email"
                    class="text-[1.1vw] font-semibold"
                >
                    Email
                </label>
                <input
                    name="email"
                    id="email"
                    placeholder="sora@coreproject.moe"
                    class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
                />

                {#if mounted}
                    <ValidationMessage
                        for="email"
                        let:messages={message}
                    >
                        <span class="mt-[0.5vw] text-[0.75vw] text-surface-300">{message}</span>
                        <div slot="placeholder">
                            <info class="mt-[0.5vw] flex items-center gap-[0.5vw]">
                                <Info style="width: 0.9375vw; opacity: 0.7" />
                                <span class="text-[0.75vw] text-surface-300">we’ll send you a verification email, so please ensure it’s active</span>
                            </info>
                        </div>
                    </ValidationMessage>
                {/if}
            </email-field>

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
                            placeholder="enter a strong password"
                            class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
                        />
                    </div>
                    <password-strength class="mt-[1vw] flex flex-col">
                        <div class="grid grid-cols-4 gap-[0.75vw]">
                            {#each Array(password_strength) as _, index}
                                {@const backgrounds = ["bg-primary-800", "bg-primary-700", "bg-primary-600", "bg-primary-500"]}
                                <span class="{backgrounds[index]} col-span-1 h-[0.625vw] w-full rounded-[0.1875vw]" />
                            {/each}
                            {#each Array(4 - password_strength) as _}
                                <span class="col-span-1 h-[0.625vw] w-full rounded-[0.1875vw] border-[0.2vw] border-primary-50/50" />
                            {/each}
                        </div>

                        <div class="mt-[1vw]">
                            <span class="mt-[1vw] text-[1vw] font-semibold uppercase tracking-wider text-surface-50">must contain</span>
                            <div class="ml-[0.75vw] mt-[0.4vw] flex w-3/5 flex-col gap-[0.1vw]">
                                {#if mounted}
                                    <ValidationMessage
                                        for="password"
                                        let:messages={message}
                                    >
                                        <!-- So we get an array of items  -->
                                        {#if Array.isArray(message)}
                                            <!-- Logics for cross -->
                                            {#each Object.keys(password_error_mapping).filter((key) => !message.includes(key)) as crossed_item}
                                                <div class="flex gap-2">
                                                    <svelte:component
                                                        this={Tick}
                                                        style="width: 0.7vw; color: deepskyblue; opacity: 0.9"
                                                    />
                                                    <span class="mt-[0.5vw] text-[0.75vw] text-surface-300">{password_error_mapping[crossed_item]}</span>
                                                </div>
                                            {/each}

                                            <!-- Logics for cross items  -->
                                            {#each message as ticked_item}
                                                <div class="flex gap-2">
                                                    <svelte:component
                                                        this={Cross}
                                                        style="width: 0.9vw; color: red; opacity: 0.8"
                                                    />
                                                    <span class="text-[0.8vw] text-surface-300">{password_error_mapping[ticked_item]}</span>
                                                </div>
                                            {/each}
                                        {/if}
                                        <div slot="placeholder">
                                            <div class="flex flex-col gap-1">
                                                {#each Object.values(password_error_mapping) as item}
                                                    <div class="flex gap-2">
                                                        {#if $data.password}
                                                            <svelte:component
                                                                this={Tick}
                                                                style="width: 0.7vw; color: deepskyblue; opacity: 0.9"
                                                            />
                                                        {:else}
                                                            <svelte:component
                                                                this={Cross}
                                                                style="width: 0.9vw; color: red; opacity: 0.8"
                                                            />
                                                        {/if}
                                                        <span class="text-[0.8vw] text-surface-300">{item}</span>
                                                    </div>
                                                {/each}
                                            </div>
                                        </div>
                                    </ValidationMessage>
                                {/if}
                            </div>
                        </div>
                    </password-strength>
                </div>
            </password-field>

            <confirm-password-field>
                <label
                    for="confirm-password"
                    class="mt-[1.5vw] text-[1.1vw] font-semibold"
                >
                    Confirm Password
                </label>
                <div>
                    <div class="relative flex flex-col">
                        <input
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="re-enter your password"
                            class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
                        />
                        {#if mounted}
                            <ValidationMessage
                                for="confirm_password"
                                let:messages={message}
                            >
                                <span class="mt-[0.5vw] text-[0.75vw] text-surface-300">{message}</span>
                                <div slot="placeholder" />
                            </ValidationMessage>
                        {/if}
                    </div>
                </div>
            </confirm-password-field>
        </form-fields>

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
            <button class="btn h-[2.75vw] rounded-[0.5vw] bg-secondary-800 p-0 px-[1.25vw] text-[0.95vw] font-semibold">
                <span>Continue</span>
                <ArrowUpRight style="width: 1vw; transform: rotate(45deg)" />
            </button>
        </div>
    </form>
</register-page>
