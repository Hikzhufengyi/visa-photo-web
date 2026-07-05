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
    heroTitle: "Compliant ID photos, generated instantly",
    heroText: "Prepare passport, visa, and ID photos on iPhone. Choose a size, import a portrait, check face position and background, then export a digital file or 4x6 print layout.",
    cta: "Download App",
    trust: "Local processing. Photos stay on your device.",
    trustPills: ["One-time purchase", "No subscription", "AI checks", "Photos stay on device"],
    standardsKicker: "Built for accuracy. Designed for privacy.",
    standardsTitle: "100+ document photo standards",
    standardsText: "Choose the country, document type, or print size before generating your photo.",
    searchPlaceholder: "Search 100+ standards",
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
      { title: "Global compliance", text: "Covers 100+ document photo standards and validates common requirements." },
      { title: "On-device processing", text: "All image processing is completed on your device. No cloud upload needed." },
      { title: "Export system", text: "Supports JPG, PNG, HEIC, PDF, plus 4x6, A4, and Letter print layouts." }
    ],
    abstractCards: [
      { title: "Compliance check", tag: "Pass", kind: "check" },
      { title: "On-device processing", tag: "No upload", kind: "privacy" },
      { title: "Print layout", tag: "4x6", kind: "print" }
    ],
    complianceLink: "View all checks",
    finalTitle: "Generate a compliant ID photo in seconds.",
    finalTrust: "One-time purchase. No subscription. Photos stay on your device.",
    moreGuides: "Browse all photo size guides"
  },
  zh: {
    heroTitle: "合规证件照，即刻生成",
    heroText: "面向 100+ 全球标准的护照照、签证照与身份证照生成系统。选择规格，导入照片，检查脸部位置和背景，然后导出电子版或 4x6 打印排版。",
    cta: "下载 App",
    trust: "本地处理。照片不上云。",
    trustPills: ["一次性购买", "非订阅", "AI 检测", "照片不上云"],
    standardsKicker: "为准确而构建。为隐私而设计。",
    standardsTitle: "100+ 证件照标准",
    standardsText: "生成前选择国家、证件类型或打印尺寸。",
    searchPlaceholder: "搜索 100+ 标准",
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
      { title: "全球合规", text: "覆盖 100+ 证件照标准，并自动完成常见要求校验。" },
      { title: "本地处理", text: "所有图像处理均在设备端完成。无需云端上传。" },
      { title: "导出系统", text: "支持 JPG、PNG、HEIC、PDF，以及 4x6、A4、Letter 打印版式。" }
    ],
    abstractCards: [
      { title: "合规校验", tag: "通过", kind: "check" },
      { title: "本地处理", tag: "照片不上云", kind: "privacy" },
      { title: "打印排版", tag: "4x6", kind: "print" }
    ],
    complianceLink: "查看所有校验",
    finalTitle: "数秒生成合规证件照。",
    finalTrust: "一次性购买，非订阅。照片本地处理，不上传服务器。",
    moreGuides: "查看更多证件照规格"
  },
  ar: {
    heroTitle: "صور مستندات متوافقة خلال ثوانٍ",
    heroText: "حضّر صور الجواز والتأشيرة والهوية على iPhone. اختر المقاس، أضف الصورة، افحص الوجه والخلفية، ثم صدّر ملفاً رقمياً أو صفحة طباعة 4x6.",
    cta: "تنزيل التطبيق",
    trust: "معالجة محلية. تبقى الصور على جهازك.",
    trustPills: ["شراء لمرة واحدة", "بدون اشتراك", "فحص AI", "تبقى الصور على جهازك"],
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
      { title: "توافق عالمي", text: "يدعم أكثر من 100 معيار ويفحص المتطلبات الشائعة." },
      { title: "معالجة على الجهاز", text: "تتم معالجة الصور على جهازك بدون رفع سحابي." },
      { title: "نظام تصدير", text: "يدعم JPG وPNG وHEIC وPDF وتخطيطات 4x6 وA4 وLetter." }
    ],
    abstractCards: [
      { title: "فحص التوافق", tag: "ناجح", kind: "check" },
      { title: "معالجة على الجهاز", tag: "بدون رفع", kind: "privacy" },
      { title: "تخطيط الطباعة", tag: "4x6", kind: "print" }
    ],
    complianceLink: "عرض كل الفحوصات",
    finalTitle: "أنشئ صورة مستند متوافقة خلال ثوانٍ.",
    finalTrust: "شراء لمرة واحدة. بدون اشتراك. تبقى الصور على جهازك.",
    moreGuides: "تصفح كل أدلة المقاسات"
  },
  de: {
    heroTitle: "Konforme Passfotos in Sekunden",
    heroText: "Erstelle Pass-, Visa- und Ausweisfotos auf dem iPhone. Größe wählen, Foto importieren, Gesicht und Hintergrund prüfen, digital oder als 4x6-Drucklayout exportieren.",
    cta: "App laden",
    trust: "Lokale Verarbeitung. Fotos bleiben auf deinem Gerät.",
    trustPills: ["Einmaliger Kauf", "Kein Abo", "AI-Prüfung", "Fotos bleiben lokal"],
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
      { title: "Globale Standards", text: "Deckt 100+ Fotostandards ab und prüft häufige Anforderungen." },
      { title: "Lokal verarbeitet", text: "Alle Bildprozesse laufen auf dem Gerät. Kein Cloud-Upload nötig." },
      { title: "Exportsystem", text: "JPG, PNG, HEIC, PDF sowie 4x6-, A4- und Letter-Drucklayouts." }
    ],
    abstractCards: [
      { title: "Konformitätsprüfung", tag: "Bestanden", kind: "check" },
      { title: "Lokal verarbeitet", tag: "Kein Upload", kind: "privacy" },
      { title: "Drucklayout", tag: "4x6", kind: "print" }
    ],
    complianceLink: "Alle Prüfungen ansehen",
    finalTitle: "Erstelle ein konformes Ausweisfoto in Sekunden.",
    finalTrust: "Einmaliger Kauf. Kein Abo. Fotos bleiben auf deinem Gerät.",
    moreGuides: "Alle Fotogrößen-Ratgeber ansehen"
  }
} satisfies Record<Locale, {
  heroTitle: string;
  heroText: string;
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
            {labels.cta}
          </TrackedLink>
          <div className="framer-trust-pills" aria-label={labels.trust}>
            {labels.trustPills.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="framer-product-panel" aria-hidden="true">
          <div className="framer-spec-list">
            <div className="framer-panel-header">
              <span>{locale === "zh" ? "证件照标准" : "Photo standards"}</span>
              <strong>100+</strong>
            </div>
            <div className="framer-search-line">{labels.searchPlaceholder}</div>
            <div className="framer-spec-row">
              <span>{locale === "zh" ? "美国护照" : "US Passport"}</span>
              <em>2 x 2 in</em>
            </div>
            <div className="framer-spec-row">
              <span>{locale === "zh" ? "中国签证" : "China Visa"}</span>
              <em>33 x 48 mm</em>
            </div>
            <div className="framer-spec-row">
              <span>{locale === "zh" ? "日本个人编号卡" : "Japan ID Card"}</span>
              <em>35 x 45 mm</em>
            </div>
          </div>
          <div className="framer-check-panel">
            <div className="abstract-face-frame">
              <img
                alt=""
                className="hero-compliance-shot"
                src="/screenshots/hero-compliance-preview.png"
              />
            </div>
            <div className="abstract-score-card">
              <div>
                <span>{locale === "zh" ? "合规评分" : "Compliance score"}</span>
                <strong>100%</strong>
              </div>
              <i />
              <b />
              <b />
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

        <div className="framer-feature-row">
          {labels.featureColumns.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="framer-abstract-grid">
          {labels.abstractCards.map((card) => (
            <article className="framer-abstract-card" key={card.title}>
              <div className={`abstract-visual abstract-${card.kind}`}>
                {card.kind === "check" && (
                  <div className="abstract-compliance-phone">
                    <div className="abstract-compliance-photo">
                      <div className="abstract-compliance-grid" />
                      <div className="abstract-compliance-eye" />
                      <div className="abstract-compliance-head" />
                      <div className="abstract-compliance-body" />
                      <span>{locale === "zh" ? "眼高范围" : "Eye range"}</span>
                    </div>
                    <div className="abstract-export-score">
                      <div className="abstract-badge">✓</div>
                      <div>
                        <strong>{locale === "zh" ? "Ready to Export" : "Ready to Export"}</strong>
                        <p>{locale === "zh" ? "关键检查已通过" : "All key checks passed"}</p>
                      </div>
                      <em>100%</em>
                    </div>
                    <div className="abstract-pass-note">
                      <span>✓</span>
                      <p>{locale === "zh" ? "所有关键检查已通过，可以导出。" : "All key checks passed. Ready to export."}</p>
                    </div>
                    <div className="abstract-check-list">
                      {[
                        locale === "zh" ? "分辨率" : "Resolution",
                        locale === "zh" ? "背景" : "Background",
                        locale === "zh" ? "头部比例" : "Head size",
                        locale === "zh" ? "脸部居中" : "Face centered"
                      ].map((item) => (
                        <div key={item}>
                          <span>✓</span>
                          <strong>{item}</strong>
                        </div>
                      ))}
                    </div>
                    <div className="abstract-export-button">
                      ✓ {locale === "zh" ? "准备导出" : "Ready - Export"}
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
                          <strong>{locale === "zh" ? "私密、安全、合规" : "Private, Secure, Compliant"}</strong>
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
                  <div className="abstract-export-flow">
                    <div className="abstract-export-status">
                      <span>✓</span>
                      <strong>Ready</strong>
                      <em>100%</em>
                      <b>4 x 6 in</b>
                    </div>
                    <div className="abstract-output-card">
                      <strong>{locale === "zh" ? "选择导出" : "Choose Output"}</strong>
                      <div className="abstract-output-options">
                        <div>
                          <i />
                          <span>{locale === "zh" ? "电子版" : "Digital Photo"}</span>
                          <p>600 x 600 px · JPG</p>
                        </div>
                        <div className="abstract-output-active">
                          <i />
                          <span>{locale === "zh" ? "打印版" : "Print Sheet"}</span>
                          <p>4 x 6 in · crop marks</p>
                        </div>
                      </div>
                      <div className="abstract-more-settings">
                        <span>{locale === "zh" ? "更多设置" : "More settings"}</span>
                        <em>JPG · 4 x 6 · compact</em>
                      </div>
                    </div>
                    <div className="abstract-print-preview">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <span key={index}>
                          <i />
                          <b />
                        </span>
                      ))}
                    </div>
                    <div className="abstract-save-button">
                      {locale === "zh" ? "保存打印版" : "Save Print Sheet"}
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
      </section>
    </main>
  );
}
