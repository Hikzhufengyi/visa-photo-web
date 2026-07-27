import type { Locale } from "@/data/localization";
import type { SeoPage } from "@/data/seo-pages";

export type GeoQuestion = {
  question: string;
  answer: string;
};

export function buildGeoQuestions(page: SeoPage, locale: Locale): GeoQuestion[] {
  if (page.generatedQuestions === false || (locale !== "en" && locale !== "zh")) {
    return [];
  }

  if (locale === "zh") {
    return buildZhQuestions(page);
  }

  return buildEnQuestions(page);
}

function buildEnQuestions(page: SeoPage): GeoQuestion[] {
  const article = startsWithVowel(page.documentName) ? "an" : "a";
  const documentLabel = `${page.country} ${page.documentName}`.trim();

  return [
    {
      question: `What size is ${article} ${documentLabel} photo?`,
      answer: `${documentLabel} photo guidance on this page uses ${page.size}. The recommended digital file guidance is ${page.pixels}. Always confirm the latest official or receiving-channel requirement before submission.`
    },
    {
      question: `What background should I use for ${article} ${documentLabel} photo?`,
      answer: `The background guidance for this preset is ${page.background}. Use even lighting and avoid strong shadows, color casts, filters, or distracting objects behind the face.`
    },
    {
      question: `Can I make ${article} ${documentLabel} photo on iPhone?`,
      answer: `Yes. IDPhoto Pro lets you choose the preset, import or take a portrait, review size, face-position, background, and sharpness checks, then export the finished photo on iPhone.`
    },
    {
      question: `Can I print ${article} ${documentLabel} photo on a 4x6 sheet?`,
      answer: `Yes, if the receiving workflow accepts printed photos. IDPhoto Pro can create print-ready layouts such as 4x6 after the single photo has been prepared and checked.`
    },
    {
      question: `Can I export ${article} ${documentLabel} photo as JPG, PNG, HEIC, or PDF?`,
      answer: `IDPhoto Pro supports common digital export formats including JPG, PNG, HEIC, and PDF. Use the file format requested by the application portal, embassy, visa center, or print workflow.`
    },
    {
      question: `Does IDPhoto Pro upload my ${documentLabel} photo?`,
      answer: `No. The core photo workflow is designed to process photos on device. Photos are not uploaded to a server for editing.`
    },
    {
      question: `Does IDPhoto Pro require a subscription for ${documentLabel} photos?`,
      answer: `IDPhoto Pro is positioned around a one-time unlock rather than a subscription-focused workflow. Check the App Store listing for current pricing and availability.`
    },
    {
      question: `What should I check before exporting ${article} ${documentLabel} photo?`,
      answer: `Before export, review the photo size, pixel resolution, background, head proportion, eye line, face centering, top margin, sharpness, brightness, and file format.`
    },
    {
      question: `Can IDPhoto Pro guarantee acceptance of ${article} ${documentLabel} photo?`,
      answer: `No. IDPhoto Pro helps prepare and check photo files based on known requirements, but final acceptance is decided by the receiving authority or application portal.`
    },
    {
      question: `Does IDPhoto Pro create official ${page.documentName} documents?`,
      answer: `No. IDPhoto Pro creates photo files only. It does not create IDs, passports, visas, residence cards, immigration documents, or other official documents.`
    }
  ];
}

function buildZhQuestions(page: SeoPage): GeoQuestion[] {
  const documentLabel = `${page.country} ${page.documentName}`.trim();

  return [
    {
      question: `${documentLabel} 照片尺寸是多少？`,
      answer: `这个页面使用的常见尺寸是 ${page.size}，建议数字文件为 ${page.pixels}。最终提交前仍应核对官方或接收渠道的最新要求。`
    },
    {
      question: `${documentLabel} 照片应该用什么背景？`,
      answer: `这个规格的背景建议是 ${page.background}。拍摄时应保持光线均匀，避免明显阴影、偏色、滤镜或背景杂物。`
    },
    {
      question: `可以在 iPhone 上制作 ${documentLabel} 照片吗？`,
      answer: `可以。IDPhoto Pro 支持选择规格、导入或拍摄照片、检查尺寸、脸部位置、背景和清晰度，然后在 iPhone 上导出。`
    },
    {
      question: `${documentLabel} 照片可以排版到 4x6 打印纸上吗？`,
      answer: `可以，如果接收渠道允许使用打印照片。IDPhoto Pro 可以在单张照片检查完成后生成 4x6 等打印排版。`
    },
    {
      question: `${documentLabel} 照片可以导出 JPG、PNG、HEIC 或 PDF 吗？`,
      answer: `IDPhoto Pro 支持 JPG、PNG、HEIC、PDF 等常见导出格式。请按申请网站、使领馆、签证中心或打印流程要求选择格式。`
    },
    {
      question: `IDPhoto Pro 会上传我的 ${documentLabel} 照片吗？`,
      answer: `不会。核心照片制作流程设计为在设备端处理，照片不会上传到服务器进行编辑。`
    },
    {
      question: `制作 ${documentLabel} 照片需要订阅吗？`,
      answer: `IDPhoto Pro 的定位是一次性解锁，而不是订阅优先的流程。具体价格和可用性请以 App Store 页面为准。`
    },
    {
      question: `导出 ${documentLabel} 照片前应该检查什么？`,
      answer: `导出前建议检查照片尺寸、像素分辨率、背景、头部比例、眼线高度、脸部居中、头顶留白、清晰度、亮度和导出格式。`
    },
    {
      question: `IDPhoto Pro 能保证 ${documentLabel} 照片一定通过吗？`,
      answer: `不能。IDPhoto Pro 可以帮助按常见要求制作和检查照片文件，但最终是否接受由接收机构或申请平台决定。`
    },
    {
      question: `IDPhoto Pro 会生成官方 ${page.documentName} 文件吗？`,
      answer: `不会。IDPhoto Pro 只制作照片文件，不生成身份证、护照、签证、居留卡、移民文件或任何官方文件。`
    }
  ];
}

function startsWithVowel(value: string) {
  return /^[aeiou]/i.test(value.trim());
}
