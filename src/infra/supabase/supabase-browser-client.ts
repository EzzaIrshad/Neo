import { createBrowserClient } from "@supabase/ssr";
import { SupabaseClient } from '@supabase/supabase-js'

export class SupabaseBrowser {
    private static instance: SupabaseClient | null = null;

    // Prevent direct instantiation
    private constructor() { }

    // Create or reuse the same client (singleton)
    static getClient(): SupabaseClient {
        if (!SupabaseBrowser.instance) {
            SupabaseBrowser.instance = createBrowserClient(
                process.env.SUPABASE_URL!,
                process.env.SUPABASE_ANON_KEY!
            );
        }

        return SupabaseBrowser.instance;
    }
}