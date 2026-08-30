import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import DianaMenu from "./components/DianaMenu";
import CrossMenu from "./components/CrossMenu";
import { DonateProvider } from "./donate/DonateContext";

export const metadata: Metadata = {
  title: {
    default: "Studio Niki — The Dressing Room of a Female Knight",
    template: "%s — Studio Niki",
  },
  description:
    "This year, I become a knight. Not a costume. A calling. Help build the first solo exhibition of my life at KOIK Contemporary, Mexico City. Opening 5 December 2026.",
  openGraph: {
    title: "The Dressing Room of a Female Knight",
    description:
      "Eight makers. One world. I'm raising €25.000 to build the room. Opening at KOIK Contemporary, Mexico City, 5 December 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DonateProvider>
          <SiteHeader />
          <CrossMenu />
          {children}
          <SiteFooter />
          <DianaMenu />
        </DonateProvider>
      </body>
    </html>
  );
}
