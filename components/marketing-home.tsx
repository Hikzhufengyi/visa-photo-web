import Image from "next/image";
import Link from "next/link";
import { DownloadQr } from "@/components/download-qr";
import type { Locale } from "@/data/localization";
import { getCopy } from "@/data/localization";
import { siteConfig } from "@/data/site";

const seoLinks = [
  "us-passport-photo-size",
  "us-visa-photo-size",
  "green-card-photo-requirements",
  "schengen-visa-photo-size",
  "canada-visa-photo-size",
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

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{copy.home.eyebrow}</p>
          <h1>{copy.home.title}</h1>
          <p className="hero-text">{copy.home.description}</p>
          <div className="mini-nav">
            <Link href={`/${locale}/download`}>{copy.nav.download}</Link>
            <Link href={`/${locale}/about`}>{copy.nav.about}</Link>
            <Link href={`/${locale}/support`}>{copy.nav.support}</Link>
            <Link href={`/${locale}/blog`}>{copy.nav.blog}</Link>
          </div>
          <ul className="hero-points">
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
              <h3>{locale === "zh" ? "按国家、证件和尺寸搜索规格" : "Search presets by country, document, and size"}</h3>
              <p>
                {locale === "zh"
                  ? "App 内置的是官方规格库，不只是单一的 2x2 裁切。用户可以按国家、护照、签证、移民和打印用途筛选模板。"
                  : "The app ships with a real preset library, not a single 2x2 cropper. Users can filter templates by country, passport, visa, immigration, and print use cases."}
              </p>
            </div>
            <div className="device-frame">
              <Image
                src="/screenshots/home.png"
                alt="IDPhoto Pro preset library"
                width={1320}
                height={2868}
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
              <h3>{locale === "zh" ? "裁切、缩放、旋转和修图后即时检查" : "Adjust and review instantly in one editor"}</h3>
              <p>
                {locale === "zh"
                  ? "编辑器不只是移动头像，还包含背景切换、亮度、对比度、阴影、色温和锐度等调整。"
                  : "The editor handles more than drag-to-move. It includes background switching, brightness, contrast, shadow, warmth, and sharpness controls."}
              </p>
            </div>
            <div className="device-frame">
              <Image
                src="/screenshots/editor.png"
                alt="IDPhoto Pro editor"
                width={1320}
                height={2868}
              />
            </div>
          </article>
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
            <ul className="check-list">
              {copy.home.checks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="image-card">
            <div className="device-frame">
              <Image
                src="/screenshots/checks.png"
                alt="IDPhoto Pro compliance checks"
                width={1320}
                height={2868}
              />
            </div>
          </article>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">{locale === "zh" ? "导出方式" : "Export"}</p>
          <h2>{copy.home.exportHeading}</h2>
        </div>
        <div className="split-grid reverse">
          <article className="image-card wide-image-card">
            <Image
              src="/screenshots/export-sheet.png"
              alt="IDPhoto Pro print layout preview"
              width={1320}
              height={2868}
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
            <ul className="check-list">
              {copy.home.pricingItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="info-card">
            <p>
              {locale === "zh"
                ? "这类购买模式更适合低频但高意图的护照照和签证照需求，也更容易建立用户信任。"
                : "This purchase model fits low-frequency but high-intent document-photo needs and makes the product easier to trust."}
            </p>
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
          <p className="eyebrow">{locale === "zh" ? "产品定位" : "Positioning"}</p>
          <h2>{locale === "zh" ? "官网描述要和 App Store 实际功能一致" : "Site messaging should match the real App Store product"}</h2>
        </div>
        <div className="app-store-card">
          <div className="app-store-copy">
            <p>
              {locale === "zh"
                ? "这款产品的真实定位是 iPhone 上的证件照制作工具，强调本地处理、规则检查、导出和打印能力，而不是在线上传到服务器的 Web 修图服务。"
                : "The real product is an iPhone document-photo tool focused on on-device processing, compliance checks, export, and print workflows, not a cloud photo-editing service."}
            </p>
            <div className="legal-links">
              <Link href={`/${locale}/download`}>{copy.nav.download}</Link>
              <Link href={`/${locale}/about`}>{copy.nav.about}</Link>
              <Link href={`/${locale}/support`}>{copy.nav.support}</Link>
              <Link href={`/${locale}/privacy`}>{copy.nav.privacy}</Link>
            </div>
          </div>
          <div className="app-store-shot">
            <Image
              src="/screenshots/app-store.png"
              alt="IDPhoto Pro App Store page"
              width={1320}
              height={2868}
            />
          </div>
        </div>
      </section>

      <section className="section seo-links-section">
        <div className="section-heading">
          <p className="eyebrow">SEO</p>
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
