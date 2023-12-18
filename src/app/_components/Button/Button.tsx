import { type FC } from "react";

import { Button as BaseButton } from "~/app/_components/ui/button";
import { cn } from "~/utils";

import { type ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ className, ...props }) => (
  <BaseButton
    className={cn(
      className,
      "h-9 rounded-button bg-primary-500 px-3 py-2 text-sm font-semibold leading-5 text-white active:bg-primary-600",
    )}
    {...props}
  />
);

export default Button;
