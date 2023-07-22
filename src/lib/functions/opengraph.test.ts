import { OpengraphGenerator } from "$functions/opengraph";
import { expect, test } from "vitest";

test("opengraph function", () => {
    const opengraph_html = new OpengraphGenerator({
        title: "Hello",
        url: "https://example.com",
        description: `"Sora Amamiya is cutee.", said baseplate-admin`,
        site_name: "CoreProject",
        locale: "en_US",
        keywords: ["Sora Amamiya", "Natsukawa Shiina"]
    }).generate_opengraph();

    expect(opengraph_html).toBe(
        `<meta property="og:type" content="website"><meta property="og:site_name" content="CoreProject"><meta property="og:locale" content="en_US"><title>Hello</title><meta property="og:title" content="Hello"><meta name="twitter:title" content="Hello" /><meta property="og:url" content="https://example.com"><meta name="description" content="&quot;Sora Amamiya is cutee.&quot;, said baseplate-admin"><meta property="og:description" content="&quot;Sora Amamiya is cutee.&quot;, said baseplate-admin"><meta name="twitter:description" content="&quot;Sora Amamiya is cutee.&quot;, said baseplate-admin" /><meta name="keywords" content="Sora Amamiya, Natsukawa Shiina"/>`
    );

    const opengraph_html_with_image = new OpengraphGenerator({
        title: "Hello",
        url: "https://example.com",
        description: `"Sora Amamiya is cutee.", said baseplate-admin`,
        site_name: "CoreProject",
        locale: "en_US",
        image_url: "https://example.com/image.png",
        keywords: ["Sora Amamiya", "Natsukawa Shiina"]
    }).generate_opengraph();
    expect(opengraph_html_with_image).toBe(
        `<meta property="og:type" content="website"><meta property="og:site_name" content="CoreProject"><meta property="og:locale" content="en_US"><title>Hello</title><meta property="og:title" content="Hello"><meta name="twitter:title" content="Hello" /><meta property="og:url" content="https://example.com"><meta name="description" content="&quot;Sora Amamiya is cutee.&quot;, said baseplate-admin"><meta property="og:description" content="&quot;Sora Amamiya is cutee.&quot;, said baseplate-admin"><meta name="twitter:description" content="&quot;Sora Amamiya is cutee.&quot;, said baseplate-admin" /><meta property="og:image" content="https://example.com/image.png"><meta name="twitter:image" content="https://example.com/image.png" /><meta name="twitter:card" content="summary_large_image" /><meta name="keywords" content="Sora Amamiya, Natsukawa Shiina"/>`
    );
});
