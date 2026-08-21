import { DonateProvider } from "./DonateContext";
import StepBar from "./StepBar";

export const metadata = { title: "Donate — The Female Knight" };

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DonateProvider>
      <main className="donate">
        <StepBar />
        <div className="donate-body container">{children}</div>
      </main>
    </DonateProvider>
  );
}
