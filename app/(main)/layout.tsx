import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.scss";
import MiniKitProvider from "@components/minikit-provider";
import dynamic from "next/dynamic";
import NextAuthProvider from "@components/next-auth-provider";
import BottomNavigation from "@components/BottomNavigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ErudaProvider = dynamic(
    () => import("../components/Eruda").then((c) => c.ErudaProvider),
    {
      ssr: false,
    }
  );
  return (
    <html lang="en">
      <NextAuthProvider>
        <ErudaProvider>
          <MiniKitProvider>
            <body>
              {children}
              <BottomNavigation />
            </body>
          </MiniKitProvider>
        </ErudaProvider>
      </NextAuthProvider>
    </html>
  );
}