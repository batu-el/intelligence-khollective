import Link from "next/link";

export default function CommencementPost() {
  return (
    <main className="wrap">
      <Link href="/blog" className="back-link">← back to blog</Link>
      <article>
        <h1>commencement</h1>
        <p>This is the beginning.</p>
      </article>
    </main>
  );
}

