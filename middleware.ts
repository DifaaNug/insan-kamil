import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect admin routes
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  // Allow login page and API routes
  if (pathname === "/admin/login" || pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Check for any NextAuth session cookie (v4 and v5)
  const cookies = request.cookies;
  const hasSession =
    cookies.has("next-auth.session-token") ||
    cookies.has("__Secure-next-auth.session-token") ||
    cookies.has("authjs.session-token") ||
    cookies.has("__Secure-authjs.session-token");

  // If no session, redirect to login with callback URL
  if (!hasSession) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
