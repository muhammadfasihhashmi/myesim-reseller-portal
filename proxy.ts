import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

const protectedRoutes = ["/reseller", "/dealer", "/affiliate"];
const publicRoutes = ["/login"];

export default auth((request) => {
  const session = request.auth;
  const pathname = request.nextUrl.pathname;
  const isAuthenticated =
    session?.user && session?.user?.role && session?.accessToken;
  const userRole = session?.user?.role.toLowerCase();
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  //handling browser wellknown paths
  if (pathname.startsWith("/.well-known/")) {
    return NextResponse.next();
  }

  //handling home route hit
  if (pathname === "/") {
    if (!isAuthenticated)
      return NextResponse.redirect(new URL("/login", request.url));
    if (isAuthenticated)
      return NextResponse.redirect(new URL(`/${userRole}`, request.url));
  }

  //handling if user not authenticated and try to acess the protected routes
  if (!isAuthenticated && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //handling authenticated user try to access the public routes"
  if (isAuthenticated && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL(`/${userRole}`, request.url));
  }

  //handling that user go to its own dashboard
  if (isAuthenticated && isProtectedRoute) {
    const roleRoute = `/${userRole}`;
    if (!pathname.startsWith(roleRoute)) {
      return NextResponse.redirect(new URL(roleRoute, request.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
