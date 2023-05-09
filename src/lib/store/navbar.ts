import { page } from "$app/stores";
import { derived } from "svelte/store";

function get_logo_variant(pathname: string): "logo" | "form" {
    console.log(pathname);
    if (pathname.match("user")) {
        return "logo";
    } else {
        return "form";
    }
}

export const navbar_middle_section_variant = derived(page, ($page) => get_logo_variant($page.url.pathname));
