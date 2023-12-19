import { type FC } from "react";

import { type ErrorProps } from "./types";

const Error: FC<ErrorProps> = ({ children }) => (
  <p className="mt-2 text-xs font-medium text-red-500">{children}</p>
);

export default Error;
