# Country Topic Cluster Release Policy

This file governs country and document long-tail pages for IDPhoto Pro. It is intentionally separate from the iOS preset dataset.

## Page decision

A country/document can have a size page, a requirements page, and only the focused pages that solve a distinct question for that exact workflow. A passport page may warrant background, glasses, example, maker, or print pages. A visa or immigration page does not automatically warrant those pages.

## Evidence gate

Before a page is indexed, its registry row needs:

1. A primary authority URL for the exact country, document, and application channel.
2. A reviewed date, expiry date, owner, and explicit scope boundary.
3. Facts that differ materially from the generic size page.
4. Confirmed parity with the released iOS preset or workflow.
5. A direct answer, visible source link, related links, self-canonical, sitemap entry, and App Store CTA.

Rows without those facts remain `blocked`. They are not drafts for automatic publication.

## Product proof mapping

Use real App screenshots according to the user task:

| Question type | Product proof |
| --- | --- |
| overview | country and document preset selector |
| size / requirements / background / glasses / example | on-device editor and compliance-result screenshots |
| maker | preset detail and editor screenshots |
| print | real export-sheet screenshot |

Do not write `21 checks`. The current iOS implementation contains 21 check categories, but not every category is rendered for every photo and one category is not currently emitted by the check service. Use the qualified wording "applicable on-device checks" until a released build and a reproducible count support a more exact claim.

## Release cohorts

1. Reference: United States passport, already evidence-backed.
2. Priority countries/documents: select from Search Console impressions and App Store markets, then collect first-party sources.
3. Remaining candidates: publish only after the same evidence and unique-content gate.

## Monitoring and retirement

Monitor each published landing page for Search Console impressions, clicks, App Store CTA events, source freshness, canonical health, and duplicate-content signals. Refresh regulatory sources before their expiry. Remove or noindex a page if its source disappears, its rule cannot be reconfirmed, or it has no distinct task beyond a directory filter.
