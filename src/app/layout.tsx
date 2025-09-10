import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "大明帝国官网 - 承载千年文明，融汇现代科技",
  description: "大明帝国官方门户网站，体验中华文明与现代科技的完美融合",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
