interface Route {
  path: string;
}

type ParamName = string;
type ParamNames = ParamName[];
export type ParamMap = Record<ParamName, string>;

export interface RouteWithParams extends Route {
  params: ParamNames;
}

export type RouteName = "home" | "login" | "post";

export type Routes = {
  [key in RouteName]: Route | RouteWithParams;
} & {
  home: Route;
  login: Route;
  post: RouteWithParams;
};

export const ROUTES: Routes = {
  home: { path: "/" },
  login: { path: "/login" },
  post: { path: "/post/:id", params: ["id"] },
};
