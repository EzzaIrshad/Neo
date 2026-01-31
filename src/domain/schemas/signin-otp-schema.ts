import { z } from "zod";

export const signInWithOtpSchema = z.discriminatedUnion("method", [
  z.object({
    method: z.literal("email"),
    value: z.email("Invalid email"),
  }),
  z.object({
    method: z.literal("phone"),
    value: z
      .string()
      .min(10, "Invalid phone number")
      .regex(/^\+?[0-9]+$/, "Phone must be numeric"),
  }),
]);


export type SignInWithOtpInput =
  z.infer<typeof signInWithOtpSchema>;