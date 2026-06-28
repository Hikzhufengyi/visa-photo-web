import Image from "next/image";
import Link from "next/link";
import { DownloadQr } from "@/components/download-qr";
import { LazyAutoplayVideo } from "@/components/lazy-autoplay-video";
import type { Locale } from "@/data/localization";
import { getCopy } from "@/data/localization";
import { siteConfig } from "@/data/site";

const seoLinks = [
  "us-passport-photo-size",
  "us-visa-photo-size",
  "green-card-photo-requirements",
  "uscis-photo-requirements",
  "dv-lottery-photo-requirements",
  "schengen-visa-photo-size",
  "uk-passport-photo-size",
  "australia-passport-photo-size",
  "canada-visa-photo-size",
  "canada-passport-photo-size",
  "canada-pr-card-photo-size",
  "china-visa-photo-size",
  "india-passport-photo-size",
  "india-visa-photo-size",
  "japan-visa-photo-size",
  "singapore-passport-photo-size",
  "malaysia-passport-photo-size",
  "germany-passport-photo-size",
  "france-visa-photo-size",
  "aadhaar-photo-size",
  "pan-card-photo-size",
  "saudi-iqama-photo-size",
  "uae-emirates-id-photo-size",
  "qatar-residence-permit-photo-size",
  "kuwait-civil-id-photo-size",
  "oman-residence-card-photo-size",
  "bahrain-cpr-photo-size",
  "2x2-passport-photo-size",
  "600x600-passport-photo",
  "4x6-passport-photo-print-layout",
  "passport-photo-pdf-export"
];

const homeLabels = {
  en: {
    appStoreCta: "Download app",
    heroMetaAria: "Product highlights",
    heroMeta: [
      { value: "80+", label: "country presets" },
      { value: "300 DPI", label: "print-ready export" },
      { value: "On-device", label: "private processing" }
    ],
    visualLabel: "Professional preset engine",
    visualTitle: "Designed like a serious imaging tool, not a simple cropper.",
    guides: "Guides",
    workflow: "How it works",
    inside: "Inside the app",
    insideTitle: "These screens match real app features",
    presetLabel: "Preset Library",
    presetTitle: "Multi-country, multi-document preset support",
    presetText:
      "The app includes a multi-country document photo preset library, not a single 2x2 cropper. Users can filter templates by country, passport, visa, immigration, residence card, ID, and print use cases.",
    specLabel: "Spec Detail",
    specTitle: "Review size, background, and notes before editing",
    specText:
      "Each spec screen shows size, pixel target, background options, and source notes before editing begins.",
    editorLabel: "Editor",
    editorTitle: "Smart auto alignment with manual fine control",
    editorText:
      "The editor uses the selected country and document requirements for size, ratio, and framing guidance. It also surfaces risks through checks, while still letting you adjust position, zoom, rotation, lighting, sharpness, background, and output.",
    checks: "Checks",
    export: "Export",
    exportedResult: "Exported result",
    purchase: "Purchase",
    openStore: "Open App Store",
    support: "See support",
    download: "Download"
  },
  zh: {
    appStoreCta: "下载 App",
    heroMetaAria: "产品关键指标",
    heroMeta: [
      { value: "80+", label: "国家与证件模板" },
      { value: "300 DPI", label: "打印级导出" },
      { value: "On-device", label: "本地隐私处理" }
    ],
    visualLabel: "专业规格模板引擎",
    visualTitle: "像成熟影像工具，而不是普通裁切页。",
    guides: "规格指南",
    workflow: "使用流程",
    inside: "产品界面",
    insideTitle: "这些页面对应 App 里的真实功能",
    presetLabel: "规格库",
    presetTitle: "多国家、多证件类型规格适配",
    presetText:
      "App 内置多国家证件照规格库，不只是单一的 2x2 裁切。用户可以按国家、护照、签证、移民、居留卡、身份证件和打印用途筛选模板。",
    specLabel: "规格详情",
    specTitle: "先看背景、尺寸和要求，再开始制作",
    specText: "规格页会先展示尺寸、像素、背景和要求来源，再进入编辑流程。",
    editorLabel: "编辑器",
    editorTitle: "智能自动校准，也能手动精细调整",
    editorText:
      "编辑器会根据当前国家和证件类型的公开尺寸、比例和构图要求做校准，并用多项检测评分提示风险；用户也可以手动调整位置、缩放、旋转、亮度、锐度、背景和文件输出。",
    checks: "检查结果",
    export: "导出方式",
    exportedResult: "导出结果",
    purchase: "购买方式",
    openStore: "查看 App Store",
    support: "查看技术支持",
    download: "下载入口"
  },
  ar: {
    appStoreCta: "تنزيل التطبيق",
    heroMetaAria: "أبرز مزايا المنتج",
    heroMeta: [
      { value: "80+", label: "قوالب دول ومستندات" },
      { value: "300 DPI", label: "تصدير جاهز للطباعة" },
      { value: "On-device", label: "معالجة خاصة على الجهاز" }
    ],
    visualLabel: "محرك قوالب احترافي",
    visualTitle: "مصمم كأداة صور رسمية، وليس مجرد أداة قص.",
    guides: "الأدلة",
    workflow: "طريقة الاستخدام",
    inside: "داخل التطبيق",
    insideTitle: "هذه الشاشات تطابق وظائف التطبيق الحقيقية",
    presetLabel: "مكتبة القوالب",
    presetTitle: "قوالب متعددة للدول والمستندات",
    presetText:
      "يتضمن التطبيق مكتبة قوالب لعدة دول، وليس مجرد قص 2x2. يمكنك التصفية حسب الدولة والجواز والتأشيرة والإقامة والهوية والطباعة.",
    specLabel: "تفاصيل القالب",
    specTitle: "راجع المقاس والخلفية والملاحظات قبل التحرير",
    specText:
      "تعرض شاشة القالب المقاس والبكسل وخيارات الخلفية وملاحظات المصدر قبل بدء التحرير.",
    editorLabel: "المحرر",
    editorTitle: "محاذاة ذكية مع تحكم يدوي دقيق",
    editorText:
      "يعتمد المحرر على متطلبات الدولة والمستند المحدد للمقاس والنسبة والتأطير، ثم يعرض المخاطر عبر فحوصات متعددة مع إمكانية ضبط الموضع والتكبير والدوران والإضاءة والحدة والخلفية والإخراج يدوياً.",
    checks: "الفحوصات",
    export: "التصدير",
    exportedResult: "نتيجة التصدير",
    purchase: "الشراء",
    openStore: "فتح App Store",
    support: "الدعم الفني",
    download: "التنزيل"
  },
  de: {
    appStoreCta: "App laden",
    heroMetaAria: "Produktvorteile",
    heroMeta: [
      { value: "80+", label: "Länder- und Dokumentvorlagen" },
      { value: "300 DPI", label: "druckfertiger Export" },
      { value: "On-device", label: "private Verarbeitung" }
    ],
    visualLabel: "Professioneller Vorlagen-Assistent",
    visualTitle: "Entwickelt wie ein ernsthaftes Fotowerkzeug, nicht wie ein einfacher Zuschnitt.",
    guides: "Ratgeber",
    workflow: "So funktioniert es",
    inside: "In der App",
    insideTitle: "Diese Ansichten zeigen echte App-Funktionen",
    presetLabel: "Vorlagenbibliothek",
    presetTitle: "Vorlagen für mehrere Länder und Dokumenttypen",
    presetText:
      "Die App enthält eine Vorlagenbibliothek für viele Dokumentfotos und ist nicht nur ein 2x2-Zuschnitt. Du kannst nach Land, Pass, Visum, Aufenthaltstitel, Ausweis und Druckzweck filtern.",
    specLabel: "Vorlagendetails",
    specTitle: "Größe, Hintergrund und Hinweise vor der Bearbeitung prüfen",
    specText:
      "Jede Vorlage zeigt Größe, Pixelziel, Hintergrundoptionen und Quellenhinweise, bevor du mit der Bearbeitung beginnst.",
    editorLabel: "Editor",
    editorTitle: "Intelligente Ausrichtung mit manueller Feinkontrolle",
    editorText:
      "Der Editor orientiert sich an Land, Dokumenttyp, Größe, Seitenverhältnis und Bildausschnitt. Gleichzeitig zeigen Prüfungen mögliche Risiken, während du Position, Zoom, Drehung, Licht, Schärfe, Hintergrund und Export manuell anpassen kannst.",
    checks: "Prüfungen",
    export: "Export",
    exportedResult: "Exportiertes Ergebnis",
    purchase: "Kauf",
    openStore: "App Store öffnen",
    support: "Support ansehen",
    download: "Download"
  }
} satisfies Record<Locale, {
  appStoreCta: string;
  heroMetaAria: string;
  heroMeta: { value: string; label: string }[];
  visualLabel: string;
  visualTitle: string;
  guides: string;
  workflow: string;
  inside: string;
  insideTitle: string;
  presetLabel: string;
  presetTitle: string;
  presetText: string;
  specLabel: string;
  specTitle: string;
  specText: string;
  editorLabel: string;
  editorTitle: string;
  editorText: string;
  checks: string;
  export: string;
  exportedResult: string;
  purchase: string;
  openStore: string;
  support: string;
  download: string;
}>;

export function MarketingHome({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const labels = homeLabels[locale];

  return (
    <main className={`page-shell locale-${locale}`}>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{copy.home.eyebrow}</p>
          <h1>{copy.home.title}</h1>
          <p className="hero-text">{copy.home.description}</p>
          <div className="hero-meta" aria-label={labels.heroMetaAria}>
            {labels.heroMeta.map((item) => (
              <div className="hero-meta-item" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mini-nav">
            <Link href={`/${locale}/download`}>{copy.nav.download}</Link>
            <Link href={`/${locale}/about`}>{copy.nav.about}</Link>
            <Link href={`/${locale}/support`}>{copy.nav.support}</Link>
            <Link href={`/${locale}/blog`}>{copy.nav.blog}</Link>
          </div>
          <ul className="hero-points hero-proof-grid">
            {copy.home.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <Link
              className="button button-primary"
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              {copy.home.ctaPrimary}
            </Link>
            <Link className="button button-secondary" href="#showcase">
              {copy.home.ctaSecondary}
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-copy">
            <p>{labels.visualLabel}</p>
            <h2>{labels.visualTitle}</h2>
          </div>
          <div className="phone-stack phone-stack-front">
            <Image
              src="/screenshots/home.png"
              alt="IDPhoto Pro document preset screen"
              width={1320}
              height={2868}
              priority
            />
          </div>
          <div className="phone-stack phone-stack-back">
            <Image
              src="/screenshots/editor.png"
              alt="IDPhoto Pro editor screen"
              width={1320}
              height={2868}
            />
          </div>
        </div>
      </section>

      <section className="section seo-links-section secondary-section">
        <div className="section-heading">
          <p className="eyebrow">{labels.guides}</p>
          <h2>{copy.home.seoHeading}</h2>
        </div>
        <div className="seo-link-grid">
          {seoLinks.map((slug) => (
            <Link className="seo-link-card" href={`/${locale}/${slug}`} key={slug}>
              {slug.replaceAll("-", " ").replaceAll(/\b\w/g, (match) => match.toUpperCase())}
            </Link>
          ))}
        </div>
      </section>

      <section className="section" id="workflow">
        <div className="section-heading">
          <p className="eyebrow">{labels.workflow}</p>
          <h2>{copy.home.stepsHeading}</h2>
        </div>
        <div className="step-grid">
          {copy.home.steps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span className="step-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Link
            className="button button-compact button-primary"
            href={siteConfig.appStoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            {labels.appStoreCta}
          </Link>
        </div>
      </section>

      <section className="section showcase" id="showcase">
        <div className="section-heading">
          <p className="eyebrow">{labels.inside}</p>
          <h2>{labels.insideTitle}</h2>
        </div>
        <div className="showcase-grid">
          <article className="showcase-card showcase-card-large">
            <div className="showcase-copy">
              <p className="card-label">{labels.presetLabel}</p>
              <h3>{labels.presetTitle}</h3>
              <p>{labels.presetText}</p>
            </div>
            <div className="device-frame">
              <LazyAutoplayVideo
                className="device-video"
                src="/screenshots/country-selection-demo.mp4"
                label={labels.presetTitle}
              />
            </div>
          </article>
          <article className="showcase-card">
            <div className="showcase-copy">
              <p className="card-label">{labels.specLabel}</p>
              <h3>{labels.specTitle}</h3>
              <p>{labels.specText}</p>
            </div>
            <div className="device-frame">
              <Image
                src="/screenshots/details.png"
                alt="IDPhoto Pro spec details"
                width={1320}
                height={2868}
              />
            </div>
          </article>
          <article className="showcase-card">
            <div className="showcase-copy">
              <p className="card-label">{labels.editorLabel}</p>
              <h3>{labels.editorTitle}</h3>
              <p>{labels.editorText}</p>
            </div>
            <div className="device-frame">
              <LazyAutoplayVideo
                className="device-video"
                src="/screenshots/editor-demo.mp4"
                label={labels.editorTitle}
              />
            </div>
          </article>
        </div>
        <div className="section-cta">
          <Link
            className="button button-compact button-primary"
            href={siteConfig.appStoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            {labels.appStoreCta}
          </Link>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">{labels.checks}</p>
          <h2>{copy.home.checksHeading}</h2>
        </div>
        <div className="split-grid">
          <article className="info-card">
            <p>{copy.home.checksIntro}</p>
            <ul className="smart-check-list">
              {copy.home.checks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="image-card">
            <div className="device-frame">
              <Image
                src="/screenshots/smart-check-score.png"
                alt={labels.checks}
                width={1320}
                height={2868}
              />
            </div>
          </article>
        </div>
        <div className="section-cta">
          <Link
            className="button button-compact button-primary"
            href={siteConfig.appStoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            {labels.appStoreCta}
          </Link>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">{labels.export}</p>
          <h2>{copy.home.exportHeading}</h2>
        </div>
        <div className="export-showcase-grid">
          <article className="image-card phone-media-card">
            <LazyAutoplayVideo
              className="device-video"
              src="/screenshots/export-demo.mp4"
              label={labels.export}
            />
          </article>
          <article className="info-card">
            <p>{copy.home.exportIntro}</p>
            <ul className="launch-list">
              {copy.home.exportItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="image-card export-result-card">
            <p className="card-label">{labels.exportedResult}</p>
            <Image
              src="/screenshots/export-result-4up.jpg"
              alt={labels.exportedResult}
              width={3600}
              height={5400}
            />
          </article>
        </div>
        <div className="section-cta">
          <Link
            className="button button-compact button-primary"
            href={siteConfig.appStoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            {labels.appStoreCta}
          </Link>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">{labels.purchase}</p>
          <h2>{copy.home.pricingHeading}</h2>
        </div>
        <div className="split-grid">
          <article className="info-card">
            <p>{copy.home.pricingIntro}</p>
            <ul className="pricing-check-list">
              {copy.home.pricingItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="image-card unlock-shot-card">
            <Image
              src="/screenshots/lifetime-unlock.png"
              alt={labels.purchase}
              width={1320}
              height={2868}
            />
            <div className="hero-actions">
              <Link
                className="button button-primary"
                href={siteConfig.appStoreUrl}
                target="_blank"
                rel="noreferrer"
              >
                {labels.openStore}
              </Link>
              <Link className="button button-secondary" href={`/${locale}/support`}>
                {labels.support}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">{labels.download}</p>
          <h2>{copy.home.qrHeading}</h2>
        </div>
        <div className="split-grid">
          <article className="info-card">
            <p>{copy.home.qrIntro}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={`/${locale}/download`}>
                {copy.home.qrPage}
              </Link>
              <Link
                className="button button-secondary"
                href={siteConfig.appStoreUrl}
                target="_blank"
                rel="noreferrer"
              >
                {copy.home.appStoreLink}
              </Link>
            </div>
          </article>
          <article className="info-card qr-preview-card">
            <div className="qr-shell">
              <DownloadQr
                url={siteConfig.appStoreUrl}
                alt="QR code for IDPhoto Pro App Store download"
              />
            </div>
            <p className="qr-caption">{copy.home.qrCaption}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
