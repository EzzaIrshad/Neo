import { AuthDataSource } from "@/domain/datasource/auth-datasource";
import { SignInWithOtpInput } from "@/domain/schemas/signin-otp-schema";
import { SupabaseServerClient } from "@/infra/supabase/supabase-server-client";
import { VerifyOtpInput } from "@/domain/schemas/verify-otp-schema";
import { SocialPlatformType } from "@/domain/enums/social-platform-enum";
import { User } from "@/domain/entities/user";
import { UserMapper } from "../mappers/user-mapper";

export class SupabaseAuthDataSource implements AuthDataSource {

    private async getSupabase() {
        const client = await SupabaseServerClient.create();
        return client.getClient();
    }

    async signInWithOtp(input: SignInWithOtpInput): Promise<string> {
        const supabase = await this.getSupabase();

        const payload =
            input.method === "email"
                ? {
                    email: input.value,
                }
                : {
                    phone: input.value,
                };

        const { error } = await supabase.auth.signInWithOtp(payload);
        if (error) {
            throw error;
        }

        return `OTP sign-in initiated for ${input.method}: ${input.value}`;
    }

    async verifyOtp(method: VerifyOtpInput): Promise<string> {
        const supabase = await this.getSupabase();

        const { data, error } = await supabase.auth.verifyOtp({
            email: method.value,
            token: method.otp,
            type: "email"
        })
        if (error || !data.user) {
            throw new Error(`OTP verification failed: ${error?.message}`);
        }

        return "OTP verified successfully";
    }

    async getOAuthUrl(provider: SocialPlatformType): Promise<string> {
        const supabase = await this.getSupabase();

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: provider,
            options: {
                redirectTo: `${process.env.PUBLIC_SITE_URL}/callback`
            }
        })

        if (error) throw new Error(`Error getting OAuth URL: ${error.message}`);
        if (!data.url) throw new Error('No OAuth URL returned');

        return data.url;
    }

    async exchangeOAuthCode(code: string): Promise<User> {

        const supbaseServer = await SupabaseServerClient.create();
        const supabase = supbaseServer.getClient();

        const { data, error } = await supabase.auth.exchangeCodeForSession(code);

        if (error || !data?.session?.user) {
            throw new Error(`Error exchanging OAuth code: ${error?.message}`);
        }

        const userId = data.session.user.id;

        //Fetch the ACTUAL app user from your "users" table
        const { data: profile, error: profileError } = await supabase
            .from("users")
            .select("*")
            .eq("id", userId)
            .single();

        if (profileError || !profile) {
            throw new Error("User profile not found in public.users");
        }

        //Convert DB row → DomainUser
        return UserMapper.toDomain(profile);
    }

    async getCurrentUser(): Promise<User | null> {

        const supbaseServer = await SupabaseServerClient.create();
        const supabase = supbaseServer.getClient();

        const { data: authData, error: autherror } = await supabase.auth.getUser();
        if (autherror || !authData?.user) return null;

        const userId = authData.user.id;

        const { data: profile, error: profileError } = await supabase
            .from("users")
            .select("*")
            .eq("id", userId)
            .single();

        if (profileError || !profile) {
            throw new Error("User profile not found in public.users");
        }

        return UserMapper.toDomain(profile);
    }
}
