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
  const jsonLd = buildSeoPageJsonLd(page, locale);
  const relatedPages = getRelatedPages(page);
  const quickAnswer = getQuickAnswer(page, locale);
  const geoQuestions = buildGeoQuestions(page, locale);

  return (
    <main className="legal-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.qa) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.howTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.software) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.article) }}
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
        </section>

        <section className="seo-grid">
          <article className="seo-card">
            <p className="card-label">{isZh ? "照片规格" : isAr ? "مواصفات الصورة" : isDe ? "Fotodaten" : "Photo Specs"}</p>
            <h2>
              {isZh ? `${page.documentName} 照片规格` : isAr ? `مقاس صورة ${page.documentName}` : isDe ? `${page.documentName} Fotogröße` : `${page.documentName} photo size`}
            </h2>
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
              {isZh ? "如何在 iPhone 上制作这类照片" : isAr ? "كيفية إنشاء هذه الصورة على iPhone" : isDe ? "So erstellst du dieses Foto auf dem iPhone" : "How to create this photo on iPhone"}
            </h2>
            <ol className="launch-list">
              {page.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="seo-card">
            <p className="card-label">{isZh ? "为什么适合这个 App" : isAr ? "لماذا هذا التطبيق" : isDe ? "Warum diese App passt" : "Why This Tool"}</p>
            <h2>{isZh ? "功能和这个页面的需求是匹配的" : isAr ? "لماذا يناسب هذا التطبيق هذه الصفحة" : isDe ? "Die App passt zu diesem Ablauf" : "Why this page matches the app"}</h2>
            <p>
              {isZh
                ? "IDPhoto Pro 的流程是先选择国家或证件规格，再在 iPhone 本地调整照片、检查背景和构图，最后导出电子文件或打印排版。它不是政府官方服务，也不会保证最终受理结果。"
                : isAr
                  ? "يعتمد IDPhoto Pro على اختيار قالب الدولة أو المستند، ثم ضبط الصورة محلياً على iPhone، ومراجعة الخلفية والإطار، ثم تصدير ملف رقمي أو تخطيط للطباعة. التطبيق ليس خدمة حكومية ولا يضمن القبول النهائي."
                  : isDe
                    ? "IDPhoto Pro ist für diesen Ablauf gebaut: Land oder Dokumentvorlage auswählen, Foto lokal auf dem iPhone anpassen, Hintergrund und Bildausschnitt prüfen und anschließend digital oder druckfertig exportieren."
                    : "IDPhoto Pro is designed for this workflow: choose a country or document preset, adjust the photo locally on iPhone, review checks like background and framing, then export a digital file or print-ready layout without using a cloud workflow."}
            </p>
          </article>
        </section>

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

        <section className="seo-faq geo-question-section">
          <p className="card-label">{isZh ? "GEO 问答索引" : isAr ? "فهرس أسئلة GEO" : isDe ? "GEO-Fragenindex" : "GEO question index"}</p>
          <h2>{isZh ? "更多用户会问的问题" : isAr ? "أسئلة إضافية يطرحها المستخدمون" : isDe ? "Weitere Fragen, die Nutzer stellen" : "More questions people ask"}</h2>
          <div className="geo-question-list">
            {geoQuestions.map((item) => (
              <article className="geo-question-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

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
