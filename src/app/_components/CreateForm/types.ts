import { type ReactNode } from "react";

export interface CreateFormProps {
  children: ReactNode;
  className?: string;
  button: {
    label: string;
  };
}
