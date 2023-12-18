import { SignUp } from "@clerk/nextjs";

import { getRoute } from "~/utils";

const postsRoute = getRoute("posts");

const LoginPage = () => (
  <SignUp afterSignUpUrl={postsRoute} afterSignInUrl={postsRoute} />
);

export default LoginPage;
