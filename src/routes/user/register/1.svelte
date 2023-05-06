<script lang="ts">
    import { createForm } from "felte";
    import Info from "$icons/info.svelte";
    import Cross from "$icons/cross.svelte";
    import ArrowUpRight from "$icons/arrow_up_right.svelte";
    import Tick from "$icons/tick.svelte";
    import { validator } from "@felte/validator-zod";
    import { z } from "zod";
    import { reporter, ValidationMessage } from "@felte/reporter-svelte";
    import { onMount, onDestroy } from "svelte";
    import { createEventDispatcher } from "svelte";
    import { focusTrap } from "@skeletonlabs/skeleton";

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

    const schema = z
        .object({
            email: z.string().email("Please enter a valid email address"),

            password: z
                .string()
                .min(8, "atleast_8")
                .refine((val) => /(?=.*[!@#$%^&*()_+|~\-=?;:'",.<>{}[\]\\/])/.test(val), "missing_one_special_character")
                .refine((val) => /(?=.*\d)/.test(val), "missing_one_number")
                .refine((val) => /(?=.*[A-Z])|(?=.*[a-z])/.test(val), "missing_one_upper_or_lowercase"),

            confirm_password: z.string()
        })
        .superRefine(({ password, confirm_password }, ctx) => {
            if (confirm_password !== password) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "<b>Password</b> and <b>Confirm Password</b> doesn't match",
                    path: ["confirm_password"]
                });
            }
        });

    const { form, errors, data, touched } = createForm<z.infer<typeof schema>>({
        initialValues: {
            email: "",
            password: "",
            confirm_password: ""
        },
        onSubmit: async (values) => {
            dispatch("submit", values);
        },
        extend: [reporter, validator({ schema })],
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

    const core_color_mapping: { [key: string]: string } = {
        c: "text-surface-50",
        e: "text-surface-50",
        o: "text-warning-400",
        r: "text-surface-50"
    };
</script>

<form
    class="flex h-max sm:h-full flex-col sm:justify-between bg-surface-900 p-[5vw] py-[7vw] sm:p-0 rounded-[4vw]"
    method="POST"
    use:form
    use:focusTrap={true}
>
    <form-fields>
        <span class="flex items-center pb-[5vw] sm:pb-[1vw] text-[4vw] sm:text-[1.2vw] font-bold uppercase tracking-widest text-white">
            create your&nbsp;
            <p class="inline-flex items-center unstyled">
                {#each "core".split("") as item}
                    <span class={core_color_mapping[item]}>{item}</span>
                {/each}
            </p>
            &nbsp;account
        </span>
        <email-field class="flex flex-col">
            <label
                for="email"
                class="text-[4vw] sm:text-[1.1vw] font-semibold"
            >
                Email
            </label>
            <input
                name="email"
                id="email"
                placeholder="sora@coreproject.moe"
                class="mt-[0.25vw] h-[10vw] sm:h-[3.125vw] w-full rounded-[2vw] sm:rounded-[0.75vw] border-[0.4vw] sm:border-[0.2vw] border-primary-500 bg-transparent pl-[4vw] sm:pl-[1vw] text-[3.75vw] sm:text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
            />

            {#if mounted}
                <ValidationMessage
                    for="email"
                    let:messages={message}
                >
                    <span class="mt-[0.75vw] sm:mt-[0.5vw] text-[2.75vw] sm:text-[0.75vw] text-surface-300">{@html message}</span>
                    <div slot="placeholder">
                        <info class="mt-[0.75vw] sm:mt-[0.5vw] flex items-center gap-[0.5vw]">
                            <Info class="w-[1.75vw] sm:w-[0.9vw] opacity-70" />
                            <span class="text-[2.6vw] sm:text-[0.75vw] text-surface-300">we’ll send you a verification email, so please ensure it’s active</span>
                        </info>
                    </div>
                </ValidationMessage>
            {/if}
        </email-field>

        <password-field>
            <label
                for="password"
                class="mt-[2vw] sm:mt-[1.5vw] text-[4vw] sm:text-[1.1vw] font-semibold"
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
                        class="mt-[0.25vw] h-[10vw] sm:h-[3.125vw] w-full rounded-[2vw] sm:rounded-[0.75vw] border-[0.4vw] sm:border-[0.2vw] border-primary-500 bg-transparent pl-[4vw] sm:pl-[1vw] text-[3.75vw] sm:text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
                    />
                </div>
                <password-strength class="mt-[2vw] sm:mt-[1vw] flex flex-col">
                    <div class="grid grid-cols-4 gap-[1.5vw] sm:gap-[0.75vw]">
                        {#each Array(password_strength) as _, index}
                            {@const backgrounds = ["bg-primary-800", "bg-primary-700", "bg-primary-600", "bg-primary-500"]}
                            <span class="{backgrounds[index]} col-span-1 h-[1.75vw] sm:h-[0.625vw] w-full rounded-[0.5vw] sm:rounded-[0.1875vw]" />
                        {/each}
                        {#each Array(4 - password_strength) as _}
                            <span class="col-span-1 h-[1.75vw] sm:h-[0.625vw] w-full rounded-[0.5vw] sm:rounded-[0.1875vw] border-[0.4vw] sm:border-[0.2vw] border-primary-50/50" />
                        {/each}
                    </div>

                    <div class="mt-[3vw] sm:mt-[1vw]">
                        <span class="text-[3vw] sm:text-[1vw] font-semibold uppercase tracking-wider text-surface-50">must contain</span>
                        <div class="ml-[0.75vw] mt-[0.4vw] flex w-3/5 flex-col gap-[0.1vw]">
                            {#if mounted}
                                <ValidationMessage
                                    for="password"
                                    let:messages
                                >
                                    <!-- So we get an array of items  -->
                                    {#if Array.isArray(messages)}
                                        <!-- Logics for cross and ticks -->
                                        <div class="flex flex-col gap-[0.5vw] sm:gap-0">
                                            {#each Object.entries(password_error_mapping) as item}
                                                {@const object_key = item[0]}
                                                {@const object_value = item[1]}

                                                <div class="grid grid-cols-12 items-center gap-2">
                                                    {#if messages.includes(object_key)}
                                                        <svelte:component
                                                            this={Cross}
                                                            class="col-span-1 w-[2.5vw] sm:w-[0.9vw] text-red-500 opacity-80"
                                                        />
                                                    {:else}
                                                        <svelte:component
                                                            this={Tick}
                                                            class="col-span-1 w-[1.75vw] sm:w-[0.7vw] text-primary-400 opacity-90"
                                                        />
                                                    {/if}
                                                    <span class="col-span-11 text-[2.5vw] sm:text-[0.75vw] w-max text-surface-300">{object_value}</span>
                                                </div>
                                            {/each}
                                        </div>
                                    {/if}
                                    <div slot="placeholder">
                                        <div class="flex flex-col gap-[0.5vw] sm:gap-0">
                                            {#each Object.values(password_error_mapping) as item}
                                                <div class="grid grid-cols-12 items-center gap-2">
                                                    {#if $data.password && !$errors.password && $touched.password}
                                                        <svelte:component
                                                            this={Tick}
                                                            class="col-span-1 w-[1.75vw] sm:w-[0.7vw] text-primary-400 opacity-90"
                                                        />
                                                    {:else}
                                                        <svelte:component
                                                            this={Cross}
                                                            class="col-span-1 w-[2.5vw] sm:w-[0.9vw] text-red-500 opacity-80"
                                                        />
                                                    {/if}
                                                    <span class="col-span-11 w-max text-[2.5vw] sm:text-[0.75vw] text-surface-300">{item}</span>
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
                class="mt-[2.5vw] sm:mt-[1.5vw] text-[4vw] sm:text-[1.1vw] font-semibold"
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
                        class="mt-[0.25vw] h-[10vw] sm:h-[3.125vw] w-full rounded-[2vw] sm:rounded-[0.75vw] border-[0.4vw] sm:border-[0.2vw] border-primary-500 bg-transparent pl-[4vw] sm:pl-[1vw] text-[3.75vw] sm:text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
                    />
                    {#if mounted}
                        <ValidationMessage
                            for="confirm_password"
                            let:messages={message}
                        >
                            <span class="mt-[1.75vw] sm:mt-[0.5vw] text-[2.6vw] sm:text-[0.75vw] text-surface-300">{@html message}</span>
                            <div slot="placeholder" />
                        </ValidationMessage>
                    {/if}
                </div>
            </div>
        </confirm-password-field>
    </form-fields>

    <div class="flex items-center justify-between mt-[7vw] sm:mt-0">
        <div class="flex flex-col">
            <span class="text-[2.75vw] sm:text-[0.75vw] text-surface-100">Already have an account?</span>
            <a
                href="./login"
                class="text-[4vw] sm:text-[1.1vw]"
            >
                Login
            </a>
        </div>
        <button
            type="submit"
            class="btn h-[10vw] sm:h-[2.75vw] rounded-[2vw] sm:rounded-[0.5vw] bg-secondary-800 p-0 px-[4vw] sm:px-[1.25vw] text-[3.5vw] sm:text-[0.95vw] font-semibold"
        >
            <span>Continue</span>
            <ArrowUpRight class="w-[3vw] sm:w-[1vw] rotate-45" />
        </button>
    </div>
</form>
