<script lang="ts">
    export let glider_container_class = "";
    export let active_element_class = "";
    /** vercel effect */
    let hover_glider_element: HTMLDivElement;
    let GLIDER_TRANSITION_DURATION = 200;
    let is_hovered = false;
    let mouseleaveTimeout: NodeJS.Timer | null = null;

    const handle_mouseenter = (event: MouseEvent) => {
        const target = event.target as HTMLAnchorElement;
        hover_glider_element.style.transform = `translateY(${target.offsetTop}px)`;

        if (!is_hovered) {
            GLIDER_TRANSITION_DURATION = 50;
            hover_glider_element.style.opacity = "100";
            is_hovered = true;
        } else {
            GLIDER_TRANSITION_DURATION = 200;
        }

        clearTimeout(mouseleaveTimeout!);
    };

    const handle_mouseleave = () => {
        // Delay the mouseleave event to allow time ( GLIDER_TRANSITION_DURATION ) for moving to a sibling element
        mouseleaveTimeout = setTimeout(() => {
            hover_glider_element.style.opacity = "0";
            is_hovered = false;
        }, GLIDER_TRANSITION_DURATION);
    };
</script>

<glider-container class={glider_container_class}>
    <active_glider
        bind:this={hover_glider_element}
        class="{active_element_class} absolute opacity-0 ease-in-out duration-{GLIDER_TRANSITION_DURATION}"
    />

    <slot
        {handle_mouseleave}
        {handle_mouseenter}
    />
</glider-container>
