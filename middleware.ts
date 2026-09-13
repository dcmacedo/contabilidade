import { NextRequest, NextResponse } from "next/server";
import { EXPERIMENTS } from "@/lib/ab";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  for (const exp of Object.values(EXPERIMENTS)) {
    const cookieName = `ab_test_${exp.id}`;
    if (!req.cookies.get(cookieName)) {
      const variant = Math.random() < 0.5 ? "A" : "B";
      res.cookies.set(cookieName, variant, {
        maxAge: 60 * 60 * 24 * 30,
        sameSite: "lax",
        path: "/",
      });
    }
  }

  return res;
}

export const config = {
  matcher: ["/"],
};