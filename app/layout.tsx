import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "thonik — about",
  description:
    "Strategy, design, impact. We are visual strategists at heart — based in Amsterdam, working worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
