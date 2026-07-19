import { getCopy } from "@/data/localization";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  alternates: staticRouteAlternates("zh", "/about")
};

export default function ZhAboutPage() {
  const copy = getCopy("zh");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">关于</p>
        <h1>{copy.about.title}</h1>
        {copy.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
