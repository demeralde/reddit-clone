interface Route {
  path: string;
}

type ParamName = string;
type ParamNames = ParamName[];
export type ParamMap = Record<ParamName, string>;

export interface RouteWithParams extends Route {
  params: ParamNames;
}

export type RouteName = "home" | "login" | "posts" | "post" | "myPosts";

export type Routes = {
  [key in RouteName]: Route | RouteWithParams;
} & {
  home: Route;
  login: Route;
  posts: Route;
  post: RouteWithParams;
  myPosts: Route;
};

export const ROUTES: Routes = {
  home: { path: "/" },
  login: { path: "/login" },
  posts: { path: "/posts" },
  post: { path: "/posts/:id", params: ["id"] },
  myPosts: { path: "/my-posts" },
};
