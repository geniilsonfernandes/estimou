import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { email, password } = {
      email: 'geniilsonfernandes@gmail.com',
      password: 'geniilsonfernandes@gmail.com',
    }
     await signIn('credentials', { email, password, redirectTo: DEFAULT_LOGIN_REDIRECT })
    return NextResponse.json({ message: 'Hello World' })
}