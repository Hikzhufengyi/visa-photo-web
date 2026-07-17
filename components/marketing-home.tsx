import Link from "next/link";
import { TrackedLink } from "@/components/tracked-link";
import type { Locale } from "@/data/localization";
import { siteConfig } from "@/data/site";

const seoLinks = [
  { slug: "us-passport-photo-size", icon: "🇺🇸", label: "US Passport Photo" },
  { slug: "us-visa-photo-size", icon: "🇺🇸", label: "US Visa Photo" },
  { slug: "schengen-visa-photo-size", icon: "🇪🇺", label: "Schengen Visa Photo" },
  { slug: "canada-passport-photo-size", icon: "🇨🇦", label: "Canada Passport Photo" },
  { slug: "india-passport-photo-size", icon: "🇮🇳", label: "India Passport Photo" },
  { slug: "saudi-iqama-photo-size", icon: "🇸🇦", label: "Saudi Iqama Photo" },
  { slug: "uae-emirates-id-photo-size", icon: "🇦🇪", label: "UAE Emirates ID Photo" },
  { slug: "oman-residence-card-photo-size", icon: "🇴🇲", label: "Oman Residence Card Photo" },
  { slug: "600x600-passport-photo", icon: "▣", label: "600 x 600 Passport Photo" }
];

const homeLabels = {
  en: {
    heroTitle: "Passport, visa, and ID photos, made in minutes",
    heroText: "Choose a size, check face position and background, then export a digital file or 4x6 print layout.",
    disclaimer: "Creates photo files only. Does not generate IDs, passports, visas, or official documents.",
    cta: "Download iPhone App",
    trust: "Local processing. Photos stay on your device.",
    trustPills: ["One-time purchase", "No subscription", "Photo checks", "No photo upload"],
    standardsKicker: "Built for accuracy. Designed for privacy.",
    standardsTitle: "100+ photo size presets",
    standardsText: "Choose the country, document type, or print size before preparing your photo.",
    searchPlaceholder: "Search 100+ presets",
    searchMeta: "passport · visa · ID · print",
    standardLinks: [
      { icon: "🇺🇸", label: "US Passport", slug: "us-passport-photo-size" },
      { icon: "🇺🇸", label: "US Visa", slug: "us-visa-photo-size" },
      { icon: "🇬🇧", label: "UK Passport", slug: "uk-passport-photo-size" },
      { icon: "🇯🇵", label: "Japan Passport", slug: "japan-passport-photo-size" },
      { icon: "🇨🇦", label: "Canada Passport", slug: "canada-passport-photo-size" },
      { icon: "🇪🇺", label: "Schengen Visa", slug: "schengen-visa-photo-size" },
      { icon: "🇮🇳", label: "India Passport", slug: "india-passport-photo-size" }
    ],
    allStandardsLabel: "All photo sizes",
    featureColumns: [
      { title: "Size Presets", text: "Covers 100+ passport, visa, and ID photo presets, with checks for common photo requirements." },
      { title: "On-device Processing", text: "All image processing is completed on your device. No cloud upload needed." },
      { title: "Digital & Print Export", text: "Supports JPG, PNG, HEIC, PDF, plus 4x6, A4, and Letter print layouts." }
    ],
    abstractCards: [
      { title: "Photo checks", tag: "Check size, face position, eye line, background, and export readiness before saving.", kind: "check" },
      { title: "On-device processing", tag: "One-time purchase. No subscription. Photos stay on your iPhone.", kind: "privacy" },
      { title: "Digital and print export", tag: "Save JPG, PNG, HEIC, PDF, or a 4x6, A4, and Letter print layout.", kind: "print" }
    ],
    complianceLink: "View photo checks",
    finalTitle: "Prepare a photo that matches the required size in minutes.",
    finalTrust: "One-time purchase. No subscription. Photos stay on your device.",
    moreGuides: "Browse all photo size guides"
  },
  zh: {
    heroTitle: "护照照、签证照和证件照，即刻制作",
    heroText: "选择规格，检查脸部位置和背景，然后导出电子版或 4x6 打印排版。",
    disclaimer: "只制作照片文件，不生成任何证件或官方文件。",
    cta: "下载 iPhone App",
    trust: "本地处理。照片不上云。",
    trustPills: ["一次性购买", "非订阅", "照片检测", "照片不上传"],
    standardsKicker: "为准确而构建。为隐私而设计。",
    standardsTitle: "100+ 证件照规格",
    standardsText: "制作前选择国家、证件类型或打印尺寸。",
    searchPlaceholder: "搜索 100+ 规格",
    searchMeta: "护照 · 签证 · 身份证 · 打印",
    standardLinks: [
      { icon: "🇺🇸", label: "美国护照", slug: "us-passport-photo-size" },
      { icon: "🇺🇸", label: "美国签证", slug: "us-visa-photo-size" },
      { icon: "🇬🇧", label: "英国护照", slug: "uk-passport-photo-size" },
      { icon: "🇯🇵", label: "日本护照", slug: "japan-passport-photo-size" },
      { icon: "🇨🇦", label: "加拿大护照", slug: "canada-passport-photo-size" },
      { icon: "🇪🇺", label: "申根签证", slug: "schengen-visa-photo-size" },
      { icon: "🇮🇳", label: "印度护照", slug: "india-passport-photo-size" }
    ],
    allStandardsLabel: "全部证件照规格",
    featureColumns: [
      { title: "规格覆盖", text: "覆盖 100+ 护照、签证和身份照规格，并提供常见照片要求检查。" },
      { title: "本地处理", text: "所有图像处理均在设备端完成。无需云端上传。" },
      { title: "电子版与打印版导出", text: "支持 JPG、PNG、HEIC、PDF，以及 4x6、A4、Letter 打印排版。" }
    ],
    abstractCards: [
      { title: "照片检测", tag: "导出前检查尺寸、脸部位置、眼线、背景和可导出状态。", kind: "check" },
      { title: "本地处理", tag: "一次性购买，非订阅。照片留在 iPhone 上处理。", kind: "privacy" },
      { title: "电子版与打印版导出", tag: "保存 JPG、PNG、HEIC、PDF，或 4x6、A4、Letter 打印排版。", kind: "print" }
    ],
    complianceLink: "查看检查项",
    finalTitle: "数秒制作符合规格的证件照。",
    finalTrust: "一次性购买，非订阅。照片本地处理，不上传服务器。",
    moreGuides: "查看更多证件照规格"
  },
  ar: {
    heroTitle: "حضّر صور الجواز والتأشيرة والهوية خلال دقائق",
    heroText: "اختر المقاس، افحص موضع الوجه والخلفية، ثم صدّر ملفاً رقمياً أو صفحة طباعة 4x6.",
    disclaimer: "ينشئ ملفات صور فقط. لا ينشئ هويات أو جوازات أو تأشيرات أو مستندات رسمية.",
    cta: "تنزيل التطبيق",
    trust: "معالجة محلية. تبقى الصور على جهازك.",
    trustPills: ["شراء لمرة واحدة", "بدون اشتراك", "فحص الصورة", "بدون رفع الصور"],
    standardsKicker: "مصمم للدقة والخصوصية.",
    standardsTitle: "أكثر من 100 معيار لصور المستندات",
    standardsText: "اختر الدولة أو نوع المستند أو مقاس الطباعة قبل إنشاء الصورة.",
    searchPlaceholder: "ابحث في 100+ معيار",
    searchMeta: "جواز · تأشيرة · هوية · طباعة",
    standardLinks: [
      { icon: "🇺🇸", label: "جواز أمريكا", slug: "us-passport-photo-size" },
      { icon: "🇺🇸", label: "تأشيرة أمريكا", slug: "us-visa-photo-size" },
      { icon: "🇬🇧", label: "جواز بريطانيا", slug: "uk-passport-photo-size" },
      { icon: "🇯🇵", label: "جواز اليابان", slug: "japan-passport-photo-size" },
      { icon: "🇨🇦", label: "جواز كندا", slug: "canada-passport-photo-size" },
      { icon: "🇪🇺", label: "تأشيرة شنغن", slug: "schengen-visa-photo-size" },
      { icon: "🇮🇳", label: "جواز الهند", slug: "india-passport-photo-size" }
    ],
    allStandardsLabel: "كل المقاسات",
    featureColumns: [
      { title: "مقاسات جاهزة", text: "يدعم أكثر من 100 مقاس لصور الجواز والتأشيرة والهوية ويفحص المتطلبات الشائعة." },
      { title: "معالجة على الجهاز", text: "تتم معالجة الصور على جهازك بدون رفع سحابي." },
      { title: "تصدير رقمي وللطباعة", text: "يدعم JPG وPNG وHEIC وPDF وتخطيطات 4x6 وA4 وLetter." }
    ],
    abstractCards: [
      { title: "فحص الصورة", tag: "افحص المقاس والوجه وخط العين والخلفية قبل الحفظ.", kind: "check" },
      { title: "معالجة على الجهاز", tag: "شراء لمرة واحدة. بدون اشتراك. تبقى الصور على iPhone.", kind: "privacy" },
      { title: "تصدير رقمي وللطباعة", tag: "احفظ JPG أو PNG أو HEIC أو PDF أو تخطيط 4x6 وA4 وLetter.", kind: "print" }
    ],
    complianceLink: "عرض كل الفحوصات",
    finalTitle: "حضّر صورة تطابق المقاس المطلوب خلال دقائق.",
    finalTrust: "شراء لمرة واحدة. بدون اشتراك. تبقى الصور على جهازك.",
    moreGuides: "تصفح كل أدلة المقاسات"
  },
  de: {
    heroTitle: "Pass-, Visa- und Ausweisfotos in Minuten erstellen",
    heroText: "Größe wählen, Gesicht und Hintergrund prüfen, dann digital oder als 4x6-Drucklayout exportieren.",
    disclaimer: "Erstellt nur Fotodateien. Erstellt keine Ausweise, Pässe, Visa oder offiziellen Dokumente.",
    cta: "App laden",
    trust: "Lokale Verarbeitung. Fotos bleiben auf deinem Gerät.",
    trustPills: ["Einmaliger Kauf", "Kein Abo", "Foto-Checks", "Kein Foto-Upload"],
    standardsKicker: "Für Genauigkeit gebaut. Für Datenschutz entwickelt.",
    standardsTitle: "100+ Dokumentfoto-Standards",
    standardsText: "Wähle Land, Dokumenttyp oder Druckgröße vor der Erstellung.",
    searchPlaceholder: "100+ Standards suchen",
    searchMeta: "Pass · Visum · Ausweis · Druck",
    standardLinks: [
      { icon: "🇺🇸", label: "US-Passfoto", slug: "us-passport-photo-size" },
      { icon: "🇺🇸", label: "US-Visum", slug: "us-visa-photo-size" },
      { icon: "🇬🇧", label: "UK-Passfoto", slug: "uk-passport-photo-size" },
      { icon: "🇯🇵", label: "Japan-Passfoto", slug: "japan-passport-photo-size" },
      { icon: "🇨🇦", label: "Kanada-Passfoto", slug: "canada-passport-photo-size" },
      { icon: "🇪🇺", label: "Schengen-Visum", slug: "schengen-visa-photo-size" },
      { icon: "🇮🇳", label: "Indien-Passfoto", slug: "india-passport-photo-size" }
    ],
    allStandardsLabel: "Alle Fotogrößen",
    featureColumns: [
      { title: "Größen-Vorlagen", text: "Deckt 100+ Pass-, Visa- und Ausweisfoto-Größen ab und prüft häufige Anforderungen." },
      { title: "Lokal verarbeitet", text: "Alle Bildprozesse laufen auf dem Gerät. Kein Cloud-Upload nötig." },
      { title: "Digital- und Druckexport", text: "JPG, PNG, HEIC, PDF sowie 4x6-, A4- und Letter-Drucklayouts." }
    ],
    abstractCards: [
      { title: "Foto-Checks", tag: "Prüfe Größe, Gesicht, Augenlinie, Hintergrund und Exportbereitschaft vor dem Speichern.", kind: "check" },
      { title: "Lokal verarbeitet", tag: "Einmaliger Kauf. Kein Abo. Fotos bleiben auf deinem iPhone.", kind: "privacy" },
      { title: "Digital- und Druckexport", tag: "Speichere JPG, PNG, HEIC, PDF oder 4x6-, A4- und Letter-Drucklayouts.", kind: "print" }
    ],
    complianceLink: "Alle Prüfungen ansehen",
    finalTitle: "Bereite ein Foto vor, das zur benötigten Größe passt.",
    finalTrust: "Einmaliger Kauf. Kein Abo. Fotos bleiben auf deinem Gerät.",
    moreGuides: "Alle Fotogrößen-Ratgeber ansehen"
  }
} satisfies Record<Locale, {
  heroTitle: string;
  heroText: string;
  disclaimer?: string;
  cta: string;
  trust: string;
  trustPills: string[];
  standardsKicker: string;
  standardsTitle: string;
  standardsText: string;
  searchPlaceholder: string;
  searchMeta: string;
  standardLinks: { icon: string; label: string; slug: string }[];
  allStandardsLabel: string;
  featureColumns: { title: string; text: string }[];
  abstractCards: { title: string; tag: string; kind: "check" | "privacy" | "print" }[];
  complianceLink: string;
  finalTitle: string;
  finalTrust: string;
  moreGuides: string;
}>;

export function MarketingHome({ locale }: { locale: Locale }) {
  const labels = homeLabels[locale];
  const heroBullets = locale === "zh"
    ? ["导出前完成 21 项照片检查", "覆盖护照、签证、移民和身份照常用规格", "照片本地处理，不上传服务器", "支持电子版和 4x6 打印排版"]
    : ["Run 21 photo checks before export", "Passport, visa, immigration, and ID photo presets", "Photos stay on your device", "Digital files and 4x6 print layouts"];
  const heroProofItems = locale === "zh"
    ? [
        { icon: "/icon-network.svg", value: "100+", label: "规格模板" },
        { icon: "/icon-ai.svg", value: "AI", label: "照片检测" },
        { icon: "/icon-shield.svg", value: "Private", label: "本地处理" },
        { icon: "/icon-print.svg", value: "电子版 + 打印版", label: "导出" }
      ]
    : [
        { icon: "/icon-network.svg", value: "100+", label: "Size Presets" },
        { icon: "/icon-ai.svg", value: "AI", label: "Compliance Check" },
        { icon: "/icon-shield.svg", value: "Private", label: "On-Device" },
        { icon: "/icon-print.svg", value: "Digital & Print", label: "Export" }
      ];
  const heroTrustItems = locale === "zh"
    ? [
        { icon: "/icon-one-time.svg", label: "一次购买" },
        { icon: "/icon-subscription.svg", label: "不订阅" },
        { icon: "/icon-cloud-offline.svg", label: "不上云" }
      ]
    : [
        { icon: "/icon-one-time.svg", label: "One-time purchase" },
        { icon: "/icon-subscription.svg", label: "No subscription" },
        { icon: "/icon-cloud-offline.svg", label: "No cloud upload" }
      ];
  const exportFormats = ["JPG", "HEIC", "PNG", "PDF"];
  const printSizes = ["4 x 6 in", "A4", "5 x 7 in", "4 x 4 in", "3 x 4 in", "Letter"];
  const privacyItems = locale === "zh"
    ? ["不上传照片", "无追踪", "可离线处理"]
    : ["No upload", "No tracking", "Works offline"];
  const specRows = locale === "zh"
    ? [
        { icon: "🇺🇸", title: "美国护照", meta: "51 x 51 mm · 600 x 600 px", slug: "us-passport-photo-size" },
        { icon: "🇸🇦", title: "沙特 Iqama", meta: "200 x 200 px", slug: "saudi-iqama-photo-size" },
        { icon: "🇨🇦", title: "加拿大护照", meta: "50 x 70 mm · 600 x 840 px", slug: "canada-passport-photo-size" }
      ]
    : [
        { icon: "🇺🇸", title: "U.S. Passport", meta: "51 x 51 mm · 600 x 600 px", slug: "us-passport-photo-size" },
        { icon: "🇸🇦", title: "Saudi Iqama", meta: "200 x 200 px", slug: "saudi-iqama-photo-size" },
        { icon: "🇨🇦", title: "Canada Passport", meta: "50 x 70 mm · 600 x 840 px", slug: "canada-passport-photo-size" }
      ];

  return (
    <main
      className={`page-shell framer-home locale-${locale}`}
      dir={locale === "ar" ? "ltr" : undefined}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${siteConfig.domain}/#organization`,
                name: siteConfig.name,
                url: siteConfig.domain
              },
              {
                "@type": "WebSite",
                "@id": `${siteConfig.domain}/#website`,
                name: siteConfig.name,
                url: siteConfig.domain,
                publisher: { "@id": `${siteConfig.domain}/#organization` },
                inLanguage: locale
              },
              {
                "@type": "SoftwareApplication",
                "@id": `${siteConfig.domain}/#app`,
                name: siteConfig.appStoreName,
                applicationCategory: "PhotographyApplication",
                operatingSystem: "iOS",
                url: siteConfig.appStoreUrl,
                description: siteConfig.description,
                publisher: { "@id": `${siteConfig.domain}/#organization` }
              }
            ]
          })
        }}
      />
      <section className="framer-hero framer-hero-showcase">
        <div className="framer-hero-copy framer-showcase-copy">
          <div className="framer-brand-lockup" aria-label="IDPhoto Pro">
            <img className="framer-app-icon" src="/app-icon-design.png" alt="" width="76" height="76" />
            <strong>IDPhoto Pro</strong>
          </div>
          <h1>
            {locale === "zh" ? (
              <>
                专业<span>证件照，</span>简单制作。
              </>
            ) : (
              <>
                Professional <span>ID Photos,</span> Made Simple.
              </>
            )}
          </h1>
          <p>{labels.heroText}</p>
          <ul className="framer-hero-bullets">
            {heroBullets.map((item, index) => (
              <li key={item}>
                <img src="/check-square.png" alt="" width="24" height="24" />
                {index === 0 ? (
                  locale === "zh" ? (
                    <>
                      导出前完成{" "}
                      <Link className="framer-inline-text-link" href={`/${locale}/compliance`}>
                        21 项照片检查
                      </Link>
                    </>
                  ) : (
                    <>
                      Run{" "}
                      <Link className="framer-inline-text-link" href={`/${locale}/compliance`}>
                        21 photo checks
                      </Link>{" "}
                      before export
                    </>
                  )
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
          <div className="framer-mobile-stage" aria-hidden="true">
            <div className="framer-phone">
              <div className="framer-phone-top">
                <span>9:41</span>
                <i />
              </div>
              <div className="framer-phone-title">
                <strong>{locale === "zh" ? "美国护照" : "U.S. Passport"}</strong>
                <span>51 x 51 mm · 600 x 600 px</span>
              </div>
              <div className="framer-phone-photo">
                <img
                  alt=""
                  src="/screenshots/hero-checks-home.jpg"
                  width="560"
                  height="1216"
                />
                <span>{locale === "zh" ? "眼高范围" : "Crop height range"}</span>
              </div>
              <div className="framer-ready-card">
                <span aria-hidden="true">✓</span>
                <div>
                  <strong>Ready to Export</strong>
                  <p>{locale === "zh" ? "关键检查已通过" : "All blocking checks passed"}</p>
                </div>
                <em>100%</em>
              </div>
              <div className="framer-phone-cta">Ready to Export</div>
            </div>
            <div className="framer-print-sheet">
              <img src="/screenshots/print-sheet-real.jpg" alt="" width="933" height="1400" />
            </div>
          </div>
          <div className="framer-proof-icons" aria-label={locale === "zh" ? "核心能力" : "Key capabilities"}>
            {heroProofItems.map((item) => (
              <div key={`${item.value}-${item.label}`}>
                <span>
                  <img src={item.icon} alt="" width="28" height="28" />
                </span>
                <strong>{item.value}</strong>
                <small>{item.label}</small>
              </div>
            ))}
          </div>
          <TrackedLink
            className="button button-primary framer-primary-cta framer-hero-download"
            href={siteConfig.appStoreUrl}
            target="_blank"
            rel="noreferrer"
            eventName="app_store_click"
            eventParams={{ source: "home_showcase_hero", locale }}
          >
            <span aria-hidden="true"></span>
            <span>{labels.cta}</span>
          </TrackedLink>
          <div className="framer-hero-trust-row" aria-label={locale === "zh" ? "购买和隐私" : "Purchase and privacy"}>
            {heroTrustItems.map((item) => (
              <span key={item.label}>
                <img src={item.icon} alt="" width="18" height="18" />
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="framer-hero-stage" aria-hidden="true">
          <div className="framer-phone">
            <div className="framer-phone-top">
              <span>9:41</span>
              <i />
            </div>
            <div className="framer-phone-title">
              <strong>{locale === "zh" ? "美国护照" : "U.S. Passport"}</strong>
              <span>51 x 51 mm · 600 x 600 px</span>
            </div>
            <div className="framer-phone-photo">
              <img
                alt=""
                src="/screenshots/hero-checks-home.jpg"
                width="560"
                height="1216"
              />
              <span>{locale === "zh" ? "眼高范围" : "Crop height range"}</span>
            </div>
            <div className="framer-ready-card">
              <span aria-hidden="true">✓</span>
              <div>
                <strong>Ready to Export</strong>
                <p>{locale === "zh" ? "关键检查已通过" : "All blocking checks passed"}</p>
              </div>
              <em>100%</em>
            </div>
            <div className="framer-phone-cta">Ready to Export</div>
          </div>
          <div className="framer-print-sheet">
            <img src="/screenshots/print-sheet-real.jpg" alt="" width="933" height="1400" />
          </div>
          <p className="framer-print-note">{locale === "zh" ? "可在家打印或到照相馆冲印" : "Print at home or at any photo lab"}</p>
        </div>
      </section>

      <section className="framer-format-section" id="guides">
        <div className="framer-format-copy">
          <h2>{labels.standardsTitle}</h2>
          <p>{labels.standardsText}</p>
          <Link className="framer-format-search" href={`/${locale}/blog`}>
            <span>{labels.searchPlaceholder}</span>
            <em>{labels.searchMeta}</em>
          </Link>
          <div className="framer-format-list">
            {specRows.map((row) => (
              <Link href={`/${locale}/${row.slug}`} key={row.title}>
                <span>{row.icon}</span>
                <div>
                  <strong>{row.title}</strong>
                  <small>{row.meta}</small>
                </div>
                <em>›</em>
              </Link>
            ))}
          </div>
        </div>

        <div className="framer-world-panel" aria-hidden="true">
          <div className="framer-world-map">
            <img src="/world-map-dots.png" alt="" width="1717" height="916" />
          </div>
          <div className="framer-map-badge badge-one">
            <strong>100+</strong>
            <span>{locale === "zh" ? "国家和地区" : "Countries"}</span>
          </div>
          <div className="framer-map-badge badge-two">
            <strong>100+</strong>
            <span>{locale === "zh" ? "证件类型" : "Document types"}</span>
          </div>
          <div className="framer-map-badge badge-three">
            <strong>{locale === "zh" ? "精准" : "Exact"}</strong>
            <span>{locale === "zh" ? "尺寸规格" : "Photo sizes"}</span>
          </div>
        </div>
      </section>

      <section className="framer-export-section">
        <div className="framer-export-card">
          <h2>{locale === "zh" ? "一张照片，多种格式。" : "One Photo. Every Format You Need."}</h2>
          <p>{locale === "zh" ? "适合线上申请上传，并支持自定义文件大小。" : "Perfect for online applications, with custom file size controls."}</p>
          <div className="framer-format-buttons">
            {exportFormats.map((format, index) => (
              <span className={index === 0 ? "is-active" : ""} key={format}>{format}</span>
            ))}
          </div>
          <label className="framer-size-slider">
            <span>{locale === "zh" ? "文件压缩" : "Custom size"}</span>
            <i />
            <em>200 KB</em>
            <em>500 KB</em>
            <em>{locale === "zh" ? "原图" : "Original"}</em>
          </label>
        </div>
        <div className="framer-export-card">
          <h2>{locale === "zh" ? "打印尺寸，直接排好。" : "Print Sheets, Ready to Save."}</h2>
          <p>{locale === "zh" ? "适合在家或照相馆打印，支持裁切线和自动填充。" : "For home printers or photo labs, with crop marks and auto fill."}</p>
          <div className="framer-print-options">
            {printSizes.map((size, index) => (
              <span className={index === 0 ? "is-active" : ""} key={size}>{size}<small>300 DPI</small></span>
            ))}
          </div>
          <div className="framer-toggle-row"><span>Auto fill</span><i /></div>
          <div className="framer-toggle-row"><span>Crop marks</span><i /></div>
        </div>
        <div className="framer-export-card framer-export-preview-card">
          <div className="framer-export-preview" aria-hidden="true">
            <img src="/screenshots/print-sheet-real.jpg" alt="" width="933" height="1400" />
          </div>
        </div>
      </section>

      <section className="framer-privacy-section">
        <div className="framer-privacy-lock" aria-hidden="true">
          <img src="/icon-shield.svg" alt="" width="30" height="30" />
        </div>
        <div>
          <h2>{locale === "zh" ? "100% 本地私密处理" : "100% Private Processing"}</h2>
          <p>{locale === "zh" ? "照片处理留在设备端，不上传服务器，不跟踪你的照片。" : "Photo processing stays on device. No upload, no tracking."}</p>
        </div>
        <div className="framer-privacy-list">
          {privacyItems.map((item) => (
            <span key={item}>
              <img src="/check-square.png" alt="" width="20" height="20" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="framer-bottom-cta">
        <h2>{labels.finalTitle}</h2>
        <TrackedLink
          className="button button-primary framer-primary-cta"
          href={siteConfig.appStoreUrl}
          target="_blank"
          rel="noreferrer"
          eventName="app_store_click"
          eventParams={{ source: "home_framer_bottom", locale }}
        >
          <span aria-hidden="true"></span>
          <span>{labels.cta}</span>
        </TrackedLink>
        <span>{labels.finalTrust}</span>
        {labels.disclaimer ? (
          <p className="framer-footer-disclaimer">{labels.disclaimer}</p>
        ) : null}
      </section>
    </main>
  );
}
