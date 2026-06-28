import Link from "next/link";
import type { Locale } from "@/data/localization";
import { siteConfig } from "@/data/site";

const privacyCopy = {
  en: {
    eyebrow: "Privacy Policy",
    title: "Privacy Policy for IDPhoto Pro",
    effective: "Effective date: May 21, 2026",
    intro:
      "IDPhoto Pro helps users create passport, visa, immigration, green card, residence card, and ID photos while keeping photo processing private and local.",
    sections: [
      {
        title: "1. Photo Processing",
        body: [
          "All photo processing happens on your device. IDPhoto Pro does not upload your photos to a server for face detection, cropping, background replacement, light repair, compression, export, print layout generation, or creation history.",
          "Face position, eye line, head proportion, top margin, and similar photo checks are performed locally using on-device image analysis. IDPhoto Pro does not create, collect, store, or upload face templates.",
          "Photos may leave the app only when you choose to save them to Photos, save them to Files, or share them through the iOS system share sheet."
        ]
      },
      {
        title: "2. Data Stored Locally",
        body: [
          "IDPhoto Pro may store local profile details, creation records, exported preview files, exported files, and app preferences on your device.",
          "This data is used only to provide app features on your device. It is not synced to a cloud account by IDPhoto Pro."
        ]
      },
      {
        title: "3. Data We Do Not Collect",
        body: [
          "In this version, IDPhoto Pro does not collect photos, face images, face templates, government ID numbers, passport numbers, location data, contact lists, advertising identifiers, or third-party analytics events.",
          "IDPhoto Pro does not include ad SDKs or third-party analytics SDKs in this version."
        ]
      },
      {
        title: "4. Purchases",
        body: [
          "IDPhoto Pro may offer a lifetime unlock as a one-time, non-consumable in-app purchase through Apple. There is no subscription, no recurring charge, and no advertising in the app.",
          "Purchases are processed by Apple. IDPhoto Pro receives purchase entitlement information from StoreKit so the app can unlock paid features. We do not receive your payment card information."
        ]
      },
      {
        title: "5. Sharing, Export, and Deletion",
        body: [
          "When you save or share an exported photo, JPG, PNG, HEIF, PDF, or print layout, the action is handled by iOS system services or other apps you choose.",
          "You can clear local creation records in the app. You can also delete the app to remove locally stored app data, subject to iOS storage behavior and backups."
        ]
      },
      {
        title: "6. Disclaimer and Updates",
        body: [
          "IDPhoto Pro is not affiliated with any government, embassy, visa center, or official application portal. The app helps prepare photos based on published requirements, but it cannot guarantee acceptance by any authority.",
          "We may update this privacy policy when the app changes. The effective date will be updated when material changes are made."
        ]
      }
    ],
    contactPrefix: "For privacy questions, contact",
    supportPrefix: "or use the",
    supportLink: "technical support page"
  },
  zh: {
    eyebrow: "隐私政策",
    title: "IDPhoto Pro 隐私政策",
    effective: "生效日期：2026 年 5 月 21 日",
    intro:
      "IDPhoto Pro 用于帮助用户制作护照照、签证照、移民照、绿卡照、居留卡照和其他证件照，同时尽量让照片处理保持在设备本地完成。",
    sections: [
      {
        title: "1. 照片处理",
        body: [
          "所有照片处理都在你的设备本地完成。IDPhoto Pro 不会把你的照片上传到服务器做面部检测、裁切、换背景、光线修复、压缩、导出、打印排版或制作记录。",
          "面部位置、眼线高度、头部比例、头顶留白等照片检查会使用设备本地的图像分析完成。IDPhoto Pro 不会创建、收集、保存或上传人脸模板。",
          "只有当你主动选择保存到相册、保存到文件，或通过 iOS 系统分享面板分享时，照片才会离开 App。"
        ]
      },
      {
        title: "2. 本地存储数据",
        body: [
          "IDPhoto Pro 可能会在你的设备本地保存本地资料、制作记录、导出预览图、导出文件和 App 偏好设置。",
          "这些数据只用于提供设备本地功能，不会被 IDPhoto Pro 同步到云端账户。"
        ]
      },
      {
        title: "3. 我们不收集的数据",
        body: [
          "当前版本不收集照片、人脸图片、人脸模板、政府证件号码、护照号码、位置信息、通讯录、广告标识符或第三方分析事件。",
          "当前版本不包含广告 SDK，也不包含第三方分析 SDK。"
        ]
      },
      {
        title: "4. 购买",
        body: [
          "IDPhoto Pro 可能通过 Apple 提供一次性买断的终身解锁内购。App 没有订阅、没有连续扣费，也没有广告。",
          "购买由 Apple 处理。IDPhoto Pro 会通过 StoreKit 接收购买权益信息，用于解锁付费功能。我们不会收到你的银行卡或支付卡信息。"
        ]
      },
      {
        title: "5. 分享、导出和删除",
        body: [
          "当你保存或分享导出的照片、JPG、PNG、HEIF、PDF 或打印排版时，该操作会由 iOS 系统服务或你选择的其他 App 处理。",
          "你可以在 App 内清除本地制作记录。你也可以删除 App 来移除本地保存的 App 数据，具体仍受 iOS 存储和备份机制影响。"
        ]
      },
      {
        title: "6. 免责声明和政策更新",
        body: [
          "IDPhoto Pro 不隶属于任何政府、使领馆、签证中心或官方申请平台。App 会根据公开要求帮助准备照片，但不能保证任何机构一定受理。",
          "当 App 功能变化时，我们可能更新本隐私政策。如有重要变更，会更新生效日期。"
        ]
      }
    ],
    contactPrefix: "如有隐私问题，请联系",
    supportPrefix: "或查看",
    supportLink: "技术支持页面"
  },
  ar: {
    eyebrow: "سياسة الخصوصية",
    title: "سياسة الخصوصية لـ IDPhoto Pro",
    effective: "تاريخ السريان: 21 مايو 2026",
    intro:
      "يساعد IDPhoto Pro المستخدمين على إنشاء صور الجواز والتأشيرة والإقامة والهوية مع إبقاء معالجة الصور محلياً على الجهاز.",
    sections: [
      {
        title: "1. معالجة الصور",
        body: [
          "تتم معالجة الصور على جهازك. لا يرفع IDPhoto Pro صورك إلى خادم لاكتشاف الوجه أو القص أو تغيير الخلفية أو الإصلاح أو الضغط أو التصدير أو إنشاء تخطيطات الطباعة أو السجل.",
          "تتم فحوصات موضع الوجه وخط العين ونسبة الرأس والهوامش محلياً باستخدام تحليل الصورة على الجهاز. لا ينشئ التطبيق أو يجمع أو يحفظ أو يرفع قوالب وجه.",
          "قد تغادر الصور التطبيق فقط عندما تختار حفظها في الصور أو الملفات أو مشاركتها عبر لوحة مشاركة iOS."
        ]
      },
      {
        title: "2. بيانات محفوظة محلياً",
        body: [
          "قد يحفظ IDPhoto Pro بيانات ملف محلي وسجلات إنشاء وملفات معاينة وملفات تصدير وتفضيلات التطبيق على جهازك.",
          "تُستخدم هذه البيانات لتشغيل ميزات التطبيق على جهازك فقط، ولا تتم مزامنتها مع حساب سحابي بواسطة IDPhoto Pro."
        ]
      },
      {
        title: "3. بيانات لا نجمعها",
        body: [
          "في هذا الإصدار لا يجمع IDPhoto Pro الصور أو صور الوجه أو قوالب الوجه أو أرقام الهوية أو أرقام الجواز أو الموقع أو جهات الاتصال أو معرفات الإعلانات أو أحداث تحليلات خارجية.",
          "لا يتضمن هذا الإصدار SDK للإعلانات أو SDK لتحليلات خارجية."
        ]
      },
      {
        title: "4. الشراء",
        body: [
          "قد يوفر IDPhoto Pro فتحاً مدى الحياة كشراء داخل التطبيق لمرة واحدة عبر Apple. لا يوجد اشتراك أو رسوم متكررة أو إعلانات داخل التطبيق.",
          "تتم عمليات الشراء عبر Apple. يستقبل التطبيق معلومات الاستحقاق من StoreKit لفتح الميزات المدفوعة، ولا نستلم معلومات بطاقة الدفع."
        ]
      },
      {
        title: "5. المشاركة والتصدير والحذف",
        body: [
          "عند حفظ أو مشاركة صورة أو JPG أو PNG أو HEIF أو PDF أو تخطيط طباعة، تتم العملية عبر خدمات iOS أو التطبيقات التي تختارها.",
          "يمكنك مسح سجلات الإنشاء المحلية داخل التطبيق، ويمكنك حذف التطبيق لإزالة بياناته المحلية حسب آلية تخزين ونسخ iOS."
        ]
      },
      {
        title: "6. إخلاء المسؤولية والتحديثات",
        body: [
          "IDPhoto Pro غير تابع لأي حكومة أو سفارة أو مركز تأشيرات أو بوابة تقديم رسمية. يساعد التطبيق في تجهيز الصور حسب المتطلبات المنشورة، لكنه لا يضمن قبولها من أي جهة.",
          "قد نحدّث سياسة الخصوصية عند تغير ميزات التطبيق، وسيتم تحديث تاريخ السريان عند وجود تغييرات مهمة."
        ]
      }
    ],
    contactPrefix: "لأسئلة الخصوصية تواصل عبر",
    supportPrefix: "أو استخدم",
    supportLink: "صفحة الدعم الفني"
  },
  de: {
    eyebrow: "Datenschutzerklärung",
    title: "Datenschutzerklärung für IDPhoto Pro",
    effective: "Gültig ab: 21. Mai 2026",
    intro:
      "IDPhoto Pro hilft beim Erstellen von Pass-, Visa-, Aufenthalts- und Ausweisfotos und hält die Fotobearbeitung dabei möglichst lokal auf dem Gerät.",
    sections: [
      {
        title: "1. Fotobearbeitung",
        body: [
          "Die Fotobearbeitung erfolgt auf deinem Gerät. IDPhoto Pro lädt Fotos nicht auf einen Server hoch, weder für Gesichtserkennung noch für Zuschnitt, Hintergrundwechsel, Reparatur, Komprimierung, Export, Drucklayouts oder Verlauf.",
          "Prüfungen zu Gesichtsposition, Augenlinie, Kopfhöhe und Rändern erfolgen lokal mit Bildanalyse auf dem Gerät. IDPhoto Pro erstellt, sammelt, speichert oder lädt keine Gesichtsvorlagen hoch.",
          "Fotos verlassen die App nur, wenn du sie in Fotos oder Dateien speicherst oder über das iOS-Teilen-Menü weitergibst."
        ]
      },
      {
        title: "2. Lokal gespeicherte Daten",
        body: [
          "IDPhoto Pro kann lokale Profildaten, Erstellungsverläufe, Exportvorschauen, Exportdateien und App-Einstellungen auf deinem Gerät speichern.",
          "Diese Daten dienen nur den App-Funktionen auf deinem Gerät und werden von IDPhoto Pro nicht mit einem Cloud-Konto synchronisiert."
        ]
      },
      {
        title: "3. Daten, die wir nicht erheben",
        body: [
          "In dieser Version erhebt IDPhoto Pro keine Fotos, Gesichtsbilder, Gesichtsvorlagen, Ausweisnummern, Passnummern, Standortdaten, Kontakte, Werbe-IDs oder Analyseereignisse Dritter.",
          "Diese Version enthält keine Werbe-SDKs und keine Analyse-SDKs Dritter."
        ]
      },
      {
        title: "4. Käufe",
        body: [
          "IDPhoto Pro kann eine lebenslange Freischaltung als einmaligen In-App-Kauf über Apple anbieten. Es gibt kein Abo, keine wiederkehrenden Kosten und keine Werbung in der App.",
          "Käufe werden von Apple verarbeitet. IDPhoto Pro erhält über StoreKit Berechtigungsinformationen, um bezahlte Funktionen freizuschalten. Zahlungsdaten erhalten wir nicht."
        ]
      },
      {
        title: "5. Teilen, Export und Löschen",
        body: [
          "Wenn du exportierte Fotos, JPG, PNG, HEIF, PDF oder Drucklayouts speicherst oder teilst, erfolgt dies über iOS-Systemdienste oder andere von dir gewählte Apps.",
          "Du kannst lokale Erstellungsverläufe in der App löschen. Durch Löschen der App entfernst du lokal gespeicherte App-Daten, abhängig vom Speicher- und Backup-Verhalten von iOS."
        ]
      },
      {
        title: "6. Haftungsausschluss und Änderungen",
        body: [
          "IDPhoto Pro ist nicht mit Behörden, Botschaften, Visazentren oder offiziellen Antragsportalen verbunden. Die App hilft bei der Vorbereitung anhand veröffentlichter Anforderungen, garantiert aber keine Annahme.",
          "Wir können diese Datenschutzerklärung aktualisieren, wenn sich die App ändert. Bei wesentlichen Änderungen wird das Gültigkeitsdatum angepasst."
        ]
      }
    ],
    contactPrefix: "Bei Datenschutzfragen kontaktiere",
    supportPrefix: "oder nutze die",
    supportLink: "Supportseite"
  }
} satisfies Record<Locale, {
  eyebrow: string;
  title: string;
  effective: string;
  intro: string;
  sections: { title: string; body: string[] }[];
  contactPrefix: string;
  supportPrefix: string;
  supportLink: string;
}>;

export function PrivacyPolicyPage({ locale }: { locale: Locale }) {
  const copy = privacyCopy[locale];
  const supportHref = `/${locale}/support`;

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="policy-meta">{copy.effective}</p>
        <p>{copy.intro}</p>

        {copy.sections.map((section) => (
          <section className="policy-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}

        <section className="policy-section">
          <h2>{locale === "zh" ? "联系方式" : locale === "ar" ? "التواصل" : locale === "de" ? "Kontakt" : "Contact"}</h2>
          <p>
            {copy.contactPrefix}{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>{" "}
            {copy.supportPrefix} <Link href={supportHref}>{copy.supportLink}</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}
