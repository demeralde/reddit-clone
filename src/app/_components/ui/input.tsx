import * as React from "react";

import { cn } from "~/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "bg-white file:bg-transparent flex h-6 w-full rounded-md text-sm leading-6 outline-none file:border-0 file:text-sm file:font-medium placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
