"use client";
import { type FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon from "~/app/_components/Icon";

import { type NavItemProps } from "./types";

/**
 * This is a client component because Next.js doesn't support accessing the current route
 * in server components: https://github.com/vercel/next.js/issues/43704
 *
 * Once it's added, this can be a server component.
 */

const NavItem: FC<NavItemProps> = ({ href, icon, label }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <Link
      href={href}
      className={`
        flex cursor-pointer items-center gap-4 rounded-xl px-4 py-3
        ${isActive && "bg-gray-50"}
      `}
    >
      <Icon
        type={icon}
        color={isActive ? "primary-600" : "gray-600"}
        size="default"
      />
      <span
        className={`
          text-base font-medium
        ${isActive ? "text-primary-600" : "text-gray-700"}
      `}
      >
        {label}
      </span>
    </Link>
  );
};

export default NavItem;
