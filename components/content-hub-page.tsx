import Link from "next/link";
import type { Locale } from "@/data/localization";
import { seoPages, type SeoPage } from "@/data/seo-pages";

const hubCopy = {
  en: {
    eyebrow: "Guides",
    title: "Passport & Visa Photo Size Requirements Guide",
    intro:
      "Browse document photo size guides by country, document type, and export workflow. Each guide links to a focused page with size, background, digital file, print layout, and app workflow details.",
    countries: "By country and document",
    sizes: "By photo size and export workflow",
    gulf: "Gulf and Middle East guides",
    faq: "Common questions",
    cta: "Open guide",
    countryLabel: "Country",
    sizeLabel: "Size",
    faqItems: [
      {
        q: "Which page should I use first?",
        a: "Start with the page that matches your country and document. If you only know the size, use the size and print-layout guides."
      },
      {
        q: "Are these official government pages?",
        a: "No. These guides summarize common requirements and link to the app workflow. Always review the latest official source before submission."
      }
    ]
  },
  zh: {
    eyebrow: "指南",
    title: "护照照、签证照与证件照规格指南",
    intro:
      "按国家、证件类型和导出方式浏览证件照规格。每个指南页面都聚焦一个搜索意图，包含尺寸、背景、数字文件、打印排版和 App 制作流程。",
    countries: "按国家和证件查看",
    sizes: "按尺寸和导出方式查看",
    gulf: "海湾和中东证件照指南",
    faq: "常见问题",
    cta: "打开指南",
    countryLabel: "国家/地区",
    sizeLabel: "尺寸",
    faqItems: [
      {
        q: "应该先看哪个页面？",
        a: "优先选择与你的国家和证件类型匹配的页面。如果你只知道尺寸，可以查看尺寸和打印排版相关指南。"
      },
      {
        q: "这些页面是政府官网吗？",
        a: "不是。这些页面整理常见公开要求并说明 App 制作流程，最终提交前仍应核对官方来源。"
      }
    ]
  },
  ar: {
    eyebrow: "الأدلة",
    title: "دليل مقاسات صور الجواز والتأشيرة والهوية",
    intro:
      "تصفح أدلة صور المستندات حسب الدولة ونوع المستند وطريقة التصدير. يركز كل دليل على صفحة واحدة تتضمن المقاس والخلفية والملف الرقمي وتخطيط الطباعة وسير العمل داخل التطبيق.",
    countries: "حسب الدولة والمستند",
    sizes: "حسب المقاس وطريقة التصدير",
    gulf: "أدلة الخليج والشرق الأوسط",
    faq: "أسئلة شائعة",
    cta: "فتح الدليل",
    countryLabel: "الدولة/المنطقة",
    sizeLabel: "المقاس",
    faqItems: [
      {
        q: "أي صفحة أستخدم أولاً؟",
        a: "ابدأ بالصفحة المطابقة للدولة ونوع المستند. إذا كنت تعرف المقاس فقط، استخدم أدلة المقاسات وتخطيطات الطباعة."
      },
      {
        q: "هل هذه صفحات حكومية رسمية؟",
        a: "لا. هذه الأدلة تلخص المتطلبات الشائعة وتشرح سير العمل داخل التطبيق. راجع المصدر الرسمي قبل التقديم."
      }
    ]
  },
  de: {
    eyebrow: "Ratgeber",
    title: "Leitfaden für Pass-, Visa- und Ausweisfoto-Größen",
    intro:
      "Durchsuche Fotoanforderungen nach Land, Dokumenttyp und Exportablauf. Jede Seite bündelt Größe, Hintergrund, digitale Datei, Drucklayout und App-Workflow für ein konkretes Suchziel.",
    countries: "Nach Land und Dokument",
    sizes: "Nach Fotogröße und Export",
    gulf: "Golfstaaten und Nahost",
    faq: "Häufige Fragen",
    cta: "Ratgeber öffnen",
    countryLabel: "Land/Region",
    sizeLabel: "Größe",
    faqItems: [
      {
        q: "Welche Seite sollte ich zuerst öffnen?",
        a: "Beginne mit dem passenden Land und Dokument. Wenn du nur die Größe kennst, nutze die Größen- und Drucklayout-Ratgeber."
      },
      {
        q: "Sind diese Seiten offizielle Behördenseiten?",
        a: "Nein. Die Ratgeber fassen häufige Anforderungen zusammen und erklären den App-Workflow. Prüfe vor der Abgabe immer die offizielle Quelle."
      }
    ]
  }
};

const gulfCountries = new Set(["Saudi Arabia", "United Arab Emirates", "Oman", "Bahrain", "Qatar", "Kuwait"]);

export function ContentHubPage({ locale }: { locale: Locale }) {
  const copy = hubCopy[locale];
  const countryPages = seoPages.filter((page) => page.searchIntent === "country-document").slice(0, 18);
  const sizePages = seoPages.filter((page) => page.searchIntent !== "country-document");
  const gulfPages = seoPages.filter((page) => gulfCountries.has(page.country));

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>

        <HubSection title={copy.countries} pages={countryPages} locale={locale} cta={copy.cta} countryLabel={copy.countryLabel} sizeLabel={copy.sizeLabel} />
        <HubSection title={copy.sizes} pages={sizePages} locale={locale} cta={copy.cta} countryLabel={copy.countryLabel} sizeLabel={copy.sizeLabel} />
        <HubSection title={copy.gulf} pages={gulfPages} locale={locale} cta={copy.cta} countryLabel={copy.countryLabel} sizeLabel={copy.sizeLabel} />

        <section className="seo-faq">
          <p className="card-label">FAQ</p>
          <h2>{copy.faq}</h2>
          <div className="faq-list">
            {copy.faqItems.map((item) => (
              <article className="seo-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function HubSection({
  title,
  pages,
  locale,
  cta,
  countryLabel,
  sizeLabel
}: {
  title: string;
  pages: SeoPage[];
  locale: Locale;
  cta: string;
  countryLabel: string;
  sizeLabel: string;
}) {
  if (pages.length === 0) {
    return null;
  }

  return (
    <section className="seo-faq">
      <p className="card-label">{title}</p>
      <div className="seo-grid">
        {pages.map((page) => (
          <article className="seo-card" key={page.slug}>
            <h2>{page.title}</h2>
            <p>{page.intro}</p>
            <ul className="check-list">
              <li>{countryLabel}: {page.country}</li>
              <li>{sizeLabel}: {page.size}</li>
            </ul>
            <Link className="button button-secondary" href={`/${locale}/${page.slug}`}>
              {cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
