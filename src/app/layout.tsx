import { ClerkProvider } from "@clerk/nextjs";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";

import { Toaster } from "~/app/_components/ui/toaster";
import { TRPCReactProvider } from "~/trpc/react";
import "~/styles/globals.css";
import { getRoute } from "~/utils";

export const metadata = {
  title: "Reddit Clone",
  description: "A Reddit clone",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface Props {
  children: ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const postsRoute = getRoute("posts");

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialised flex h-screen`}>
        <ClerkProvider
          afterSignInUrl={postsRoute}
          afterSignUpUrl={postsRoute}
          localization={{
            signUp: {
              start: {
                title: "Join the best community ever",
                subtitle: "Create an account today",
                actionText: "Already have an account?",
              },
            },
          }}
        >
          <TRPCReactProvider cookies={cookies().toString()}>
            {children}
            <Toaster />
          </TRPCReactProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
