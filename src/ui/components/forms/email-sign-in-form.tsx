"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

import { Button } from "../shadcn/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../shadcn/form"
import { Input } from "../shadcn/input"
import { signInOtpAction } from "@/app/actions/signin-otp-action"

const formSchema = z.object({
  email: z.email({
    message: "Invalid email address",
  }),
})

export default function EmailSignInForm({ setEmail, setStep }: {
  setEmail: (email: string) => void;
  setStep: (step: "email" | "otp") => void;
}) {

  const [serverError, setServerError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // 1. Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function handleEmailSubmit(data: z.infer<typeof formSchema>) {
    try {
      setLoading(true)
      setServerError(null)

      await signInOtpAction(data.email)

      setEmail(data.email)
      setStep("otp")
    } catch (err: unknown) {
      
      let message = "Something went wrong. Please try again."

      if (typeof err === "object" && err !== null && "message" in err) {
        const errorMessage = String(err.message).toLowerCase()

        if (errorMessage.includes("invalid")) {
          message = "Please enter a valid email address."
        } else if (errorMessage.includes("rate")) {
          message = "Too many attempts. Please wait a moment and try again."
        }
      }

        setServerError(message)
      } finally {
        setLoading(false)
      }
    }


    return (
      <Form {...form}>
        <form className="space-y-5 flex flex-col items-center w-full"
          onSubmit={form.handleSubmit(handleEmailSubmit)}
        >
          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    {...field}
                    // Clear error on change
                    onChange={(e) => {
                      field.onChange(e)
                      if (serverError) setServerError(null)
                    }}
                    disabled={loading}
                    className="border border-[#a0a0a0] p-3.5 w-full"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* server error */}
          {serverError && (
            <p className="text-xs text-danger text-center">
              {serverError}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-1/2 text-base p-2.5! min-h-11 cursor-pointer bg-[#141414] text-white hover:bg-[#141414]/90"
          >
            {loading ? "Sending code…" : "Continue"}
          </Button>

        </form>
      </Form>
    )
  }