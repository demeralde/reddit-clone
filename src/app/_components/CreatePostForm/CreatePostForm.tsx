"use client";
import { type FC } from "react";
import { SignedIn } from "@clerk/nextjs";

import { Input } from "~/app/_components/ui/input";
import CreateForm from "~/app/_components/CreateForm";

const CreatePostForm: FC = () => {
  return (
    <SignedIn>
      <CreateForm className="mb-10" button={{ label: "Post" }}>
        <Input placeholder="Title of your post" />
        <Input placeholder="Share your thoughts with the world!" />
      </CreateForm>
    </SignedIn>
  );
};

export default CreatePostForm;
