# GEO Search Console Opportunities

Data source: Google Search Console export, date range "last 3 months", exported on 2026-07-16.

## Snapshot

- Total exported queries: 650
- Query impressions represented in the query table: 1,102
- Site summary shown in Search Console: 5 clicks, 1,574 impressions, 0.3% CTR, average position 59.8
- Device split:
  - Mobile: 4 clicks, 277 impressions, 1.44% CTR, average position 23.35
  - Desktop: 1 click, 1,296 impressions, 0.08% CTR, average position 67.58

## Priority Query Clusters

| Cluster | Impressions | Avg. position | Why it matters |
| --- | ---: | ---: | --- |
| Saudi / Iqama | 29 | 26.4 | `saudi iqama photo` is already near page 1 with position around 10. |
| UK passport | 92 | 79.8 | Highest country-specific cluster by impressions; needs stronger English page signal. |
| Australia passport | 70 | 79.7 | Strong country-specific impressions with no clicks yet. |
| UAE / Dubai visa | 57 | 86.0 | Relevant to Gulf users and visa-photo intent. |
| Hong Kong passport | 21 | 69.3 | Early signal for `hk passport photo` and related queries. |
| Generic ID photo | 53 | 75.7 | Queries such as `id picture size` and `id photo size` need a general ID size answer page. |
| iPhone / print | 22 | 58.4 | Queries such as `how to print 4x6 from iphone` match the app export workflow. |

## Data-Driven Content Actions

- Strengthen `saudi-iqama-photo-size` with a direct quick answer for `saudi iqama photo`.
- Strengthen `uk-passport-photo-size` for `uk passport photo size` and `uk passport photo dimensions`.
- Strengthen `australia-passport-photo-size` for `australia passport photo size` and `australian passport photo dimensions`.
- Improve generated SEO page template so pages like Hong Kong Passport and UAE Visa get direct answer summaries automatically.
- Add `id-picture-size` to capture generic ID-photo-size intent.
- Add `how-to-print-4x6-photo-from-iphone` to capture 4x6/iPhone print workflow intent.
- Add the validated topics to `llms.txt` so AI systems can identify them as priority answer pages.

## Monitoring Plan

- Check Search Console weekly for these pages:
  - `/en/saudi-iqama-photo-size`
  - `/en/uk-passport-photo-size`
  - `/en/australia-passport-photo-size`
  - `/en/hong-kong-passport-photo-size`
  - `/en/uae-visa-photo-size`
  - `/en/id-picture-size`
  - `/en/how-to-print-4x6-photo-from-iphone`
- Watch for:
  - Queries moving from positions 70-90 toward 30-50.
  - Saudi/Iqama queries moving from around position 10 into top 5.
  - Desktop CTR improvement, because current desktop impressions are high but clicks are very low.
