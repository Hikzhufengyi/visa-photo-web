# Programmatic GEO/SEO Page Audit

## Current page set

- App preset records: 113.
- Curated SEO pages: approximately 31.
- Dedicated GEO pages: 13.
- Automatically generated pages: approximately 87 after curated records are excluded.
- Localized routes: English, Chinese, Arabic, and German.
- Production build output: 708 static pages across content and utility routes.

## What is strong

- Stable slugs, SSG generation, canonicals, hreflang, sitemap membership, robots policy, and conversion CTA exist.
- Pages provide direct answers, visible caveats, related links, review dates, and multiple structured-data adapters.
- `llms.txt` identifies the product, safety boundaries, priority pages, and answer guidance.
- Product positioning is unusually clear about one-time purchase, on-device processing, and no official-document generation.

## Readiness failures

### Evidence

The source dataset has size and pixel fields but no authority URL, reviewed date, market scope, evidence ID, owner, or expiry. Approximately 15 curated pages carry a `sourceUrl`; generated rows do not.

Result: generated country/document requirement claims fail the Claim Gate and should not be expanded until the data contract is upgraded.

### Unique value

Generated pages share the same steps, requirements, FAQ pattern, conversion copy, and 10 generated GEO questions. Unique value is mostly the swapped country, document, size, pixels, and background fields.

Result: retain pages with observed impressions or defensible evidence; consider `noindex` or consolidation for pages with no impressions and no unique authoritative material after a defined observation window.

### Schema proportionality

Each page can emit FAQPage, QAPage, HowTo, SoftwareApplication, Article, WebPage, BreadcrumbList, and optional ItemList. Schema presence exceeds the number of distinct page entities and may misrepresent eligibility. In particular, QAPage is usually intended for pages where users can submit answers, not a publisher-authored single answer.

Result: validate and reduce to the smallest truthful graph, likely Article/WebPage, BreadcrumbList, SoftwareApplication reference, and FAQ only where current policy and visible content justify it.

### Localization

English questions are reused for Arabic and German because `buildGeoQuestions` has only Chinese and English branches. Localized routes therefore contain English generated Q&A under Arabic and German pages.

Result: block the generated GEO-question section for `ar` and `de` until localized, or add reviewed translations.

### Measurement

Historical GA data cannot isolate IDPhoto Pro from Receipt Vault. New event parameters added locally will permit future segmentation after deployment.

Result: the Learning Gate remains pending until a clean baseline accumulates.

## Release recommendation

1. Deploy the already-built internal-link, wording, homepage schema, event-dimension, and current `llms.txt` route after approval.
2. Verify that production `/llms.txt` returns `text/plain` without redirect; it currently resolves to `/en` HTML.
3. Do not add more programmatic pages yet.
4. Add evidence fields to the preset dataset and validate the five highest-opportunity pages first.
5. Remove or gate QAPage schema and untranslated generated Q&A.
6. After 28 days, compare submitted, indexed, impression-bearing, clicked, and converting pages; consolidate or noindex the zero-signal tail.
