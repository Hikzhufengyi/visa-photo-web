import type { SeoPage } from "@/data/seo-pages";

export const coreSeoKeywords = [
  "passport photo app",
  "visa photo app",
  "ID photo app",
  "passport photo maker",
  "visa photo maker",
  "passport photo on iPhone",
  "passport photo at home",
  "passport photo size",
  "visa photo size",
  "ID photo size",
  "2x2 passport photo",
  "600x600 passport photo",
  "4x6 passport photo print",
  "passport photo PDF",
  "passport photo background",
  "passport photo checker",
  "passport photo compliance",
  "green card photo",
  "US passport photo",
  "US visa photo",
  "USCIS photo",
  "Schengen visa photo",
  "Canada visa photo",
  "India passport photo",
  "GCC ID photo",
  "offline passport photo app",
  "on-device photo processing"
];

export function getSeoPageKeywords(page: SeoPage) {
  return Array.from(
    new Set([
      page.keyword,
      `${page.documentName} photo size`,
      `${page.country} ${page.documentName} photo`,
      `${page.country} photo requirements`,
      `${page.documentName} photo requirements`,
      `${page.size} photo`,
      "passport photo app",
      "visa photo app",
      "ID photo maker",
      "iPhone passport photo",
      "passport photo checker",
      "4x6 print layout"
    ])
  );
}
