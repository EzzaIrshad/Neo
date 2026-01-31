import { SocialPlatformType } from "@/domain/enums/social-platform-enum";
import { AuthRepository } from "@/domain/repositories/auth-repository";

export class GetOAuthUrlUseCase {
    constructor(private authRepository: AuthRepository) {}
    async execute(provider: string): Promise<string> {
        const validator = provider as SocialPlatformType
        return await this.authRepository.getOAuthUrl(validator);
    }
}
