import Link from "next/link";
import { DownloadQr } from "@/components/download-qr";
import { TrackedLink } from "@/components/tracked-link";
import { getCopy, type Locale } from "@/data/localization";
import { siteConfig } from "@/data/site";

const downloadLabels = {
  en: {
    openStore: "Open App Store",
    androidPlaceholder: "Android is not available yet",
    qrAlt: "QR code for IDPhoto Pro App Store download",
    purchaseTitle: "Free to download. One-time unlock.",
    purchaseDetail: "U.S. App Store unlock: US$4.99. No subscription and no recurring charge.",
    purchaseNote: "Prices vary by storefront. Check your local App Store before you purchase."
  },
  zh: {
    openStore: "去 App Store 下载",
    androidPlaceholder: "Android 暂未上线",
    qrAlt: "IDPhoto Pro App Store 下载二维码",
    purchaseTitle: "免费下载，一次性解锁。",
    purchaseDetail: "美国区 App Store 解锁价格为 US$4.99；非订阅，无持续扣费。",
    purchaseNote: "各地区商店价格不同，购买前请以本地 App Store 显示为准。"
  },
  ar: {
    openStore: "فتح App Store",
    androidPlaceholder: "Android غير متاح حالياً",
    qrAlt: "رمز QR لتنزيل IDPhoto Pro من App Store",
    purchaseTitle: "التنزيل مجاني والفتح لمرة واحدة.",
    purchaseDetail: "سعر الفتح في متجر App Store الأمريكي هو 4.99 دولار أمريكي، دون اشتراك أو رسوم متكررة.",
    purchaseNote: "تختلف الأسعار حسب واجهة المتجر. راجع متجر App Store المحلي قبل الشراء."
  },
  de: {
    openStore: "App Store öffnen",
    androidPlaceholder: "Android ist noch nicht verfügbar",
    qrAlt: "QR-Code zum App-Store-Download von IDPhoto Pro",
    purchaseTitle: "Kostenlos laden, einmalig freischalten.",
    purchaseDetail: "Freischaltung im US App Store: 4,99 USD. Kein Abo und keine wiederkehrende Gebühr.",
    purchaseNote: "Preise unterscheiden sich je nach Storefront. Prüfe vor dem Kauf deinen lokalen App Store."
  }
} satisfies Record<Locale, {
  openStore: string;
  androidPlaceholder: string;
  qrAlt: string;
  purchaseTitle: string;
  purchaseDetail: string;
  purchaseNote: string;
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

        <div className="notice-card purchase-notice">
          <strong>{labels.purchaseTitle}</strong>
          <p>{labels.purchaseDetail}</p>
          <small>{labels.purchaseNote}</small>
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
