import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req = NextRequest, res = NextResponse) {
  const session = await getToken({ req: req, secret: process.env.SECRET });

  if (!session) {
    return NextResponse.next();
  }
  
  return NextResponse.redirect(new URL("/protected", req.url));
}
