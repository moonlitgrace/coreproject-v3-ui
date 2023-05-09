import { page } from "$app/stores";
import { get, readable } from "svelte/store";

export const navbar_middle_section_variant = readable<"form" | "logo" | undefined>(undefined, function start(set) {
    const pathname = get(page).url.pathname;
    console.log(pathname);

    if (pathname.match("user")) {
        set("logo");
    } else {
        set("form");
    }
});
