import { writable } from "svelte/store";

export const dom_selection = writable<"none" | "all">("all");
