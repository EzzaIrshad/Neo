import { User } from "@/domain/entities/user";
import { AuthRepository } from "@/domain/repositories/auth-repository";

export class HandleOAuthCallbackUseCase {

    constructor( private authRepository: AuthRepository) {}

    async execute(code: string) : Promise<User> {
        if(!code) {
            throw new Error("Authorization code is required");
        }
        const user =  await this.authRepository.exchangeOAuthCode(code);
        return user;
    }
}