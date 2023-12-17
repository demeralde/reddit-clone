import { type FC } from "react";
import { Inter } from "next/font/google";

import Sidebar from "~/app/_components/Sidebar";

import { type AppShellProps } from "./types";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const AppShell: FC<AppShellProps> = ({ children }) => (
  <html lang="en">
    <body className={`font-sans ${inter.variable} antialised flex h-screen`}>
      <Sidebar />
      <main>{children}</main>
    </body>
  </html>
);

export default AppShell;
