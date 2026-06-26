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
      eyebrow: "iPhone Passport Photo App",
      title: "护照照、签证照和打印排版，都可以直接在 iPhone 上完成。",
      description:
        "IDPhoto Pro 不是那种先上传照片、再交给服务器处理的工具。它把证件规格、照片调整、合规检查和导出都放在 iPhone 上完成，流程更直接，也更让人放心。",
      highlights: [
        "内置护照、签证、移民和打印规格库",
        "背景、头部比例、眼线和留白可在本地检查",
        "支持 300 DPI 导出、目标 KB 压缩和打印排版"
      ],
      stepsHeading: "它不是简单裁一张图，而是一整套证件照流程",
      steps: [
        {
          title: "选择证件规格",
          description: "先按国家、证件类型或尺寸找到对应模板，不用自己猜比例。"
        },
        {
          title: "上传并调整照片",
          description: "在 iPhone 上完成裁切、缩放、旋转、亮度、锐度和背景处理。"
        },
        {
          title: "导出电子版或打印版",
          description: "需要电子版就导出文件，需要冲印就生成 4x6、A4 或 Letter 排版。"
        }
      ],
      checksHeading: "真正有价值的，不是修图，而是把检查讲清楚",
      checksIntro:
        "做证件照时，用户最担心的通常不是美观，而是能不能提交。IDPhoto Pro 会在设备上给出更具体的检查结果，帮助你更早发现问题，而不是导出后再返工。",
      checks: [
        "分辨率是否足够导出",
        "背景颜色是否符合要求",
        "头部比例是否在目标范围",
        "眼线高度和上下留白是否合理",
        "单人照片、居中和头部倾斜情况"
      ],
      exportHeading: "导出不只是一张 JPG，而是把上传和打印都考虑进去",
      exportIntro:
        "很多人做完证件照，接下来才发现上传门户有限制、冲印店又需要排版。IDPhoto Pro 把这些后续需求也一起考虑进去了，所以不只是“保存一张图”这么简单。",
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
      seoHeading: "内容页先围绕真实规格库展开，不急着铺太大",
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
      eyebrow: "iPhone Passport Photo App",
      title: "Passport photos, visa photos, and print layouts, all handled on iPhone.",
      description:
        "IDPhoto Pro is not the kind of tool that sends your photo to a server first and sorts things out later. It keeps document presets, photo adjustment, compliance review, and export together on iPhone, which makes the whole process feel simpler and more trustworthy.",
      highlights: [
        "Built-in passport, visa, immigration, and print-size presets",
        "On-device checks for background, head ratio, eye line, and margins",
        "300 DPI export, target-KB compression, and print layouts"
      ],
      stepsHeading: "It is not just a cropper. It is a document-photo workflow.",
      steps: [
        {
          title: "Choose a document preset",
          description:
            "Start with the right template instead of guessing dimensions and framing."
        },
        {
          title: "Adjust the photo on iPhone",
          description:
            "Refine crop, zoom, rotation, brightness, sharpness, and background directly on iPhone."
        },
        {
          title: "Export digital or print-ready files",
          description:
            "Export a digital file for upload, or generate a print layout when you need a physical copy."
        }
      ],
      checksHeading: "The useful part is not the edit. It is the review.",
      checksIntro:
        "For document photos, people usually care less about style and more about whether the file is likely to work. IDPhoto Pro makes that part clearer by reviewing the image on device and surfacing the issues earlier.",
      checks: [
        "Resolution for digital export",
        "Allowed background color",
        "Head ratio within target range",
        "Eye line height and top/bottom margin balance",
        "Single-person framing, centering, and head tilt"
      ],
      exportHeading: "Export is built for both upload portals and print shops",
      exportIntro:
        "A lot of apps stop at saving a single image. This one goes further by covering digital export, print layouts, crop marks, file sharing, and size-limited uploads in the same flow.",
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
      seoHeading: "Content should grow from the real preset library, not from filler pages",
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
