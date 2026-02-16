import z from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Invalid email address."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(32, "Password must be at most 32 characters."),
});
export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;
