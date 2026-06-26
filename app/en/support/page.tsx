import Link from "next/link";
import { getCopy } from "@/data/localization";
import { siteConfig } from "@/data/site";

export default function EnSupportPage() {
  const copy = getCopy("en");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">Technical Support</p>
        <h1>{copy.support.title}</h1>
        <p>{copy.support.lead}</p>

        <section className="notice-card">
          <strong>{copy.support.privacyReminder}</strong>
        </section>

        <section className="notice-card">
          <strong>{copy.support.purchaseReminder}</strong>
        </section>

        <section className="policy-section">
          <h2>Contact</h2>
          <p>
            Email:{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
          </p>
          <div className="hero-actions">
            <Link
              className="button button-primary"
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open App Store
            </Link>
            <Link className="button button-secondary" href="/en/download">
              Download page
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
