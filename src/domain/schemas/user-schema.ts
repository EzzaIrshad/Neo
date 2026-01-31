import { z } from "zod";

export const DomainUserSchema = z.object({
  id: z.uuid(),
  email: z.email().nullable(),
  full_name: z.string().nullable(),
  avatar_url: z.url().nullable(),
  role: z.enum(["admin", "user"]).default("user"),
});

export type DomainUserType = z.infer<typeof DomainUserSchema>;