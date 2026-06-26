import Link from "next/link";
import { DownloadQr } from "@/components/download-qr";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Download",
  description: "Download IDPhoto Pro from the App Store."
};

export default function DownloadPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">Download</p>
        <h1>Download IDPhoto Pro</h1>
        <p>
          IDPhoto Pro is currently available on the App Store. This page is the
          canonical download destination for the app and can later be expanded
          if you add Android or web-based tools.
        </p>
        <div className="notice-card">
          <strong>Current platform:</strong> iPhone via the App Store. The app
          supports passport photo, visa photo, ID photo, and print layout
          export workflows.
        </div>

        <div className="download-grid">
          <article className="download-card">
            <p className="card-label">iOS</p>
            <h2>Scan to download on iPhone</h2>
            <p>
              Use your iPhone camera to scan the QR code and open the App Store
              listing directly.
            </p>
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
                打开 App Store
              </Link>
            </div>
          </article>

          <article className="download-card download-card-muted">
            <p className="card-label">Android</p>
            <h2>Coming later</h2>
            <p>
              Android download is not available yet. This block is reserved so
              you can add Google Play or APK download links later without
              redesigning the page.
            </p>
            <div className="android-placeholder">Android QR placeholder</div>
            <div className="hero-actions">
              <Link className="button button-secondary" href="/">
                Back to home
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
