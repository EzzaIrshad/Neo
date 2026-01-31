import { AuthRepository } from "@/domain/repositories/auth-repository";
import { SignInWithOtpInput } from "@/domain/schemas/signin-otp-schema";


export class SignInWithOtpUseCase {

    constructor( private authRepository: AuthRepository) {}
    async execute(method: SignInWithOtpInput): Promise<string> {
        return await this.authRepository.signInWithOtp(method);
    }

}