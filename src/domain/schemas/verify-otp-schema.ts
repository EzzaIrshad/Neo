import { z } from "zod";

export const verifyOtpSchema = z.discriminatedUnion("method", [
  z.object({
    method: z.literal("email"),
    value: z.email("Invalid email"),
    otp: z.string().length(6, "OTP must be 6 digits"),
  }),
  z.object({
    method: z.literal("phone"),
    value: z.string(),
    otp: z.string().length(6, "OTP must be 6 digits"),
  }),
]);

export type VerifyOtpInput = z.infer<typeof verifyOtpSchema>;
