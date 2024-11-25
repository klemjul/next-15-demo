## Middleware

```tsx
// app/middleware.tsx
import { NextResponse } from "next/server";

export function middleware(request: NextRequest): NextResponse {
  // auth
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isAuthenticated = request.cookies.get("auth-token");

  if (isAdminRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // locale
  const locale = request.cookies.get("locale") || "en";
  if (!pathname.startsWith(`/${locale}`) && pathname !== "/") {
    return NextResponse.rewrite(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}
```
