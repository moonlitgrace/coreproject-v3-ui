<script lang="ts">
    import ImageLoader from "$components/shared/image/image_loader.svelte";
    import { emojis } from "$data/emojis";
    import { offset } from "caret-pos";
    import { tick } from "svelte";

    let textarea_element: HTMLTextAreaElement;
    let textarea_value = "";

    let emoji_matches: [{ emoji: string; keyword: string }?];
    let show_emoji_picker = false;
    let caret_offset: { top: number; left: number; height: number } | null = null;
    let active_emoji_index: number;
    const SHOWN_EMOJI_LIMIT = 5;

    // Hanlders

    async function handle_blur() {
        emoji_matches = [];
        caret_offset = null;
        show_emoji_picker = false;
    }

    async function handle_input(event: Event) {
        const target = event.target as HTMLTextAreaElement;
        const input_text = target.value;
        let last_typed_word: string;

        // to get last typed word even its in middle
        const selection_start = target.selectionStart;
        if (typeof selection_start !== "number") return;

        const words_before_caret = input_text.substring(0, selection_start);
        const words_list = words_before_caret.split(/[\s\n]/);
        last_typed_word = words_list.at(-1) ?? "";

        // check if last_typed_word starts with ":" that may or may not have subsequent word characters
        const emoji_code = last_typed_word?.match(/^:(\S*)$/);
        if (emoji_code) {
            // Set first item active
            active_emoji_index = 0;

            show_emoji_picker = true;
            emoji_matches = [];

            for (const item of Object.entries(emojis).sort()) {
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
    }

    async function handle_keydown(event: KeyboardEvent) {
        /**Emoji specific codes*/
        if (show_emoji_picker) {
            switch (event.key) {
                case "ArrowUp": {
                    event.preventDefault();
                    active_emoji_index = (active_emoji_index - 1 + emoji_matches.length) % emoji_matches.length;
                    break;
                }
                case "ArrowDown": {
                    event.preventDefault();
                    active_emoji_index = (active_emoji_index + 1) % emoji_matches.length;
                    break;
                }
                case "Enter": {
                    event.preventDefault();
                    await select_emoji(active_emoji_index);
                    break;
                }
            }
        }

        /**
         * Editor specific funtions
         * Triggered by `ctrlKey`
         */
        if (event.ctrlKey) {
            switch (event.key) {
                case "b": {
                    /** Bold Functionality */
                    event.preventDefault();
                    await operate_on_selected_text({ element: event.target as HTMLTextAreaElement, starting_operator: "**", ending_operator: "**" });
                    break;
                }
                case "i": {
                    /** Italic functionality */
                    event.preventDefault();
                    await operate_on_selected_text({ element: event.target as HTMLTextAreaElement, starting_operator: "_", ending_operator: "_" });
                    break;
                }
                case "e": {
                    /** Code functionality */
                    event.preventDefault();
                    await operate_on_selected_text({ element: event.target as HTMLTextAreaElement, starting_operator: "`", ending_operator: "`" });
                    break;
                }
                case "u": {
                    /** Underline functionality */
                    event.preventDefault();
                    await operate_on_selected_text({ element: event.target as HTMLTextAreaElement, starting_operator: "<u>", ending_operator: "</u>" });
                    break;
                }
            }
        }
    }

    // Functions

    async function insert_text({ target, text }: { target: HTMLTextAreaElement; text: string }) {
        /**
         * Thanks stackoverflow guy and mozilla dev ( Michal Čaplygin |myf| )
         * Stackoverflow : https://stackoverflow.com/a/56509046
         * Mozilla : https://bugzilla.mozilla.org/show_bug.cgi?id=1523270
         */
        target.select();
        document.execCommand("insertText", false, text);
    }

    async function operate_on_selected_text({ element, starting_operator, ending_operator }: { element: HTMLTextAreaElement; starting_operator: string; ending_operator: string }) {
        const selection_start = element.selectionStart;
        const selection_end = element.selectionEnd;
        const selection_text = element.value.substring(selection_start, selection_end);

        const regex_pattern_for_operator = new RegExp("^" + starting_operator.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&") + "|" + ending_operator.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&") + "$", "g");
        // Handle use cases like
        if (element.value.substring(selection_start - starting_operator.length, selection_start) == starting_operator && element.value.substring(selection_end, selection_end + ending_operator.length) == ending_operator) {
            if (selection_text) {
                /**
                 * `<starting_operator>|hello|<ending_operator>` -> `|hello|`
                 * `_|hello|_` -> `|hello|`
                 */
                const replacement_text = element.value.substring(selection_start - starting_operator.length, selection_end + ending_operator.length).replace(regex_pattern_for_operator, "");
                await insert_text({ target: element, text: element.value.substring(0, selection_start - starting_operator.length) + replacement_text + element.value.substring(selection_end + ending_operator.length) });

                element.setSelectionRange(selection_start - starting_operator.length, selection_end - starting_operator.length);
            } else {
                /**
                 * `<starting_operator>||<ending_operator>` -> `||`
                 * `_||_` -> `||`
                 */
                element.setSelectionRange(selection_start - starting_operator.length, selection_end + ending_operator.length);
                document.execCommand("delete", false);
            }
        } else if (element.value.substring(selection_start, selection_start + starting_operator.length) == starting_operator && element.value.substring(selection_end - ending_operator.length, selection_end) == ending_operator) {
            /**
             * `|<starting_opeator>hello<ending_operator>|` -> `|hello|`
             * `|_hello_|` -> `|hello|`
             */

            const replacement_text = element.value.substring(selection_start - starting_operator.length, selection_end + ending_operator.length).replace(regex_pattern_for_operator, "");
            await insert_text({ target: element, text: element.value.substring(0, selection_start) + replacement_text + element.value.substring(selection_end) });

            element.setSelectionRange(selection_start, selection_end - (starting_operator.length + ending_operator.length));
        } else {
            /**
             * `|hello|` -> `<operator>|hello|<operator>`
             * `|hello|` -> `_|hello|_`
             */
            const replacement_text = starting_operator + selection_text + ending_operator;
            await insert_text({ target: element, text: element.value.substring(0, selection_start) + replacement_text + element.value.substring(selection_end) });
            element.setSelectionRange(selection_start + starting_operator.length, selection_end + starting_operator.length);
        }
    }

    async function select_emoji(emoji_index: number) {
        const emoji_keyword = emoji_matches[emoji_index]?.keyword;
        const emoji_code = `:${emoji_keyword}:`;

        const selection_start = textarea_element.selectionStart;
        const selection_end = textarea_element.selectionEnd;

        const text_before_selection = textarea_value.substring(0, selection_start);
        const text_after_selection = textarea_value.substring(selection_end);

        // replace last word before text selection with emoji code
        const updated_text_before_selection = text_before_selection.replace(/\S+$/, emoji_code);
        textarea_value = `${updated_text_before_selection} ${text_after_selection}`;

        // set caret at the end of inserted emoji_code
        tick().then(() => {
            const caret_position = updated_text_before_selection.length + 1;
            textarea_element.setSelectionRange(caret_position, caret_position);
        });

        // close emoji picker
        show_emoji_picker = false;
        caret_offset = null;
        emoji_matches = [];
    }
</script>

<div class="relative">
    <textarea
        on:input={handle_input}
        on:keydown={handle_keydown}
        on:blur={handle_blur}
        bind:this={textarea_element}
        bind:value={textarea_value}
        spellcheck="true"
        class="h-[8vw] w-full rounded-[0.75vw] border-none bg-surface-900 p-[1vw] text-[1vw] leading-[1.5vw] text-surface-50 outline-none ring-2 ring-white/25 duration-300 ease-in-out placeholder:text-surface-200 focus:ring-2 focus:ring-primary-500"
        placeholder="Leave a comment"
    />
    {#if show_emoji_picker && caret_offset && emoji_matches.length > 0}
        <emoji-popover
            class="emoji_picker absolute flex flex-col divide-y divide-surface-50/10 overflow-hidden rounded-[0.5vw] bg-surface-400 text-[1vw] text-surface-50"
            style="top: {caret_offset?.top + caret_offset?.height}px; left: {caret_offset?.left}px; min-width: 12vw;"
        >
            {#each emoji_matches as item, index}
                {#if index < SHOWN_EMOJI_LIMIT}
                    {@const emoji = item?.["emoji"] ?? ""}
                    {@const keyword = item?.["keyword"] ?? ""}

                    <div
                        class="flex cursor-pointer items-center gap-[0.5vw] px-[0.75vw] py-[0.25vw] leading-[1.75vw] hover:bg-primary-500 hover:text-white"
                        class:bg-primary-500={active_emoji_index === index}
                        class:text-white={active_emoji_index === index}
                        on:mousedown={async () => await select_emoji(index)}
                    >
                        <div class="h-[0.9vw] w-[0.9vw]">
                            <ImageLoader
                                src={emoji}
                                alt={keyword}
                                class="h-full w-full"
                            />
                        </div>
                        <span>{keyword}</span>
                    </div>
                {/if}
            {/each}
        </emoji-popover>
    {/if}
</div>
