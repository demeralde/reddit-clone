import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { ROUTES } from "~/config/routes";

export default authMiddleware({
  publicRoutes: [ROUTES.home, ROUTES.posts, ROUTES.post(":id"), ROUTES.login],
  afterAuth: (auth, req) => {
    let response;

    if (!auth.isPublicRoute && !auth.userId) {
      response = NextResponse.redirect(new URL("/login", req.url));
    } else {
      response = NextResponse.next();
    }

    return response;
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
