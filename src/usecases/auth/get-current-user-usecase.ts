import { User } from "@/domain/entities/user";
import { AuthRepository } from "@/domain/repositories/auth-repository";

export class GetCurrentUserUseCase {
    constructor( private authRepository: AuthRepository) {}

    async execute() : Promise<User | null> {
        return await this.authRepository.getCurrentUser();
    }
}