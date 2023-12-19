import { SignUp } from "@clerk/nextjs";

import { ROUTES } from "~/config/routes";

const LoginPage = () => (
  <SignUp afterSignUpUrl={ROUTES.posts} afterSignInUrl={ROUTES.posts} />
);

export default LoginPage;
