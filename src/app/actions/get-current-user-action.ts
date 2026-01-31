import { SupabaseAuthDataSource } from "@/data/datasources/supabase-auth-datasource";
import { SupabaseAuthRepository } from "@/data/repositories/supabase-auth-repository";
import { GetCurrentUserUseCase } from "@/usecases/auth/get-current-user-usecase";


export async function getCurrentUserAction() {
    const authDataSource = new SupabaseAuthDataSource();
    const repo = new SupabaseAuthRepository(authDataSource);
    const useCase = new GetCurrentUserUseCase(repo);

    const user = await useCase.execute();
    return user;
}