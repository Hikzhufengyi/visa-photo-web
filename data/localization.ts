export type Locale = "zh" | "en";

export const locales: Locale[] = ["en", "zh"];
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
      title: "在 iPhone 上完成护照照、签证照和证件照。",
      description:
        "从选规格、调照片、检查构图到导出电子版和打印版，都可以直接在 iPhone 上完成。照片不上传服务器，一次买断，无订阅。",
      highlights: [
        "100% 本地处理，不上传照片",
        "一次买断，无订阅、无广告",
        "检查尺寸、背景、眼线、留白、居中、倾斜和清晰度",
        "支持电子版导出，也支持 4x6、A4、Letter 打印排版"
      ],
      stepsHeading: "它不是简单裁一张图，而是一整套证件照流程",
      steps: [
        {
          title: "选择证件规格",
          description: "先按国家、证件类型或尺寸找到对应模板，多国家规格适配，不用自己猜比例。"
        },
        {
          title: "上传并调整照片",
          description: "编辑页支持 AI 自动校准，也支持手动调整位置、缩放、旋转、亮度、锐度和背景。"
        },
        {
          title: "导出电子版或打印版",
          description: "需要电子版就导出文件，需要冲印就生成 4x6、A4 或 Letter 排版。"
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
      seoHeading: "热门证件照规格指南",
      ctaPrimary: "App Store 下载",
      ctaSecondary: "查看产品截图",
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
      eyebrow: "Private On-Device Passport Photo App",
      title: "Create passport and visa photos on your iPhone.",
      description:
        "Choose a document preset, adjust the photo, review checks, and export digital or print-ready files directly on iPhone. Processing stays on device. One-time purchase. No subscription.",
      highlights: [
        "100% on-device photo processing, no server upload",
        "One-time purchase, no subscription, no ads",
        "Checks for size, background, eye height, margins, centering, tilt, and sharpness",
        "Supports digital export and 4x6, A4, and Letter print layouts"
      ],
      stepsHeading: "It is not just a cropper. It is a document-photo workflow.",
      steps: [
        {
          title: "Choose a document preset",
          description:
            "Start with a country and document preset instead of guessing dimensions, ratio, and framing."
        },
        {
          title: "Adjust the photo on iPhone",
          description:
            "Use AI auto calibration or manually refine position, zoom, rotation, brightness, sharpness, and background directly on iPhone."
        },
        {
          title: "Export digital or print-ready files",
          description:
            "Export a digital file for upload, or generate a print layout when you need a physical copy."
        }
      ],
      checksHeading: "Smart checks surface every small issue before export.",
      checksIntro:
        "With document photos, the real concern is usually not style but whether the file is likely to pass review. IDPhoto Pro checks the selected country and document type on device, then reviews framing, background, and image quality before export.",
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
        "Eyes open enough for document use",
        "Possible hat or head covering risk",
        "Face sharpness and clarity",
        "Brightness, contrast, shadow, and warmth risk",
        "Overall score and failed-item summary before export"
      ],
      exportHeading: "Export in multiple file formats and print layout sizes",
      exportIntro:
        "After editing, export a digital file for upload or a print-ready sheet for photo labs. IDPhoto Pro supports JPG, PNG, HEIF, PDF, and common 4x6, A4, and Letter layouts.",
      exportItems: [
        "JPG, PNG, HEIF, and PDF",
        "4x6, A4, and Letter print layouts",
        "Save to Photos, share, or export files"
      ],
      pricingHeading: "Check first, then decide whether to unlock export",
      pricingIntro:
        "The app is not subscription-based. People can review the photo first, understand the checks, and pay once they are ready to export the final file.",
      pricingItems: [
        "One-time purchase",
        "No subscription",
        "No ads",
        "On-device processing with no server upload"
      ],
      qrHeading: "iPhone download now, Android later",
      qrIntro:
        "If someone opens the site on desktop or tablet, they can still jump straight to the App Store by scanning the QR code. When Android is ready, the second slot is already reserved.",
      qrCaption: "iOS download QR",
      seoHeading: "Popular document photo size guides",
      ctaPrimary: "Download on the App Store",
      ctaSecondary: "View app screenshots",
      qrPage: "Open download page",
      appStoreLink: "App Store link"
    },
    download: {
      eyebrow: "Download",
      title: "Download IDPhoto Pro",
      description:
        "The first release is for iPhone. You can scan the code to jump straight to the App Store, and this page can stay in place when Android is added later.",
      platform:
        "Current platform: iPhone via the App Store. Best for passport photos, visa photos, common ID photos, and both digital and print export.",
      iosTitle: "Scan to download on iPhone",
      iosDescription:
        "Use your iPhone camera to scan the code and open the App Store listing directly.",
      androidTitle: "Android coming later",
      androidDescription:
        "Android is not available yet, but the spot is already reserved. When the Android build is ready, this page will not need a redesign.",
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
  }
} as const;

export function getCopy(locale: Locale) {
  return uiCopy[locale];
}
