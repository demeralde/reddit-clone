"use client";
import { type FC } from "react";
import { SignedIn } from "@clerk/nextjs";

import { Input } from "~/app/_components/ui/input";
import CreateForm from "~/app/_components/CreateForm";

const CreateCommentForm: FC = () => {
  return (
    <SignedIn>
      <CreateForm button={{ label: "Comment" }}>
        <Input placeholder="Comment your thoughts" />
      </CreateForm>
    </SignedIn>
  );
};

export default CreateCommentForm;
