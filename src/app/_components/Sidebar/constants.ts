import { getRoute } from "~/utils";

import { type NavItemProps } from "./types";

export const NAV_ITEMS: NavItemProps[] = [
  {
    label: "Home",
    icon: "home",
    href: getRoute("home"),
  },
  {
    label: "Log In",
    icon: "login",
    href: getRoute("login"),
  },
];
