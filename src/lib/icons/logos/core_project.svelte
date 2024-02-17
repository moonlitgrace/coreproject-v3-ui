<script lang="ts">
    import { cn } from "$functions/classnames";

    const core_mapping: { [key in string]: string } = {
        c: "text-surface-100",
        o: "text-warning-500",
        r: "text-surface-100",
        e: "text-surface-100"
    };

    let klass = "";
    export {klass as class};
</script>

<div class={cn(klass, "flex select-none gap-[0.25vw] text-[1.5vw] font-bold leading-none")}>
    <p>
        {#each "core".split("") as letter}
            <span class="inline-flex {core_mapping[letter]}">{letter}</span>
        {/each}
    </p>
    <p>
        {#each "project".split("") as letter}
            <span class="inline-flex text-white">{letter}</span>
        {/each}
    </p>
</div>
