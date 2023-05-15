import { page } from "$app/stores";
import { derived } from "svelte/store";

function get_logo_variant(pathname: string): "logo" | "form" {
    let logo_type: "logo" | "form";

    if (pathname.match(/^user/gm)) {
        logo_type = "logo";
    } else {
        logo_type = "form";
    }

    return logo_type;
}

export const navbar_middle_section_variant = derived(page, ($page) => get_logo_variant($page.url.pathname));
