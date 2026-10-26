import Link from "next/link";
import Article from "../components/Article";
import { EXHIBITION } from "../content";

export const metadata = { title: "The Exhibition — Female Knight" };

export default function ExhibitionPage() {
  return (
    <main>
      <Article blocks={EXHIBITION} editorial />
      <div className="container editorial">
        <div className="article-cta">
          <Link href="/donate" className="btn btn-primary btn-lg">
            Help build the room
          </Link>
          <Link href="/academy" className="btn btn-ghost btn-lg">
            Join the Knight Academy
          </Link>
        </div>
      </div>
    </main>
  );
}
