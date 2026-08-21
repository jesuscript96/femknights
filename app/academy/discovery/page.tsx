import Link from "next/link";
import Article from "../../components/Article";
import { DISCOVERY } from "../../content";

export const metadata = { title: "1:1 Knight Discovery Session" };

export default function DiscoveryPage() {
  return (
    <main>
      <Article blocks={DISCOVERY} />
      <div className="container article-cta">
        <Link href="/donate?tier=discovery" className="btn btn-primary btn-lg">
          Book a Discovery Session — €250
        </Link>
      </div>
    </main>
  );
}
