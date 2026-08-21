import Link from "next/link";
import Article from "../components/Article";
import { ABOUT } from "../content";

export const metadata = { title: "About — The Knight Academy" };

export default function AboutPage() {
  return (
    <main>
      <Article blocks={ABOUT} />
      <div className="container article-cta">
        <Link href="/rewards" className="btn btn-dark btn-lg">
          Join the classroom
        </Link>
      </div>
    </main>
  );
}
