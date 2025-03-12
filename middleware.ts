import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

// Routes that require authentication
const protectedRoutes = ["/diary", "/foods"];

// Routes that should be inaccessible if the user is logged in
const authPages = ["/login", "/register", "/password"];

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const isProtectedRoute = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route));
    const isAuthPage = authPages.includes(req.nextUrl.pathname);

    // 🔒 Redirect unauthenticated users trying to access protected routes
    if (!token && isProtectedRoute) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // 🔄 Redirect authenticated users away from login/register/password pages
    if (token && isAuthPage) {
        return NextResponse.redirect(new URL("/diary", req.url));
    }

    return NextResponse.next();
}

// Apply middleware to relevant routes
export const config = {
    matcher: [
        "/diary/:path*",
        "/foods/:path*",
        "/login",
        "/register",
        "/password"
    ],
};
