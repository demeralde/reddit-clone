import { getRoute } from "~/utils";

import { type NavItemProps } from "./types";

export const NAV_ITEMS: NavItemProps[] = [
  {
    label: "Home",
    icon: "home",
    href: getRoute("posts"),
    showWhenLoggedIn: true,
    showWhenLoggedOut: true,
  },
  {
    label: "Log In",
    icon: "login",
    href: getRoute("login"),
    showWhenLoggedIn: false,
    showWhenLoggedOut: true,
  },
  {
    label: "My posts",
    icon: "myPosts",
    href: getRoute("myPosts"),
    showWhenLoggedIn: true,
    showWhenLoggedOut: false,
  },
];
