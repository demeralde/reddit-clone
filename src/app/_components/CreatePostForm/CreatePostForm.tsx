"use client";
import {
  useState,
  type FC,
  type FormEvent,
  useCallback,
  type ChangeEvent,
} from "react";
import { SignedIn } from "@clerk/nextjs";
import { ZodError } from "zod";

import { Input } from "~/app/_components/ui/input";
import { Textarea } from "~/app/_components/ui/textarea";
import CreateForm from "~/app/_components/CreateForm";
import Error from "~/app/_components/Error";
import { api } from "~/trpc/react";
import { useToast } from "~/app/_components/ui/use-toast";
import { createPostValidation } from "~/config/validation";
import { getValidationErrors } from "~/utils";

import { type Errors } from "./types";

const CreatePostForm: FC = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const disabled = title === "" || description === "";

  const { mutate: create, isLoading } = api.post.create.useMutation({
    onSuccess: () => {
      setTitle("");
      setDescription("");
    },
    onError: (error) => {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Oops, something went wrong",
        description:
          "An error occurred whilst creating your vote. Please try again.",
      });
    },
  });

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      try {
        createPostValidation.parse({ title, description });
        create({ title, description });
      } catch (error) {
        if (error instanceof ZodError) {
          setErrors(getValidationErrors(error));
        }
      }
    },
    [create, title, description],
  );

  const onChange = useCallback(() => setErrors({}), []);

  const titleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange();
      setTitle(e.target.value);
    },
    [onChange],
  );

  const descriptionOnChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange();
      setDescription(e.target.value);
    },
    [onChange],
  );

  return (
    <SignedIn>
      <CreateForm
        className="mb-10"
        button={{ label: "Post" }}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        disabled={disabled}
      >
        <div>
          <Input
            placeholder="Title of your post"
            value={title}
            onChange={titleOnChange}
          />
          {errors.title && <Error>{errors.title}</Error>}
        </div>
        <div>
          <Textarea
            placeholder="Share your thoughts with the world!"
            value={description}
            onChange={descriptionOnChange}
          />
          {errors.description && <Error>{errors.description}</Error>}
        </div>
      </CreateForm>
    </SignedIn>
  );
};

export default CreatePostForm;
