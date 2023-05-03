import { z } from "zod";

export const schema = z
	.object({
		email: z
			.string()
			.min(10, "Email must be at least 10 characters long")
			.email("Please enter a valid email address"),

		password: z
			.string()
			.min(8, "atleast_8")
			.refine((val) => /(?=.*[!@#$%^&*()_+|~\-=?;:'",.<>{}[\]\\/])/.test(val), "missing_one_special_character")
			.refine((val) => /(?=.*\d)/.test(val), "missing_one_number")
			.refine((val) => /(?=.*[A-Z])/.test(val), "missing_one_uppercase")
			.refine((val) => /(?=.*[a-z])/.test(val), "missing_one_lowercase"),

		confirm_password: z.string()
	})
	.refine((schema) => {
		const password_and_confirm_password_match = schema.password === schema.confirm_password;

		return [password_and_confirm_password_match].every((value) => value === true);
	});