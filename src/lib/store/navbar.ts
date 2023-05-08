import { writable } from "svelte/store";

export const navbar_middle_section_variant = writable<"form" | "logo">("form");
