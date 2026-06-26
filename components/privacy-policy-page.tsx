import Link from "next/link";
import type { Locale } from "@/data/localization";
import { siteConfig } from "@/data/site";

export function PrivacyPolicyPage({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const supportHref = locale === "zh" ? "/zh/support" : "/en/support";

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">Privacy Policy</p>
        <h1>{isZh ? "IDPhoto Pro 隐私政策" : "Privacy Policy for IDPhoto Pro"}</h1>
        <p className="policy-meta">
          {isZh ? "生效日期：2026 年 5 月 21 日" : "Effective date: May 21, 2026"}
        </p>

        <p>
          {isZh
            ? "IDPhoto Pro 用于帮助用户制作护照照、签证照、移民照、绿卡照、居留卡照和其他证件照，同时尽量让照片处理保持在设备本地完成。"
            : "IDPhoto Pro is designed to help users create passport, visa, immigration, green card, residence card, and ID photos while keeping photo processing private and local."}
        </p>

        <section className="policy-section">
          <h2>{isZh ? "1. 照片处理" : "1. Photo Processing"}</h2>
          <p>
            {isZh
              ? "所有照片处理都在你的设备本地完成。IDPhoto Pro 不会把你的照片上传到服务器做面部检测、裁切、换背景、光线修复、压缩、导出、打印排版或制作记录。"
              : "All photo processing happens on your device. IDPhoto Pro does not upload your photos to a server for face detection, cropping, background replacement, light repair, compression, export, print layout generation, or creation history."}
          </p>
          <p>
            {isZh
              ? "面部位置、眼线高度、头部比例、头顶留白等照片检查会使用设备本地的图像分析完成。IDPhoto Pro 不会创建、收集、保存或上传人脸模板。"
              : "Face position, eye line, head proportion, top margin, and similar photo checks are performed locally using on-device image analysis. IDPhoto Pro does not create, collect, store, or upload face templates."}
          </p>
          <p>
            {isZh
              ? "只有当你主动选择保存到相册、保存到文件，或通过 iOS 系统分享面板分享时，照片才会离开 App。"
              : "Photos may leave the app only when you choose to save them to Photos, save them to Files, or share them through the iOS system share sheet."}
          </p>
        </section>

        <section className="policy-section">
          <h2>{isZh ? "2. 本地存储数据" : "2. Data We Store Locally"}</h2>
          <p>
            {isZh
              ? "IDPhoto Pro 可能会在你的设备本地保存以下数据："
              : "IDPhoto Pro may store the following data locally on your device:"}
          </p>
          <ul className="policy-list">
            <li>{isZh ? "本地用户名" : "Your local username"}</li>
            <li>{isZh ? "本地头像" : "Your local avatar"}</li>
            <li>{isZh ? "制作记录" : "Creation records"}</li>
            <li>
              {isZh
                ? "保存在 App 沙盒内的导出预览图和导出文件"
                : "Exported preview images and export files saved in the app sandbox"}
            </li>
            <li>{isZh ? "引导页状态等 App 偏好设置" : "App preferences such as onboarding status"}</li>
          </ul>
          <p>
            {isZh
              ? "这些数据只用于提供设备本地功能，不会被 IDPhoto Pro 同步到云端账户。"
              : "This data is used only to provide app features on your device. It is not synced to a cloud account by IDPhoto Pro."}
          </p>
        </section>

        <section className="policy-section">
          <h2>{isZh ? "3. 我们不收集的数据" : "3. Data We Do Not Collect"}</h2>
          <p>{isZh ? "在当前版本中，IDPhoto Pro 不收集：" : "In this version, IDPhoto Pro does not collect:"}</p>
          <ul className="policy-list">
            <li>{isZh ? "照片" : "Photos"}</li>
            <li>{isZh ? "人脸图片或人脸模板" : "Face images or face templates"}</li>
            <li>{isZh ? "政府证件号码" : "Government ID numbers"}</li>
            <li>{isZh ? "护照号码" : "Passport numbers"}</li>
            <li>{isZh ? "位置信息" : "Location data"}</li>
            <li>{isZh ? "通讯录" : "Contact lists"}</li>
            <li>{isZh ? "广告标识符" : "Advertising identifiers"}</li>
            <li>{isZh ? "第三方分析事件" : "Third-party analytics events"}</li>
          </ul>
          <p>
            {isZh
              ? "当前版本不包含广告 SDK，也不包含第三方分析 SDK。"
              : "IDPhoto Pro does not include ad SDKs or third-party analytics SDKs in this version."}
          </p>
        </section>

        <section className="policy-section">
          <h2>{isZh ? "4. 购买" : "4. Purchases"}</h2>
          <p>
            {isZh
              ? "IDPhoto Pro 可能通过 Apple 提供一次性买断的终身解锁内购。App 没有订阅、没有连续扣费，也没有广告。"
              : "IDPhoto Pro may offer a lifetime unlock as a one-time, non-consumable in-app purchase through Apple. There is no subscription, no recurring charge, and no advertising in the app."}
          </p>
          <p>
            {isZh
              ? "购买由 Apple 处理。IDPhoto Pro 会通过 StoreKit 接收购买权益信息，用于解锁付费功能。我们不会收到你的银行卡或支付卡信息。"
              : "Purchases are processed by Apple. IDPhoto Pro receives purchase entitlement information from StoreKit so the app can unlock paid features. We do not receive your payment card information."}
          </p>
          <p>
            {isZh
              ? "你可以在 App 内恢复以前的购买。恢复购买会通过 Apple 检查你的 App Store 账户购买记录，不会上传你的照片。"
              : "You can restore a previous purchase in the app. Restore Purchase checks your App Store account purchase history through Apple and does not upload your photos."}
          </p>
        </section>

        <section className="policy-section">
          <h2>{isZh ? "5. 分享和导出" : "5. Sharing and Export"}</h2>
          <p>
            {isZh
              ? "当你保存或分享导出的照片、JPG、PNG、HEIF、PDF 或打印排版时，该操作会由 iOS 系统服务处理，例如照片、文件、邮件、信息、AirDrop 或你选择的其他 App。这些服务或 App 可能有自己的隐私做法。"
              : "When you save or share an exported photo, JPG, PNG, HEIF, PDF, or print layout, your action is handled by iOS system services such as Photos, Files, Mail, Messages, AirDrop, or other apps you choose. Those services and apps may have their own privacy practices."}
          </p>
        </section>

        <section className="policy-section">
          <h2>{isZh ? "6. 删除数据" : "6. Deleting Data"}</h2>
          <p>
            {isZh
              ? "你可以在 App 内清除本地制作记录。你也可以删除 App 来移除本地保存的 App 数据，具体仍受 iOS 存储和备份机制影响。"
              : "You can clear local creation records in the app. You can also delete the app to remove locally stored app data, subject to iOS storage behavior and backups."}
          </p>
        </section>

        <section className="policy-section">
          <h2>{isZh ? "7. 儿童隐私" : "7. Children's Privacy"}</h2>
          <p>
            {isZh
              ? "IDPhoto Pro 是通用工具类 App，不会有意收集儿童个人数据。由于照片处理在本地完成，App 不会把儿童照片发送到我们的服务器。"
              : "IDPhoto Pro is a general utility app. It is not designed to knowingly collect personal data from children. Because photo processing is local, the app does not send children's photos to our servers."}
          </p>
        </section>

        <section className="policy-section">
          <h2>{isZh ? "8. 免责声明" : "8. Disclaimer"}</h2>
          <p>
            {isZh
              ? "IDPhoto Pro 不隶属于任何政府、使领馆、签证中心或官方申请平台。App 会根据公开要求帮助准备照片，但不能保证任何机构一定受理。提交最终照片前，请核对官方来源。"
              : "IDPhoto Pro is not affiliated with any government, embassy, visa center, or official application portal. The app helps prepare photos based on published requirements, but it cannot guarantee acceptance by any authority. Users should review the official source before submitting final photos."}
          </p>
          <p>
            {isZh
              ? "合规检查仅作为辅助提示。要求可能变化，最终是否接受由接收机构决定。"
              : "Compliance checks are guidance only. Requirements may change, and final acceptance is decided by the receiving authority."}
          </p>
        </section>

        <section className="policy-section">
          <h2>{isZh ? "9. 政策更新" : "9. Changes to This Policy"}</h2>
          <p>
            {isZh
              ? "当 App 功能变化时，我们可能更新本隐私政策。如有重要变更，会更新生效日期。"
              : "We may update this privacy policy when the app changes. The effective date will be updated when material changes are made."}
          </p>
        </section>

        <section className="policy-section">
          <h2>{isZh ? "10. 联系方式" : "10. Contact"}</h2>
          <p>
            {isZh ? "如有隐私问题，请联系开发者：" : "For privacy questions, contact the developer at"}{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>{" "}
            {isZh ? "，或查看" : "or use the"}{" "}
            <Link href={supportHref}>{isZh ? "技术支持页面" : "technical support page"}</Link>
            {isZh ? "。" : "."}
          </p>
        </section>
      </div>
    </main>
  );
}
