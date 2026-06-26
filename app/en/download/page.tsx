import Link from "next/link";
import { DownloadQr } from "@/components/download-qr";
import { getCopy } from "@/data/localization";
import { siteConfig } from "@/data/site";

export default function EnDownloadPage() {
  const copy = getCopy("en");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">{copy.download.eyebrow}</p>
        <h1>{copy.download.title}</h1>
        <p>{copy.download.description}</p>
        <div className="notice-card">
          <strong>{copy.download.platform}</strong>
        </div>

        <div className="download-grid">
          <article className="download-card">
            <p className="card-label">iOS</p>
            <h2>{copy.download.iosTitle}</h2>
            <p>{copy.download.iosDescription}</p>
            <div className="qr-shell">
              <DownloadQr
                url={siteConfig.appStoreUrl}
                alt="QR code for IDPhoto Pro App Store download"
              />
            </div>
            <div className="hero-actions">
              <Link
                className="button button-primary"
                href={siteConfig.appStoreUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open App Store
              </Link>
            </div>
          </article>

          <article className="download-card download-card-muted">
            <p className="card-label">Android</p>
            <h2>{copy.download.androidTitle}</h2>
            <p>{copy.download.androidDescription}</p>
            <div className="android-placeholder">Android QR placeholder</div>
            <div className="hero-actions">
              <Link className="button button-secondary" href="/en">
                {copy.download.backHome}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
