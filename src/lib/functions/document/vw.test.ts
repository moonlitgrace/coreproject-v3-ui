/**
 * @vitest-environment jsdom
 */
import { expect, describe, beforeEach, it } from "vitest";
import { vw } from "$functions/document/vw";

describe("test window", () => {
    beforeEach(() => {
        window.innerWidth = 1;
    });

    it("test vw without browser", () => {
        expect(vw(1)).toBe(0.01);
    });
});
