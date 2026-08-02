# First Country Topic Cohort: Source Check

Date checked: 2026-08-02

This note records source retrieval for the first non-U.S. country-topic cohort. It is research input only. A page may be created or indexed only after its registry row, product boundary, visual proof, and release gates are complete.

## United Kingdom passport: source supports a distinct digital-photo cluster

Source: [GOV.UK - Get a passport photo](https://www.gov.uk/photos-for-passports) (primary source; retrieved 2026-08-02).

Observed facts for the online passport application path:

- A digital photo is required for an online passport application, and it must have been taken in the last month.
- The digital image must be clear, in colour, unaltered by computer software, at least 600 pixels wide and 750 pixels tall, and between 50 KB and 10 MB.
- It must have a plain light-coloured background, be clearly contrasted with it, and show no other people or objects.
- The applicant must face forward with eyes open and visible, a plain expression and closed mouth; hair cannot cover the eyes; face and background cannot have shadows.
- The guidance says not to wear glasses unless necessary. If necessary, glasses cannot be sunglasses or tinted, and the eyes cannot be covered by frames, glare, reflection, or shadow.
- GOV.UK distinguishes printed photos from online digital photos. Printed photos are 45 mm high by 35 mm wide, with a crown-to-chin image height of 29 to 34 mm. The printed-photo background is cream or light grey.

Page decision:

- Candidate pages after product and design review: `uk-passport-photo` overview, `uk-passport-photo-requirements`, `uk-passport-photo-digital-requirements`, `uk-passport-photo-background`, `uk-passport-photo-glasses`, and `uk-passport-photo-print`.
- Do not create a generic "UK passport photo maker" page that implies IDPhoto Pro can create the official GOV.UK photo code or bypass the official crop/application flow.
- Do not promise acceptance. GOV.UK specifically says photos from a booth or shop are more likely to be approved than a photo taken on a personal device.

## Canada passport: source supports a cautious requirements and editing-boundary cluster

Source: [Government of Canada - Passport photo requirements](https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/photos.html) (primary source; retrieved 2026-08-02).

Observed facts for the Canadian passport application photo path:

- The photo must reflect the applicant's current appearance and be taken no more than six months before submission.
- The required physical dimensions are 50 mm wide by 70 mm high; face height is 31 to 36 mm from chin to crown.
- The photo must be taken in person by a commercial photographer or photo studio.
- The photo needs a plain white or light-coloured background with clear contrast between face and background.
- The page says not to alter the image or change the background, including removing shadows; it specifically gives cutting and pasting an image against a white background as an example.
- It contains appearance and glasses rules, including restrictions on sunglasses or tinted glasses.

Page decision:

- Candidate pages after product and design review: `canada-passport-photo-requirements`, `canada-passport-photo-size`, `canada-passport-photo-background`, and `canada-passport-photo-glasses`.
- The background page must clearly state that the Canadian passport workflow's official guidance restricts background changes. It cannot market automatic background replacement as a compliance solution.
- The current App Store workflow can be described only as helping a user review a photo file or find an issue before export. It must not be described as replacing the required commercial-photographer path.

## Sources not yet sufficient for publication

| Candidate | Retrieval result | Decision |
| --- | --- | --- |
| Australia passport | The official passport site timed out from the current network environment. | Blocked until a reproducible primary-source capture is available. |
| Germany passport | The attempted Bundesdruckerei path returned 404; existing generic country URL is not evidence for a specific current rule. | Blocked pending an authoritative German biometric-photo source. |
| Saudi Iqama | No official source for the exact Iqama channel and current photo specification has been captured. | Blocked. |
| Bahrain CPR | No official source for the exact CPR/residence workflow and current photo specification has been captured. | Blocked. |

## Release boundary

This note does not approve publishing any new page. The next work is to add only the observed UK and Canada facts to the evidence ledger, verify released-app preset parity, prepare country-specific visual layouts from real App screenshots, and send those candidates through product, design, CTO, and QA gates.
