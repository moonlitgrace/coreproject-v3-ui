import xss from "xss";
import isNil from "lodash/isNil";

export async function sanitize(_text: string | undefined | Promise<string | undefined>): Promise<string> {
    const text = await _text;

    return isNil(text)
        ? ""
        : xss(text, {
              whiteList: {
                  blockquote: ["class"],
                  del: ["class"],
                  p: ["class"],
                  strong: ["class"],
                  em: ["class"],
                  b: ["class"],
                  a: ["href", "class"],
                  u: ["class"],
                  i: ["class"],
                  img: ["src", "alt", "class"],
                  code: ["class"],
                  pre: ["class"],
                  span: ["class"],
                  h1: ["class"],
                  h2: ["class"],
                  h3: ["class"],
                  h4: ["class"],
                  h5: ["class"]
              }
          });
}
