# IDPhoto Pro GEO Strategy

GEO here means optimizing the website so AI answer engines can understand, cite, and summarize IDPhoto Pro for document-photo questions.

## Goals

- Make IDPhoto Pro discoverable for high-intent passport, visa, ID photo, privacy, and print-layout questions.
- Give AI crawlers short, factual answers that can be quoted without implying official-document generation.
- Keep the message safe: IDPhoto Pro creates photo files only and does not create IDs, passports, visas, or official documents.

## Priority Query Clusters

### iPhone creation workflow

- How to make a passport photo on iPhone
- How to make a US passport photo on iPhone
- How to make a 2x2 passport photo on iPhone
- Visa photo app for iPhone

### Size and country requirements

- US passport photo size
- Saudi Iqama photo size
- 2x2 passport photo size
- 600x600 passport photo

### Print workflow

- 4x6 passport photo print sheet
- 4x6 passport photo print layout
- Print passport photos at home

### Privacy and purchase intent

- Passport photo app without subscription
- Passport photo app that does not upload photos
- Offline passport photo app
- On-device passport photo processing

## Implemented Assets

- `llms.txt`: concise AI-readable site summary and priority links.
- GEO answer pages:
  - `/en/make-passport-photo-on-iphone`
  - `/en/make-us-passport-photo-on-iphone`
  - `/en/2x2-passport-photo-on-iphone`
  - `/en/4x6-passport-photo-print-sheet`
  - `/en/passport-photo-app-without-subscription`
  - `/en/passport-photo-app-no-upload`
  - `/en/offline-passport-photo-app`
  - `/en/visa-photo-app-for-iphone`
- Existing high-value pages reinforced by the same SEO template:
  - `/en/us-passport-photo-size`
  - `/en/saudi-iqama-photo-size`
  - `/en/4x6-passport-photo-print-layout`
- Structured data on landing pages:
  - `FAQPage`
  - `QAPage`
  - `HowTo`
  - `SoftwareApplication`
  - `Article`
  - `BreadcrumbList`
- GEO question matrix:
  - Each SEO/GEO landing page now gets 10 generated question-answer pairs.
  - The questions cover size, background, iPhone workflow, 4x6 print sheets, export formats, local processing, subscription, pre-export checks, acceptance limits, and official-document safety.
  - With the current 127 SEO/GEO slug set, this creates about 1,270 visible Q&A targets per locale.
- AI citation signals:
  - SEO/GEO pages include a visible trust row for last-reviewed date, source availability, and content scope.
  - JSON-LD includes WebPage-level metadata, dateModified, citation when a source URL exists, and a direct main question-answer pair.
  - `llms.txt` includes entity facts, common question patterns, and answering rules for AI systems.
- Decision-intent comparison pages:
  - Added GEO pages for no-upload app vs online tools, one-time purchase vs subscription, and home printing vs photo lab.
  - Comparison pages include a visible decision matrix and `ItemList` JSON-LD so AI systems can extract the trade-offs cleanly.
  - These pages target late-stage questions where users are already comparing privacy, price, export control, and print workflow.
- Sitemap now includes `llms.txt` and all localized GEO pages.
- Robots allows standard search and AI crawler user agents.

## Measurement Plan

- Google Search Console:
  - Track impressions for `iPhone`, `4x6`, `no upload`, `without subscription`, `offline`, and `Saudi Iqama` queries.
  - Compare landing-page impressions before and after the GEO pages are indexed.
- GA:
  - Watch referral traffic from `chatgpt.com`, Perplexity, Bing, and other AI surfaces.
  - Track App Store CTA clicks from GEO pages.
- Manual AI answer checks:
  - Ask ChatGPT, Perplexity, Bing Copilot, and Google AI results the priority questions.
  - Record whether IDPhoto Pro is mentioned, cited, or omitted.

## Safety Rules

- Do not claim guaranteed acceptance.
- Do not say IDPhoto Pro creates official documents.
- Always describe the app as a photo-file preparation tool.
- Keep privacy wording specific: core photo processing happens on device and photos are not uploaded for editing.
