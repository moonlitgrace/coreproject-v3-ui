import { superValidate } from "sveltekit-superforms/server";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { schema } from "$schemas/register";

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

        return { form };
    }
} satisfies Actions;
