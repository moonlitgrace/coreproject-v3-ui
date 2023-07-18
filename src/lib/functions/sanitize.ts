import DOMPurify from "isomorphic-dompurify";

export function sanitize(text: string) {
    return DOMPurify.sanitize(text);
}
