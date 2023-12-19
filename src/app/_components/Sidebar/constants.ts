import { ROUTES } from "~/config/routes";

import { type NavItemProps } from "./types";

export const NAV_ITEMS: NavItemProps[] = [
  {
    label: "Home",
    icon: "home",
    href: ROUTES.home,
    showWhenLoggedIn: true,
    showWhenLoggedOut: true,
  },
  {
    label: "Log In",
    icon: "login",
    href: ROUTES.login,
    showWhenLoggedIn: false,
    showWhenLoggedOut: true,
  },
  {
    label: "My posts",
    icon: "myPosts",
    href: ROUTES.myPosts,
    showWhenLoggedIn: true,
    showWhenLoggedOut: false,
  },
];
