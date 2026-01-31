'use server'

import { SupabaseAuthDataSource } from "@/data/datasources/supabase-auth-datasource";
import { SupabaseAuthRepository } from "@/data/repositories/supabase-auth-repository";
import { HandleOAuthCallbackUseCase } from "@/usecases/auth/handle-oauth-callback-usecase";
import { NextResponse } from "next/server";

export async function handleOAuthCallbackAction(code?: string) {
  if (!code) {
    return NextResponse.redirect(`${process.env.PUBLIC_SITE_URL}/error?reason=missing_code`);
  }

  const authDataSource = new SupabaseAuthDataSource();
  const repo = new SupabaseAuthRepository(authDataSource);
  const useCase = new HandleOAuthCallbackUseCase(repo);

  try {
    await useCase.execute(code);
    return NextResponse.redirect(`${process.env.PUBLIC_SITE_URL}`);
  } catch (error) {
    console.error("OAuth Callback Error:", error);
    return NextResponse.redirect(`${process.env.PUBLIC_SITE_URL}/error`);
  }
}