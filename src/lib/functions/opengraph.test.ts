import { OpengraphGenerator } from "$functions/opengraph";
import { expect, test } from "vitest";

test("opengraph function", () => {
    const opengraph_html = new OpengraphGenerator({
        title: "Hello",
        url: "https://example.com",
        description: "random",
        site_name: "CoreProject",
        locale: "en_US"
    })
        .generate_opengraph()
        .trim()
        // eslint-disable-next-line no-useless-escape
        .replace(/(?<=\>)\s+(?=\<)/g, "");

    expect(opengraph_html).toBe(
        `<meta property="og:type" content="website"><meta property="og:site_name" content="CoreProject"><meta property="og:locale" content="en_US"><title>Hello</title><meta property="og:title" content="Hello"><meta name="twitter:title" content="Hello" /><meta property="og:url" content="https://example.com"><meta name="description" content="random"><meta property="og:description" content="random"><meta name="twitter:description" content="random" /><meta name="twitter:card" content="summary_large_image" />`
    );
});
