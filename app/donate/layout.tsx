import StepBar from "./StepBar";

export const metadata = { title: "Donate" };

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="donate">
      <StepBar />
      <div className="donate-body container">{children}</div>
    </main>
  );
}
