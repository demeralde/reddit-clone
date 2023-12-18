"use client";
import { SignedIn } from "@clerk/nextjs";
import { useState, type FC, type FormEvent } from "react";

import CreateForm from "~/app/_components/CreateForm";
import { Input } from "~/app/_components/ui/input";
import { api } from "~/trpc/react";

const CreatePostForm: FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { mutate: create } = api.post.create.useMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    create({ title, content });
  };

  return (
    <SignedIn>
      <CreateForm
        onSubmit={handleSubmit}
        className="mb-10"
        button={{ label: "Post" }}
      >
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title of your post"
        />

        <Input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts with the world!"
        />
      </CreateForm>
    </SignedIn>
  );
};

export default CreatePostForm;
