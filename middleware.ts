// middleware.ts
import { NextResponse } from "next/server";

export function middleware(request: any) {
  // get the URL from request header
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  // pass the header to the layout
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
