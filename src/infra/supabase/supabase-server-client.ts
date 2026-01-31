import { createServerClient } from "@supabase/ssr";
import { SupabaseClient } from '@supabase/supabase-js'
import { cookies } from "next/headers";

export class SupabaseServerClient {
    private cookieStore: Awaited<ReturnType<typeof cookies>>;

    private constructor(cookieStore: Awaited<ReturnType<typeof cookies>>) {
        this.cookieStore = cookieStore;
    }

    /**
     * Factory method → Always create a new instance on each server request.
     */
    static async create(): Promise<SupabaseServerClient> {
        const cookieStore = await cookies();
        return new SupabaseServerClient(cookieStore);
    }

    /**
     * Returns a fresh Supabase server client for each request
     */
    getClient(): SupabaseClient {
        return createServerClient(
            process.env.SUPABASE_URL!,
            process.env.SUPABASE_ANON_KEY!,
            {
                cookies: {
                    getAll: () => {
                        return this.cookieStore.getAll();
                    },
                    setAll: (cookiesToSet) => {
                        try {
                            cookiesToSet.forEach(({ name, value, options }) => {
                                this.cookieStore.set(name, value, options);
                            });
                        } catch {
                            // Called inside Server Component — safe to ignore
                        }
                    },
                },
            }
        );
    }
}