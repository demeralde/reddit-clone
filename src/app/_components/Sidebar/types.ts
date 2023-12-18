import { type IconType } from "~/app/_components/Icon";

export interface NavItemProps {
  label: string;
  icon: IconType;
  href: string;
  showWhenLoggedIn: boolean;
  showWhenLoggedOut: boolean;
}
