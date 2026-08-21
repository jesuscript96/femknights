import Link from "next/link";
import Article from "../../components/Article";
import { TEACHINGS } from "../../content";

export const metadata = { title: "Knight Teachings" };

export default function TeachingsPage() {
  return (
    <main>
      <Article blocks={TEACHINGS} />
      <div className="container article-cta">
        <Link href="/donate?tier=founding" className="btn btn-primary btn-lg">
          Become a Founding Member — €50
        </Link>
      </div>
    </main>
  );
}
