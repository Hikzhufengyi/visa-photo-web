import { TrackedLink } from "@/components/tracked-link";
import type { Locale } from "@/data/localization";
import { siteConfig } from "@/data/site";

const complianceCopy = {
  en: {
    eyebrow: "Photo Review Guidance",
    title: "Review key photo details before you export",
    intro:
      "IDPhoto Pro shows a pre-export photo review on iPhone so you can spot sizing, background, face-position, and file issues before you save or submit a photo file.",
    note:
      "Checks are guidance based on published requirements. Always review the latest official source before you submit a final photo.",
    badge: "20+ review items",
    items: [
      "Selected photo-size preset",
      "Final aspect ratio",
      "Pixel resolution for export",
      "Required background color",
      "Background cleanliness and shadow risk",
      "Head height ratio",
      "Top margin",
      "Chin-to-bottom spacing",
      "Eye line height",
      "Horizontal face centering",
      "Vertical head position",
      "Head tilt",
      "Both eyes visible",
      "Eyes open clearly",
      "Hat or head covering risk",
      "Face sharpness",
      "Brightness, contrast, shadow, and color temperature",
      "Shoulder and collar area",
      "Glasses glare or face obstruction risk",
      "300 DPI print readiness",
      "File size for online application upload"
    ],
    cta: "Download App",
    trust: "On-device processing. No photo upload.",
    reportTitle: "What the report helps you catch",
    reportItems: [
      "Sizing mismatches before export",
      "Face framing and eye line issues",
      "Background and shadow problems",
      "Print readiness and upload file limits"
    ]
  },
  zh: {
    eyebrow: "照片检查指引",
    title: "导出前，把关键检查项先看清楚",
    intro:
      "IDPhoto Pro 会在 iPhone 上给出完整的导出前检查清单，尽量把尺寸、背景、脸部位置和文件问题提前暴露出来。",
    note:
      "这些检查基于公开要求提供辅助提示。正式提交前，仍建议核对最新官方来源。",
    badge: "20+ 项照片检查",
    items: [
      "当前选择的照片尺寸模板",
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
      "肩部和衣领区域是否完整",
      "眼镜反光或面部遮挡风险",
      "是否满足 300 DPI 打印导出",
      "文件大小是否适合线上申请上传"
    ],
    cta: "下载 App",
    trust: "本地处理。照片不上云。",
    reportTitle: "这份检查报告主要帮你提前发现",
    reportItems: [
      "导出前的尺寸或比例不匹配",
      "脸部位置、眼线和构图问题",
      "背景纯净度和阴影风险",
      "打印输出和线上上传限制"
    ]
  },
  ar: {
    eyebrow: "إرشادات مراجعة الصورة",
    title: "راجع الفحوصات الأساسية قبل التصدير",
    intro:
      "يعرض IDPhoto Pro قائمة فحص كاملة على iPhone حتى تكتشف مشاكل المقاس والخلفية وموضع الوجه والملف قبل التقديم.",
    note:
      "هذه الفحوصات إرشادية وتعتمد على المتطلبات المنشورة. راجع المصدر الرسمي قبل التقديم النهائي.",
    badge: "20+ بند مراجعة",
    items: [
      "قالب مقاس الصورة المحدد",
      "نسبة أبعاد الصورة",
      "دقة البكسل للتصدير",
      "لون الخلفية المطلوب",
      "نظافة الخلفية ومخاطر الظلال",
      "نسبة ارتفاع الرأس",
      "الهامش العلوي",
      "مسافة الذقن إلى الأسفل",
      "ارتفاع خط العين",
      "توسيط الوجه أفقياً",
      "موضع الرأس عمودياً",
      "ميل الرأس",
      "ظهور العينين",
      "العينان مفتوحتان",
      "مخاطر غطاء الرأس",
      "وضوح الوجه",
      "الإضاءة والتباين والظلال وحرارة اللون",
      "منطقة الكتفين والياقة",
      "انعكاس النظارات أو حجب الوجه",
      "جاهزية الطباعة بدقة 300 DPI",
      "حجم الملف للرفع عبر الإنترنت"
    ],
    cta: "تنزيل التطبيق",
    trust: "المعالجة على الجهاز. بدون رفع الصور.",
    reportTitle: "ما الذي تساعدك هذه الفحوصات على اكتشافه",
    reportItems: [
      "عدم تطابق المقاس قبل التصدير",
      "مشاكل تموضع الوجه وخط العين",
      "الخلفية والظلال غير المناسبة",
      "جاهزية الطباعة وحدود رفع الملف"
    ]
  },
  de: {
    eyebrow: "Hinweise zur Foto-Prüfung",
    title: "Prüfe die wichtigsten Punkte vor dem Export",
    intro:
      "IDPhoto Pro zeigt auf dem iPhone eine vollständige Prüfliste, damit Größen-, Hintergrund-, Gesichts- und Dateiprobleme vor dem Einreichen sichtbar werden.",
    note:
      "Die Prüfungen dienen als Orientierung auf Basis veröffentlichter Anforderungen. Prüfe vor der Abgabe immer die offizielle Quelle.",
    badge: "20+ Prüfpunkte",
    items: [
      "Ausgewählte Fotogrößen-Vorlage",
      "Endgültiges Seitenverhältnis",
      "Pixelauflösung für den Export",
      "Erforderliche Hintergrundfarbe",
      "Hintergrundreinheit und Schattenrisiko",
      "Kopfhöhenverhältnis",
      "Oberer Rand",
      "Abstand Kinn bis Unterkante",
      "Augenlinienhöhe",
      "Horizontale Gesichtszentrierung",
      "Vertikale Kopfposition",
      "Kopfneigung",
      "Beide Augen sichtbar",
      "Augen klar geöffnet",
      "Risiko durch Kopfbedeckung",
      "Gesichtsschärfe",
      "Helligkeit, Kontrast, Schatten und Farbtemperatur",
      "Schulter- und Kragenbereich",
      "Brillenreflexe oder verdecktes Gesicht",
      "300-DPI-Druckbereitschaft",
      "Dateigröße für Online-Anträge"
    ],
    cta: "App laden",
    trust: "Lokal verarbeitet. Kein Foto-Upload.",
    reportTitle: "Wobei dir der Prüfbericht hilft",
    reportItems: [
      "Größenfehler vor dem Export erkennen",
      "Gesichts- und Augenlinienprobleme sehen",
      "Hintergrund- und Schattenrisiken finden",
      "Druck- und Upload-Grenzen prüfen"
    ]
  }
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
    badge: string;
    items: string[];
    cta: string;
    trust: string;
    reportTitle: string;
    reportItems: string[];
  }
>;

export function CompliancePage({ locale }: { locale: Locale }) {
  const copy = complianceCopy[locale];

  return (
    <main className="legal-page">
      <div className="legal-shell compliance-shell">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>

        <section className="compliance-overview">
          <div className="compliance-report-card" aria-hidden="true">
            <div className="abstract-report-top">
              <div className="abstract-report-badge">✓</div>
              <div>
                <strong>Ready to Export</strong>
                <p>{locale === "zh" ? "所有关键检查已通过" : "All key checks passed"}</p>
              </div>
              <em>100%</em>
            </div>
            <div className="abstract-report-note">
              <span>✓</span>
              <p>{copy.note}</p>
            </div>
            <div className="abstract-report-list">
              {copy.reportItems.map((item) => (
                <div key={item}>
                  <span>✓</span>
                  <strong>{item}</strong>
                  <i />
                </div>
              ))}
            </div>
          </div>

          <div className="compliance-copy">
            <span>{copy.badge}</span>
            <h2>{locale === "zh" ? "完整检查清单" : "Full checklist"}</h2>
            <p>{copy.note}</p>
            <div className="compliance-list">
              {copy.items.map((item) => (
                <div key={item}>
                  <span aria-hidden="true">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="compliance-cta">
          <TrackedLink
            className="button button-primary"
            href={siteConfig.appStoreUrl}
            target="_blank"
            rel="noreferrer"
            eventName="app_store_click"
            eventParams={{ source: "compliance_page", locale }}
          >
            {copy.cta}
          </TrackedLink>
          <p>{copy.trust}</p>
        </section>
      </div>
    </main>
  );
}
