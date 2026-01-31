'use server'

import { SupabaseAuthDataSource } from "@/data/datasources/supabase-auth-datasource";
import { SupabaseAuthRepository } from "@/data/repositories/supabase-auth-repository";
import { SocialPlatformType } from "@/domain/enums/social-platform-enum";
import { GetOAuthUrlUseCase } from "@/usecases/auth/get-oauth-url-usecase";
import { redirect } from "next/navigation";

export async function signInOAuthAction(
    provider: SocialPlatformType
) {
    let redirectUrl: string | null = null;

    try {
        const authDataSource = new SupabaseAuthDataSource();
        const repo = new SupabaseAuthRepository(authDataSource);
        const useCase = new GetOAuthUrlUseCase(repo);

        // 1. Get the URL, but DO NOT redirect yet
        redirectUrl = await useCase.execute(provider);
    } catch (error) {
        console.error('OAuth generation failed:', error);
        // Handle actual errors (e.g., return a generic error message to UI)
        return { error: 'Failed to initiate login' };
    }
    if (redirectUrl) {
        redirect(redirectUrl);
    }
}
