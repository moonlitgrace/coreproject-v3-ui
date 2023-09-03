import { test, expect } from "vitest";
import { get_page_from_url } from "./get_page_from_url";

test("get page from url", () => {
	expect(get_page_from_url("/anime/mal/1/episode/1")).toBe("/anime");
})