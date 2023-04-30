import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

const schema = z
    .object({
        email: z.string().email("Please enter a valid email address").min(10, "Email must be at least 10 characters long"),

        password: z
            .string()
            .min(8, "atleast_8")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+|~\-=?;:'",.<>{}[\]\\/])(?!.*\s).*$/, "one_lowercase,one_uppercase,one_number,one_special_character"),

        confirm_password: z.string()
    })
    .refine((schema) => {
        const password_and_confirm_password_match = schema.password === schema.confirm_password;

        return [password_and_confirm_password_match].every((value) => value === true);
    });

export const load = async () => {
    // Server API:
    const form = await superValidate(schema);

    // Always return { form } in load and form actions.
    return { form };
};

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, schema);
        console.log("FORM", form);

        if (!form.valid) {
            return fail(400, { form });
        }

        const { email, password, confirm_password } = form.constraints;

        // TODO: Do something with the validated data

        return { form };
    }
} satisfies Actions;
