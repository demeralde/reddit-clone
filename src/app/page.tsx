import { Fragment } from "react";

import Post from "~/app/_components/Post";
import { POST_MOCKS } from "~/mocks";
import { isLastItem } from "~/utils";

/**
 * Note the `mx-[143px]` is because this is the exact spacing from Figma. To keep it 1:1,
 * I've used this instead of `mx-36` (144px).
 */
export default async function Home() {
  return (
    <div className="mx-[143px] mt-10 w-full max-w-[600px]">
      {POST_MOCKS.map((post, index) => (
        <Fragment key={post.id}>
          <Post {...post} />
          {!isLastItem(POST_MOCKS, index) && (
            <div className="my-10 border-b border-gray-200" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
