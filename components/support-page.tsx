import Link from "next/link";
import { TrackedLink } from "@/components/tracked-link";
import type { Locale } from "@/data/localization";
import { siteConfig } from "@/data/site";

const supportCopy = {
  en: {
    eyebrow: "Technical Support",
    title: "IDPhoto Pro Support",
    lead:
      "If you get stuck while preparing, reviewing, or exporting a photo file, start with the common questions below. If that still does not solve it, contact us directly.",
    privacyLabel: "Privacy reminder:",
    privacy:
      "Photo processing happens on your device. IDPhoto Pro does not upload your photos to a server.",
    purchaseLabel: "Purchase reminder:",
    purchase:
      "IDPhoto Pro uses a one-time unlock. There is no subscription, no recurring charge, and no advertising.",
    contact: "Contact",
    email: "Email:",
    contactHelp:
      "If you can include the selected photo size, the issue you hit, and a screenshot, it is much easier to pinpoint the problem.",
    openStore: "Open App Store",
    download: "Download page",
    faqTitle: "Common Questions",
    faqs: [
      {
        q: "Why was my photo marked as needing attention?",
        a: "The app checks common requirements such as head size, face position, eye line height, top margin, background, sharpness, and file-size guidance. In most cases, working through the checklist step by step is enough."
      },
      {
        q: "Why does the preview show guide lines?",
        a: "Guide lines help you align the face, eye line, top margin, and printable area for the selected photo size. Different receiving authorities may publish different size and framing guidance."
      },
      {
        q: "Does IDPhoto Pro guarantee acceptance?",
        a: "No. IDPhoto Pro helps prepare photos based on published requirements, but it cannot guarantee acceptance by any government, embassy, visa center, or application portal. Always review the official source before submitting."
      },
      {
        q: "Are my face checks uploaded to a server?",
        a: "No. Face position, eye line, head proportion, and margin checks are processed on your device. IDPhoto Pro does not upload your photos or store face templates on a server."
      },
      {
        q: "How do I restore my purchase?",
        a: "Open the purchase screen or the Profile page in the app and choose Restore Purchase. Purchases are processed by Apple through StoreKit and do not upload your photos."
      }
    ],
    featuresTitle: "Supported Features",
    features: [
      "Photo-size presets for passport, visa, residence, and ID photo workflows",
      "On-device checks for head size, face position, eye line, top margin, and background guidance",
      "Background replacement and light repair",
      "300 DPI JPG, PNG, HEIF, and PDF export",
      "Target-KB compression for upload portals",
      "4x6 inch, A4, and Letter print layouts"
    ],
    legalTitle: "Legal Notice",
    legal:
      "IDPhoto Pro prepares photo files from photos you provide. It does not create credentials, personal data fields, IDs, passports, visas, or official documents. It is not affiliated with any government, embassy, visa center, or official application portal. Photo review guidance is informational only, and final acceptance is decided by the receiving authority.",
    privacyLinkPrefix: "You can also review the full",
    privacyLink: "privacy policy",
    privacyLinkSuffix: "."
  },
  zh: {
    eyebrow: "技术支持",
    title: "IDPhoto Pro 技术支持",
    lead:
      "如果你在制作、检查或导出证件照时卡住了，可以先看下面这些常见问题；如果还没解决，再直接联系我。",
    privacyLabel: "隐私提醒：",
    privacy: "照片处理在你的设备本地完成。IDPhoto Pro 不会把你的照片上传到服务器。",
    purchaseLabel: "购买提醒：",
    purchase: "IDPhoto Pro 使用一次性解锁。没有订阅、没有连续扣费，也没有广告。",
    contact: "联系",
    email: "邮箱：",
    contactHelp: "来信时尽量附上证件类型、遇到的问题，以及相关截图，我会更容易定位。",
    openStore: "打开 App Store",
    download: "前往下载页",
    faqTitle: "常见问题",
    faqs: [
      {
        q: "为什么我的照片被标记为需要处理？",
        a: "App 会检查头部大小、面部位置、眼线高度、头顶留白、背景、清晰度和文件大小等常见要求。通常按检查列表一点点修正，结果就会更稳。"
      },
      {
        q: "为什么预览里会显示引导线？",
        a: "引导线用于帮助你对齐面部、眼线、头顶留白和可打印区域。不同国家和证件类型可能使用不同的尺寸和构图规则。"
      },
      {
        q: "IDPhoto Pro 能保证照片一定通过吗？",
        a: "不能。IDPhoto Pro 会根据公开要求帮助准备照片，但不能保证任何政府、使领馆、签证中心或申请平台一定接受。提交前请核对官方来源。"
      },
      {
        q: "面部检测会上传到服务器吗？",
        a: "不会。面部位置、眼线高度、头部比例和留白检查都在你的设备本地处理。IDPhoto Pro 不会上传照片，也不会在服务器端保存人脸模板。"
      },
      {
        q: "如何恢复购买？",
        a: "打开 App 内的购买页面或个人页面，选择恢复购买。购买由 Apple 通过 StoreKit 处理，恢复购买会检查你的 App Store 账户购买记录，不会上传你的照片。"
      }
    ],
    featuresTitle: "支持的功能",
    features: [
      "适用于护照照、签证照、居留照和证件照流程的照片尺寸模板",
      "头部大小、面部位置、眼线、头顶留白和背景引导等本地检查",
      "背景替换和轻度画质修复",
      "300 DPI JPG、PNG、HEIF 和 PDF 导出",
      "面向上传平台的目标 KB 压缩",
      "4x6 英寸、A4 和 Letter 打印排版"
    ],
    legalTitle: "法律说明",
    legal:
      "IDPhoto Pro 仅基于你提供的照片准备照片文件，不会生成任何证件信息、个人资料字段、身份证件、护照、签证或官方文件。它不隶属于任何政府、使领馆、签证中心或官方申请平台。照片检查仅作信息提示，最终是否接受由接收机构决定。",
    privacyLinkPrefix: "你也可以查看完整的",
    privacyLink: "隐私政策",
    privacyLinkSuffix: "。"
  },
  ar: {
    eyebrow: "الدعم الفني",
    title: "دعم IDPhoto Pro",
    lead:
      "إذا واجهت مشكلة أثناء إنشاء أو فحص أو تصدير صورة مستند، ابدأ بالأسئلة الشائعة أدناه أو تواصل معنا مباشرة.",
    privacyLabel: "تذكير الخصوصية:",
    privacy: "تتم معالجة الصور على جهازك. لا يرفع IDPhoto Pro صورك إلى خادم.",
    purchaseLabel: "تذكير الشراء:",
    purchase: "يستخدم IDPhoto Pro فتحاً لمرة واحدة. لا يوجد اشتراك أو رسوم متكررة أو إعلانات.",
    contact: "التواصل",
    email: "البريد الإلكتروني:",
    contactHelp: "يرجى ذكر نوع المستند والمشكلة وإرفاق لقطة شاشة إن أمكن.",
    openStore: "فتح App Store",
    download: "صفحة التنزيل",
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        q: "لماذا تظهر الصورة بحاجة إلى مراجعة؟",
        a: "يفحص التطبيق متطلبات شائعة مثل حجم الرأس، موضع الوجه، خط العين، الهامش العلوي، الخلفية، الوضوح وحجم الملف. غالباً يكفي تعديل البنود خطوة بخطوة."
      },
      {
        q: "لماذا تظهر خطوط إرشادية في المعاينة؟",
        a: "تساعدك الخطوط على محاذاة الوجه وخط العين والهامش العلوي ومنطقة الطباعة حسب نوع المستند المحدد."
      },
      {
        q: "هل يضمن IDPhoto Pro قبول الصورة؟",
        a: "لا. يساعد التطبيق في تجهيز الصورة حسب المتطلبات المنشورة، لكنه لا يضمن قبولها من أي جهة حكومية أو سفارة أو مركز تأشيرات أو بوابة تقديم."
      },
      {
        q: "هل يتم رفع فحوصات الوجه إلى خادم؟",
        a: "لا. تتم فحوصات موضع الوجه وخط العين ونسبة الرأس والهوامش على جهازك. لا يرفع التطبيق صورك ولا يحفظ قوالب وجه على خادم."
      },
      {
        q: "كيف أستعيد عملية الشراء؟",
        a: "افتح شاشة الشراء أو صفحة الحساب داخل التطبيق واختر استعادة الشراء. تتم العملية عبر Apple StoreKit ولا يتم رفع صورك."
      }
    ],
    featuresTitle: "الميزات المدعومة",
    features: [
      "قوالب مقاسات الصور لمسارات صور الجواز والتأشيرة والإقامة والهوية",
      "فحوصات على الجهاز لحجم الرأس وموضع الوجه وخط العين والهامش العلوي والخلفية",
      "تغيير الخلفية وتحسين خفيف للصورة",
      "تصدير JPG و PNG و HEIF و PDF بدقة 300 DPI",
      "ضغط بحجم KB مناسب لبوابات الرفع",
      "تخطيطات طباعة 4x6 و A4 و Letter"
    ],
    legalTitle: "تنبيه قانوني",
    legal:
      "يجهز IDPhoto Pro ملفات صور من الصور التي تقدمها فقط. ولا ينشئ بيانات اعتماد أو حقول بيانات شخصية أو هويات أو جوازات أو تأشيرات أو مستندات رسمية. وهو غير تابع لأي حكومة أو سفارة أو مركز تأشيرات أو بوابة تقديم رسمية. مراجعة الصور إرشادية فقط، والقبول النهائي تقرره الجهة المستقبلة.",
    privacyLinkPrefix: "يمكنك أيضاً مراجعة",
    privacyLink: "سياسة الخصوصية",
    privacyLinkSuffix: "."
  },
  de: {
    eyebrow: "Technischer Support",
    title: "IDPhoto Pro Support",
    lead:
      "Wenn beim Erstellen, Prüfen oder Exportieren eines Ausweisfotos etwas nicht funktioniert, beginne mit den Fragen unten oder kontaktiere uns direkt.",
    privacyLabel: "Datenschutzhinweis:",
    privacy:
      "Die Fotobearbeitung erfolgt auf deinem Gerät. IDPhoto Pro lädt deine Fotos nicht auf einen Server hoch.",
    purchaseLabel: "Kaufhinweis:",
    purchase:
      "IDPhoto Pro nutzt eine einmalige Freischaltung. Es gibt kein Abo, keine wiederkehrenden Kosten und keine Werbung.",
    contact: "Kontakt",
    email: "E-Mail:",
    contactHelp:
      "Hilfreich sind Dokumenttyp, eine kurze Beschreibung des Problems und wenn möglich ein Screenshot.",
    openStore: "App Store öffnen",
    download: "Downloadseite",
    faqTitle: "Häufige Fragen",
    faqs: [
      {
        q: "Warum wurde mein Foto als problematisch markiert?",
        a: "Die App prüft typische Anforderungen wie Kopfhöhe, Gesichtsposition, Augenlinie, oberen Rand, Hintergrund, Schärfe und Dateigröße. Meist reicht es, die Checkliste Schritt für Schritt abzuarbeiten."
      },
      {
        q: "Warum zeigt die Vorschau Hilfslinien?",
        a: "Hilfslinien helfen bei der Ausrichtung von Gesicht, Augenlinie, oberem Rand und Druckbereich für den gewählten Dokumenttyp."
      },
      {
        q: "Garantiert IDPhoto Pro die Annahme?",
        a: "Nein. IDPhoto Pro hilft bei der Vorbereitung nach veröffentlichten Anforderungen, kann aber keine Annahme durch Behörden, Botschaften, Visazentren oder Portale garantieren."
      },
      {
        q: "Werden Gesichtsdaten auf einen Server hochgeladen?",
        a: "Nein. Prüfungen zu Gesicht, Augenlinie, Kopfhöhe und Rändern laufen auf deinem Gerät. Die App lädt keine Fotos hoch und speichert keine Gesichtsvorlagen auf einem Server."
      },
      {
        q: "Wie stelle ich einen Kauf wieder her?",
        a: "Öffne in der App den Kaufbildschirm oder dein Profil und wähle Kauf wiederherstellen. Die Prüfung läuft über Apple StoreKit und lädt keine Fotos hoch."
      }
    ],
    featuresTitle: "Unterstützte Funktionen",
    features: [
      "Fotogrößen-Vorlagen für Pass-, Visa-, Aufenthalts- und Ausweisfoto-Workflows",
      "Prüfungen auf dem Gerät für Kopfhöhe, Gesichtsposition, Augenlinie, oberen Rand und Hintergrund",
      "Hintergrundwechsel und leichte Bildverbesserung",
      "300-DPI-Export als JPG, PNG, HEIF und PDF",
      "Komprimierung auf Ziel-KB für Upload-Portale",
      "Drucklayouts für 4x6, A4 und Letter"
    ],
    legalTitle: "Rechtlicher Hinweis",
    legal:
      "IDPhoto Pro bereitet nur Fotodateien aus Fotos vor, die du bereitstellst. Es erstellt keine Zugangsdaten, personenbezogenen Datenfelder, Ausweise, Pässe, Visa oder amtlichen Dokumente. Die App ist nicht mit Behörden, Botschaften, Visazentren oder offiziellen Antragsportalen verbunden. Die Foto-Prüfung dient nur als Orientierung; die endgültige Annahme entscheidet die empfangende Stelle.",
    privacyLinkPrefix: "Du kannst auch die vollständige",
    privacyLink: "Datenschutzerklärung",
    privacyLinkSuffix: "lesen."
  }
} satisfies Record<Locale, {
  eyebrow: string;
  title: string;
  lead: string;
  privacyLabel: string;
  privacy: string;
  purchaseLabel: string;
  purchase: string;
  contact: string;
  email: string;
  contactHelp: string;
  openStore: string;
  download: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  featuresTitle: string;
  features: string[];
  legalTitle: string;
  legal: string;
  privacyLinkPrefix: string;
  privacyLink: string;
  privacyLinkSuffix: string;
}>;

export function SupportPage({ locale }: { locale: Locale }) {
  const copy = supportCopy[locale];
  const downloadHref = `/${locale}/download`;
  const privacyHref = `/${locale}/privacy`;

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.lead}</p>

        <section className="notice-card">
          <strong>{copy.privacyLabel}</strong> {copy.privacy}
        </section>

        <section className="notice-card">
          <strong>{copy.purchaseLabel}</strong> {copy.purchase}
        </section>

        <section className="policy-section">
          <h2>{copy.contact}</h2>
          <p>
            {copy.email}{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
          </p>
          <p>{copy.contactHelp}</p>
          <div className="hero-actions">
            <TrackedLink
              className="button button-primary"
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              eventName="app_store_click"
              eventParams={{ source: "support_page", locale }}
            >
              {copy.openStore}
            </TrackedLink>
            <TrackedLink
              className="button button-secondary"
              href={downloadHref}
              eventName="download_page_click"
              eventParams={{ source: "support_page", locale }}
            >
              {copy.download}
            </TrackedLink>
          </div>
        </section>

        <section className="policy-section">
          <h2>{copy.faqTitle}</h2>
          {copy.faqs.map((item) => (
            <div key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </section>

        <section className="policy-section">
          <h2>{copy.featuresTitle}</h2>
          <ul className="policy-list">
            {copy.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="policy-section">
          <h2>{copy.legalTitle}</h2>
          <p>{copy.legal}</p>
          <p>
            {copy.privacyLinkPrefix} <Link href={privacyHref}>{copy.privacyLink}</Link>{" "}
            {copy.privacyLinkSuffix}
          </p>
        </section>
      </div>
    </main>
  );
}
