import Link from "next/link";
import Reveal from "../components/Reveal";
import Article from "../components/Article";
import { MONEY, BUDGET, CAMPAIGN } from "../content";

export const metadata = { title: "Where the money goes" };

export default function MoneyPage() {
  return (
    <main>
      <Article blocks={MONEY} />

      <section className="container budget">
        {BUDGET.map((b, i) => (
          <Reveal className="budget-row" key={b.label} delay={i * 60}>
            <div className="budget-head">
              <span className="budget-label">{b.label}</span>
              <span className="budget-pct">{b.pct}%</span>
            </div>
            <div className="budget-track">
              <div className="budget-fill" style={{ width: `${b.pct}%` }} />
            </div>
            <p className="budget-note">{b.note}</p>
          </Reveal>
        ))}

        <Reveal className="budget-total">
          <span>Goal</span>
          <strong>€{CAMPAIGN.goalEuros.toLocaleString("nl-NL")}</strong>
        </Reveal>
      </section>

      <div className="container article-cta">
        <Link href="/donate" className="btn btn-primary btn-lg">
          Put a euro in the room
        </Link>
      </div>
    </main>
  );
}
