import Link from "next/link";
import { TrackedLink } from "@/components/tracked-link";
import { buildGeoQuestions } from "@/data/geo-question-bank";
import type { Locale } from "@/data/localization";
import { seoPages, type SeoPage } from "@/data/seo-pages";
import { buildSeoPageJsonLd } from "@/data/seo-utils";
import { siteConfig } from "@/data/site";

export function SeoLanding({
  locale,
  page
}: {
  locale: Locale;
  page: SeoPage;
}) {
  const isZh = locale === "zh";
  const isAr = locale === "ar";
  const isDe = locale === "de";
  const isGuide = page.contentKind === "guide";
  const isOfficialFirst = page.conversionMode === "official-first";
  const jsonLd = buildSeoPageJsonLd(page, locale);
  const relatedPages = getRelatedPages(page);
  const quickAnswer = getQuickAnswer(page, locale);
  const geoQuestions = buildGeoQuestions(page, locale);
  const preparationGuides = getPreparationGuides(page);

  return (
    <main className="legal-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.howTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.article) }}
      />
      {jsonLd.comparison ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.comparison) }}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumb) }}
      />
      <div className="seo-shell">
        <div className="seo-hero">
          <p className="eyebrow">
            {isZh ? "证件照规格指南" : isAr ? "دليل صور المستندات" : isDe ? "Ratgeber für Ausweisfotos" : "Document Photo Guide"}
          </p>
          <h1>{page.heading}</h1>
          <p>{page.intro}</p>
          <div className="hero-actions">
            {isOfficialFirst && page.sourceUrl ? (
              <TrackedLink
                className="button button-primary"
                href={page.sourceUrl}
                target="_blank"
                rel="noreferrer"
                eventName="official_source_click"
                eventParams={{ source: "seo_landing", locale, slug: page.slug }}
              >
                {isZh ? "查看当前官方要求" : "Review current official guidance"}
              </TrackedLink>
            ) : (
              <>
                <TrackedLink
                  className="button button-primary"
                  href={siteConfig.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  eventName="app_store_click"
                  eventParams={{ source: "seo_landing", locale, slug: page.slug }}
                >
                  {isZh
                    ? "在 iPhone 上制作这张证件照"
                    : isAr
                      ? "إنشاء هذه الصورة على iPhone"
                      : isDe
                        ? "Dieses Foto auf dem iPhone erstellen"
                        : "Create this photo on iPhone"}
                </TrackedLink>
                <TrackedLink
                  className="button button-secondary"
                  href={`/${locale}/download`}
                  eventName="download_page_click"
                  eventParams={{ source: "seo_landing", locale, slug: page.slug }}
                >
                  {isZh
                    ? "下载 IDPhoto Pro"
                    : isAr
                      ? "تنزيل IDPhoto Pro"
                      : isDe
                        ? "IDPhoto Pro laden"
                        : "Download IDPhoto Pro"}
                </TrackedLink>
              </>
            )}
          </div>
        </div>

        <section className="geo-answer-card">
          <p className="card-label">{isZh ? "快速答案" : isAr ? "إجابة سريعة" : isDe ? "Kurzantwort" : "Quick Answer"}</p>
          <h2>{page.geoQuestion ?? page.heading}</h2>
          <p>{page.answerSummary ?? page.intro}</p>
          <dl className="geo-answer-grid">
            {quickAnswer.map((item) => (
              <div key={`${item.label}-${item.value}`}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="geo-answer-note">
            {isZh
              ? "IDPhoto Pro 只制作照片文件，不生成任何证件、护照、签证或官方文件。"
              : isAr
                ? "ينشئ IDPhoto Pro ملفات صور فقط ولا ينشئ جوازات أو تأشيرات أو هويات أو مستندات رسمية."
                : isDe
                  ? "IDPhoto Pro erstellt nur Fotodateien, keine Ausweise, Pässe, Visa oder amtlichen Dokumente."
                : "IDPhoto Pro creates photo files only. It does not generate IDs, passports, visas, or official documents."}
          </p>
          <dl className="geo-source-row">
            {getGeoTrustItems(page, locale).map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="seo-grid">
          <article className="seo-card">
            <p className="card-label">{isGuide ? (isZh ? "使用边界" : "Scope and limits") : (isZh ? "照片规格" : isAr ? "مواصفات الصورة" : isDe ? "Fotodaten" : "Photo Specs")}</p>
            <h2>
              {isGuide
                ? (isZh ? "本指南能帮助什么" : "What this guide can help with")
                : (isZh ? `${page.documentName} 照片规格` : isAr ? `مقاس صورة ${page.documentName}` : isDe ? `${page.documentName} Fotogröße` : `${page.documentName} photo size`)}
            </h2>
            {isGuide ? (
              <p>
                {isZh
                  ? "本指南帮助你准备照片文件和识别需要重拍或复核的风险。它不替代接收机构的最新要求，也不保证最终受理。"
                  : "This guide helps you prepare a photo file and identify risks that may need a retake or review. It does not replace the current receiving-authority rule or guarantee final acceptance."}
              </p>
            ) : (
              <ul className="check-list">
                <li>{isZh ? `国家/地区：${page.country}` : isAr ? `الدولة/المنطقة: ${page.country}` : isDe ? `Land/Region: ${page.country}` : `Country: ${page.country}`}</li>
                <li>{isZh ? `证件类型：${page.documentName}` : isAr ? `المستند: ${page.documentName}` : isDe ? `Dokument: ${page.documentName}` : `Document: ${page.documentName}`}</li>
                <li>{isZh ? `常见尺寸：${page.size}` : isAr ? `المقاس الشائع: ${page.size}` : isDe ? `Übliche Größe: ${page.size}` : `Typical size: ${page.size}`}</li>
                <li>
                  {isZh
                    ? `建议数字文件：${page.pixels}`
                    : isAr
                      ? `الملف الرقمي المقترح: ${page.pixels}`
                      : isDe
                        ? `Empfohlene digitale Datei: ${page.pixels}`
                        : `Recommended digital file: ${page.pixels}`}
                </li>
                <li>{isZh ? `背景：${page.background}` : isAr ? `الخلفية: ${page.background}` : isDe ? `Hintergrund: ${page.background}` : `Background: ${page.background}`}</li>
              </ul>
            )}
            {page.sourceUrl ? (
              <Link
                className="inline-source-link"
                href={page.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                {isZh ? "查看官方要求来源" : isAr ? "مراجعة مصدر المتطلبات الرسمي" : isDe ? "Offizielle Quelle ansehen" : "Review official requirement source"}
              </Link>
            ) : null}
          </article>

          <article className="seo-card">
            <p className="card-label">{isZh ? "核对要点" : isAr ? "نقاط المراجعة" : isDe ? "Prüfpunkte" : "Requirements"}</p>
            <h2>{isZh ? "制作前建议核对这些项目" : isAr ? "متطلبات شائعة للمراجعة" : isDe ? "Typische Anforderungen vor dem Export prüfen" : "Typical requirements to review"}</h2>
            <ul className="check-list">
              {page.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="seo-grid">
          <article className="seo-card">
            <p className="card-label">{isZh ? "操作方式" : isAr ? "طريقة العمل" : isDe ? "Vorgehen" : "How To"}</p>
            <h2>
              {isGuide
                ? (isZh ? "如何使用本指南" : "How to use this guide")
                : (isZh ? "如何在 iPhone 上制作这类照片" : isAr ? "كيفية إنشاء هذه الصورة على iPhone" : isDe ? "So erstellst du dieses Foto auf dem iPhone" : "How to create this photo on iPhone")}
            </h2>
            <ol className="launch-list">
              {page.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="seo-card">
            <p className="card-label">
              {isOfficialFirst
                ? (isZh ? "最终核对" : "Final check")
                : (isZh ? "为什么适合这个 App" : isAr ? "لماذا هذا التطبيق" : isDe ? "Warum diese App passt" : "Why This Tool")}
            </p>
            <h2>
              {isOfficialFirst
                ? (isZh ? "以官方流程为准" : "Use the official process as the final authority")
                : isGuide
                  ? (isZh ? "IDPhoto Pro 如何帮助" : "How IDPhoto Pro helps")
                  : (isZh ? "功能和这个页面的需求是匹配的" : isAr ? "لماذا يناسب هذا التطبيق هذه الصفحة" : isDe ? "Die App passt zu diesem Ablauf" : "Why this page matches the app")}
            </h2>
            <p>
              {isOfficialFirst
                ? (isZh
                  ? "这页用于理解适用规则，不替代接收机构的当前要求、拍摄方式或提交流程。提交前请回到页面顶部的官方来源，并以其最新说明为准。"
                  : "This page helps you understand the applicable rule. It does not replace the receiving authority's current capture, editing, or submission process. Before submitting, return to the official source linked above and follow its latest instruction.")
                : isZh
                ? "IDPhoto Pro 的流程是先选择国家或证件规格，再在 iPhone 本地调整照片、检查背景和构图，最后导出电子文件或打印排版。它不是政府官方服务，也不会保证最终受理结果。"
                : isAr
                  ? "يعتمد IDPhoto Pro على اختيار قالب الدولة أو المستند، ثم ضبط الصورة محلياً على iPhone، ومراجعة الخلفية والإطار، ثم تصدير ملف رقمي أو تخطيط للطباعة. التطبيق ليس خدمة حكومية ولا يضمن القبول النهائي."
                  : isDe
                    ? "IDPhoto Pro ist für diesen Ablauf gebaut: Land oder Dokumentvorlage auswählen, Foto lokal auf dem iPhone anpassen, Hintergrund und Bildausschnitt prüfen und anschließend digital oder druckfertig exportieren."
                    : "IDPhoto Pro is designed for this workflow: choose a country or document preset, adjust the photo locally on iPhone, review checks like background and framing, then export a digital file or print-ready layout without using a cloud workflow."}
            </p>
          </article>
        </section>

        {page.comparisonRows?.length ? (
          <section className="seo-faq comparison-section">
            <p className="card-label">{isZh ? "决策对比" : isAr ? "مقارنة القرار" : isDe ? "Entscheidungshilfe" : "Decision comparison"}</p>
            <h2>{isZh ? "为什么这个场景适合用 IDPhoto Pro" : isAr ? "لماذا يناسب IDPhoto Pro هذا الاستخدام" : isDe ? "Warum IDPhoto Pro für diesen Fall passt" : "Why IDPhoto Pro fits this use case"}</h2>
            <div className="comparison-table" role="table">
              <div className="comparison-row comparison-row-head" role="row">
                <div role="columnheader">{isZh ? "用户关心点" : isAr ? "ما يهم المستخدم" : isDe ? "Kriterium" : "What matters"}</div>
                <div role="columnheader">IDPhoto Pro</div>
                <div role="columnheader">{isZh ? "常见替代方案" : isAr ? "البديل الشائع" : isDe ? "Typische Alternative" : "Common alternative"}</div>
              </div>
              {page.comparisonRows.map((row) => (
                <div className="comparison-row" role="row" key={row.factor}>
                  <div role="cell">{row.factor}</div>
                  <div role="cell">{row.idphotoPro}</div>
                  <div role="cell">{row.alternative}</div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {page.topicLinks?.length ? (
          <section className="seo-faq topic-link-section">
            <p className="card-label">Choose the task you need to complete</p>
            <h2>{page.country} passport photo help by question</h2>
            <div className="seo-grid">
              {page.topicLinks.map((item) => (
                <article className="seo-card" key={item.slug}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link className="button button-secondary" href={`/${locale}/${item.slug}`}>
                    Read this guide
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="seo-faq">
          <p className="card-label">FAQ</p>
          <h2>{isZh ? "常见问题" : isAr ? "الأسئلة الشائعة" : isDe ? "Häufige Fragen" : "Frequently asked questions"}</h2>
          <div className="faq-list">
            {page.faq.map((item) => (
              <article className="seo-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        {geoQuestions.length > 0 ? (
          <section className="seo-faq geo-question-section">
            <p className="card-label">{isZh ? "GEO 问答索引" : "GEO question index"}</p>
            <h2>{isZh ? "更多用户会问的问题" : "More questions people ask"}</h2>
            <div className="geo-question-list">
              {geoQuestions.map((item) => (
                <article className="geo-question-item" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {preparationGuides.length > 0 ? (
          <section className="seo-faq">
            <p className="card-label">{isZh ? "拍摄与提交帮助" : "Photo preparation help"}</p>
            <h2>{isZh ? "提交前处理常见风险" : "Solve common risks before you submit"}</h2>
            <div className="seo-grid">
              {preparationGuides.map((guide) => (
                <article className="seo-card" key={guide.slug}>
                  <h3>{guide.title}</h3>
                  <p>{guide.answerSummary ?? guide.intro}</p>
                  <Link className="button button-secondary" href={`/${locale}/${guide.slug}`}>
                    {isZh ? "查看指南" : "Read guide"}
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {relatedPages.length > 0 ? (
          <section className="seo-faq">
            <p className="card-label">{isZh ? "相关规格" : isAr ? "أدلة مرتبطة" : isDe ? "Verwandte Ratgeber" : "Related guides"}</p>
            <h2>{isZh ? "继续查看相关证件照规格" : isAr ? "تابع تصفح أدلة الصور المرتبطة" : isDe ? "Weitere passende Fotoanforderungen" : "Continue with related photo requirements"}</h2>
            <div className="seo-grid">
              {relatedPages.map((related) => (
                <article className="seo-card" key={related.slug}>
                  <h3>{related.title}</h3>
                  <p>{related.country} · {related.documentName} · {related.size}</p>
                  <Link className="button button-secondary" href={`/${locale}/${related.slug}`}>
                    {isZh ? "打开规格" : isAr ? "فتح الدليل" : isDe ? "Ratgeber öffnen" : "Open guide"}
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}

function getGeoTrustItems(page: SeoPage, locale: Locale) {
  const isZh = locale === "zh";
  const isAr = locale === "ar";
  const isDe = locale === "de";

  return [
    {
      label: isZh ? "更新时间" : isAr ? "آخر مراجعة" : isDe ? "Geprüft" : "Last reviewed",
      value: page.sourceReviewedAt ?? "2026-07-16"
    },
    {
      label: isZh ? "要求来源" : isAr ? "المصدر" : isDe ? "Quelle" : "Requirement source",
      value: page.sourceUrl
        ? (isZh ? "已提供来源链接" : isAr ? "رابط المصدر متاح" : isDe ? "Quellenlink vorhanden" : "Source link available")
        : (isZh ? "按公开照片要求整理" : isAr ? "ملخص من متطلبات الصور العامة" : isDe ? "Aus öffentlichen Fotoanforderungen zusammengefasst" : "Summarized from public photo requirements")
    },
    {
      label: isZh ? "适用范围" : isAr ? "النطاق" : isDe ? "Umfang" : "Scope",
      value: isZh
        ? "照片文件制作"
        : isAr
          ? "إعداد ملف الصورة"
          : isDe
            ? "Fotodatei erstellen"
            : "Photo file preparation"
    }
  ];
}

function getQuickAnswer(page: SeoPage, locale: Locale) {
  if (page.quickAnswer?.length) {
    return page.quickAnswer;
  }

  const isZh = locale === "zh";
  const isAr = locale === "ar";
  const isDe = locale === "de";

  return [
    {
      label: isZh ? "尺寸" : isAr ? "المقاس" : isDe ? "Größe" : "Size",
      value: page.size
    },
    {
      label: isZh ? "像素/文件" : isAr ? "البكسل/الملف" : isDe ? "Pixel/Datei" : "Pixels/File",
      value: page.pixels
    },
    {
      label: isZh ? "背景" : isAr ? "الخلفية" : isDe ? "Hintergrund" : "Background",
      value: page.background
    },
    {
      label: isZh ? "导出" : isAr ? "التصدير" : isDe ? "Export" : "Export",
      value: isZh
        ? "电子版或打印排版"
        : isAr
          ? "ملف رقمي أو تخطيط طباعة"
          : isDe
            ? "Digitaldatei oder Drucklayout"
            : "Digital file or print layout"
    }
  ];
}

function getRelatedPages(page: SeoPage) {
  return seoPages
    .filter((candidate) => candidate.slug !== page.slug)
    .map((candidate) => ({
      page: candidate,
      score:
        (candidate.country === page.country ? 4 : 0) +
        (candidate.size === page.size ? 3 : 0) +
        (candidate.searchIntent === page.searchIntent ? 1 : 0)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.page.title.localeCompare(b.page.title))
    .slice(0, 4)
    .map((item) => item.page);
}

const preparationGuideSlugs = [
  "passport-photo-rejected-what-to-fix",
  "take-passport-photo-at-home-iphone",
  "can-you-edit-passport-photo-background",
  "passport-photo-app-vs-photo-shop"
];

function getPreparationGuides(page: SeoPage) {
  if (preparationGuideSlugs.includes(page.slug)) {
    return [];
  }

  return preparationGuideSlugs
    .map((slug) => seoPages.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is SeoPage => Boolean(candidate));
}
