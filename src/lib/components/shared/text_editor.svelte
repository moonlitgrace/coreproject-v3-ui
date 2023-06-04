<script lang="ts">
    import emojis from "$data/emojis.json";
    import { afterUpdate } from "svelte";

    let textarea_el: HTMLTextAreaElement;
    let emoji_matches: string[] = [];

    const input_handler = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const input_text = target.value;
        let last_typed_word: string | undefined;

        // to get last typed word even its in middle
        const selection_start = target.selectionStart;
        if (typeof selection_start !== "number") return;
        
        const words_before_caret = input_text.substring(0, selection_start);
        const words_list = words_before_caret.split(" ");
        last_typed_word = words_list.at(-1);

        // check if last_typed_word starts with ":" and may or may not have subsequent word characters
        const emoji_code = last_typed_word?.match(/^:(\w*)$/);
        if (emoji_code) {
            emoji_matches = [];

            for (const keyword of Object.keys(emojis)) {
                if (keyword.includes(emoji_code[1])) {
                    emoji_matches.push(keyword);
                }
            }
        } else {
            emoji_matches = [];
        }
    };
    // close popover on "blur"
    afterUpdate(() => textarea_el.addEventListener("blur", () => (emoji_matches = [])));
</script>

<div class="relative">
    <textarea
        on:input={input_handler}
        bind:this={textarea_el}
        class="h-[8vw] w-full rounded-[0.75vw] border-none bg-surface-900 p-[1vw] text-[1vw] leading-[1.5vw] text-surface-50 outline-none ring-2 ring-white/25 duration-300 ease-in-out placeholder:text-surface-200 focus:ring-2 focus:ring-white/50"
        placeholder="Leave a comment"
    />
    <!-- Basic popover ( will add better one later ) -->
    {#if emoji_matches.length > 0}
        <div class="absolute flex flex-col bg-white p-[1vw] text-black">
            {#each emoji_matches.splice(0, 5) as emoji}
                <span>{emoji}</span>
            {/each}
        </div>
    {/if}
</div>
