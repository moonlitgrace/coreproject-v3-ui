<script lang="ts">
    import ImageLoader from "$components/shared/image/image_loader.svelte";
    import { emojis } from "$data/emojis";
    import { offset } from "caret-pos";
    import { afterUpdate } from "svelte";

    let textarea_element: HTMLTextAreaElement;

    let emoji_matches: [{ emoji?: string; keyword?: string }?];
    let show_emoji_picker = false;
    let caret_offset: { top: number; left: number; height: number } | null = null;
    let active_emoji_index: number;
    const SHOW_EMOJI_LIMIT = 5;

    const input_handler = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const input_text = target.value;
        let last_typed_word: string | undefined;

        // to get last typed word even its in middle
        const selection_start = target.selectionStart;
        if (typeof selection_start !== "number") return;

        const words_before_caret = input_text.substring(0, selection_start);
        const words_list = words_before_caret.split(/[\s\n]/);
        last_typed_word = words_list.at(-1);

        // check if last_typed_word starts with ":" that may or may not have subsequent word characters
        const emoji_code = last_typed_word?.match(/^:(\S*)$/);
        if (emoji_code) {
            // Set first item active
            active_emoji_index = 0;

            show_emoji_picker = true;
            emoji_matches = [];

            for (const item of Object.entries(emojis)) {
                const keyword = item[0];
                const emoji = item[1];
                if (keyword.includes(emoji_code[1])) {
                    emoji_matches.push({
                        emoji: emoji,
                        keyword: keyword
                    });
                }
            }

            // Popover settings
            if (caret_offset === null) {
                const textarea_position = textarea_element.getBoundingClientRect();
                const scroll_top = textarea_element.scrollTop;

                const caret_position = offset(textarea_element);
                const caret_offset_top = caret_position.top - textarea_position.top;
                const caret_offset_left = caret_position.left - textarea_position.left;
                const caret_offset_height = caret_position.height + 5; // Add extra height

                caret_offset = {
                    top: caret_offset_top - scroll_top,
                    left: caret_offset_left,
                    height: caret_offset_height
                };
            }
        } else {
            emoji_matches = [];
            caret_offset = null;
            show_emoji_picker = false;
        }
    };

    const handle_keydown = (event: KeyboardEvent) => {
        if (!show_emoji_picker) return;
        if (event.key === "ArrowUp") {
            active_emoji_index = (active_emoji_index - 1 + SHOW_EMOJI_LIMIT) % SHOW_EMOJI_LIMIT;
        } else if (event.key === "ArrowDown") {
            active_emoji_index = (active_emoji_index + 1) % SHOW_EMOJI_LIMIT;
        }
    };

    // close popover on "blur"
    afterUpdate(() =>
        textarea_element.addEventListener("blur", () => {
            emoji_matches = [];
            caret_offset = null;
            show_emoji_picker = false;
        })
    );
</script>

<div class="relative">
    <textarea
        on:input={input_handler}
        on:keydown={handle_keydown}
        bind:this={textarea_element}
        class="h-[8vw] w-full rounded-[0.75vw] border-none bg-surface-900 p-[1vw] text-[1vw] leading-[1.5vw] text-surface-50 outline-none ring-2 ring-white/25 duration-300 ease-in-out placeholder:text-surface-200 focus:ring-2 focus:ring-white/50"
        placeholder="Leave a comment"
    />
    {#if show_emoji_picker && caret_offset && emoji_matches.length > 0}
        <emoji-popover
            class="emoji_picker absolute flex flex-col divide-y divide-surface-50/10 overflow-hidden rounded-[0.5vw] bg-surface-400 text-[1vw] text-surface-50"
            style="top: {caret_offset?.top + caret_offset?.height}px; left: {caret_offset?.left}px; min-width: 12vw;"
        >
            {#each emoji_matches as item, index}
                {#if index < SHOW_EMOJI_LIMIT}
                    {@const emoji = item?.["emoji"] ?? ""}
                    {@const keyword = item?.["keyword"] ?? ""}

                    <div
                        class="flex cursor-pointer items-center gap-[0.5vw] px-[0.75vw] py-[0.25vw] leading-[1.75vw] hover:bg-primary-500 hover:text-white"
                        class:bg-primary-500={active_emoji_index === index}
                        class:text-white={active_emoji_index === index}
                    >
                        <div class="placeholder-circle h-[0.85vw] w-[0.85vw] !bg-surface-50">
                            <ImageLoader
                                src={emoji}
                                alt={keyword}
                            />
                        </div>
                        <span>{keyword}</span>
                    </div>
                {/if}
            {/each}
        </emoji-popover>
    {/if}
</div>
