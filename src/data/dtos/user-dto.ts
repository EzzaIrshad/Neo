import { z } from "zod";

export const UserDTOSchema = z.object({
  id: z.string(),
  email: z.email().nullable().optional(),
  full_name: z.string().nullable().optional(),
  avatar_url: z.url().nullable().optional(),
  role: z.string().nullable().optional(),
});

export type UserDTO = z.infer<typeof UserDTOSchema>;