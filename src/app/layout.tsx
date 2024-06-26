import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "aos/dist/aos.css";

import "./globals.css";

//font name  Satoshi, sans - serif;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <div className="content overflow-x-hidden min-h-[100vh] relative   ">
          {children}
        </div>
      </body>
    </html>
  );
}
