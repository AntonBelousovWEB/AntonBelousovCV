import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const canonicalPathname = pathname.toLowerCase();

  if (pathname !== canonicalPathname) {
    const url = request.nextUrl.clone();
    url.pathname = canonicalPathname;

    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:path*"],
};
