import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const schema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(3, 'Email must be at least 3 characters long')
    .max(100, 'Email must be less than 100 characters long'),

  password: z
    .string()
    .min(8, 'atleast_8')
    .max(50, 'less_than_50')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+|~\-=?;:'",.<>{}[\]\\/])(?!.*\s).*$/,
      "one_lowercase,one_uppercase,one_number,one_special_character"
    ),

  confirm_password: z.string()
});

export const load = async () => {
  // Server API:
  const form = await superValidate(schema);

  // Always return { form } in load and form actions.
  return { form };
};

export const actions = {
  default: async (event: any) => {

    const form = await superValidate(event, schema);
    console.log('FORM', form);

    if (!form.valid) {
      return fail(400, { form });
    }

    const { email, password, confirm_password } = form.constraints;

    // Check if password and confirm password match
    if (password !== confirm_password) {
      return fail(400, {
        form: {
          errors: {
            confirm_password: "Passwords do not match",
          },
        },
      });
    }

    // TODO: Do something with the validated data

    return { form };
  }
};