import { type FC } from "react";

import { NAV_ITEMS } from "./constants";
import NavItem from "./NavItem";

const Sidebar: FC = () => (
  <nav className="flex w-[277px] flex-col gap-y-1 border-r border-gray-200 px-4 py-6">
    {NAV_ITEMS.map((navItem) => (
      <NavItem {...navItem} />
    ))}
  </nav>
);

export default Sidebar;
