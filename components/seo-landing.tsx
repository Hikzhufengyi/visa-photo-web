import Link from "next/link";
import type { Locale } from "@/data/localization";
import type { SeoPage } from "@/data/seo-pages";
import { siteConfig } from "@/data/site";

export function SeoLanding({
  locale,
  page
}: {
  locale: Locale;
  page: SeoPage;
}) {
  const isZh = locale === "zh";

  return (
    <main className="legal-page">
      <div className="seo-shell">
        <div className="seo-hero">
          <p className="eyebrow">
            {isZh ? "证件照规格指南" : "Document Photo Guide"}
          </p>
          <h1>{page.heading}</h1>
          <p>{page.intro}</p>
          <div className="hero-actions">
            <Link
              className="button button-primary"
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              {isZh ? "下载 iPhone App" : "Download on the App Store"}
            </Link>
            <Link className="button button-secondary" href={`/${locale}/download`}>
              {isZh ? "查看下载页" : "Open download page"}
            </Link>
          </div>
        </div>

        <section className="seo-grid">
          <article className="seo-card">
            <p className="card-label">{isZh ? "照片规格" : "Photo Specs"}</p>
            <h2>
              {isZh ? `${page.documentName} 照片规格` : `${page.documentName} photo size`}
            </h2>
            <ul className="check-list">
              <li>{isZh ? `国家/地区：${page.country}` : `Country: ${page.country}`}</li>
              <li>{isZh ? `证件类型：${page.documentName}` : `Document: ${page.documentName}`}</li>
              <li>{isZh ? `常见尺寸：${page.size}` : `Typical size: ${page.size}`}</li>
              <li>
                {isZh
                  ? `建议数字文件：${page.pixels}`
                  : `Recommended digital file: ${page.pixels}`}
              </li>
              <li>{isZh ? `背景：${page.background}` : `Background: ${page.background}`}</li>
            </ul>
          </article>

          <article className="seo-card">
            <p className="card-label">{isZh ? "核对要点" : "Requirements"}</p>
            <h2>{isZh ? "制作前建议核对这些项目" : "Typical requirements to review"}</h2>
            <ul className="check-list">
              {page.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="seo-grid">
          <article className="seo-card">
            <p className="card-label">{isZh ? "操作方式" : "How To"}</p>
            <h2>
              {isZh ? "如何在 iPhone 上制作这类照片" : "How to create this photo on iPhone"}
            </h2>
            <ol className="launch-list">
              {page.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="seo-card">
            <p className="card-label">{isZh ? "为什么适合这个 App" : "Why This Tool"}</p>
            <h2>{isZh ? "功能和这个页面的需求是匹配的" : "Why this page matches the app"}</h2>
            <p>
              {isZh
                ? "IDPhoto Pro 的流程是先选择国家或证件规格，再在 iPhone 本地调整照片、检查背景和构图，最后导出电子文件或打印排版。它不是政府官方服务，也不会保证最终受理结果。"
                : "IDPhoto Pro is designed for this workflow: choose a country or document preset, adjust the photo locally on iPhone, review checks like background and framing, then export a digital file or print-ready layout without using a cloud workflow."}
            </p>
          </article>
        </section>

        <section className="seo-faq">
          <p className="card-label">FAQ</p>
          <h2>{isZh ? "常见问题" : "Frequently asked questions"}</h2>
          <div className="faq-list">
            {page.faq.map((item) => (
              <article className="seo-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
