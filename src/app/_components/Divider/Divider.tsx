import { type FC } from "react";

import { type DividerProps } from "./types";
import { cn } from "~/utils";

const Divider: FC<DividerProps> = ({ margin }) => (
  <div
    className={cn(
      "border-t border-gray-200",
      margin === "small" && "my-3",
      margin === "medium" && "my-6",
      margin === "large" && "my-10",
    )}
  />
);

export default Divider;
