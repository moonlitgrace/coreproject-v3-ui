<script lang="ts">
    const core_mapping: { [key: string]: string } = {
        c: "text-[#dcd9f7]", // Not white #dcd9f7
        o: "text-warning-500",
        r: "text-[#dcd9f7]",
        e: "text-[#dcd9f7]"
    };
</script>

<div class="flex select-none gap-1">
    <p>
        {#each "core".split("") as letter}
            <span class="inline-flex text-[1.5vw] font-bold {core_mapping[letter]}">{letter}</span>
        {/each}
    </p>
    <p>
        {#each "project".split("") as letter}
            <span class="inline-flex text-[1.5vw] font-bold text-white">{letter}</span>
        {/each}
    </p>
</div>
