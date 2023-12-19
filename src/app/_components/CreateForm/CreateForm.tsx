import { type FC } from "react";

import { Card, CardContent } from "~/app/_components/ui/card";
import Button from "~/app/_components/Button";
import Divider from "~/app/_components/Divider";

import { type CreateFormProps } from "./types";
import AvatarContainer from "./AvatarContainer";

const CreateForm: FC<CreateFormProps> = ({
  children,
  className = "",
  button,
}) => (
  <Card className={className}>
    <CardContent className="flex gap-4">
      <AvatarContainer />
      <div className="flex w-full flex-col">
        <div className="flex flex-col gap-y-3">{children}</div>
        <Divider margin="small" />
        <div className="flex justify-end">
          <Button>{button.label}</Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default CreateForm;
