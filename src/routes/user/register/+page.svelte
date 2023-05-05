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

    const { form, errors, data, touched } = createForm<z.infer<typeof schema>>({
        initialValues: {
            email: "",
            password: "",
            confirm_password: ""
        },
        extend: [reporter, validator({ schema })],
        onSubmit: (values) => {
            // ...
        },
        validate: (values) => {
            // Configure ZXCVBN
            if (values.password) {
                password_strength = zxcvbn(values.password).score;
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
                                <Info class="w-[0.9vw] opacity-70" />
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
                                            <!-- Logics for cross and ticks -->
                                            {#each Object.entries(password_error_mapping) as item}
                                                {@const object_key = item[0]}
                                                {@const object_value = item[1]}

                                                <div class="mt-[0.5vw] flex gap-2">
                                                    {#if message.includes(object_key)}
                                                        <svelte:component
                                                            this={Cross}
                                                            class="w-[0.9vw] text-red-500 opacity-80"
                                                        />
                                                    {:else}
                                                        <svelte:component
                                                            this={Tick}
                                                            class="w-[0.7vw] text-primary-400 opacity-90"
                                                        />
                                                    {/if}
                                                    <span class="text-[0.75vw] text-surface-300">{object_value}</span>
                                                </div>
                                            {/each}
                                        {/if}
                                        <div slot="placeholder">
                                            <div class="flex flex-col gap-1">
                                                {#each Object.values(password_error_mapping) as item}
                                                    <div class="flex gap-2">
                                                        {#if $data.password && !$errors.password && $touched.password}
                                                            <svelte:component
                                                                this={Tick}
                                                                class="w-[0.7vw] text-primary-400 opacity-90"
                                                            />
                                                        {:else}
                                                            <svelte:component
                                                                this={Cross}
                                                                class="w-[0.9vw] text-red-500 opacity-80"
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
                <ArrowUpRight class="w-[1vw] rotate-45" />
            </button>
        </div>
    </form>
</register-page>
