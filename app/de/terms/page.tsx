import { getCopy } from "@/data/localization";
import { siteConfig } from "@/data/site";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  alternates: staticRouteAlternates("de", "/terms")
};

export default function DeTermsPage() {
  const copy = getCopy("de");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">Rechtliches</p>
        <h1>{copy.terms.title}</h1>

        <section className="policy-section">
          <h2>1. Zweck der App</h2>
          <p>
            IDPhoto Pro hilft Nutzern bei der Vorbereitung von Passfotos, Visa-Fotos,
            Ausweisfotos, Aufenthaltstiteln, Green-Card-Fotos und ähnlichen
            Dokumentfotos. Die App bietet Vorlagen, lokale Bearbeitung, Prüfungen
            auf dem Gerät, Exportformate, Komprimierung und Drucklayouts.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Kein Behördendienst</h2>
          <p>
            IDPhoto Pro ist nicht mit Behörden, Botschaften, Visazentren,
            Ausländerbehörden oder offiziellen Antragsportalen verbunden. Die App
            ist ausschließlich ein Werkzeug zur Fotovorbereitung.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. Anforderungen und Annahme</h2>
          <p>
            Die App kann Hinweise auf Basis veröffentlichter Anforderungen anzeigen.
            Anforderungen können sich ändern und je nach Land, Dokumenttyp,
            Antragsweg und prüfender Stelle abweichen. Prüfe vor der Einreichung
            immer die offizielle Quelle. IDPhoto Pro kann keine Annahme garantieren.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. Käufe und Erstattungen</h2>
          <p>
            IDPhoto Pro kann eine einmalige lebenslange Freischaltung über Apple
            anbieten. Käufe und Erstattungen werden nach den App-Store-Richtlinien
            von Apple abgewickelt. Die App erhält keine Zahlungs- oder Kartendaten.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Kontakt</h2>
          <p>
            Bei Supportfragen kontaktiere{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
