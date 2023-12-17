import { ROUTES } from "~/app/config";

import { type NavItemProps } from "./types";

export const NAV_ITEMS: NavItemProps[] = [
  {
    label: "Home",
    icon: "home",
    href: ROUTES.home,
  },
  {
    label: "Log In",
    icon: "login",
    href: ROUTES.login,
  },
];
