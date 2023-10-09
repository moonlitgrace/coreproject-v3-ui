<script lang="ts">
    import Github from "$icons/logos/github.svelte";
    import Telegram from "$icons/logos/telegram.svelte";
    import Heart from "$icons/shapes/heart.svelte";

    import { Avatar } from "@skeletonlabs/skeleton";

    const team_mapping: {
        name: string;
        "user-name": string;
        position: string;
        avatar: string;
        summary: string;
        socials: { [key in "telegram" | "github"]?: string };
    }[] = [
        {
            name: "Titan",
            "user-name": "akindworld",
            position: "Designer",
            avatar: "https://avatars.githubusercontent.com/u/41228366?v=4",
            summary: "Heya! I love art, anime, design, tech... etc",
            socials: {
                github: "https://github.com/AKindWorld"
            }
        },
        {
            name: "Baseplate Admin",
            "user-name": "baseplate-admin",
            position: "Backend & Frontend Engineer",
            avatar: "https://avatars.githubusercontent.com/u/61817579?v=4",
            summary: "I like writing softwares",
            socials: {
                github: "https://github.com/baseplate-admin",
                telegram: "https://t.me/baseplate_admin"
            }
        },
        {
            name: "Tokito",
            "user-name": "tokitouq",
            position: "Designer & Frontend Engineer",
            avatar: "https://avatars.githubusercontent.com/u/114811070?v=4",
            summary: "Without me CoreProject is just a project",
            socials: {
                github: "https://github.com/tokitouq",
                telegram: "https://t.me/tokitouq/"
            }
        }
    ];
</script>

<svelte:head>
    <title>CoreTeam - CoreProject developers</title>
</svelte:head>

<div class="px-[10vw] pt-[3vw] flex flex-col gap-[2vw] w-screen h-screen [background-size:_12vw_12vw] [background-image:_linear-gradient(rgba(255,255,255,.05)_.1vw,transparent_.1vw),_linear-gradient(90deg,rgba(255,255,255,.05)_.1vw,transparent_.1vw)]">
    <div class="flex flex-col items-center gap-[0.5vw]">
        <div class="flex items-center gap-[0.5vw] bg-white/10 leading-none px-[1.25vw] py-[0.5vw] rounded-full border-[0.1vw] border-white/10 text-[1vw]">
            <span>Meet our Team</span>
            <Heart class="w-[0.9vw] animate-pulse" />
        </div>
        <div class="text-[4vw] font-bold leading-none">Team the made coreproject a reality.</div>
    </div>
    <div class="mt-[1vw] grid grid-cols-3">
        {#each team_mapping as item}
            <card class="relative flex flex-col items-center bg-surface-900/50 rounded-[1vw]">
                <div class="flex flex-col items-center justify-center gap-[0.5vw] leading-none p-[1.5vw] pb-0">
                    <Avatar
                        src={item.avatar}
                        width="w-[10vw]"
                        initials={item.name.split(/\s/).reduce((response, word) => (response += word.slice(0, 1)), "")}
                        rounded="rounded-full"
                        border={`${item.name === "Tokito" && "ring-[0.5vw] ring-white/25"}`}
                    />
                    <div class="mt-[1vw] whitespace-nowrap font-bold text-[1vw]">
                        {item.name} <span class="text-surface-50 font-medium">@{item["user-name"]}</span>
                    </div>
                    <div class="whitespace-nowrap text-[0.9vw] italic">{item.position}</div>
                    <div class="flex gap-[0.5vw]">
                        {#each Object.entries(item.socials) as social_link}
                            {@const key = social_link[0]}
                            {@const value = social_link[1]}
                            {@const klass = "w-[1.75vw]"}

                            {#if key === "github"}
                                <a href={value} target="_blank">
                                    <Github class={klass} />
                                </a>
                            {:else if key === "telegram"}
                                <a href={value} target="_blank">
                                    <Telegram class={klass} />
                                </a>
                            {/if}
                        {/each}
                    </div>
                </div>
                <blockquote class="text-center p-[1.5vw] text-[0.9vw] italic leading-[1.5vw]">{item.summary}</blockquote>
            </card>
        {/each}
    </div>
</div>

<style lang="postcss">
    /* can be convert into tailwind classes */
    card::before {
        @apply bg-surface-50/5 content-[""] scale-95 rounded-[1vw] absolute w-full h-full opacity-0 duration-200 ease-in-out -z-10
    }

    card:hover::before {
        @apply scale-100 opacity-100
    }
</style>