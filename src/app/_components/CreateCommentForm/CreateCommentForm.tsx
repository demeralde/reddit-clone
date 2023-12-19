"use client";
import {
  useState,
  type FC,
  type FormEvent,
  useCallback,
  type ChangeEvent,
} from "react";
import { SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ZodError } from "zod";

import { Textarea } from "~/app/_components/ui/textarea";
import CreateForm from "~/app/_components/CreateForm";
import Error from "~/app/_components/Error";
import { api } from "~/trpc/react";
import { useToast } from "~/app/_components/ui/use-toast";
import { createCommentValidation } from "~/config/validation";
import { getValidationErrors } from "~/utils";

import { type CreateCommentFormProps, type Errors } from "./types";

const CreateCommentForm: FC<CreateCommentFormProps> = ({
  postId,
  replyToId,
}) => {
  const { toast } = useToast();
  const router = useRouter();
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const disabled = content === "";

  const { mutate: create, isLoading } = api.comment.create.useMutation({
    onSuccess: () => {
      setContent("");
      router.refresh();
    },
    onError: (error) => {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Oops, something went wrong",
        description:
          "An error occurred whilst creating your comment. Please try again.",
      });
    },
  });

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      try {
        createCommentValidation.parse({ content, postId, replyToId });
        create({ content, postId, replyToId });
      } catch (error) {
        console.log(error);
        if (error instanceof ZodError) {
          setErrors(getValidationErrors(error));
        }
      }
    },
    [create, content, postId, replyToId],
  );

  const contentOnChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setErrors({});
    setContent(e.target.value);
  }, []);

  return (
    <SignedIn>
      <CreateForm
        button={{ label: "Comment" }}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        disabled={disabled}
      >
        <div>
          <Textarea
            placeholder="Comment your thoughts"
            value={content}
            onChange={contentOnChange}
          />
          {errors.content && <Error>{errors.content}</Error>}
        </div>
      </CreateForm>
    </SignedIn>
  );
};

export default CreateCommentForm;
