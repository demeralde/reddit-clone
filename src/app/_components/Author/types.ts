import { type ReactNode } from "react";

import { type Author } from "~/typings";

export interface AuthorProps extends Author {
  createdAt: Date;
  label?: string;
}

export interface BaseAuthorProps {
  children: ReactNode;
}
