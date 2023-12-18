import { type LinkProps } from "next/link";

export interface BackLinkProps {
  children: string;
  href: LinkProps["href"];
}
