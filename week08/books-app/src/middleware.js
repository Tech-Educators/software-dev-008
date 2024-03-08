import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server'
import { isSignedUp } from "./utils/utils";

 
export default authMiddleware({
  publicRoutes: ['/', '/books', '/books/([^/.]+)'],
  // Routes that can always be accessed, and have
  afterAuth: async (auth, req) => {
    const res = await isSignedUp(auth.userId)
    // TODO: nice to testing, remove
    console.log(res, req.nextUrl.pathname)
    if (!res && req.nextUrl.pathname != '/users/sign-up') {
      return NextResponse.redirect(`${process.env.BASE_URL}/users/sign-up`);
    }
  }
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  };