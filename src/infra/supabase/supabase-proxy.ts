import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { SupabaseClient } from '@supabase/supabase-js'
import { routes } from "@/app/routes";

export class SupabaseProxy {
    private request: NextRequest;
    private supabaseResponse: NextResponse;

    constructor(request: NextRequest) {
        this.request = request;

        // Initial response
        this.supabaseResponse = NextResponse.next({ request });
    }

    /**
     * Create Supabase client for middleware
     */
    private getClient(): SupabaseClient {
        return createServerClient(
            process.env.SUPABASE_URL!,
            process.env.SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll: () => this.request.cookies.getAll(),

                    setAll: (cookiesToSet) => {
                        cookiesToSet.forEach(({ name, value }) =>
                            this.request.cookies.set(name, value),
                        );

                        this.supabaseResponse = NextResponse.next({ request: this.request });

                        cookiesToSet.forEach(({ name, value, options }) =>
                            this.supabaseResponse.cookies.set(name, value, options),
                        );
                    },
                },
            },
        );
    }

    /**
     * Main session update + redirect logic
     */
    async update() {
        const supabase = this.getClient();

        const { data } = await supabase.auth.getClaims(); 
        const user = data?.claims ?? null;

        // const { data: profile } = await supabase
        //     .from("users")
        //     .select("id, role, full_name")
        //     .eq("id", user?.sub)
        //     .single();

        const pathname = this.request.nextUrl.pathname;

        // Check if user is trying to access apply page
        // const isCareerApply = pathname.startsWith("/careers/") && pathname.endsWith("/apply");

        // Public routes (no auth required)
        const isPublic =
            pathname === routes.landing.home ||
            pathname === routes.auth.signin ||
            pathname === routes.auth.callback ||
            pathname === routes.landing.about ||
            pathname === routes.landing.services ||
            pathname === routes.landing.career ||
            pathname === routes.landing.blogs ||
            pathname === routes.landing.contact;

        // Career apply route requires authentication
        // if (!user && isCareerApply) {
        //     const url = this.request.nextUrl.clone();
        //     url.pathname = routes.auth.signin;
        //     return NextResponse.redirect(url);
        // }

        // Not logged in + protected route → landing
        if (!user && !isPublic) {
            const url = this.request.nextUrl.clone();
            url.pathname = routes.landing.home;
            return NextResponse.redirect(url);
        }

        // OWNER → allow EVERYTHING
        // if (profile?.role === "admin") {
        //     return this.supabaseResponse;
        // }        

        return this.supabaseResponse;
    }

}