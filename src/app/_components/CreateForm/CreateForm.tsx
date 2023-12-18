import { type FC } from "react";

import Avatar from "~/app/_components/Avatar";
import Button from "~/app/_components/Button";
import Divider from "~/app/_components/Divider";
import { Card, CardContent } from "~/app/_components/ui/card";

import { type CreateFormProps } from "./types";

const CreateForm: FC<CreateFormProps> = ({
  children,
  className = "",
  button,
  onSubmit,
}) => (
  <Card className={className}>
    <CardContent className="flex gap-4">
      <Avatar
        name="Jane Doe"
        src="https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGVyc29ufGVufDB8fHx8MTcwMjc4OTk1NXww&force=true&w=640"
      />
      <form onSubmit={onSubmit} className="flex w-full flex-col">
        <div className="flex flex-col gap-y-3">{children}</div>
        <Divider margin="small" />
        <div className="flex justify-end">
          <Button>{button.label}</Button>
        </div>
      </form>
    </CardContent>
  </Card>
);

export default CreateForm;
