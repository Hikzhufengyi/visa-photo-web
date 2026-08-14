import Link from "next/link";
import type { Locale } from "@/data/localization";

const aboutCopy = {
  en: {
    eyebrow: "Product facts",
    title: "What IDPhoto Pro does, and what it does not do",
    intro:
      "IDPhoto Pro is an iPhone app for preparing photo files from a portrait you provide. It is designed for passport, visa, residence, and ID photo workflows where the required photo size, framing, background, and export format matter.",
    doesTitle: "What the app does",
    does: [
      "Lets you choose a photo-size preset, import or take a portrait, review common framing and background details, then export a digital file or print layout.",
      "Processes the core photo workflow on your device. Photos are not uploaded to a server for editing.",
      "Offers a one-time unlock rather than a subscription-focused workflow."
    ],
    doesNotTitle: "What the app does not do",
    doesNot: [
      "It does not create credentials, personal data fields, IDs, passports, visas, residence cards, or other official documents.",
      "It is not a government service and is not affiliated with a government, embassy, visa centre, identity authority, or application portal.",
      "Its photo review guidance cannot guarantee acceptance. The receiving authority makes the final decision."
    ],
    sourcesTitle: "How to use this site",
    sources:
      "Use the photo-size guides to understand a specific question, and review the linked official source before submitting. Privacy, support, and purchase details are kept on their own pages so you can verify the current product facts.",
    guides: "Browse photo-size guides",
    privacy: "Read privacy details",
    support: "Get support"
  },
  zh: {
    eyebrow: "产品事实",
    title: "IDPhoto Pro 能做什么，不能做什么",
    intro:
      "IDPhoto Pro 是一款 iPhone App，用于基于你提供的人像准备照片文件。它适用于护照照、签证照、居留照和证件照等需要关注照片尺寸、构图、背景和导出格式的流程。",
    doesTitle: "App 能做什么",
    does: [
      "选择照片尺寸模板，导入或拍摄人像，检查常见的构图与背景问题，然后导出电子文件或打印排版。",
      "核心照片处理在设备本地完成，编辑照片时不会上传到服务器。",
      "采用一次性解锁，不是订阅制流程。"
    ],
    doesNotTitle: "App 不能做什么",
    doesNot: [
      "不会生成任何凭证、个人资料字段、身份证件、护照、签证、居留卡或其他官方文件。",
      "不是政府服务，也不隶属于任何政府、使领馆、签证中心、身份管理机构或申请平台。",
      "照片检查提示不能保证受理，最终决定权属于接收机构。"
    ],
    sourcesTitle: "如何使用本网站",
    sources:
      "用照片尺寸指南理解具体问题，提交前仍以链接的官方来源为准。隐私、支持和购买说明分别放在独立页面，便于核对当前产品事实。",
    guides: "浏览照片尺寸指南",
    privacy: "查看隐私说明",
    support: "获取支持"
  },
  ar: {
    eyebrow: "حقائق المنتج",
    title: "ما الذي يفعله IDPhoto Pro وما الذي لا يفعله",
    intro:
      "IDPhoto Pro هو تطبيق iPhone لإعداد ملفات صور من صورة شخصية تقدمها أنت. وهو مخصص لمسارات صور الجواز والتأشيرة والإقامة والهوية عندما يكون المقاس والتأطير والخلفية وتنسيق التصدير مهمين.",
    doesTitle: "ما الذي يفعله التطبيق",
    does: [
      "يتيح اختيار قالب مقاس للصورة واستيراد صورة شخصية أو التقاطها، ومراجعة تفاصيل التأطير والخلفية الشائعة، ثم تصدير ملف رقمي أو تخطيط طباعة.",
      "تتم معالجة الصور الأساسية على جهازك، ولا تُرفع الصور إلى خادم للتحرير.",
      "يوفر فتحاً لمرة واحدة بدلاً من نموذج اشتراك."
    ],
    doesNotTitle: "ما الذي لا يفعله التطبيق",
    doesNot: [
      "لا ينشئ بيانات اعتماد أو حقول بيانات شخصية أو هويات أو جوازات أو تأشيرات أو بطاقات إقامة أو مستندات رسمية أخرى.",
      "ليس خدمة حكومية ولا يتبع لأي حكومة أو سفارة أو مركز تأشيرات أو سلطة هوية أو بوابة تقديم.",
      "إرشادات مراجعة الصورة لا تضمن القبول؛ القرار النهائي للجهة المستلمة."
    ],
    sourcesTitle: "كيفية استخدام هذا الموقع",
    sources:
      "استخدم أدلة مقاسات الصور لفهم السؤال المحدد، وراجع المصدر الرسمي المرتبط قبل التقديم. تبقى تفاصيل الخصوصية والدعم والشراء في صفحات مستقلة للتحقق من حقائق المنتج الحالية.",
    guides: "تصفح أدلة المقاسات",
    privacy: "تفاصيل الخصوصية",
    support: "الحصول على الدعم"
  },
  de: {
    eyebrow: "Produktfakten",
    title: "Was IDPhoto Pro macht und was nicht",
    intro:
      "IDPhoto Pro ist eine iPhone-App zum Vorbereiten von Fotodateien aus einem von dir bereitgestellten Porträt. Sie ist für Pass-, Visa-, Aufenthalts- und Ausweisfoto-Workflows gedacht, bei denen Größe, Bildausschnitt, Hintergrund und Exportformat wichtig sind.",
    doesTitle: "Was die App macht",
    does: [
      "Du wählst eine Fotogrößen-Vorlage, importierst oder fotografierst ein Porträt, prüfst häufige Details zu Bildausschnitt und Hintergrund und exportierst dann eine Datei oder ein Drucklayout.",
      "Die Kernverarbeitung des Fotos erfolgt auf deinem Gerät. Fotos werden zur Bearbeitung nicht auf einen Server hochgeladen.",
      "Die App bietet eine einmalige Freischaltung statt eines Abo-Modells."
    ],
    doesNotTitle: "Was die App nicht macht",
    doesNot: [
      "Sie erstellt keine Zugangsdaten, personenbezogenen Datenfelder, Ausweise, Pässe, Visa, Aufenthaltstitel oder andere amtliche Dokumente.",
      "Sie ist kein Behördendienst und nicht mit Behörden, Botschaften, Visazentren, Identitätsstellen oder Antragsportalen verbunden.",
      "Die Foto-Prüfung kann keine Annahme garantieren. Die empfangende Stelle trifft die endgültige Entscheidung."
    ],
    sourcesTitle: "So nutzt du diese Website",
    sources:
      "Nutze die Ratgeber zu Fotogrößen für eine konkrete Frage und prüfe vor dem Einreichen immer die verlinkte offizielle Quelle. Datenschutz, Support und Kaufinformationen stehen auf eigenen Seiten, damit du die aktuellen Produktfakten prüfen kannst.",
    guides: "Ratgeber zu Fotogrößen",
    privacy: "Datenschutz lesen",
    support: "Support erhalten"
  }
} satisfies Record<Locale, {
  eyebrow: string;
  title: string;
  intro: string;
  doesTitle: string;
  does: string[];
  doesNotTitle: string;
  doesNot: string[];
  sourcesTitle: string;
  sources: string;
  guides: string;
  privacy: string;
  support: string;
}>;

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = aboutCopy[locale];

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>

        <section className="policy-section">
          <h2>{copy.doesTitle}</h2>
          <ul className="check-list">
            {copy.does.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="policy-section">
          <h2>{copy.doesNotTitle}</h2>
          <ul className="check-list">
            {copy.doesNot.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="policy-section">
          <h2>{copy.sourcesTitle}</h2>
          <p>{copy.sources}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href={`/${locale}/photo-sizes`}>{copy.guides}</Link>
            <Link className="button button-secondary" href={`/${locale}/privacy`}>{copy.privacy}</Link>
            <Link className="button button-secondary" href={`/${locale}/support`}>{copy.support}</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
