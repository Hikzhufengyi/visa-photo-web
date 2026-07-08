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

  return (
    <main className={`page-shell framer-home locale-${locale}`}>
      <section className="framer-hero">
        <div className="framer-hero-copy">
          <h1>{labels.heroTitle}</h1>
          <p>{labels.heroText}</p>
          <TrackedLink
            className="button button-primary framer-primary-cta"
            href={siteConfig.appStoreUrl}
            target="_blank"
            rel="noreferrer"
            eventName="app_store_click"
            eventParams={{ source: "home_framer_hero", locale }}
          >
            <span className="framer-cta-icon" aria-hidden="true">↓</span>
            <span>{labels.cta}</span>
            <span className="framer-cta-arrow" aria-hidden="true">→</span>
          </TrackedLink>
          <div className="framer-trust-pills" aria-label={labels.trust}>
            {labels.trustPills.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="framer-product-panel">
          <div className="framer-spec-list">
            <div className="framer-panel-header">
              <span>{locale === "zh" ? "证件照规格" : "Photo sizes"}</span>
              <strong>100+</strong>
            </div>
            <Link className="framer-search-line" href={`/${locale}/blog`}>
              <span>{labels.searchPlaceholder}</span>
              <span aria-hidden="true">→</span>
            </Link>
            <div className="framer-spec-row">
              <span>{locale === "zh" ? "美国护照" : "US Passport"}</span>
              <em>2 x 2 in</em>
            </div>
            <div className="framer-spec-row">
              <span>{locale === "zh" ? "沙特 Iqama" : locale === "ar" ? "إقامة السعودية" : locale === "de" ? "Saudi-Iqama" : "Saudi Iqama"}</span>
              <em>200 x 200 px</em>
            </div>
            <div className="framer-spec-row">
              <span>{locale === "zh" ? "加拿大护照" : locale === "ar" ? "جواز كندا" : locale === "de" ? "Kanada-Passfoto" : "Canada Passport"}</span>
              <em>35 x 45 mm</em>
            </div>
          </div>
          <div className="framer-check-panel">
            <div className="abstract-face-frame">
              <img
                alt=""
                className="hero-compliance-shot"
                src="/screenshots/hero-compliance-preview-fast.jpg"
                width="560"
                height="466"
              />
              <span>{locale === "zh" ? "眼高范围" : "Eye height range"}</span>
            </div>
            <div className="abstract-score-card">
              <div>
                <span>{locale === "zh" ? "照片检测" : "Photo checks"}</span>
                <strong>100%</strong>
              </div>
              <i />
              <div className="hero-proof-row">
                <span>{locale === "zh" ? "尺寸正确" : "Size OK"}</span>
                <span>{locale === "zh" ? "脸部居中" : "Face centered"}</span>
                <span>{locale === "zh" ? "可导出" : "Ready"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="framer-standards" id="guides">
        <p className="framer-kicker">{labels.standardsKicker}</p>
        <div className="framer-section-heading">
          <h2>{labels.standardsTitle}</h2>
          <p>{labels.standardsText}</p>
        </div>
        <div className="framer-search-card">
          <Link className="framer-search-input" href={`/${locale}/blog`}>
            <span>{labels.searchPlaceholder}</span>
            <em>{labels.searchMeta}</em>
          </Link>
          <div className="framer-chip-grid">
            {labels.standardLinks.map((item) => (
              <Link
                className="framer-chip"
                href={`/${locale}/${item.slug}`}
                key={item.slug}
              >
                <span className="framer-chip-icon" aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            <Link className="framer-chip framer-chip-active" href={`/${locale}/blog`}>
              <span>{labels.allStandardsLabel}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="framer-abstract-grid">
          {labels.abstractCards.map((card) => (
            <article className="framer-abstract-card" key={card.title}>
              <div className={`abstract-visual abstract-${card.kind}`}>
                {card.kind === "check" && (
                  <div className="feature-device feature-device-check">
                    <div className="feature-photo-window">
                      <img
                        src="/screenshots/hero-checks-home.jpg"
                        alt={locale === "zh" ? "证件照检测网格和眼高范围" : "Photo check grid and eye height range"}
                        loading="lazy"
                        decoding="async"
                        width="560"
                        height="1216"
                      />
                      <span>{locale === "zh" ? "眼高范围" : "Eye height range"}</span>
                    </div>
                    <div className="feature-status-card">
                      <span aria-hidden="true">✓</span>
                      <div>
                        <strong>Ready to Export</strong>
                        <p>{locale === "zh" ? "关键检查已通过" : "Key checks passed"}</p>
                      </div>
                      <em>100%</em>
                    </div>
                    <div className="feature-scan-list">
                      <span>{locale === "zh" ? "尺寸" : "Size"}</span>
                      <span>{locale === "zh" ? "脸部" : "Face"}</span>
                      <span>{locale === "zh" ? "背景" : "Background"}</span>
                    </div>
                  </div>
                )}
                {card.kind === "privacy" && (
                  <div className="abstract-privacy-panel">
                    <div className="abstract-pro-card">
                      <div className="abstract-crown">♛</div>
                      <div>
                        <strong>{locale === "zh" ? "Pro Member" : "Pro Member"}</strong>
                        <p>{locale === "zh" ? "一次买断已解锁" : "Lifetime access active"}</p>
                      </div>
                    </div>
                    <div className="abstract-trust-pills">
                      <span>{locale === "zh" ? "买断" : "Lifetime"}</span>
                      <span>{locale === "zh" ? "无广告" : "No Ads"}</span>
                      <span>{locale === "zh" ? "本地处理" : "On-device"}</span>
                    </div>
                    <div className="abstract-privacy-card">
                      <div className="abstract-lock-row">
                        <span>▣</span>
                        <div>
                          <strong>{locale === "zh" ? "私密、本地处理" : "Private, on-device processing"}</strong>
                          <p>{locale === "zh" ? "照片处理在设备端完成" : "Photo processing happens on device"}</p>
                        </div>
                      </div>
                      {[
                        locale === "zh" ? "照片不上传服务器" : "Photos are not uploaded",
                        locale === "zh" ? "无广告 SDK" : "No ad SDKs",
                        locale === "zh" ? "记录留在本机" : "Records stay on this device"
                      ].map((item) => (
                        <div className="abstract-privacy-row" key={item}>
                          <span />
                          <strong>{item}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {card.kind === "print" && (
                  <div className="feature-device feature-device-export">
                    <div className="feature-export-window">
                      <img
                        src="/screenshots/feature-export-home.jpg"
                        alt={locale === "zh" ? "电子版和打印排版导出选项" : "Digital photo and print sheet export options"}
                        loading="lazy"
                        decoding="async"
                        width="560"
                        height="1103"
                      />
                    </div>
                    <div className="feature-print-window">
                      <img
                        src="/screenshots/feature-export-home.jpg"
                        alt={locale === "zh" ? "4x6 打印排版预览和保存按钮" : "4x6 print sheet preview and save button"}
                        loading="lazy"
                        decoding="async"
                        width="560"
                        height="1103"
                      />
                    </div>
                    <div className="feature-save-pill">
                      <span aria-hidden="true">⇩</span>
                      {locale === "zh" ? "保存 4x6 打印排版" : "Save 4x6 Print Sheet"}
                    </div>
                  </div>
                )}
              </div>
              <h3>{card.title}</h3>
              <p>{card.tag}</p>
              {card.kind === "check" && (
                <Link className="framer-detail-link" href={`/${locale}/compliance`}>
                  {labels.complianceLink}
                </Link>
              )}
            </article>
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
          {labels.cta}
        </TrackedLink>
        <span>{labels.finalTrust}</span>
        {labels.disclaimer ? (
          <p className="framer-footer-disclaimer">{labels.disclaimer}</p>
        ) : null}
      </section>
    </main>
  );
}
