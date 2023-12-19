import { type FC } from "react";

import { Card, CardContent } from "~/app/_components/ui/card";
import Button from "~/app/_components/Button";
import Divider from "~/app/_components/Divider";
import { cn } from "~/utils";

import { type CreateFormProps } from "./types";
import AvatarContainer from "./AvatarContainer";

const CreateForm: FC<CreateFormProps> = ({
  children,
  className = "",
  button,
  onSubmit,
  isLoading = false,
  disabled = false,
}) => (
  <Card className={className}>
    <CardContent className="flex gap-4">
      <AvatarContainer />
      <form className="flex w-full flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col gap-y-3">{children}</div>
        <Divider margin="small" />
        <div className="flex justify-end">
          <Button
            type="submit"
            className={cn(
              isLoading && "cursor-wait",
              disabled && "cursor-not-allowed",
            )}
            disabled={isLoading || disabled}
          >
            {button.label}
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>
);

export default CreateForm;
