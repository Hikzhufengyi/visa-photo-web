import { getCopy } from "@/data/localization";

export default function DeBlogPage() {
  const copy = getCopy("de");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">Ratgeber</p>
        <h1>{copy.blog.title}</h1>
        {copy.blog.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
