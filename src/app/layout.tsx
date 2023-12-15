import { ClerkProvider } from "@clerk/nextjs";
import { cookies } from "next/headers";
import { type ReactNode } from "react";

import { TRPCReactProvider } from "~/trpc/react";
import AppShell from "~/app/_components/AppShell";
import "~/styles/globals.css";

export const metadata = {
  title: "Reddit Clone",
  description: "A Reddit clone",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <ClerkProvider>
      <AppShell>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </AppShell>
    </ClerkProvider>
  );
}
