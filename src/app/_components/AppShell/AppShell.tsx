import { type FC } from "react";

import Sidebar from "~/app/_components/Sidebar";
import { ScrollArea } from "~/app/_components/ui/scroll-area";

import { type AppShellProps } from "./types";

/**
 * Note the `mx-[143px]` is because this is the exact spacing from Figma. To keep it 1:1,
 * I've used this instead of `mx-36` (144px).
 */
const AppShell: FC<AppShellProps> = ({ children }) => (
  <>
    <Sidebar />
    <main className="w-full">
      <ScrollArea className="max-h-screen w-full overflow-auto">
        <div className="mx-[143px] mt-10 w-full max-w-[600px]">{children}</div>
      </ScrollArea>
    </main>
  </>
);

export default AppShell;
