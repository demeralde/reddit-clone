import { type FC, type ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface Props {
  children: ReactNode;
}

const AppShell: FC<Props> = ({ children }) => (
  <html lang="en">
    <body className={`font-sans ${inter.variable}`}>{children}</body>
  </html>
);

export default AppShell;
