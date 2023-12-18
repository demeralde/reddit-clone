import { type FC } from "react";

import { NAV_ITEMS } from "./constants";
import NavItem from "./NavItem";
import UserButton from "./UserButton";

const Sidebar: FC = () => {
  return (
    <nav className="flex w-[277px] flex-shrink-0 flex-col gap-y-1 border-r border-gray-200 px-4 py-6">
      {NAV_ITEMS.map((navItem) => (
        <NavItem {...navItem} key={navItem.href} />
      ))}
      <UserButton />
    </nav>
  );
};

export default Sidebar;
