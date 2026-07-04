export type Locale = "zh" | "en" | "ar" | "de";

export const locales: Locale[] = ["en", "zh", "ar", "de"];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const uiCopy = {
  zh: {
    nav: {
      home: "首页",
      download: "下载",
      support: "支持",
      privacy: "隐私",
      about: "关于",
      blog: "内容"
    },
    footer: {
      notice: "IDPhoto Pro 不隶属于任何政府机构。",
      contact: "联系"
    },
    home: {
      eyebrow: "离线安全的 iPhone 证件照 App",
      title: "别让证件照尺寸、背景或打印排版卡住你的申请",
      description:
        "IDPhoto Pro 帮你在 iPhone 上制作护照照、签证照和 ID 照。选择规格，导入照片，检查脸部位置、背景和尺寸，然后导出电子版或 4x6 打印排版。照片本地处理，不上传服务器。",
      highlights: [
        "检查尺寸、背景、眼线和头部比例",
        "支持 JPG、PNG、HEIC、PDF",
        "支持 4x6、A4、Letter 打印排版",
        "一次买断，无订阅、无广告"
      ],
      stepsHeading: "申请前，先把这些容易出错的地方检查清楚",
      steps: [
        {
          title: "尺寸和像素是否符合要求",
          description: "不同国家、护照、签证和 ID 照规格不一样，先按目标规格检查尺寸、比例和导出像素。"
        },
        {
          title: "脸部位置和背景是否合适",
          description: "检查眼线、头部比例、居中、留白和背景颜色，尽量在提交前发现构图问题。"
        },
        {
          title: "电子版和打印版是否准备好",
          description: "需要上传就导出图片或 PDF，需要冲印就生成 4x6、A4 或 Letter 打印排版。"
        }
      ],
      checksHeading: "智能检测，每一项细微问题都提前暴露出来",
      checksIntro:
        "做证件照时，最怕的通常不是拍得不好看，而是交上去才发现尺寸、背景或构图不对。IDPhoto Pro 会按所选国家和证件类型，在设备本地逐项检查照片规格、头像位置、背景和画质，让问题尽量在导出前暴露出来。",
      checks: [
        "当前国家和证件类型的尺寸规格",
        "最终照片画幅比例",
        "像素分辨率是否足够导出",
        "背景颜色是否符合该证件要求",
        "背景纯净度和明显阴影风险",
        "头部高度比例是否在目标范围",
        "头顶留白是否过多或过少",
        "下巴到画面底部的空间是否合理",
        "眼线高度是否落在目标范围",
        "面部水平居中是否偏左或偏右",
        "头像垂直位置是否偏上或偏下",
        "头部是否明显倾斜",
        "双眼是否可见",
        "眼睛是否睁开到可接受状态",
        "是否疑似佩戴帽子或头部遮挡",
        "面部清晰度和锐度",
        "亮度、对比度、阴影和色温风险",
        "导出前综合评分和失败项提示"
      ],
      exportHeading: "支持多种图片格式和多种打印排版尺寸",
      exportIntro:
        "照片调整完成后，可以直接导出电子文件，也可以生成打印排版。支持 JPG、PNG、HEIF、PDF，以及常用的 4x6、A4、Letter 版式。",
      exportItems: [
        "JPG、PNG、HEIF、PDF",
        "4x6、A4、Letter 打印版",
        "保存到相册、分享或导出文件"
      ],
      pricingHeading: "可以先检查，再决定要不要买断解锁",
      pricingIntro:
        "这不是订阅制产品。可以先把照片调好、把检查结果看清楚，确认需要导出最终文件时，再一次性解锁。",
      pricingItems: ["一次买断", "无订阅", "无广告", "本地处理，不上传服务器"],
      qrHeading: "现在先提供 iPhone 下载，Android 后面再补上",
      qrIntro:
        "如果你现在是在电脑或平板上看官网，可以直接扫码跳到 App Store。Android 版本准备好后，再把第二个下载入口补上。",
      qrCaption: "iOS 下载二维码",
      seoHeading: "热门证件照规格快速入口",
      ctaPrimary: "App Store 下载",
      ctaSecondary: "查看支持的证件照规格",
      qrPage: "查看下载页",
      appStoreLink: "App Store 链接"
    },
    download: {
      eyebrow: "下载",
      title: "下载 IDPhoto Pro",
      description:
        "目前先提供 iPhone 版本。你可以直接扫码跳到 App Store，后面如果补 Android，这个页面也可以继续沿用。",
      platform:
        "当前版本先上架 iPhone，适合护照照、签证照、常见证件照，以及电子版和打印版导出。",
      iosTitle: "扫码在 iPhone 上下载",
      iosDescription:
        "直接用 iPhone 相机扫一扫，就能打开 App Store 下载页。",
      androidTitle: "Android 后续补充",
      androidDescription:
        "Android 下载入口还没上线，不过位置已经预留好了。以后无论接 Google Play 还是 APK，都不用重做这一页。",
      backHome: "返回首页"
    },
    about: {
      title: "关于 IDPhoto Pro",
      paragraphs: [
        "IDPhoto Pro 面向护照照、签证照、绿卡照、居留卡照和其他官方证件照场景，重点不是炫技式修图，而是把规格、检查和导出这条链路做顺。",
        "这个网站不是官方政府服务，而是产品官网。它更像一个说明入口，告诉用户这个 App 能做什么、适合什么场景，以及去哪里下载。"
      ]
    },
    blog: {
      title: "证件照内容库",
      paragraphs: [
        "这个页面作为内容入口，适合持续发布护照照、签证照、居留证件照、打印尺寸和拍摄技巧相关页面。",
        "先把高意图规格页做扎实，再逐步扩展更多国家和证件类型。"
      ]
    },
    support: {
      title: "IDPhoto Pro 技术支持",
      lead:
        "如果你在制作、检查或导出护照照、签证照、绿卡照、居留卡照或其他证件照时遇到问题，可以先从这里开始看。",
      privacyReminder: "隐私说明：照片处理在设备本地完成，不会上传到服务器。",
      purchaseReminder: "购买说明：采用一次买断的终身解锁方式，没有订阅，也没有连续扣费。"
    },
    privacy: {
      title: "IDPhoto Pro 隐私政策",
      effective: "生效日期：2026 年 5 月 21 日"
    },
    terms: {
      title: "服务条款"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      download: "تنزيل",
      support: "الدعم",
      privacy: "الخصوصية",
      about: "حول التطبيق",
      blog: "الدليل"
    },
    footer: {
      notice: "IDPhoto Pro ليس تابعاً لأي جهة حكومية.",
      contact: "تواصل"
    },
    home: {
      eyebrow: "تطبيق صور مستندات خاص على iPhone",
      title: "جهّز صور الجواز والتأشيرة والإقامة على iPhone.",
      description:
        "اختر قالب المستند، اضبط الصورة، راجع الفحوصات، ثم صدّر ملفاً رقمياً أو تخطيطاً جاهزاً للطباعة. المعالجة تتم على جهازك. دفع مرة واحدة، بدون اشتراك.",
      highlights: [
        "معالجة الصور على الجهاز بدون رفع إلى خادم",
        "دفع مرة واحدة، بدون اشتراك أو إعلانات",
        "فحص المقاس والخلفية وخط العين والهوامش والتوسيط والوضوح",
        "تصدير رقمي وتخطيطات طباعة 4x6 و A4 و Letter"
      ],
      stepsHeading: "ليس مجرد قص صورة، بل سير عمل كامل لصورة رسمية.",
      steps: [
        {
          title: "اختر قالب المستند",
          description: "ابدأ بالدولة ونوع المستند بدلاً من تخمين المقاس والنسبة وطريقة التأطير."
        },
        {
          title: "اضبط الصورة على iPhone",
          description: "استخدم المحاذاة الذكية أو اضبط الموضع والتكبير والدوران والإضاءة والحدة والخلفية يدوياً."
        },
        {
          title: "صدّر ملفاً رقمياً أو للطباعة",
          description: "صدّر ملفاً للرفع في البوابات الإلكترونية أو أنشئ تخطيط طباعة عند الحاجة إلى نسخة ورقية."
        }
      ],
      checksHeading: "فحوصات ذكية توضّح المشاكل قبل التصدير.",
      checksIntro:
        "في صور الجوازات والتأشيرات والإقامات، الأهم أن يطابق الملف المتطلبات. يفحص IDPhoto Pro الدولة ونوع المستند على جهازك، ثم يراجع التأطير والخلفية وجودة الصورة قبل التصدير.",
      checks: [
        "الدولة ونوع المستند المحددان",
        "نسبة أبعاد الصورة النهائية",
        "دقة البكسل للتصدير",
        "لون الخلفية المقبول",
        "نظافة الخلفية وخطر الظلال",
        "نسبة ارتفاع الرأس ضمن النطاق",
        "الهامش العلوي مرتفع أو منخفض جداً",
        "توازن المسافة أسفل الذقن",
        "ارتفاع خط العين ضمن النطاق",
        "توسيط الوجه أفقياً",
        "موضع الرأس عمودياً",
        "ميلان الرأس",
        "ظهور العينين",
        "العينان مفتوحتان بما يكفي",
        "احتمال وجود غطاء رأس أو حجب",
        "حدة ووضوح الوجه",
        "مخاطر السطوع والتباين والظل ودرجة اللون",
        "درجة إجمالية وملخص للمشاكل قبل التصدير"
      ],
      exportHeading: "تصدير بصيغ متعددة وتخطيطات طباعة مختلفة",
      exportIntro:
        "بعد التحرير، صدّر ملفاً رقمياً للرفع أو ورقة جاهزة للطباعة. يدعم IDPhoto Pro صيغ JPG و PNG و HEIF و PDF وتخطيطات 4x6 و A4 و Letter.",
      exportItems: [
        "JPG و PNG و HEIF و PDF",
        "تخطيطات طباعة 4x6 و A4 و Letter",
        "حفظ في الصور أو مشاركة أو تصدير ملفات"
      ],
      pricingHeading: "افحص الصورة أولاً، ثم افتح التصدير عند الحاجة",
      pricingIntro:
        "التطبيق ليس اشتراكاً. يمكنك مراجعة الصورة والفحوصات أولاً، ثم الدفع مرة واحدة عندما تكون جاهزاً لتصدير الملف النهائي.",
      pricingItems: ["دفع مرة واحدة", "بدون اشتراك", "بدون إعلانات", "معالجة على الجهاز بدون رفع"],
      qrHeading: "تنزيل التطبيق على iPhone",
      qrIntro:
        "إذا فتحت الموقع من الكمبيوتر أو الجهاز اللوحي، امسح رمز QR بكاميرا iPhone لفتح صفحة App Store مباشرة.",
      qrCaption: "رمز QR لتنزيل iOS",
      seoHeading: "أدلة مقاسات صور المستندات الشائعة",
      ctaPrimary: "تنزيل من App Store",
      ctaSecondary: "عرض لقطات التطبيق",
      qrPage: "فتح صفحة التنزيل",
      appStoreLink: "رابط App Store"
    },
    download: {
      eyebrow: "تنزيل",
      title: "تنزيل IDPhoto Pro",
      description: "يتوفر IDPhoto Pro حالياً على iPhone عبر App Store.",
      platform: "مناسب لصور الجواز والتأشيرة والهوية والإقامة، مع تصدير رقمي وتخطيطات طباعة.",
      iosTitle: "امسح للتنزيل على iPhone",
      iosDescription: "استخدم كاميرا iPhone لمسح الرمز وفتح صفحة App Store.",
      androidTitle: "Android غير متاح حالياً",
      androidDescription: "الإصدار الحالي مخصص لـ iPhone. إذا توفر إصدار Android سنضيفه هنا.",
      backHome: "العودة للرئيسية"
    },
    about: {
      title: "حول IDPhoto Pro",
      paragraphs: [
        "IDPhoto Pro مخصص لصور الجواز والتأشيرة والبطاقات والإقامة عندما تحتاج إلى ضبط المقاس والخلفية والتصدير بدون زيارة استوديو.",
        "هذا الموقع ليس خدمة حكومية رسمية، بل موقع المنتج الذي يشرح ما يفعله التطبيق وكيفية تنزيله."
      ]
    },
    blog: {
      title: "مركز أدلة صور المستندات",
      paragraphs: [
        "هذه الصفحة مدخل لأدلة صور الجواز والتأشيرة والإقامة ومقاسات الطباعة.",
        "نبدأ بصفحات عالية النية مثل الإقامة السعودية والهوية الإماراتية والبطاقة المدنية الكويتية."
      ]
    },
    support: {
      title: "دعم IDPhoto Pro",
      lead: "إذا واجهت مشكلة أثناء إنشاء أو فحص أو تصدير صورة مستند، ابدأ من هذه الصفحة.",
      privacyReminder: "ملاحظة الخصوصية: تتم معالجة الصور على جهازك ولا يتم رفعها إلى خادم.",
      purchaseReminder: "ملاحظة الشراء: الفتح مدى الحياة شراء لمرة واحدة، بلا اشتراك أو رسوم متكررة."
    },
    privacy: {
      title: "سياسة الخصوصية لـ IDPhoto Pro",
      effective: "تاريخ السريان: 21 مايو 2026"
    },
    terms: {
      title: "شروط الخدمة"
    }
  },
  en: {
    nav: {
      home: "Home",
      download: "Download",
      support: "Support",
      privacy: "Privacy",
      about: "About",
      blog: "Blog"
    },
    footer: {
      notice: "IDPhoto Pro is not affiliated with any government agency.",
      contact: "Contact"
    },
    home: {
      eyebrow: "Private passport photo app for iPhone",
      title: "Don’t let photo size, background, or print layout block your application",
      description:
        "IDPhoto Pro helps you prepare passport, visa, and ID photos on iPhone. Choose a photo size, import a portrait, check face position, background, and dimensions, then export a digital file or 4x6 print layout. Photos stay on your device.",
      highlights: [
        "Check size, background, eye line, and head proportion",
        "Export JPG, PNG, HEIC, and PDF",
        "Create 4x6, A4, and Letter print layouts",
        "One-time unlock, no subscription, no ads"
      ],
      stepsHeading: "Check the details that commonly block applications.",
      steps: [
        {
          title: "Size and pixels",
          description:
            "Passport, visa, and ID photo requirements vary by country and document type, so start by checking size, ratio, and export pixels."
        },
        {
          title: "Face position and background",
          description:
            "Review eye line, head proportion, centering, margins, and background color before you submit the photo."
        },
        {
          title: "Digital and print output",
          description:
            "Export an image or PDF for upload, or create a 4x6, A4, or Letter print layout when you need physical copies."
        }
      ],
      checksHeading: "Smart checks catch common issues before you export.",
      checksIntro:
        "For document photos, the real question is whether the file matches the requirements. IDPhoto Pro checks the selected country and document type on your device, then reviews framing, background, and image quality before export.",
      checks: [
        "Selected country and document size",
        "Final photo aspect ratio",
        "Pixel resolution for export",
        "Allowed background color",
        "Background cleanliness and shadow risk",
        "Head height ratio within target range",
        "Top margin too high or too low",
        "Chin-to-bottom spacing balance",
        "Eye height within target range",
        "Horizontal face centering",
        "Vertical head position",
        "Visible head tilt",
        "Both eyes visible",
        "Eyes open clearly enough",
        "Possible hat or head covering risk",
        "Face sharpness and clarity",
        "Brightness, contrast, shadow, and warmth risk",
        "Overall score and issue summary before export"
      ],
      exportHeading: "Export digital files or ready-to-print layouts",
      exportIntro:
        "After editing, export a digital file for upload or a print-ready sheet for a photo lab. IDPhoto Pro supports JPG, PNG, HEIF, PDF, and common 4x6, A4, and Letter layouts.",
      exportItems: [
        "JPG, PNG, HEIF, and PDF",
        "4x6, A4, and Letter print layouts",
        "Save to Photos, share, or export files"
      ],
      pricingHeading: "Check the photo first, unlock export only when you need it",
      pricingIntro:
        "The app is not a subscription. You can review the photo and the checks first, then pay once when you are ready to export the final file.",
      pricingItems: [
        "One-time purchase",
        "No subscription",
        "No ads",
        "On-device processing with no server upload"
      ],
      qrHeading: "Download for iPhone",
      qrIntro:
        "Opening this page on a desktop or tablet? Scan the QR code with your iPhone camera to open the App Store listing.",
      qrCaption: "iOS download QR",
      seoHeading: "Popular photo size guide shortcuts",
      ctaPrimary: "Download on the App Store",
      ctaSecondary: "Browse photo size guides",
      qrPage: "Open download page",
      appStoreLink: "App Store link"
    },
    download: {
      eyebrow: "Download",
      title: "Download IDPhoto Pro",
      description:
        "IDPhoto Pro is currently available for iPhone. Scan the code to open the App Store listing.",
      platform:
        "Current platform: iPhone via the App Store. Built for passport photos, visa photos, common ID photos, and both digital and print export.",
      iosTitle: "Scan to download on iPhone",
      iosDescription:
        "Use your iPhone camera to scan the code and open the App Store listing directly.",
      androidTitle: "Android is not available yet",
      androidDescription:
        "The current release is iPhone-only. If an Android version becomes available, we will add it here.",
      backHome: "Back to home"
    },
    about: {
      title: "About IDPhoto Pro",
      paragraphs: [
        "IDPhoto Pro is built for passport photos, visa photos, green card photos, residence card photos, and other document-photo scenarios where people care about getting the requirements right without turning the process into a studio visit.",
        "This site is not an official government service. It is the product site for the app, and its role is to explain what the app actually does, where it helps, and how people can download it."
      ]
    },
    blog: {
      title: "Document Photo Content Hub",
      paragraphs: [
        "This page is the content entry point for passport photo, visa photo, residence permit photo, print format, and practical shooting guides.",
        "Start by making the high-intent preset pages strong before expanding into a larger content library."
      ]
    },
    support: {
      title: "IDPhoto Pro Support",
      lead:
        "If something feels unclear while creating, checking, or exporting a document photo, this is the right place to start.",
      privacyReminder:
        "Privacy note: photo processing stays on your device and photos are not uploaded to a server.",
      purchaseReminder:
        "Purchase note: lifetime unlock is a one-time purchase, with no subscription and no recurring charge."
    },
    privacy: {
      title: "Privacy Policy for IDPhoto Pro",
      effective: "Effective date: May 21, 2026"
    },
    terms: {
      title: "Terms of Service"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      download: "Download",
      support: "Support",
      privacy: "Datenschutz",
      about: "Über uns",
      blog: "Ratgeber"
    },
    footer: {
      notice: "IDPhoto Pro ist nicht mit einer Behörde verbunden.",
      contact: "Kontakt"
    },
    home: {
      eyebrow: "Private Passfoto-App für iPhone",
      title: "Pass-, Visa- und Ausweisfotos direkt auf dem iPhone erstellen.",
      description:
        "Wähle die passende Vorlage, richte das Foto aus, prüfe typische Anforderungen und exportiere eine digitale Datei oder ein Drucklayout. Deine Fotos bleiben auf dem iPhone. Einmal kaufen, kein Abo.",
      highlights: [
        "Bildverarbeitung direkt auf dem Gerät, ohne Server-Upload",
        "Einmaliger Kauf, kein Abo, keine Werbung",
        "Prüft Größe, Hintergrund, Augenlinie, Ränder, Zentrierung, Neigung und Schärfe",
        "Exportiert digitale Dateien sowie Drucklayouts für 4x6, A4 und Letter"
      ],
      stepsHeading: "Mehr als Zuschneiden: ein kompletter Ablauf für Ausweisfotos.",
      steps: [
        {
          title: "Vorlage auswählen",
          description: "Starte mit Land und Dokumenttyp, statt Größe, Seitenverhältnis und Bildausschnitt zu erraten."
        },
        {
          title: "Foto auf dem iPhone anpassen",
          description: "Nutze die intelligente Ausrichtung oder passe Position, Zoom, Drehung, Helligkeit, Schärfe und Hintergrund manuell an."
        },
        {
          title: "Digital oder druckfertig exportieren",
          description: "Exportiere eine Datei für Online-Portale oder erstelle ein Drucklayout für Papierabzüge."
        }
      ],
      checksHeading: "Intelligente Prüfungen zeigen typische Probleme vor dem Export.",
      checksIntro:
        "Bei Ausweisfotos zählt vor allem, ob die Datei zu den Anforderungen passt. IDPhoto Pro prüft das gewählte Land und den Dokumenttyp auf dem Gerät und kontrolliert Bildausschnitt, Hintergrund und Bildqualität vor dem Export.",
      checks: [
        "Gewähltes Land und Dokumentformat",
        "Seitenverhältnis des fertigen Fotos",
        "Pixelauflösung für den Export",
        "Zulässige Hintergrundfarbe",
        "Sauberkeit des Hintergrunds und Schattenrisiko",
        "Kopfhöhe im Zielbereich",
        "Oberer Rand zu groß oder zu klein",
        "Abstand zwischen Kinn und unterem Rand",
        "Augenlinie im Zielbereich",
        "Horizontale Zentrierung des Gesichts",
        "Vertikale Kopfposition",
        "Erkennbare Kopfneigung",
        "Beide Augen sichtbar",
        "Augen klar genug geöffnet",
        "Mögliche Kopfbedeckung oder Verdeckung",
        "Schärfe und Klarheit des Gesichts",
        "Risiken bei Helligkeit, Kontrast, Schatten und Farbtemperatur",
        "Gesamtbewertung und Problemliste vor dem Export"
      ],
      exportHeading: "Digitale Dateien oder druckfertige Layouts exportieren",
      exportIntro:
        "Nach der Bearbeitung exportierst du eine Datei für den Upload oder ein druckfertiges Blatt für Fotolabore. IDPhoto Pro unterstützt JPG, PNG, HEIF, PDF sowie 4x6, A4 und Letter.",
      exportItems: [
        "JPG, PNG, HEIF und PDF",
        "Drucklayouts für 4x6, A4 und Letter",
        "In Fotos sichern, teilen oder als Datei exportieren"
      ],
      pricingHeading: "Erst prüfen, Export nur bei Bedarf freischalten",
      pricingIntro:
        "IDPhoto Pro ist kein Abo. Du kannst Foto und Prüfungen zuerst ansehen und erst dann einmalig bezahlen, wenn du die finale Datei exportieren möchtest.",
      pricingItems: [
        "Einmaliger Kauf",
        "Kein Abo",
        "Keine Werbung",
        "Verarbeitung auf dem Gerät ohne Server-Upload"
      ],
      qrHeading: "Download für iPhone",
      qrIntro:
        "Öffnest du diese Seite am Computer oder Tablet? Scanne den QR-Code mit der iPhone-Kamera, um den App Store zu öffnen.",
      qrCaption: "iOS Download-QR-Code",
      seoHeading: "Beliebte Ratgeber zu Ausweisfoto-Größen",
      ctaPrimary: "Im App Store laden",
      ctaSecondary: "App-Screenshots ansehen",
      qrPage: "Downloadseite öffnen",
      appStoreLink: "App Store Link"
    },
    download: {
      eyebrow: "Download",
      title: "IDPhoto Pro herunterladen",
      description:
        "IDPhoto Pro ist derzeit für iPhone verfügbar. Scanne den Code, um die App-Store-Seite zu öffnen.",
      platform:
        "Aktuelle Plattform: iPhone über den App Store. Geeignet für Passfotos, Visa-Fotos, Ausweisfotos sowie digitale Dateien und Druckexport.",
      iosTitle: "Zum Download mit dem iPhone scannen",
      iosDescription:
        "Scanne den Code mit der iPhone-Kamera, um die App-Store-Seite direkt zu öffnen.",
      androidTitle: "Android ist noch nicht verfügbar",
      androidDescription:
        "Die aktuelle Version ist nur für iPhone. Falls eine Android-Version verfügbar wird, ergänzen wir sie hier.",
      backHome: "Zur Startseite"
    },
    about: {
      title: "Über IDPhoto Pro",
      paragraphs: [
        "IDPhoto Pro ist für Passfotos, Visa-Fotos, Green-Card-Fotos, Aufenthaltstitel und andere Ausweisfoto-Situationen gedacht, bei denen Größe, Hintergrund, Prüfung und Export zuverlässig zusammenpassen müssen.",
        "Diese Website ist kein offizieller Behördendienst. Sie erklärt, was die App macht, wofür sie geeignet ist und wo sie heruntergeladen werden kann."
      ]
    },
    blog: {
      title: "Ratgeber für Ausweisfotos",
      paragraphs: [
        "Diese Seite ist der Einstieg für Inhalte zu Passfotos, Visa-Fotos, Aufenthaltstiteln, Druckgrößen und praktischen Aufnahmetipps.",
        "Zuerst werden die wichtigsten Formatseiten gestärkt, danach kann die Inhaltsbibliothek weiter wachsen."
      ]
    },
    support: {
      title: "IDPhoto Pro Support",
      lead:
        "Wenn beim Erstellen, Prüfen oder Exportieren eines Ausweisfotos etwas unklar ist, starte hier.",
      privacyReminder:
        "Datenschutzhinweis: Die Fotobearbeitung bleibt auf deinem Gerät. Fotos werden nicht auf einen Server hochgeladen.",
      purchaseReminder:
        "Kaufhinweis: Die Freischaltung ist ein einmaliger Kauf, kein Abo und keine wiederkehrende Zahlung."
    },
    privacy: {
      title: "Datenschutzerklärung für IDPhoto Pro",
      effective: "Gültig ab: 21. Mai 2026"
    },
    terms: {
      title: "Nutzungsbedingungen"
    }
  }
} as const;

export function getCopy(locale: Locale) {
  return uiCopy[locale];
}
