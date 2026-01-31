import { AuthRepository } from "@/domain/repositories/auth-repository";
import { VerifyOtpInput } from "@/domain/schemas/verify-otp-schema";

export class OtpVerifyUseCase {
    constructor(private authRepository: AuthRepository) {}
    async execute(method: VerifyOtpInput): Promise<string> {
        return await this.authRepository.verifyOtp(method);
    }
}