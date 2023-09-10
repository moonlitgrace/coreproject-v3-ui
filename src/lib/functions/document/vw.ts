export function vw(vw: number) {
    if (typeof window === "undefined") return 0;
    return (vw * globalThis.window.innerWidth) / 100;
}
