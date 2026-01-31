import { AuthRepository } from "@/domain/repositories/auth-repository";
import { SignInWithOtpInput } from "@/domain/schemas/signin-otp-schema";
import { AuthDataSource } from "@/domain/datasource/auth-datasource";
import { VerifyOtpInput } from "@/domain/schemas/verify-otp-schema";
import { SocialPlatformType } from "@/domain/enums/social-platform-enum";
import { User } from "@/domain/entities/user";
import { UserMapper } from "../mappers/user-mapper";

export class SupabaseAuthRepository implements AuthRepository {

    constructor(private authDataSource: AuthDataSource) {}

    async signInWithOtp(method: SignInWithOtpInput): Promise<string> {

        // Delegate to datastore
    const message = await this.authDataSource.signInWithOtp(method);
    return message;
    }

    async verifyOtp(method: VerifyOtpInput): Promise<string> {
        const message = await this.authDataSource.verifyOtp(method);
        return message;
    }

    async getOAuthUrl(provider: SocialPlatformType): Promise<string> {
        const url = await this.authDataSource.getOAuthUrl(provider);
        return url;
    }

    async exchangeOAuthCode(code: string): Promise<User> {
        const dto = await this.authDataSource.exchangeOAuthCode(code);
        const domainUser = UserMapper.toDomain(dto);
        return domainUser;
    }

    async getCurrentUser(): Promise<User | null> {
        // Implementation to get the current user
        return this.authDataSource.getCurrentUser();
    }
}
