import Link from "next/link";
import { getCopy } from "@/data/localization";
import { siteConfig } from "@/data/site";

export default function ZhSupportPage() {
  const copy = getCopy("zh");

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
          <h2>联系</h2>
          <p>
            联系邮箱：{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
          </p>
          <div className="hero-actions">
            <Link
              className="button button-primary"
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              打开 App Store
            </Link>
            <Link className="button button-secondary" href="/zh/download">
              前往下载页
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
