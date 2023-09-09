import { twMerge } from "tailwind-merge";

type ClassValue = ClassValue[] | Record<string, string | number | null | boolean | undefined> | string | number | null | boolean | undefined;

// Code modified from
// https://github.com/alexnault/classix/blob/0b36b65600ded771b15cac4b027bb32e8b9d74b7/src/index.ts#L9
function clsx(...args: ClassValue[]): string {
    let str = "",
        i = 0,
        arg: ClassValue;

    for (; i < args.length; ) {
        if ((arg = args[i++]) && typeof arg === "string") {
            str && (str += " ");
            str += arg;
        }
    }
    return str;
}

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
