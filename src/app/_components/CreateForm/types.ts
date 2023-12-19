import { type FormEvent, type ReactNode } from "react";

export interface CreateFormProps {
  children: ReactNode;
  className?: string;
  button: {
    label: string;
  };
  onSubmit: (event: FormEvent) => void;
  isLoading?: boolean;
  disabled?: boolean;
}
