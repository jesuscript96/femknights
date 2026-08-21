import Link from "next/link";
import Article from "../../components/Article";
import { TABLE } from "../../content";

export const metadata = { title: "The Knight Table" };

export default function TablePage() {
  return (
    <main>
      <Article blocks={TABLE} />
      <div className="container article-cta">
        <Link href="/donate?tier=table" className="btn btn-primary btn-lg">
          Reserve a seat — €750
        </Link>
      </div>
    </main>
  );
}
