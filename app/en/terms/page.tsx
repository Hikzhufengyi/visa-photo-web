import { getCopy } from "@/data/localization";
import { siteConfig } from "@/data/site";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  alternates: staticRouteAlternates("en", "/terms")
};

export default function EnTermsPage() {
  const copy = getCopy("en");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">Legal</p>
        <h1>{copy.terms.title}</h1>

        <section className="policy-section">
          <h2>1. Purpose of the App</h2>
          <p>
            IDPhoto Pro helps users prepare passport, visa, ID, residence card,
            green card, and other document photos. The app provides photo
            presets, local editing, on-device checks, export formats, target
            file-size tools, and print layout options.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Not a Government Service</h2>
          <p>
            IDPhoto Pro is not affiliated with any government agency, embassy,
            visa center, identity authority, immigration office, or official
            application portal. The app is a photo preparation tool only.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. Photo Requirements and Final Acceptance</h2>
          <p>
            The app may show guidance based on published photo requirements,
            but requirements can change and may differ by country, document
            type, application channel, and reviewing authority. You are
            responsible for checking the official source before submitting a
            final photo. IDPhoto Pro cannot guarantee acceptance by any
            authority.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. Purchases and Refunds</h2>
          <p>
            IDPhoto Pro may offer a lifetime unlock as a one-time,
            non-consumable in-app purchase through Apple. Purchases and refunds
            are handled by Apple according to App Store policies. The app does
            not receive your payment card information.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Acceptable Use</h2>
          <p>
            You agree not to use the app to create fraudulent, misleading, or
            unlawful documents or images. You are responsible for the accuracy,
            legality, and proper use of any photo you export.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Privacy</h2>
          <p>
            Core photo processing is designed to happen on your device. Please
            review the Privacy Policy for details about local processing,
            local records, exports, sharing, and purchase restoration.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, IDPhoto Pro is provided as
            a utility tool without any guarantee that a photo will be accepted
            by a third party. We are not responsible for application delays,
            rejection decisions, printing issues, portal upload limits, or
            losses caused by relying on outdated or incorrect requirements.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Contact</h2>
          <p>
            For support questions, contact{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
