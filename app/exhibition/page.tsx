import Link from "next/link";
import Article from "../components/Article";
import { EXHIBITION } from "../content";

export const metadata = { title: "The Exhibition — Female Knight" };

export default function ExhibitionPage() {
  return (
    <main>
      <Article blocks={EXHIBITION} />
      <div className="container article-cta">
        <Link href="/donate" className="btn btn-primary btn-lg">
          Fund the room
        </Link>
        <Link href="/where-the-money-goes" className="btn btn-ghost btn-lg">
          Where the money goes
        </Link>
      </div>
    </main>
  );
}
