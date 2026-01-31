'use server'

import { SupabaseAuthDataSource } from '@/data/datasources/supabase-auth-datasource';
import { SupabaseAuthRepository } from '@/data/repositories/supabase-auth-repository';
import { signInWithOtpSchema } from '@/domain/schemas/signin-otp-schema';
import { SignInWithOtpUseCase } from '@/usecases/auth/signin-with-otp-usecase';

export async function signInOtpAction(
    email: string,
) {
    // ✅ Construct domain input
    const input = signInWithOtpSchema.parse({
        method: 'email',
        value: email,
    })
    const authDataSource = new SupabaseAuthDataSource();
    const repo = new SupabaseAuthRepository(authDataSource);
    const useCase = new SignInWithOtpUseCase(repo);

    await useCase.execute(input);

    //   redirect('/user');
}