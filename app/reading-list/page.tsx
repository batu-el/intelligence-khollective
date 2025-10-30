export default function ReadingListPage() {
  const papers = [
    {
      title: "Reading List Placeholder",
      authors: "Author Name",
      year: "2025",
      description: "This is a placeholder for reading list content.",
    },
  ];

  return (
    <main className="wrap">
      <h1>reading list</h1>
      <ul>
        {papers.map((paper, index) => (
          <li key={index}>
            <h2>{paper.title}</h2>
            <p>{paper.authors} ({paper.year})</p>
            <p>{paper.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

