import { getCopy } from "@/data/localization";

export default function ZhBlogPage() {
  const copy = getCopy("zh");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">内容</p>
        <h1>{copy.blog.title}</h1>
        {copy.blog.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
