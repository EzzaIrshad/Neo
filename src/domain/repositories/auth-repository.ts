
import { SignInWithOtpInput } from "@/domain/schemas/signin-otp-schema";
import { VerifyOtpInput } from "../schemas/verify-otp-schema";
import { SocialPlatformType } from "../enums/social-platform-enum";
import { User } from "../entities/user";

export interface AuthRepository {

    signInWithOtp(method: SignInWithOtpInput): Promise<string>;

    verifyOtp(method: VerifyOtpInput): Promise<string>;

    getOAuthUrl(provider: SocialPlatformType): Promise<string>;

    exchangeOAuthCode(code: string): Promise<User>;

    getCurrentUser(): Promise<User | null>;

}