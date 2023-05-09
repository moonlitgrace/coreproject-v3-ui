<script lang="ts">
    import Tick from "$icons/tick.svelte";
    import { focusTrap } from "@skeletonlabs/skeleton";
    import { createForm } from "felte";
    import { createEventDispatcher } from "svelte";

    export let pages_state: [
        {
            email: string;
            password: string;
            confirm_password: string;
        },
        {
            username: string;
            otp: string;
        }
    ];

    const core_color_mapping: { [key: string]: string } = {
        c: "text-surface-50",
        e: "text-surface-50",
        o: "text-warning-400",
        r: "text-surface-50"
    };

    const dispatch = createEventDispatcher();

    const { form } = createForm({
        onSubmit: (values) => {
            dispatch("submit", values);
        }
    });

    const combined_object = Object.assign({}, ...pages_state);
</script>

<form
    class="flex h-max w-full flex-col bg-surface-900 px-10 py-14 md:h-full md:justify-between md:rounded-none md:p-0"
    use:form
    use:focusTrap={true}
>
    <div class="flex flex-col items-start gap-[3vw]">
        <span class="flex items-center pb-3 text-base md:text-[1.2vw] font-bold uppercase tracking-widest text-white">
            welcome to&nbsp;
            <p class="inline-flex items-center text-surface-50">
                {#each "core".split("") as item}
                    <span class={core_color_mapping[item]}>{item}</span>
                {/each}
            </p>
            project
        </span>

        <user-info class="flex flex-col">
            <span class="text-lg md:text-[1.5vw] font-semibold text-primary-500">Summary</span>

            <username class="flex flex-col pt-5">
                <span class="text-lg md:text-[1.1vw] font-medium">Username</span>
                <span class="text-base md:text-[1.1vw] font-medium text-surface-300">{combined_object.username}</span>
            </username>

            <email class="flex flex-col pt-3">
                <span class="text-lg md:text-[1.1vw] font-medium">Email</span>
                <span class="text-base md:text-[1.1vw] font-medium text-surface-300">{combined_object.email}</span>
            </email>
        </user-info>

        <div class="flex flex-col">
            <button
                type="button"
                class="btn p-0 text-base md:text-[1vw] font-semibold text-primary-600 underline"
            >
                {@html `< resend code >`}
            </button>
            <button
                type="button"
                class="btn p-0 text-base md:text-[1vw] font-semibold text-primary-600 underline"
            >
                {@html `< change email >`}
            </button>
        </div>
    </div>

    <div class="mt-10 flex items-center justify-between md:mt-0">
        <div class="flex flex-col">
            <span class="text-xs text-surface-100 md:text-[0.75vw]">Already have an account?</span>
            <a
                href="./login"
                class="text-base md:text-[1.1vw]"
            >
                Login
            </a>
        </div>
        <button
            type="submit"
            class="btn h-12 rounded-lg bg-secondary-800 p-0 px-5 text-base font-semibold md:h-[2.75vw] md:rounded-[0.5vw] md:px-[1.25vw] md:text-[0.95vw]"
        >
            <span>Finish</span>
            <Tick class="w-3 md:w-[0.75vw]" />
        </button>
    </div>
</form>
