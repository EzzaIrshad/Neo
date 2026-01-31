'use server'

import { SupabaseAuthDataSource } from '@/data/datasources/supabase-auth-datasource';
import { SupabaseAuthRepository } from '@/data/repositories/supabase-auth-repository';
import { OtpVerifyUseCase } from '@/usecases/auth/otp-verify-usecase';
import { verifyOtpSchema } from '@/domain/schemas/verify-otp-schema';
import { redirect } from 'next/navigation';

export async function verifyOtpAction(
    email: string,
    otp: string,
) {
    const input = verifyOtpSchema.parse({
        method: 'email',
        value: email,
        otp: otp,
    });
    const authDataSource = new SupabaseAuthDataSource();
    const repo = new SupabaseAuthRepository(authDataSource);
    const useCase = new OtpVerifyUseCase(repo);

    await useCase.execute(input);

    redirect('/');
}