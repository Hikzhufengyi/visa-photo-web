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
  "2x2-passport-photo-size",
  "600x600-passport-photo",
  "canada-visa-photo-size",
  "canada-passport-photo-size",
  "canada-pr-card-photo-size",
  "india-passport-photo-size",
  "india-visa-photo-size",
  "aadhaar-photo-size",
  "pan-card-photo-size",
  "4x6-passport-photo-print-layout",
  "passport-photo-pdf-export",
  "saudi-iqama-photo-size",
  "uae-emirates-id-photo-size",
  "qatar-residence-permit-photo-size",
  "kuwait-civil-id-photo-size",
  "oman-residence-card-photo-size"
];

export function MarketingHome({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const appStoreCta = locale === "zh" ? "下载 App" : "Download app";
  const heroMeta =
    locale === "zh"
      ? [
          { value: "80+", label: "国家与证件模板" },
          { value: "300 DPI", label: "打印级导出" },
          { value: "On-device", label: "本地隐私处理" }
        ]
      : [
          { value: "80+", label: "country presets" },
          { value: "300 DPI", label: "print-ready export" },
          { value: "On-device", label: "private processing" }
        ];

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{copy.home.eyebrow}</p>
          <h1>{copy.home.title}</h1>
          <p className="hero-text">{copy.home.description}</p>
          <div className="hero-meta" aria-label={locale === "zh" ? "产品关键指标" : "Product highlights"}>
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
            <p>{locale === "zh" ? "Professional preset engine" : "Professional preset engine"}</p>
            <h2>
              {locale === "zh"
                ? "像成熟影像工具，而不是普通裁切页。"
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

      <section className="section" id="workflow">
        <div className="section-heading">
          <p className="eyebrow">{locale === "zh" ? "使用流程" : "How it works"}</p>
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
          <p className="eyebrow">{locale === "zh" ? "产品界面" : "Inside the app"}</p>
          <h2>{locale === "zh" ? "这些页面对应 App 里的真实功能" : "These screens match real app features"}</h2>
        </div>
        <div className="showcase-grid">
          <article className="showcase-card showcase-card-large">
            <div className="showcase-copy">
              <p className="card-label">{locale === "zh" ? "规格库" : "Preset Library"}</p>
              <h3>{locale === "zh" ? "多国家、多证件类型规格适配" : "Multi-country, multi-document preset support"}</h3>
              <p>
                {locale === "zh"
                  ? "App 内置多国家证件照规格库，不只是单一的 2x2 裁切。用户可以按国家、护照、签证、移民、居留卡、身份证件和打印用途筛选模板。"
                  : "The app includes a multi-country document photo preset library, not a single 2x2 cropper. Users can filter templates by country, passport, visa, immigration, residence card, ID, and print use cases."}
              </p>
            </div>
            <div className="device-frame">
              <LazyAutoplayVideo
                className="device-video"
                src="/screenshots/country-selection-demo.mp4"
                label={locale === "zh" ? "IDPhoto Pro 多国家证件规格选择演示" : "IDPhoto Pro multi-country preset selection demo"}
              />
            </div>
          </article>
          <article className="showcase-card">
            <div className="showcase-copy">
              <p className="card-label">{locale === "zh" ? "规格详情" : "Spec Detail"}</p>
              <h3>{locale === "zh" ? "先看背景、尺寸和要求，再开始制作" : "Review size, background, and notes before editing"}</h3>
              <p>
                {locale === "zh"
                  ? "规格页会先展示尺寸、像素、背景和要求来源，再进入编辑流程。"
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
              <p className="card-label">{locale === "zh" ? "编辑器" : "Editor"}</p>
              <h3>{locale === "zh" ? "AI 自动校准，也能手动精细调整" : "AI auto calibration with manual fine control"}</h3>
              <p>
                {locale === "zh"
                  ? "编辑器会根据当前国家和证件类型的公开尺寸、比例和构图要求做校准，并用多项检测评分提示风险；用户也可以手动调整位置、缩放、旋转、亮度、锐度、背景和文件输出。"
                  : "The editor calibrates against the selected country and document size, ratio, and framing guidance, then uses multiple scoring checks to surface risk. Users can still manually adjust position, zoom, rotation, lighting, sharpness, background, and output."}
              </p>
            </div>
            <div className="device-frame">
              <LazyAutoplayVideo
                className="device-video"
                src="/screenshots/editor-demo.mp4"
                label={locale === "zh" ? "IDPhoto Pro 编辑证件照演示" : "IDPhoto Pro document photo editor demo"}
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
          <p className="eyebrow">{locale === "zh" ? "检查结果" : "Checks"}</p>
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
                alt={locale === "zh" ? "IDPhoto Pro 智能检测评分和问题提示" : "IDPhoto Pro smart check score and issue summary"}
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
          <p className="eyebrow">{locale === "zh" ? "导出方式" : "Export"}</p>
          <h2>{copy.home.exportHeading}</h2>
        </div>
        <div className="export-showcase-grid">
          <article className="image-card phone-media-card">
            <LazyAutoplayVideo
              className="device-video"
              src="/screenshots/export-demo.mp4"
              label={locale === "zh" ? "IDPhoto Pro 导出演示" : "IDPhoto Pro export demo"}
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
            <p className="card-label">{locale === "zh" ? "导出结果" : "Exported Result"}</p>
            <Image
              src="/screenshots/export-result-4up.jpg"
              alt={locale === "zh" ? "IDPhoto Pro 四张打印排版导出结果" : "IDPhoto Pro four-photo print layout export result"}
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
          <p className="eyebrow">{locale === "zh" ? "购买方式" : "Purchase"}</p>
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
              alt={locale === "zh" ? "IDPhoto Pro 一次解锁页面" : "IDPhoto Pro lifetime unlock screen"}
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
                {locale === "zh" ? "查看 App Store" : "Open App Store"}
              </Link>
              <Link className="button button-secondary" href={`/${locale}/support`}>
                {locale === "zh" ? "查看技术支持" : "See support"}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">{locale === "zh" ? "下载入口" : "Download"}</p>
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

      <section className="section app-store-section">
        <div className="section-heading">
          <p className="eyebrow">{locale === "zh" ? "App Store" : "App Store"}</p>
          <h2>{locale === "zh" ? "已在 App Store 上架" : "Available on the App Store"}</h2>
        </div>
        <div className="app-store-card">
          <div className="app-store-copy">
            <p>
              {locale === "zh"
                ? "在 App Store 查看 IDPhoto Pro 的截图、功能介绍和下载入口。核心功能包括离线处理、智能检测、AI 校准、官方规格模板、电子文件导出和打印排版。"
                : "View IDPhoto Pro screenshots, feature details, and download options on the App Store. The app focuses on on-device processing, smart checks, AI calibration, official-size presets, digital export, and print layouts."}
            </p>
            <div className="legal-links">
              <Link href={`/${locale}/download`}>{copy.nav.download}</Link>
              <Link href={`/${locale}/about`}>{copy.nav.about}</Link>
              <Link href={`/${locale}/support`}>{copy.nav.support}</Link>
              <Link href={`/${locale}/privacy`}>{copy.nav.privacy}</Link>
            </div>
          </div>
          <div className="app-store-shot-list">
            <Image
              src="/screenshots/app-store-listing-1.png"
              alt={locale === "zh" ? "IDPhoto Pro App Store 商店页标题和截图" : "IDPhoto Pro App Store listing title and screenshots"}
              width={2120}
              height={515}
            />
            <Image
              src="/screenshots/app-store-listing-2.png"
              alt={locale === "zh" ? "IDPhoto Pro App Store 商店页功能展示" : "IDPhoto Pro App Store listing feature preview"}
              width={2096}
              height={833}
            />
          </div>
        </div>
      </section>

      <section className="section seo-links-section secondary-section">
        <div className="section-heading">
          <p className="eyebrow">{locale === "zh" ? "规格指南" : "Guides"}</p>
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
    </main>
  );
}
