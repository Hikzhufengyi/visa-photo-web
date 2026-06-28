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

export function MarketingHome({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const isZh = locale === "zh";
  const isAr = locale === "ar";
  const appStoreCta = isZh ? "下载 App" : isAr ? "تنزيل التطبيق" : "Download app";
  const heroMeta = isZh
    ? [
        { value: "80+", label: "国家与证件模板" },
        { value: "300 DPI", label: "打印级导出" },
        { value: "On-device", label: "本地隐私处理" }
      ]
    : isAr
      ? [
          { value: "80+", label: "قوالب دول ومستندات" },
          { value: "300 DPI", label: "تصدير جاهز للطباعة" },
          { value: "On-device", label: "معالجة خاصة على الجهاز" }
        ]
      : [
          { value: "80+", label: "country presets" },
          { value: "300 DPI", label: "print-ready export" },
          { value: "On-device", label: "private processing" }
        ];

  return (
    <main className={`page-shell locale-${locale}`}>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{copy.home.eyebrow}</p>
          <h1>{copy.home.title}</h1>
          <p className="hero-text">{copy.home.description}</p>
          <div className="hero-meta" aria-label={isZh ? "产品关键指标" : isAr ? "أبرز مزايا المنتج" : "Product highlights"}>
            {heroMeta.map((item) => (
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
            <p>{isAr ? "محرك قوالب احترافي" : "Professional preset engine"}</p>
            <h2>
              {isZh
                ? "像成熟影像工具，而不是普通裁切页。"
                : isAr
                  ? "مصمم كأداة صور جادة، وليس مجرد أداة قص."
                : "Designed like a serious imaging tool, not a simple cropper."}
            </h2>
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
          <p className="eyebrow">{isZh ? "规格指南" : isAr ? "الأدلة" : "Guides"}</p>
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
          <p className="eyebrow">{isZh ? "使用流程" : isAr ? "طريقة الاستخدام" : "How it works"}</p>
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
            {appStoreCta}
          </Link>
        </div>
      </section>

      <section className="section showcase" id="showcase">
        <div className="section-heading">
          <p className="eyebrow">{isZh ? "产品界面" : isAr ? "داخل التطبيق" : "Inside the app"}</p>
          <h2>{isZh ? "这些页面对应 App 里的真实功能" : isAr ? "هذه الشاشات تطابق وظائف التطبيق الحقيقية" : "These screens match real app features"}</h2>
        </div>
        <div className="showcase-grid">
          <article className="showcase-card showcase-card-large">
            <div className="showcase-copy">
              <p className="card-label">{isZh ? "规格库" : isAr ? "مكتبة القوالب" : "Preset Library"}</p>
              <h3>{isZh ? "多国家、多证件类型规格适配" : isAr ? "دعم قوالب متعددة للدول والمستندات" : "Multi-country, multi-document preset support"}</h3>
              <p>
                {isZh
                  ? "App 内置多国家证件照规格库，不只是单一的 2x2 裁切。用户可以按国家、护照、签证、移民、居留卡、身份证件和打印用途筛选模板。"
                  : isAr
                    ? "يتضمن التطبيق مكتبة قوالب متعددة الدول، وليس مجرد قص 2x2. يمكن التصفية حسب الدولة والجواز والتأشيرة والإقامة والهوية والطباعة."
                  : "The app includes a multi-country document photo preset library, not a single 2x2 cropper. Users can filter templates by country, passport, visa, immigration, residence card, ID, and print use cases."}
              </p>
            </div>
            <div className="device-frame">
              <LazyAutoplayVideo
                className="device-video"
                src="/screenshots/country-selection-demo.mp4"
                label={isZh ? "IDPhoto Pro 多国家证件规格选择演示" : isAr ? "عرض اختيار قوالب IDPhoto Pro" : "IDPhoto Pro multi-country preset selection demo"}
              />
            </div>
          </article>
          <article className="showcase-card">
            <div className="showcase-copy">
              <p className="card-label">{isZh ? "规格详情" : isAr ? "تفاصيل القالب" : "Spec Detail"}</p>
              <h3>{isZh ? "先看背景、尺寸和要求，再开始制作" : isAr ? "راجع المقاس والخلفية والملاحظات قبل التحرير" : "Review size, background, and notes before editing"}</h3>
              <p>
                {isZh
                  ? "规格页会先展示尺寸、像素、背景和要求来源，再进入编辑流程。"
                  : isAr
                    ? "تعرض شاشة القالب المقاس والبكسل والخلفية وملاحظات المصدر قبل بدء التحرير."
                  : "Each spec screen shows size, pixel target, background options, and source notes before editing begins."}
              </p>
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
              <p className="card-label">{isZh ? "编辑器" : isAr ? "المحرر" : "Editor"}</p>
              <h3>{isZh ? "AI 自动校准，也能手动精细调整" : isAr ? "معايرة ذكية وتحكم يدوي دقيق" : "AI auto calibration with manual fine control"}</h3>
              <p>
                {isZh
                  ? "编辑器会根据当前国家和证件类型的公开尺寸、比例和构图要求做校准，并用多项检测评分提示风险；用户也可以手动调整位置、缩放、旋转、亮度、锐度、背景和文件输出。"
                  : isAr
                    ? "يعتمد المحرر على مقاس ونسبة وإطار المستند المحدد، ثم يعرض فحوصات متعددة للمخاطر مع إمكانية ضبط الموضع والتكبير والدوران والإضاءة والحدة والخلفية والإخراج يدوياً."
                  : "The editor calibrates against the selected country and document size, ratio, and framing guidance, then uses multiple scoring checks to surface risk. Users can still manually adjust position, zoom, rotation, lighting, sharpness, background, and output."}
              </p>
            </div>
            <div className="device-frame">
              <LazyAutoplayVideo
                className="device-video"
                src="/screenshots/editor-demo.mp4"
                label={isZh ? "IDPhoto Pro 编辑证件照演示" : isAr ? "عرض تحرير صورة المستند في IDPhoto Pro" : "IDPhoto Pro document photo editor demo"}
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
            {appStoreCta}
          </Link>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">{isZh ? "检查结果" : isAr ? "الفحوصات" : "Checks"}</p>
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
                alt={isZh ? "IDPhoto Pro 智能检测评分和问题提示" : isAr ? "درجة الفحص الذكي وملخص المشاكل في IDPhoto Pro" : "IDPhoto Pro smart check score and issue summary"}
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
            {appStoreCta}
          </Link>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">{isZh ? "导出方式" : isAr ? "التصدير" : "Export"}</p>
          <h2>{copy.home.exportHeading}</h2>
        </div>
        <div className="export-showcase-grid">
          <article className="image-card phone-media-card">
            <LazyAutoplayVideo
              className="device-video"
              src="/screenshots/export-demo.mp4"
              label={isZh ? "IDPhoto Pro 导出演示" : isAr ? "عرض التصدير في IDPhoto Pro" : "IDPhoto Pro export demo"}
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
            <p className="card-label">{isZh ? "导出结果" : isAr ? "نتيجة التصدير" : "Exported Result"}</p>
            <Image
              src="/screenshots/export-result-4up.jpg"
              alt={isZh ? "IDPhoto Pro 四张打印排版导出结果" : isAr ? "نتيجة تخطيط طباعة أربع صور في IDPhoto Pro" : "IDPhoto Pro four-photo print layout export result"}
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
            {appStoreCta}
          </Link>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">{isZh ? "购买方式" : isAr ? "الشراء" : "Purchase"}</p>
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
              alt={isZh ? "IDPhoto Pro 一次解锁页面" : isAr ? "شاشة الفتح مدى الحياة في IDPhoto Pro" : "IDPhoto Pro lifetime unlock screen"}
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
                {isZh ? "查看 App Store" : isAr ? "فتح App Store" : "Open App Store"}
              </Link>
              <Link className="button button-secondary" href={`/${locale}/support`}>
                {isZh ? "查看技术支持" : isAr ? "الدعم الفني" : "See support"}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">{isZh ? "下载入口" : isAr ? "التنزيل" : "Download"}</p>
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
