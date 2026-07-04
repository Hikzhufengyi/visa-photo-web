"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { AppPhotoSpec } from "@/data/app-photo-specs";
import { getSeoSlugForSpec } from "@/data/generated-seo-pages";
import type { Locale } from "@/data/localization";

const copy = {
  en: {
    search: "Search country, document, size, or pixels",
    all: "All",
    passport: "Passport",
    visa: "Visa",
    immigration: "Immigration / ID",
    print: "Print sizes",
    count: (shown: number, total: number) => `${shown} of ${total} app presets`,
    guide: "Open guide",
    noResults: "No matching presets. Try a country, document type, or size such as 35 x 45."
  },
  zh: {
    search: "搜索国家、证件类型、尺寸或像素",
    all: "全部",
    passport: "护照",
    visa: "签证",
    immigration: "移民 / ID",
    print: "打印尺寸",
    count: (shown: number, total: number) => `显示 ${shown} / ${total} 个 App 规格`,
    guide: "打开指南",
    noResults: "没有匹配的规格。可以试试国家、证件类型，或输入 35 x 45 这样的尺寸。"
  },
  ar: {
    search: "ابحث حسب الدولة أو المستند أو المقاس",
    all: "الكل",
    passport: "جواز",
    visa: "تأشيرة",
    immigration: "إقامة / هوية",
    print: "مقاسات الطباعة",
    count: (shown: number, total: number) => `${shown} من ${total} قالباً في التطبيق`,
    guide: "فتح الدليل",
    noResults: "لا توجد نتائج مطابقة. جرّب دولة أو نوع مستند أو مقاساً مثل 35 x 45."
  },
  de: {
    search: "Nach Land, Dokument, Größe oder Pixeln suchen",
    all: "Alle",
    passport: "Pass",
    visa: "Visum",
    immigration: "Aufenthalt / ID",
    print: "Druckgrößen",
    count: (shown: number, total: number) => `${shown} von ${total} App-Vorlagen`,
    guide: "Ratgeber öffnen",
    noResults: "Keine passenden Vorlagen. Suche nach Land, Dokumenttyp oder einer Größe wie 35 x 45."
  }
};

const categoryOrder: Array<AppPhotoSpec["category"] | "all"> = [
  "all",
  "passport",
  "visa",
  "immigration",
  "print"
];

export function SpecCatalogSearch({
  locale,
  specs
}: {
  locale: Locale;
  specs: AppPhotoSpec[];
}) {
  const labels = copy[locale];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<AppPhotoSpec["category"] | "all">("all");

  const filteredSpecs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return specs.filter((spec) => {
      const matchesCategory = category === "all" || spec.category === category;
      if (!matchesCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return [
        spec.id,
        spec.country,
        spec.countryZh,
        spec.title,
        spec.titleZh,
        spec.category,
        spec.size,
        spec.pixels
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [category, query, specs]);

  return (
    <section className="seo-faq spec-catalog-section">
      <div className="spec-search-panel">
        <label className="spec-search-label" htmlFor="spec-search">
          {labels.search}
        </label>
        <input
          id="spec-search"
          className="spec-search-input"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={labels.search}
        />
        <div className="spec-filter-row" aria-label={labels.search}>
          {categoryOrder.map((item) => (
            <button
              className={`spec-filter-button${category === item ? " spec-filter-button-active" : ""}`}
              key={item}
              type="button"
              onClick={() => setCategory(item)}
            >
              {labels[item]}
            </button>
          ))}
        </div>
        <p className="spec-result-count">{labels.count(filteredSpecs.length, specs.length)}</p>
      </div>

      {filteredSpecs.length > 0 ? (
        <div className="seo-grid spec-catalog-grid">
          {filteredSpecs.map((spec) => {
            const slug = getSeoSlugForSpec(spec.id);
            const title = locale === "zh" ? spec.titleZh : spec.title;
            const country = locale === "zh" ? spec.countryZh : spec.country;

            return (
              <article className="seo-card spec-card" key={spec.id}>
                <p className="card-label">{labels[spec.category]}</p>
                <h2>{title}</h2>
                <ul className="check-list">
                  <li>{country}</li>
                  <li>{spec.size}</li>
                  <li>{spec.pixels}</li>
                </ul>
                <Link className="button button-secondary" href={`/${locale}/${slug}`}>
                  {labels.guide}
                </Link>
              </article>
            );
          })}
        </div>
      ) : (
        <article className="seo-card">
          <p>{labels.noResults}</p>
        </article>
      )}
    </section>
  );
}
