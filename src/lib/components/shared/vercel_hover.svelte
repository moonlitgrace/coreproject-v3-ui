<script lang="ts">
    export let glider_container_class = "";
    export let active_element_class = "";
    export let direction: "horizontal" | "vertical";
    /** vercel effect */
    let hover_glider_element: HTMLElement,
        glider_container_element: HTMLElement,
        GLIDER_TRANSITION_DURATION = 200,
        is_hovered = false,
        mouse_leave_timeout: NodeJS.Timer | null = null;

    const handle_mouseenter = (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        // Do some magic here to get the target's height and width
        // Don't change the position of this code.
        // It will cause animation jank
        hover_glider_element.style.height = getComputedStyle(target).height;
        hover_glider_element.style.width = getComputedStyle(target).width;

        const target_z_index = getComputedStyle(target).zIndex;
        if (target_z_index === "auto") {
            target.style.zIndex = "0";
        }
        hover_glider_element.style.zIndex = String(Number(getComputedStyle(target).zIndex) - 1);

        switch (direction) {
            case "vertical":
                hover_glider_element.style.transform = `translateY(${target.offsetTop}px)`;
                break;
            case "horizontal":
                hover_glider_element.style.transform = `translateX(${target.offsetLeft - glider_container_element.offsetLeft}px)`;
                break;
        }

        if (!is_hovered) {
            GLIDER_TRANSITION_DURATION = 50;
            hover_glider_element.style.opacity = "100";
            is_hovered = true;
        } else {
            GLIDER_TRANSITION_DURATION = 200;
        }

        clearTimeout(mouse_leave_timeout!);
    };

    const handle_mouseleave = () => {
        // Delay the mouseleave event to allow time ( GLIDER_TRANSITION_DURATION ) for moving to a sibling element
        mouse_leave_timeout = setTimeout(() => {
            hover_glider_element.style.opacity = "0";
            is_hovered = false;
        }, GLIDER_TRANSITION_DURATION);
    };
</script>

<glider-container
    class={glider_container_class}
    bind:this={glider_container_element}
>
    <active_glider
        bind:this={hover_glider_element}
        class="{active_element_class} absolute opacity-0 ease-in-out duration-{GLIDER_TRANSITION_DURATION}"
    />

    <slot
        {handle_mouseleave}
        {handle_mouseenter}
    />
</glider-container>
