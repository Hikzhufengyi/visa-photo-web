export type Locale = "zh" | "en";

export const locales: Locale[] = ["zh", "en"];
export const defaultLocale: Locale = "zh";

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
      title: "在 iPhone 上制作可提交、可打印的证件照。",
      description:
        "IDPhoto Pro 支持护照照、签证照、绿卡照、居留卡照和证件照制作。照片处理在设备本地完成，不上传服务器；编辑页支持 AI 自动校准、手动多参数校准、多项检测评分标准、一次买断解锁和 4x6 打印排版。",
      highlights: [
        "100% 本地处理，不上传照片",
        "一次买断，无订阅、无广告",
        "多项评分标准：尺寸、比例、背景、眼线、留白、居中、倾斜和清晰度",
        "AI 一键校准 + 多种合规检查方式，提升提交前准备成功率"
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
        "做证件照时，用户最担心的通常不是美观，而是能不能提交。IDPhoto Pro 会根据所选国家和证件类型，在设备本地逐项检查照片规格、头像构图、面部状态、背景和画质，把细微风险提前显示出来，帮助你在导出前提高照片准备完成度。",
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
        "制作完成后，可以按不同用途导出电子文件或打印版。支持 JPG、PNG、HEIF、PDF，多种证件照排版尺寸，以及常用 4x6、A4、Letter 打印排版。",
      exportItems: [
        "JPG、PNG、HEIF、PDF",
        "4x6、A4、Letter 打印版",
        "保存到相册、分享或导出文件"
      ],
      pricingHeading: "可以先检查，再决定要不要买断解锁",
      pricingIntro:
        "这不是订阅制产品。用户可以先把照片调好、把检查结果看明白，确认需要导出最终文件时，再一次性解锁专业版。",
      pricingItems: ["一次买断", "无订阅", "无广告", "本地处理，不上传服务器"],
      qrHeading: "现在先提供 iPhone 下载，Android 后面再补上",
      qrIntro:
        "如果用户已经在电脑或平板上浏览官网，可以直接扫码到 App Store。等 Android 版本准备好之后，再把第二个下载入口接上就行。",
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
        "目前先提供 iPhone 版本。这个页面既可以作为正式下载入口，也方便后面继续补上 Android 下载渠道。",
      platform:
        "当前版本先上架 iPhone。适合护照照、签证照、证件照和打印版导出场景。",
      iosTitle: "扫码在 iPhone 上下载",
      iosDescription:
        "直接用 iPhone 相机扫一扫，就可以跳到 App Store 下载页面。",
      androidTitle: "Android 后续补充",
      androidDescription:
        "Android 下载入口还没上线，但位置已经预留好了。后面无论接 Google Play 还是 APK，都不需要重新改页面结构。",
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
      title: "Create submission-ready ID photos on iPhone.",
      description:
        "IDPhoto Pro helps you create passport, visa, green card, residence card, and ID photos with on-device processing, AI auto calibration, manual multi-parameter adjustment, multiple scoring standards, one-time purchase unlock, and 4x6 print layouts.",
      highlights: [
        "100% on-device photo processing, no server upload",
        "One-time purchase, no subscription, no ads",
        "Multiple scoring standards for size, ratio, background, eye height, margins, centering, tilt, and sharpness",
        "AI auto calibration plus multiple compliance checks to improve submission readiness"
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
        "For document photos, people usually care less about style and more about whether the file is likely to work. IDPhoto Pro reviews the selected country and document type on device, then checks photo specs, face framing, facial state, background, and image quality item by item before export.",
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
        "After editing, export a digital file or a print-ready sheet for different use cases. IDPhoto Pro supports JPG, PNG, HEIF, PDF, multiple document photo layouts, plus common 4x6, A4, and Letter print sheets.",
      exportItems: [
        "JPG, PNG, HEIF, and PDF",
        "4x6, A4, and Letter print layouts",
        "Save to Photos, share, or export files"
      ],
      pricingHeading: "Check first, then decide whether to unlock export",
      pricingIntro:
        "The app is not subscription-based. People can review their photo first, understand the checks, and only pay once they are ready to export the final file.",
      pricingItems: [
        "One-time purchase",
        "No subscription",
        "No ads",
        "On-device processing with no server upload"
      ],
      qrHeading: "iPhone download now, Android later",
      qrIntro:
        "If someone lands on the site from desktop or tablet, they can still move straight to the App Store by scanning the QR code. When Android is ready, the second slot is already reserved.",
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
        "The first release is for iPhone. This page works as the official download destination now and leaves room for Android later.",
      platform:
        "Current platform: iPhone via the App Store. Best suited for passport photos, visa photos, ID photos, and print-layout export.",
      iosTitle: "Scan to download on iPhone",
      iosDescription:
        "Use your iPhone camera to scan the code and jump straight to the App Store listing.",
      androidTitle: "Android coming later",
      androidDescription:
        "Android is not available yet, but the spot is already reserved. When the Android build is ready, the page structure does not need to change.",
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
