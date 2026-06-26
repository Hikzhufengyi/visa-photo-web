import Link from "next/link";
import { getCopy } from "@/data/localization";
import { siteConfig } from "@/data/site";

export default function ZhPrivacyPage() {
  const copy = getCopy("zh");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">Privacy Policy</p>
        <h1>{copy.privacy.title}</h1>
        <p className="policy-meta">{copy.privacy.effective}</p>
        <p>
          IDPhoto Pro 用于帮助用户在设备本地准备护照照、签证照、移民照、绿卡照、居留卡照和其他证件照。
        </p>
        <section className="policy-section">
          <h2>1. 照片处理</h2>
          <p>
            所有照片处理都在你的设备本地完成。IDPhoto Pro 不会把你的照片上传到服务器做检测、裁切、换背景、光线修复、压缩、导出或制作记录。
          </p>
        </section>
        <section className="policy-section">
          <h2>2. 本地存储数据</h2>
          <p>
            App 可能会在本机保存用户名、头像、制作记录、导出预览和应用偏好设置。这些内容仅用于设备本地功能，不会被 IDPhoto Pro 同步到云端。
          </p>
        </section>
        <section className="policy-section">
          <h2>3. 联系方式</h2>
          <p>
            如有隐私问题，请联系{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
            ，或查看 <Link href="/zh/support">技术支持页面</Link>。
          </p>
        </section>
      </div>
    </main>
  );
}
