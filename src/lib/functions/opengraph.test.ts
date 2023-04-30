import { test, expect } from "vitest";
import { OpengraphGenerator } from "$functions/opengraph";

test("opengraph function", () => {
    const opengraph_html = new OpengraphGenerator({
        title: "Hello",
        page_url: "https://example.com",
        description: "random",
        site_name: "CoreProject",
        locale: "en_US"
    })
        .generate_opengraph()
        .trim()
        // eslint-disable-next-line no-useless-escape
        .replace(/(?<=\>)\s+(?=\<)/g, "");

    expect(opengraph_html).toBe(
        `<meta property="og:type" content="website"><meta property="og:site_name" content="CoreProject"><meta property="og:locale" content="en_US"><meta property="og:title" content="Hello"><meta property="og:url" content="https://example.com"><meta property="og:description" content="random">`
    );
});
