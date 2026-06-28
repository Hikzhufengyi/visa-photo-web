import { getCopy } from "@/data/localization";

export default function DeAboutPage() {
  const copy = getCopy("de");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">Über uns</p>
        <h1>{copy.about.title}</h1>
        {copy.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
