import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [sveltekit()],
    esbuild: {
        legalComments: "none",
        // Disable console
        drop: ["console", "debugger"]
    },
    build: {
        target: "esnext"
    },
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"]
    }
});
