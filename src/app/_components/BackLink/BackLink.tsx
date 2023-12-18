import Link from "next/link";
import { type FC } from "react";

import Icon from "~/app/_components/Icon";

import { type BackLinkProps } from "./types";

const BackLink: FC<BackLinkProps> = ({ children, href }) => (
  <Link href={href} className="flex items-center gap-x-4">
    <Icon type="backArrow" size="default" color="gray-800" />
    <span className="text-sm font-medium leading-5 text-gray-800">
      {children}
    </span>
  </Link>
);

export default BackLink;
