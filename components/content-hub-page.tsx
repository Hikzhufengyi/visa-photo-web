import { SpecCatalogSearch } from "@/components/spec-catalog-search";
import { appPhotoSpecs } from "@/data/app-photo-specs";
import type { Locale } from "@/data/localization";

const hubCopy = {
  en: {
    eyebrow: "Guides",
    title: "Common Passport, Visa & ID Photo Size Guides",
    intro:
      "Search 100+ app presets by country, document type, size, or pixel target. Some popular specs also link to focused guides with size, background, digital file, print layout, and app workflow details.",
    faq: "Common questions",
    faqItems: [
      {
        q: "Which page should I use first?",
        a: "Search for your country, document type, or size. If a focused guide exists, open it; otherwise use the matching preset inside the app."
      },
      {
        q: "Are these official government pages?",
        a: "No. These guides summarize common requirements and link to the app workflow. Always review the latest official source before submission."
      }
    ]
  },
  zh: {
    eyebrow: "指南",
    title: "常见护照照、签证照与证件照规格指南",
    intro:
      "按国家、证件类型、尺寸或像素检索 100+ App 规格。部分热门规格也提供独立指南，包含尺寸、背景、数字文件、打印排版和 App 制作流程。",
    faq: "常见问题",
    faqItems: [
      {
        q: "应该先看哪个页面？",
        a: "可以先搜索国家、证件类型或尺寸。如果有独立指南就打开指南；没有独立页面的规格，也可以直接在 App 里选择对应模板制作。"
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
      "ابحث في أكثر من 100 قالب داخل التطبيق حسب الدولة أو نوع المستند أو المقاس أو البكسل. بعض القوالب الشائعة تتضمن أيضاً أدلة مفصلة.",
    faq: "أسئلة شائعة",
    faqItems: [
      {
        q: "أي صفحة أستخدم أولاً؟",
        a: "ابحث عن الدولة أو نوع المستند أو المقاس. إذا توفر دليل مفصل فافتحه، وإلا استخدم القالب المطابق داخل التطبيق."
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
      "Durchsuche über 100 App-Vorlagen nach Land, Dokumenttyp, Größe oder Pixelziel. Einige beliebte Vorlagen verlinken zusätzlich auf ausführliche Ratgeber.",
    faq: "Häufige Fragen",
    faqItems: [
      {
        q: "Welche Seite sollte ich zuerst öffnen?",
        a: "Suche nach Land, Dokumenttyp oder Größe. Wenn es einen ausführlichen Ratgeber gibt, öffne ihn; sonst nutze die passende Vorlage in der App."
      },
      {
        q: "Sind diese Seiten offizielle Behördenseiten?",
        a: "Nein. Die Ratgeber fassen häufige Anforderungen zusammen und erklären den App-Workflow. Prüfe vor der Abgabe immer die offizielle Quelle."
      }
    ]
  }
};

export function ContentHubPage({ locale }: { locale: Locale }) {
  const copy = hubCopy[locale];

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>

        <SpecCatalogSearch locale={locale} specs={appPhotoSpecs} />

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
