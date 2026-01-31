import { handleOAuthCallbackAction } from "@/app/actions/handle-oauth-callback-action";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const code = req.nextUrl.searchParams.get("code") ?? undefined;
      return handleOAuthCallbackAction(code);
}