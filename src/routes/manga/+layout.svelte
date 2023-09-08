<script lang="ts">
    import ProfileDropdown from "$components/tippies/profile_dropdown.svelte";
    import { vw } from "$functions/document/vw";
    import Logo from "$icons/logo.svelte";
    import MangaCore from "$icons/manga_core.svelte";
    import Search from "$icons/search.svelte";
    import { navbar_middle_section_variant } from "$store/navbar";
    import { is_authenticated } from "$store/user";
    import { AppShell, Avatar } from "@skeletonlabs/skeleton";
    import { blur } from "svelte/transition";
    import tippy from "tippy.js";
</script>

<div class="relative h-[100dvh]">
	<AppShell>
        <svelte:fragment slot="header">
            <navbar class="absolute top-0 flex w-full items-center justify-between bg-surface-900/95 p-4 backdrop-blur-3xl md:static md:px-[1vw] md:py-[0.5vw]">
                {#if ["form", "logo"].includes($navbar_middle_section_variant)}
                    <div class="flex items-center md:gap-[1vw]">
                    	<a href="/">
	                        <Logo class="w-9 md:h-[3vw]" />
	                    </a>
	                    <form class="hidden relative md:flex h-[2.75vw] w-[20vw] items-center">
				            <button
				                class="btn absolute left-[1vw] p-0"
				                aria-label="Search"
				            >
				                <Search class="w-[1.25vw] text-surface-300" />
				            </button>
				            <input
				                type="text"
				                placeholder="Search for mangas..."
				                class="h-full w-full rounded-[0.5vw] border-none bg-surface-400 pl-[3vw] text-[1vw] font-semibold text-white shadow-lg !ring-0 placeholder:font-medium placeholder:text-surface-50"
				            />
				        </form>
                    </div>

                    <div class="relative flex items-center md:static">
                        {#if $navbar_middle_section_variant === "logo"}
                            <a
                                href="/"
                                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                                transition:blur
                            >
                                <MangaCore />
                            </a>
                        {:else if $navbar_middle_section_variant === "form"}
                            <div
                                transition:blur
                                class="absolute left-1/2 -translate-x-1/2"
                            >
                                <a
                                    href="/"
                                    class="hidden md:flex"
                                >
                                    <MangaCore />
                                </a>

                                <search-form>
                                    <form class="relative flex h-12 w-[65vw] items-center md:hidden">
                                        <button
                                            class="btn absolute left-4 p-0"
                                            aria-label="Search"
                                        >
                                            <Search class="w-5 opacity-75" />
                                        </button>
                                        <input
                                            type="text"
                                            placeholder="Search for animes, mangas..."
                                            class="h-full w-full rounded-[0.4rem] border-none bg-surface-400 pl-12 text-sm font-semibold text-white shadow-lg !ring-0 placeholder:font-medium placeholder:text-surface-200"
                                        />
                                    </form>
                                </search-form>
                            </div>
                        {/if}
                    </div>

                    {#if $is_authenticated}
                        <button
                            class="avatar"
                            aria-label="Avatar"
                            use:tippy={{
                                trigger: "click",
                                arrow: false,
                                allowHTML: true,
                                placement: "bottom-end",
                                animation: "shift-away",
                                appendTo: document.body,
                                interactive: true,
                                theme: "elaine",
                                onTrigger: async (instance) => {
                                    // set "1 vw"
                                    instance.props.offset = [0, vw(1)];
                                    const node = document.createElement("avatar-tippy");
                                    new ProfileDropdown({
                                        target: node
                                    });

                                    instance.setContent(node);
                                }
                            }}
                        >
                            <Avatar
                                rounded="rounded-[0.4rem] md:rounded-[0.375vw]"
                                width="w-12 md:w-[2.5vw]"
                                src="/images/Avatar.avif"
                                initials="JD"
                            />
                        </button>
                    {:else}
                        <auth-buttons class="flex items-center md:gap-[0.75vw]">
                            <a
                                href="/user/register"
                                class="btn hidden bg-surface-400 font-semibold leading-none md:flex md:rounded-[0.5vw] md:px-[1.25vw] md:py-[0.85vw] md:text-[1vw]"
                            >
                                Register
                            </a>
                            <a
                                href="/user/login"
                                class="btn rounded-[0.4rem] bg-primary-500 px-5 py-4 text-base font-semibold leading-none md:rounded-[0.5vw] md:px-[1.25vw] md:py-[0.85vw] md:text-[1vw]"
                            >
                                Login
                            </a>
                        </auth-buttons>
                    {/if}
                {/if}
            </navbar>
        </svelte:fragment>
		<div class="h-full">
            <slot />
        </div>
	</AppShell>
</div>