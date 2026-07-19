import { getCopy } from "@/data/localization";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  alternates: staticRouteAlternates("ar", "/about")
};

export default function ArAboutPage() {
  const copy = getCopy("ar");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">حول التطبيق</p>
        <h1>{copy.about.title}</h1>
        {copy.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
