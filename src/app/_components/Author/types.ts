import { type Author } from "~/typings";

export interface AuthorProps extends Author {
  createdAt: Date;
  label?: string;
}
