"use client";

import { useRef, useState } from "react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/ui/components/shadcn/input-otp"

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { verifyOtpAction } from "@/app/actions/verify-otp-action";

function OtpForm({ email, onSuccess }: {
    email: string;
    onSuccess: () => void;
}) {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const [otp, setOtp] = useState("");
    const hasSubmitted = useRef(false);

    async function handleVerify() {
        try {
            setLoading(true);
            setError(null);

            await verifyOtpAction(email, otp);
            onSuccess();
        } catch (err: unknown) {

            // Default message
            let message = "Invalid or expired code. Please try again.";

            // Optional: Supabase-specific handling

            if (err instanceof Error && err.message.toLowerCase().includes("expired")) {
                message = "This code has expired. Request a new one.";
            }

            setError(message);
            setOtp("");                 // clear inputs
            hasSubmitted.current = false; // allow retry
        } finally {
            setLoading(false);
        }
    }

    // auto verify last slot filled
    const lastSlotRef = (node: HTMLInputElement | null) => {
        if (!node) return;

        if (
            otp.length === 6 &&
            !hasSubmitted.current &&
            !loading
        ) {
            hasSubmitted.current = true;
            handleVerify();
        }
    };

    return (
        <div className="w-full space-y-3">
            <InputOTP value={otp} onChange={setOtp} maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                <InputOTPGroup>
                    <InputOTPSlot index={0} className="size-12 2xl:size-15 text-lg" />
                    <InputOTPSlot index={1} className="size-12 2xl:size-15 text-lg" />
                    <InputOTPSlot index={2} className="size-12 2xl:size-15 text-lg" />
                    <InputOTPSlot index={3} className="size-12 2xl:size-15 text-lg" />
                    <InputOTPSlot index={4} className="size-12 2xl:size-15 text-lg" />
                    <InputOTPSlot ref={lastSlotRef} index={5} className="size-12 2xl:size-15 text-lg" />
                </InputOTPGroup>
            </InputOTP>
            {error && (
                <p className="text-xs text-danger text-center">
                    {error}
                </p>
            )}

        </div>
    );
}

export default OtpForm;