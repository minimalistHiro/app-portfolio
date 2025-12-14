import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "金子広樹プロフィール",
  description:
    "金子広樹が運営するAntenna Books & Cafe ココシバとアプリ開発の紹介ページ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
