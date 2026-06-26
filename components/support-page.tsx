import Link from "next/link";
import type { Locale } from "@/data/localization";
import { siteConfig } from "@/data/site";

export function SupportPage({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const downloadHref = locale === "zh" ? "/zh/download" : "/en/download";
  const privacyHref = locale === "zh" ? "/zh/privacy" : "/en/privacy";

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">Technical Support</p>
        <h1>{isZh ? "IDPhoto Pro 技术支持" : "IDPhoto Pro Support"}</h1>
        <p>
          {isZh
            ? "如果你在制作、检查或导出护照照、签证照、绿卡照、居留卡照或其他证件照时遇到问题，可以先查看下面的常见问题，或联系开发者。"
            : "Need help creating, checking, or exporting passport, visa, green card, residence card, or ID photos? Use the information below to troubleshoot common issues or contact the developer."}
        </p>

        <section className="notice-card">
          <strong>{isZh ? "隐私提醒：" : "Privacy reminder:"}</strong>{" "}
          {isZh
            ? "照片处理在你的设备本地完成。IDPhoto Pro 不会把你的照片上传到服务器。"
            : "Photo processing happens on your device. IDPhoto Pro does not upload your photos to a server."}
        </section>

        <section className="notice-card">
          <strong>{isZh ? "购买提醒：" : "Purchase reminder:"}</strong>{" "}
          {isZh
            ? "IDPhoto Pro 使用一次性终身解锁。没有订阅、没有连续扣费，也没有广告。"
            : "IDPhoto Pro uses a one-time lifetime unlock. There is no subscription, no recurring charge, and no advertising."}
        </section>

        <section className="policy-section">
          <h2>{isZh ? "联系" : "Contact"}</h2>
          <p>
            {isZh ? "邮箱：" : "Email:"}{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
          </p>
          <div className="hero-actions">
            <Link
              className="button button-primary"
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              {isZh ? "打开 App Store" : "Open App Store"}
            </Link>
            <Link className="button button-secondary" href={downloadHref}>
              {isZh ? "前往下载页" : "Download page"}
            </Link>
          </div>
        </section>

        <section className="policy-section">
          <h2>{isZh ? "常见问题" : "Common Questions"}</h2>

          <h3>{isZh ? "为什么我的照片被标记为需要处理？" : "Why was my photo marked as needing attention?"}</h3>
          <p>
            {isZh
              ? "App 会检查头部大小、面部位置、眼线高度、头顶留白、背景、清晰度和文件大小等常见要求。请根据检查列表调整照片后再导出。"
              : "The app checks common requirements such as head size, face position, eye line height, top margin, background, sharpness, and file-size guidance. Review the checklist and adjust the photo before exporting."}
          </p>

          <h3>{isZh ? "为什么预览里会显示引导线？" : "Why does the preview show guide lines?"}</h3>
          <p>
            {isZh
              ? "引导线用于帮助你对齐面部、眼线、头顶留白和可打印区域。不同国家和证件类型可能使用不同的尺寸和构图规则。"
              : "Guide lines help you align the face, eye line, top margin, and printable area for the selected document type. Different countries and document types may use different size and framing rules."}
          </p>

          <h3>{isZh ? "IDPhoto Pro 能保证照片一定通过吗？" : "Does IDPhoto Pro guarantee acceptance?"}</h3>
          <p>
            {isZh
              ? "不能。IDPhoto Pro 会根据公开要求帮助准备照片，但不能保证任何政府、使领馆、签证中心或申请平台一定接受。提交前请核对官方来源。"
              : "No. IDPhoto Pro helps prepare photos based on published requirements, but it cannot guarantee acceptance by any government, embassy, visa center, or application portal. Always review the official source before submitting."}
          </p>

          <h3>{isZh ? "面部检测会上传到服务器吗？" : "Are my face checks uploaded to a server?"}</h3>
          <p>
            {isZh
              ? "不会。面部位置、眼线高度、头部比例和留白检查会在你的设备本地处理。IDPhoto Pro 不会上传照片，也不会创建服务器端人脸模板。"
              : "No. Face position, eye line, head proportion, and margin checks are processed on your device. IDPhoto Pro does not upload your photos or create server-side face templates."}
          </p>

          <h3>{isZh ? "我的制作记录保存在哪里？" : "Where are my creation records stored?"}</h3>
          <p>
            {isZh
              ? "制作记录保存在你的设备本地。IDPhoto Pro 不会把这些记录上传到云端账户。"
              : "Creation records are stored locally on your device. They are not uploaded to a cloud account by IDPhoto Pro."}
          </p>

          <h3>{isZh ? "如何恢复购买？" : "How do I restore my purchase?"}</h3>
          <p>
            {isZh
              ? "打开 App 内的购买页面或个人页面，选择恢复购买。购买由 Apple 通过 StoreKit 处理，恢复购买会检查你的 App Store 账户购买记录，不会上传你的照片。"
              : "Open the purchase screen or the Profile page in the app and choose Restore Purchase. Purchases are processed by Apple through StoreKit. Restore Purchase checks your App Store account purchase history and does not upload your photos."}
          </p>

          <h3>{isZh ? "这是订阅吗？" : "Is the purchase a subscription?"}</h3>
          <p>
            {isZh
              ? "不是。解锁方式是一次性、非消耗型 App 内购买，不是订阅，也不会自动续费。"
              : "No. The unlock is a one-time, non-consumable in-app purchase. It is not a subscription and does not renew."}
          </p>
        </section>

        <section className="policy-section">
          <h2>{isZh ? "支持的功能" : "Supported Features"}</h2>
          <ul className="policy-list">
            <li>{isZh ? "护照照、签证照、移民照和证件照官方尺寸模板" : "Official-size passport, visa, immigration, and ID photo presets"}</li>
            <li>
              {isZh
                ? "头部大小、面部位置、眼线、头顶留白和背景引导等本地检查"
                : "On-device checks for head size, face position, eye line, top margin, and background guidance"}
            </li>
            <li>{isZh ? "背景替换和轻度画质修复" : "Background replacement and light repair"}</li>
            <li>{isZh ? "300 DPI JPG、PNG、HEIF 和 PDF 导出" : "300 DPI JPG, PNG, HEIF, and PDF export"}</li>
            <li>{isZh ? "面向上传平台的目标 KB 压缩" : "Target-KB compression for upload portals"}</li>
            <li>{isZh ? "4x6 英寸、A4 和 Letter 打印排版" : "4x6 inch, A4, and Letter print layouts"}</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>{isZh ? "法律说明" : "Legal Notice"}</h2>
          <p>
            {isZh
              ? "IDPhoto Pro 不隶属于任何政府、使领馆、签证中心或官方申请平台。合规检查仅作为辅助提示，最终是否接受由接收机构决定。"
              : "IDPhoto Pro is not affiliated with any government, embassy, visa center, or official application portal. Compliance checks are guidance only, and final acceptance is decided by the receiving authority."}
          </p>
          <p>
            {isZh ? "你也可以查看完整的" : "You can also review the full"}{" "}
            <Link href={privacyHref}>{isZh ? "隐私政策" : "privacy policy"}</Link>
            {isZh ? "。" : "."}
          </p>
        </section>
      </div>
    </main>
  );
}
