import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // const { pathname } = request.nextUrl;
  const authenticate = true;

  if (authenticate) {
    return NextResponse.redirect(new URL("/reseller", request.url));
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/"],
};
