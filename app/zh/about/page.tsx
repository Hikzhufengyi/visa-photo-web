import { getCopy } from "@/data/localization";

export default function ZhAboutPage() {
  const copy = getCopy("zh");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">About</p>
        <h1>{copy.about.title}</h1>
        {copy.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
