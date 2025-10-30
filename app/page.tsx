import Link from "next/link";

export default function Page() {
  return (
    <main className="wrap">
      <h1>intelligence khollective</h1>
      <ul>
        <li><Link href="/blog">blog</Link></li>
        <li><Link href="/research">research</Link></li>
        <li><Link href="/reading-list">reading list</Link></li>
      </ul>
    </main>
  );
}


