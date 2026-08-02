import type { SeoPage } from "@/data/seo-pages";

const ukSource = "https://www.gov.uk/photos-for-passports";
const canadaSource = "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/photos.html";

export const evidenceBackedCountryPages: SeoPage[] = [
  {
    slug: "uk-passport-photo",
    title: "UK Passport Photo Guide",
    heading: "UK passport photo: choose the right rule for your application",
    searchIntent: "country-document",
    contentKind: "guide",
    conversionMode: "official-first",
    supportedLocales: ["en"],
    country: "United Kingdom",
    documentName: "Passport",
    size: "Digital and printed routes have different rules",
    pixels: "Digital: at least 600 x 750 px",
    background: "Digital: plain light-coloured; printed: cream or light grey",
    keyword: "uk passport photo",
    sourceUrl: ukSource,
    sourceReviewedAt: "2026-08-02",
    generatedQuestions: false,
    geoQuestion: "What rules apply to a UK passport photo?",
    answerSummary: "UK passport photo rules differ between an online digital application and a paper application with printed photos. Start by choosing the route, then use the current GOV.UK instruction for its size, background, image-quality, and appearance rules.",
    quickAnswer: [
      { label: "Online route", value: "Digital photo" },
      { label: "Paper route", value: "Two printed photos" },
      { label: "Digital minimum", value: "600 x 750 px" },
      { label: "Final authority", value: "GOV.UK" }
    ],
    intro: "A UK passport photo is not one generic format. GOV.UK has separate digital and printed-photo instructions, so this guide routes you to the question that matches your application instead of applying a paper-photo rule to an online upload.",
    requirements: [
      "Identify whether you are applying online with a digital photo or on paper with printed photos",
      "Use a current photo taken within the last month",
      "Do not treat a sample, crop, or app result as proof of acceptance",
      "Review the current GOV.UK instruction immediately before submitting"
    ],
    steps: [
      "Choose your application route: online digital photo or paper printed photo.",
      "Open the focused rule page for the route or issue you need to solve.",
      "Compare your photo with the current GOV.UK instruction.",
      "Use the official application process for the final crop and submission decision."
    ],
    topicLinks: [
      { slug: "uk-passport-photo-digital-requirements", title: "Digital photo requirements", description: "Check file size, pixels, background, appearance, and the editing boundary." },
      { slug: "uk-passport-photo-print", title: "Printed photo requirements", description: "Check 45 x 35 mm printed photos and the separate paper-application rules." },
      { slug: "uk-passport-photo-background", title: "Background", description: "See why the background differs between digital and printed routes." },
      { slug: "uk-passport-photo-glasses", title: "Glasses", description: "Understand the UK rule and when glasses can remain in the photo." }
    ],
    faq: [
      { question: "Is a UK digital passport photo the same as a printed passport photo?", answer: "No. GOV.UK publishes different digital and printed-photo requirements. Choose the rules that match your application route." },
      { question: "Can an app guarantee a UK passport photo will be accepted?", answer: "No. GOV.UK and the receiving passport service decide whether a photo is accepted." }
    ]
  },
  {
    slug: "uk-passport-photo-requirements",
    title: "UK Passport Photo Requirements",
    heading: "UK passport photo requirements: digital and printed routes",
    searchIntent: "country-document",
    contentKind: "guide",
    conversionMode: "official-first",
    supportedLocales: ["en"],
    country: "United Kingdom",
    documentName: "Passport Photo Requirements",
    size: "Digital and printed routes differ",
    pixels: "Digital: at least 600 x 750 px",
    background: "Digital: plain light-coloured; printed: cream or light grey",
    keyword: "uk passport photo requirements",
    sourceUrl: ukSource,
    sourceReviewedAt: "2026-08-02",
    generatedQuestions: false,
    geoQuestion: "What are the current UK passport photo requirements?",
    answerSummary: "UK passport photo requirements depend on the application route. Online applications use a recent unaltered digital image at least 600 by 750 pixels; paper applications use two separate printed 45 by 35 mm photos. Both routes have background, face-visibility, and appearance rules controlled by GOV.UK.",
    quickAnswer: [
      { label: "Online", value: "Recent unaltered digital photo" },
      { label: "Digital minimum", value: "600 x 750 px" },
      { label: "Paper", value: "Two 45 x 35 mm printed photos" },
      { label: "Authority", value: "GOV.UK" }
    ],
    intro: "Use this page for the complete rule set, then open the dedicated digital, print, background, or glasses guide for a closer answer. This is deliberately different from the UK size page: it explains how the application route changes the applicable requirement.",
    requirements: [
      "Choose the online digital or paper printed-photo route first",
      "Use a new photo taken in the last month",
      "For digital applications, use at least 600 by 750 pixels and do not alter it with computer software",
      "For paper applications, use two 45 by 35 mm photos with 29 to 34 mm crown-to-chin image height",
      "Use the background rule that matches your route and avoid shadows, objects, and face obstruction",
      "Use the current GOV.UK guidance before submitting"
    ],
    steps: [
      "Identify how you are applying for the passport.",
      "Read the full GOV.UK instruction for that route.",
      "Check recency, route-specific dimensions, background, pose, eyes, and glasses.",
      "Use the digital or paper application flow directed by GOV.UK."
    ],
    topicLinks: [
      { slug: "uk-passport-photo-digital-requirements", title: "Digital requirements", description: "Use the online application file, size, background, and editing rules." },
      { slug: "uk-passport-photo-print", title: "Printed requirements", description: "Use the paper application dimensions and photo-count rules." },
      { slug: "uk-passport-photo-background", title: "Background", description: "Check the different digital and printed background rules." },
      { slug: "uk-passport-photo-glasses", title: "Glasses", description: "Check when glasses can remain in the photo." }
    ],
    faq: [
      { question: "Do UK passport photo requirements differ for online and paper applications?", answer: "Yes. GOV.UK distinguishes digital photos used for online applications from printed photos used for paper applications." },
      { question: "Can I use an edited phone photo for a UK passport application?", answer: "For the online digital route, GOV.UK says the photo must be unaltered by computer software. Follow the current official instruction." }
    ]
  },
  {
    slug: "uk-passport-photo-digital-requirements",
    title: "UK Digital Passport Photo Requirements",
    heading: "UK digital passport photo requirements for an online application",
    searchIntent: "country-document",
    contentKind: "guide",
    conversionMode: "official-first",
    supportedLocales: ["en"],
    country: "United Kingdom",
    documentName: "Online Passport Photo",
    size: "Digital file for online application",
    pixels: "At least 600 x 750 px; 50 KB to 10 MB",
    background: "Plain light-coloured",
    keyword: "uk digital passport photo requirements",
    sourceUrl: ukSource,
    sourceReviewedAt: "2026-08-02",
    generatedQuestions: false,
    geoQuestion: "What are the UK digital passport photo requirements?",
    answerSummary: "For a UK online passport application, GOV.UK says the digital photo must be clear, in colour, unaltered by computer software, at least 600 by 750 pixels, and between 50 KB and 10 MB. It also needs a plain light-coloured background and a clear, front-facing view of the applicant.",
    quickAnswer: [
      { label: "Minimum pixels", value: "600 x 750" },
      { label: "File size", value: "50 KB to 10 MB" },
      { label: "Background", value: "Plain light-coloured" },
      { label: "Editing", value: "No computer-software alteration" }
    ],
    intro: "This page covers the digital route only. Do not substitute the 45 x 35 mm printed-photo rule for an online upload, and do not use an editing workflow as a way to bypass the current GOV.UK photo instruction.",
    requirements: [
      "Take a new photo within the last month",
      "Use a clear, colour image at least 600 by 750 pixels and between 50 KB and 10 MB",
      "Use a plain light-coloured background with no other people or objects",
      "Face forward with eyes open and visible, a plain expression, and mouth closed",
      "Do not alter the photo with computer software",
      "Use the current GOV.UK instruction for the final application decision"
    ],
    steps: [
      "Read the current GOV.UK digital-photo rules before taking the photo.",
      "Take a current, clear, front-facing colour portrait against a plain light-coloured background.",
      "Check pixels, file size, face visibility, shadows, and background objects.",
      "Use the official online application flow for final upload and any crop handling."
    ],
    faq: [
      { question: "Can I digitally edit a UK passport photo?", answer: "GOV.UK says that a digital passport photo must be unaltered by computer software. Follow the current official guidance rather than relying on an editing tool." },
      { question: "How recent must a UK digital passport photo be?", answer: "GOV.UK says it must have been taken in the last month. Check the current instruction before submission." }
    ]
  },
  {
    slug: "uk-passport-photo-print",
    title: "UK Passport Photo Print Requirements",
    heading: "UK passport photo print requirements: 45 x 35 mm paper photos",
    searchIntent: "export-workflow",
    contentKind: "guide",
    conversionMode: "official-first",
    supportedLocales: ["en"],
    country: "United Kingdom",
    documentName: "Printed Passport Photo",
    size: "45 mm high x 35 mm wide",
    pixels: "Not the digital-upload requirement",
    background: "Plain cream or light grey",
    keyword: "uk passport photo print size",
    sourceUrl: ukSource,
    sourceReviewedAt: "2026-08-02",
    generatedQuestions: false,
    geoQuestion: "What size is a printed UK passport photo?",
    answerSummary: "For a UK paper passport application, GOV.UK says you need two identical printed photos, each 45 mm high by 35 mm wide. The image from crown to chin must be 29 to 34 mm high, and the photo must use a plain cream or light-grey background.",
    quickAnswer: [
      { label: "Printed size", value: "45 x 35 mm" },
      { label: "Photo count", value: "Two identical photos" },
      { label: "Head image", value: "29 to 34 mm crown to chin" },
      { label: "Background", value: "Cream or light grey" }
    ],
    intro: "Use this page only for the printed-photo route. A 4x6 export layout is not an official UK passport submission format by itself; the printed photos must meet the current paper-application instruction.",
    requirements: [
      "Provide two identical photos for a paper application",
      "Use 45 mm high by 35 mm wide photos, not cut-down larger photos",
      "Keep crown-to-chin image height between 29 and 34 mm",
      "Use a plain cream or light-grey background",
      "Use professionally printed colour photos on plain white photographic paper with no border",
      "Do not alter the photo with computer software"
    ],
    steps: [
      "Confirm you are using the paper passport application route.",
      "Review the official printed-photo size and image-height requirements.",
      "Use a photographer or print provider able to deliver the required physical photos.",
      "Keep the two photos loose with the application as GOV.UK instructs."
    ],
    faq: [
      { question: "Can I submit a 4x6 sheet as a UK passport photo?", answer: "A 4x6 sheet is not itself the UK paper-application requirement. GOV.UK requires two separate 45 x 35 mm photos; follow its current printing and submission guidance." },
      { question: "What background should a printed UK passport photo have?", answer: "GOV.UK specifies a plain cream or light-grey background for the printed-photo route." }
    ]
  },
  {
    slug: "uk-passport-photo-background",
    title: "UK Passport Photo Background Rules",
    heading: "UK passport photo background: digital versus printed applications",
    searchIntent: "country-document",
    contentKind: "guide",
    conversionMode: "official-first",
    supportedLocales: ["en"],
    country: "United Kingdom",
    documentName: "Passport Photo Background",
    size: "Depends on application route",
    pixels: "Follow the digital route when applying online",
    background: "Digital: plain light-coloured; printed: cream or light grey",
    keyword: "uk passport photo background",
    sourceUrl: ukSource,
    sourceReviewedAt: "2026-08-02",
    generatedQuestions: false,
    geoQuestion: "What background should a UK passport photo have?",
    answerSummary: "A UK passport photo background depends on the application route. GOV.UK says an online digital photo needs a plain light-coloured background; its printed-photo guidance specifies a plain cream or light-grey background. Both routes require clear contrast and no shadows.",
    quickAnswer: [
      { label: "Online digital", value: "Plain light-coloured" },
      { label: "Paper printed", value: "Cream or light grey" },
      { label: "Avoid", value: "Shadows, objects, other people" },
      { label: "Authority", value: "GOV.UK" }
    ],
    intro: "The background is not a single colour rule for every UK passport application. Match it to the digital or printed route, and do not use background editing to override GOV.UK's requirement that the digital photo is unaltered by computer software.",
    requirements: [
      "Choose the background rule for your application route",
      "Keep the background plain and clearly contrasted with the face",
      "Remove people, objects, patterns, and visible shadows from the original capture",
      "Do not use software alteration for the digital application route",
      "Use the current GOV.UK instruction before submitting"
    ],
    steps: [
      "Confirm whether you are applying online or with printed photos.",
      "Take the source photo against the correct plain background for that route.",
      "Check contrast, shadows, and background objects before submission.",
      "Use the official route instructions rather than changing the background in software."
    ],
    faq: [
      { question: "Can I change a UK passport photo background with an app?", answer: "For the online digital route, GOV.UK says the photo must be unaltered by computer software. Take the photo against a suitable background and follow the current official instruction." },
      { question: "Is white always the correct UK passport photo background?", answer: "No. GOV.UK specifies plain light-coloured for digital photos and cream or light grey for printed photos." }
    ]
  },
  {
    slug: "uk-passport-photo-glasses",
    title: "UK Passport Photo Glasses Rule",
    heading: "Can you wear glasses in a UK passport photo?",
    searchIntent: "country-document",
    contentKind: "guide",
    conversionMode: "official-first",
    supportedLocales: ["en"],
    country: "United Kingdom",
    documentName: "Passport Photo Appearance",
    size: "Depends on application route",
    pixels: "Follow the digital route when applying online",
    background: "Follow the applicable digital or printed rule",
    keyword: "uk passport photo glasses",
    sourceUrl: ukSource,
    sourceReviewedAt: "2026-08-02",
    generatedQuestions: false,
    geoQuestion: "Can I wear glasses in a UK passport photo?",
    answerSummary: "GOV.UK says not to wear glasses in a passport photo unless you have to. When glasses are necessary, they cannot be sunglasses or tinted glasses, and the frames, glare, reflection, or shadow must not cover the eyes.",
    quickAnswer: [
      { label: "General rule", value: "Do not wear glasses unless necessary" },
      { label: "Not allowed", value: "Sunglasses or tinted glasses" },
      { label: "Eyes", value: "No frames, glare, reflection, or shadow over them" },
      { label: "Authority", value: "GOV.UK" }
    ],
    intro: "The UK glasses rule is an appearance rule, not an editing task. Solve it before the photo is taken; do not rely on an image edit to remove frames, glare, or eye obstruction.",
    requirements: [
      "Remove glasses unless they are necessary",
      "Do not wear sunglasses or tinted glasses",
      "Keep frames, glare, reflections, and shadows away from the eyes",
      "Keep both eyes open and visible",
      "Check the current GOV.UK guidance before submitting"
    ],
    steps: [
      "Decide whether glasses are necessary before taking the photo.",
      "If not necessary, remove them for the original capture.",
      "If necessary, check that the eyes remain fully visible without glare or frame obstruction.",
      "Compare the final image with the current GOV.UK instruction."
    ],
    faq: [
      { question: "Can I wear tinted glasses in a UK passport photo?", answer: "No. GOV.UK says glasses cannot be sunglasses or tinted glasses." },
      { question: "Can an app remove glasses from my UK passport photo?", answer: "Do not rely on an edit. The relevant question is whether the original photo meets the appearance rule in the current GOV.UK guidance." }
    ]
  },
  {
    slug: "canada-passport-photo",
    title: "Canada Passport Photo Guide",
    heading: "Canada passport photo: requirements and editing limits",
    searchIntent: "country-document",
    contentKind: "guide",
    conversionMode: "official-first",
    supportedLocales: ["en"],
    country: "Canada",
    documentName: "Passport",
    size: "50 x 70 mm",
    pixels: "Use the official photo requirement",
    background: "Plain white or light-coloured",
    keyword: "canada passport photo",
    sourceUrl: canadaSource,
    sourceReviewedAt: "2026-08-02",
    generatedQuestions: false,
    geoQuestion: "What are the current Canada passport photo requirements?",
    answerSummary: "Canada's passport guidance requires a 50 by 70 mm photo taken in person by a commercial photographer or photo studio. It specifies a 31 to 36 mm chin-to-crown face height, a plain white or light-coloured background, and restrictions on changing the image or removing shadows.",
    quickAnswer: [
      { label: "Photo size", value: "50 x 70 mm" },
      { label: "Face height", value: "31 to 36 mm chin to crown" },
      { label: "Capture", value: "Commercial photographer or photo studio" },
      { label: "Editing", value: "Do not change background or remove shadows" }
    ],
    intro: "Canada passport photo guidance is stricter than a generic phone-editing workflow. Use this guide to understand the official photo requirement, then use the Government of Canada page as the source of truth for your submission.",
    requirements: [
      "Use a photo taken in person by a commercial photographer or photo studio",
      "Use a photo taken no more than six months before submission",
      "Use 50 x 70 mm physical dimensions and 31 to 36 mm chin-to-crown face height",
      "Use a plain white or light-coloured background with clear contrast",
      "Do not change the background or remove shadows",
      "Review the current Government of Canada instruction before submitting"
    ],
    steps: [
      "Read the current Government of Canada passport photo guidance.",
      "Arrange an in-person commercial photographer or photo studio session.",
      "Check the physical size, face height, background, and appearance requirements.",
      "Use the official submission instruction for the final decision."
    ],
    topicLinks: [
      { slug: "canada-passport-photo-requirements", title: "Full requirements", description: "Check dimensions, recency, photographer, background, and appearance rules." },
      { slug: "canada-passport-photo-background", title: "Background and editing", description: "Understand the rule against changing the background or removing shadows." },
      { slug: "canada-passport-photo-glasses", title: "Glasses", description: "Check the official glasses and appearance restrictions." }
    ],
    faq: [
      { question: "Can I take my own Canada passport photo with an app?", answer: "The Government of Canada guidance says the photo must be taken in person by a commercial photographer or photo studio. Follow its current instruction for your application." },
      { question: "Can an app guarantee a Canada passport photo will be accepted?", answer: "No. Final acceptance is decided by the receiving authority." }
    ]
  },
  {
    slug: "canada-passport-photo-requirements",
    title: "Canada Passport Photo Requirements",
    heading: "Canada passport photo requirements: size, photographer, and recency",
    searchIntent: "country-document",
    contentKind: "guide",
    conversionMode: "official-first",
    supportedLocales: ["en"],
    country: "Canada",
    documentName: "Passport Photo Requirements",
    size: "50 x 70 mm",
    pixels: "Use the official photo requirement",
    background: "Plain white or light-coloured",
    keyword: "canada passport photo requirements",
    sourceUrl: canadaSource,
    sourceReviewedAt: "2026-08-02",
    generatedQuestions: false,
    geoQuestion: "What are Canada passport photo requirements?",
    answerSummary: "Canada passport photos must be 50 by 70 mm, with a 31 to 36 mm face height measured from chin to crown. The current Government of Canada guidance says the photo must be taken in person by a commercial photographer or photo studio and taken no more than six months before submission.",
    quickAnswer: [
      { label: "Dimensions", value: "50 x 70 mm" },
      { label: "Face height", value: "31 to 36 mm" },
      { label: "Recency", value: "No more than 6 months" },
      { label: "Who takes it", value: "Commercial photographer or photo studio" }
    ],
    intro: "This is a complete Canada passport photo checklist, separate from generic photo-size advice. The official requirement includes how the photo is taken and edited, not only its dimensions.",
    requirements: [
      "Take the photo in person with a commercial photographer or photo studio",
      "Use a photo no more than six months old",
      "Use 50 x 70 mm dimensions",
      "Keep face height between 31 and 36 mm from chin to crown",
      "Use a plain white or light-coloured background and clear face contrast",
      "Do not alter the image, change the background, or remove shadows"
    ],
    steps: [
      "Use the official page to confirm the current passport-photo requirement.",
      "Get the photo taken in person by a commercial provider.",
      "Verify dimensions, face height, date taken, and background before submission.",
      "Keep any required photographer information with the application as instructed."
    ],
    faq: [
      { question: "How recent must a Canada passport photo be?", answer: "The Government of Canada says it must have been taken no more than six months before the application is submitted." },
      { question: "What size is a Canada passport photo?", answer: "The official physical dimensions are 50 mm wide by 70 mm high, with a 31 to 36 mm chin-to-crown face height." }
    ]
  },
  {
    slug: "canada-passport-photo-background",
    title: "Canada Passport Photo Background Rules",
    heading: "Can you change a Canada passport photo background?",
    searchIntent: "country-document",
    contentKind: "guide",
    conversionMode: "official-first",
    supportedLocales: ["en"],
    country: "Canada",
    documentName: "Passport Photo Background",
    size: "50 x 70 mm photo",
    pixels: "Use the official photo requirement",
    background: "Plain white or light-coloured",
    keyword: "canada passport photo background",
    sourceUrl: canadaSource,
    sourceReviewedAt: "2026-08-02",
    generatedQuestions: false,
    geoQuestion: "Can I change a Canada passport photo background?",
    answerSummary: "Do not change a Canada passport photo background as a substitute for taking the photo correctly. The Government of Canada guidance requires a plain white or light-coloured background and specifically lists changing the background, including removing shadows, as an unacceptable alteration.",
    quickAnswer: [
      { label: "Required capture", value: "Plain white or light-coloured background" },
      { label: "Not allowed", value: "Changing background or removing shadows" },
      { label: "Capture route", value: "Commercial photographer or photo studio" },
      { label: "Authority", value: "Government of Canada" }
    ],
    intro: "For Canada passport photos, the safe answer is to capture the background correctly at the photo session. This is not a background-replacement workflow: the official guidance identifies background changes and shadow removal as unacceptable image alterations.",
    requirements: [
      "Use a plain white or light-coloured background at capture time",
      "Maintain clear contrast between face and background",
      "Do not cut and paste an image onto a white background",
      "Do not remove background shadows in software",
      "Follow the commercial-photographer requirement and current official guidance"
    ],
    steps: [
      "Ask the commercial photographer to use a suitable plain background.",
      "Check that the face has clear contrast and no distracting background issue before leaving the session.",
      "Do not use software to change the background or remove shadows.",
      "Compare the final photograph with the current Government of Canada requirement."
    ],
    faq: [
      { question: "Can I remove shadows from a Canada passport photo?", answer: "The Government of Canada guidance lists changing the background, including removing shadows, as an unacceptable alteration." },
      { question: "Can I put a Canada passport photo on a white background with an app?", answer: "Do not rely on that approach. The official guidance gives cutting and pasting an image against a white background as an example of an unacceptable alteration." }
    ]
  },
  {
    slug: "canada-passport-photo-glasses",
    title: "Canada Passport Photo Glasses Rule",
    heading: "Can you wear glasses in a Canada passport photo?",
    searchIntent: "country-document",
    contentKind: "guide",
    conversionMode: "official-first",
    supportedLocales: ["en"],
    country: "Canada",
    documentName: "Passport Photo Appearance",
    size: "50 x 70 mm photo",
    pixels: "Use the official photo requirement",
    background: "Plain white or light-coloured",
    keyword: "canada passport photo glasses",
    sourceUrl: canadaSource,
    sourceReviewedAt: "2026-08-02",
    generatedQuestions: false,
    geoQuestion: "Can I wear glasses in a Canada passport photo?",
    answerSummary: "The Government of Canada passport photo guidance contains appearance restrictions for glasses. Do not use sunglasses or tinted glasses, and have the commercial photographer verify that your eyes and facial features are clearly visible under the current official instruction.",
    quickAnswer: [
      { label: "Not allowed", value: "Sunglasses or tinted glasses" },
      { label: "Eyes", value: "Must remain clearly visible" },
      { label: "Capture route", value: "Commercial photographer or photo studio" },
      { label: "Authority", value: "Government of Canada" }
    ],
    intro: "The glasses question should be resolved during the professional photo session. Do not rely on a digital edit to remove frames, glare, or a facial obstruction after the image has been taken.",
    requirements: [
      "Do not wear sunglasses or tinted glasses",
      "Keep the eyes and facial features clearly visible",
      "Avoid glare, reflections, or frames that obstruct the eyes",
      "Use a commercial photographer or photo studio as the official guidance requires",
      "Check the current Government of Canada instruction before submission"
    ],
    steps: [
      "Discuss glasses with the photographer before the photo session.",
      "Remove unsuitable glasses or correct glare before the final image is taken.",
      "Confirm that the eyes and full face are clearly visible in the original photograph.",
      "Use the official guidance for the final submission decision."
    ],
    faq: [
      { question: "Can I wear tinted glasses in a Canada passport photo?", answer: "No. The Government of Canada guidance lists sunglasses or tinted glasses among unacceptable appearance choices." },
      { question: "Can an app remove glare from glasses for a Canada passport photo?", answer: "Do not rely on an edit. The official photo route requires a commercial photographer or photo studio and restricts image alterations." }
    ]
  }
];
