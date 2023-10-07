import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { purgeCss } from "vite-plugin-tailwind-purgecss";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
    plugins: [
        sveltekit(),
        purgeCss({
            safelist: {
                // any selectors that begin with "hljs-" will not be purged
                greedy: [/^hljs-/, /^sl-/]
            }
        }),
        // needed for stoplight
        nodePolyfills()
    ],
    esbuild: {
        legalComments: "none",
        // This is magix
        // minifyIdentifiers: false,
        // Disable console
        drop: ["console", "debugger"]
    },
    build: {
        target: "esnext",
        sourcemap: true
    },
    css: {
        devSourcemap: true
    },
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"]
    }
});
