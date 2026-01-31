"use client";

import EmailSignInForm from "@/ui/components/forms/email-sign-in-form";
import OtpForm from "@/ui/components/forms/otp-form";
import { SocialPlatform } from "@/domain/enums/social-platform-enum";
import { Button } from "@/ui/components/shadcn/button";

import { ChevronLeftIcon } from "lucide-react";
import { useState } from "react";
import { signInOAuthAction } from "@/app/actions/signin-oauth-action";

export default function SignInPage() {

    const [step, setStep] = useState<"email" | "otp">("email");
    const [email, setEmail] = useState("");

    const googleSignin = async () => {
        await signInOAuthAction(SocialPlatform.GOOGLE);
    };

    return (
        <main className="w-full min-h-screen bg-[#F0F5F2] flex items-center justify-center max-md:px-3">
            <div className="rounded-md bg-white shadow-sm flex flex-col gap-6 items-center justify-center px-6  py-5">

                {/* logo */}
                <div className="w-20 h-full">
                    {/* <Image
                        src="/logos/company-logo.svg"
                        alt="Logo"
                        width={100}
                        height={140}
                        className="w-full h-auto object-contain"
                    /> */}
                </div>

                {/* header */}
                <div className="text-center">
                    <h1 className="text-[26px] font-semibold leading-relaxed">Sign in to Neo</h1>
                    <p className="text-[#a0a0a0] text-xs tracking-wide">AI SaaS Tool for Smarter Business Automation</p>
                </div>

                {/* form */}
                <div className="space-y-5 mt-3 flex flex-col items-center">
                    <p className="text-[#636363] text-sm tracking-wide max-md:text-center">
                        {step === "email"
                            ? "Enter your email to receive one-time passcode"
                            : (
                                <>
                                    Enter the 6-digit code sent to{" "}
                                    <strong>{email}</strong>
                                </>
                            )}
                    </p>

                    {step === "email" ? (
                        <EmailSignInForm
                            setEmail={setEmail}
                            setStep={setStep}
                        />
                    ) : (
                        <>
                            <OtpForm
                                email={email}
                                onSuccess={() => {
                                    console.log("OTP verified")
                                }}
                            />

                            <button onClick={() => setStep("email")} className="group text-[#636363] flex items-center gap-2 cursor-pointer font-medium">
                                <ChevronLeftIcon className="size-5 group-hover:-translate-x-1 transition-transform" />
                                Go Back
                            </button>
                        </>
                    )}
                </div>

                {/* divider */}
                <div className="relative w-9/10">
                    <hr className="w-full bg-[#a0a0a0]" />
                    <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center tracking-normal leading-none bg-white px-2 pb-px font-medium">or</p>
                </div>

                {/* social login buttons */}
                <div>
                    <Button
                        variant={"outline"}
                        onClick={googleSignin}
                        className="flex-1 flex gap-3 items-center border border-[#c6c1c1] cursor-pointer"
                    >
                        <svg className="size-8" viewBox="0 0 150 150" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M120 76.1c0-3.1-.3-6.3-.8-9.3H75.9v17.7h24.8c-1 5.7-4.3 10.7-9.2 13.9l14.8 11.5C115 101.8 120 90 120 76.1" fill="#4280ef" /><path d="M75.9 120.9c12.4 0 22.8-4.1 30.4-11.1L91.5 98.4c-4.1 2.8-9.4 4.4-15.6 4.4-12 0-22.1-8.1-25.8-18.9L34.9 95.6c7.8 15.5 23.6 25.3 41 25.3" fill="#34a353" /><path d="M50.1 83.8c-1.9-5.7-1.9-11.9 0-17.6L34.9 54.4c-6.5 13-6.5 28.3 0 41.2z" fill="#f6b704" /><path d="M75.9 47.3c6.5-.1 12.9 2.4 17.6 6.9L106.6 41c-8.3-7.8-19.3-12-30.7-11.9-17.4 0-33.2 9.8-41 25.3l15.2 11.8c3.7-10.9 13.8-18.9 25.8-18.9" fill="#e54335" /></svg>
                        Continue with Google
                    </Button>
                </div>
            </div>

        </main>
    );
}