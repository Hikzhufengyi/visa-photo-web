import Link from "next/link";
import { DownloadQr } from "@/components/download-qr";
import { TrackedLink } from "@/components/tracked-link";
import { getCopy, type Locale } from "@/data/localization";
import { siteConfig } from "@/data/site";

const downloadLabels = {
  en: {
    openStore: "Open App Store",
    androidPlaceholder: "Android is not available yet",
    qrAlt: "QR code for IDPhoto Pro App Store download"
  },
  zh: {
    openStore: "去 App Store 下载",
    androidPlaceholder: "Android 暂未上线",
    qrAlt: "IDPhoto Pro App Store 下载二维码"
  },
  ar: {
    openStore: "فتح App Store",
    androidPlaceholder: "Android غير متاح حالياً",
    qrAlt: "رمز QR لتنزيل IDPhoto Pro من App Store"
  },
  de: {
    openStore: "App Store öffnen",
    androidPlaceholder: "Android ist noch nicht verfügbar",
    qrAlt: "QR-Code zum App-Store-Download von IDPhoto Pro"
  }
} satisfies Record<Locale, {
  openStore: string;
  androidPlaceholder: string;
  qrAlt: string;
}>;

export function DownloadPage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const labels = downloadLabels[locale];

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
              <DownloadQr url={siteConfig.appStoreUrl} alt={labels.qrAlt} />
            </div>
            <div className="hero-actions">
              <TrackedLink
                className="button button-primary"
                href={siteConfig.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                eventName="app_store_click"
                eventParams={{ source: "download_page", locale }}
              >
                {labels.openStore}
              </TrackedLink>
            </div>
          </article>

          <article className="download-card download-card-muted">
            <p className="card-label">Android</p>
            <h2>{copy.download.androidTitle}</h2>
            <p>{copy.download.androidDescription}</p>
            <div className="android-placeholder">{labels.androidPlaceholder}</div>
            <div className="hero-actions">
              <Link className="button button-secondary" href={`/${locale}`}>
                {copy.download.backHome}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
