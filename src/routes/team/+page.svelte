<script lang="ts">
    import Github from "$icons/github.svelte";
    import Telegram from "$icons/telegram.svelte";

    import { Avatar } from "@skeletonlabs/skeleton";

    const information: {
        name: string;
        "user-name": string;
        position: string;
        avatar: string;
        summary: string;
        socials: { [key in string]: string };
    }[] = [
        { name: "Titan", "user-name": "akindworld", position: "designer", avatar: "https://avatars.githubusercontent.com/u/41228366?v=4", summary: "Heya! I love art, anime, design, tech, music, nature, animals, manga, making friends and a lot more! - Titan#0415", socials: { github: "https://github.com/AKindWorld" } },
        { name: "Baseplate Admin", "user-name": "baseplate-admin", position: "Backend & Frontend Engineer", avatar: "https://seccdn.libravatar.org/avatar/3852e481271f8a8973338c2e425dbc5f3dd615482dd06db18ed7fd5f99108589?s=512", summary: "I like writing softwares".repeat(100), socials: { github: "https://github.com/baseplate-admin", telegram: "https://t.me/baseplate_admin" } },
        { name: "Baseplate Admin", "user-name": "tokitou-san", position: "Designer & Frontend Engineer", avatar: "https://avatars.githubusercontent.com/u/114811070?v=4", summary: "I like tattoo".repeat(1000), socials: { github: "https://github.com/tokitou-san", telegram: "https://t.me/tokitou_san/" } }
    ];
</script>

<div class="md:px-[10vw]">
    <div class="text-center text-5xl md:py-[5vw]">Team the made coreproject a reality</div>
    {#each information as item, index}
        <div class="flex gap-10">
            <div class="flex flex-col items-center justify-center gap-4">
                <Avatar
                    src={item.avatar}
                    width="w-48"
                    initials={item.name.split(/\s/).reduce((response, word) => (response += word.slice(0, 1)), "")}
                    rounded="rounded-full"
                />
                <div class="whitespace-nowrap font-bold">{item["user-name"]}</div>
                <div class="whitespace-nowrap italic">{item.position}</div>
                <div class="flex gap-2">
                    {#each Object.entries(item.socials) as social_link}
                        {@const key = social_link[0]}
                        {@const value = social_link[1]}
                        {#if key === "github"}
                            <a
                                href={value}
                                class="w-6 rounded-full bg-white"
                            >
                                <Github />
                            </a>
                        {/if}
                        {#if key === "telegram"}
                            <a
                                href={value}
                                class="w-6 rounded-full bg-white"
                            >
                                <Telegram />
                            </a>
                        {/if}
                    {/each}
                </div>
            </div>
            <div>
                {item.summary}
            </div>
        </div>
        {#if index !== information.length - 1}
            <hr class="my-[2vw] !border-t-2 !border-[#2d2d2d]" />
        {/if}
    {/each}
</div>
