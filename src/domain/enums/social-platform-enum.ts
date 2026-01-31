import { z } from 'zod';

export enum SocialPlatform {
  GOOGLE = 'google'
}

/**
 * Zod schema that validates values against the SocialPlatform enum.
 * Uses z.nativeEnum so it stays in-sync with the TypeScript enum.
 */
export const SocialPlatformSchema = z.enum(SocialPlatform);

/**
 * Type inferred from the schema
 */
export type SocialPlatformType = z.infer<typeof SocialPlatformSchema>;