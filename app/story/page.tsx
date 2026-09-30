import Link from "next/link";
import Article from "../components/Article";
import { STORY } from "../content";

export const metadata = { title: "My Story — The Female Knight" };

export default function StoryPage() {
  return (
    <main>
      <Article blocks={STORY} editorial />
      <div className="container editorial">
        <div className="article-cta">
        <Link href="/donate" className="btn btn-primary btn-lg">
          Back the knight
        </Link>
        <Link href="/exhibition" className="btn btn-ghost btn-lg">
          See the exhibition
        </Link>
        </div>
      </div>
    </main>
  );
}
