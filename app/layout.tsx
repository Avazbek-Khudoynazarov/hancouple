import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "NetWork Korea",
  description: "전기안전 및 에너지 관리 솔루션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
