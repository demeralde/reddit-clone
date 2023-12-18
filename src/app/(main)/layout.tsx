import { type FC, type ReactNode } from "react";

import AppShell from "~/app/_components/AppShell";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => <AppShell>{children}</AppShell>;

export default Layout;
