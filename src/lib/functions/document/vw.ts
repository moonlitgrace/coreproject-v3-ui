import { browser } from "$app/store";

export function vw(vw: number) {
    
    return browser ? (vw * globalThis.window.innerWidth) / 100 : null;
}
