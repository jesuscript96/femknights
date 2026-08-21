import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import DianaMenu from "./components/DianaMenu";

export const metadata: Metadata = {
  title: "The Dressing Room of a Female Knight — Crowdfunding",
  description:
    "This year, I become a knight. Help build the first solo exhibition of Niki's life at KOIK Contemporary, Mexico City. Donate and get a reward.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <DianaMenu />
      </body>
    </html>
  );
}
