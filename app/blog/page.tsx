import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      slug: "commencement",
      title: "commencement",
      date: "2025-01-30",
    },
  ];

  return (
    <main className="wrap">
      <h1>blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

