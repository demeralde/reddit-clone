import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { getRoute } from "./utils";

export default authMiddleware({
  publicRoutes: [
    getRoute("home"),
    getRoute("posts"),
    getRoute("post", { id: ":id" }),
    getRoute("login"),
  ],
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
