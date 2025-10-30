export default function ResearchPage() {
  const papers = [
    {
      title: "Research Paper Placeholder",
      authors: "Author Name",
      year: "2025",
      abstract: "This is a placeholder for research content.",
    },
  ];

  return (
    <main className="wrap">
      <h1>research</h1>
      <ul>
        {papers.map((paper, index) => (
          <li key={index}>
            <h2>{paper.title}</h2>
            <p>{paper.authors} ({paper.year})</p>
            <p>{paper.abstract}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

