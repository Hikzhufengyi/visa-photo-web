import { getCopy } from "@/data/localization";
import { siteConfig } from "@/data/site";

export default function ZhTermsPage() {
  const copy = getCopy("zh");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">法律条款</p>
        <h1>{copy.terms.title}</h1>

        <section className="policy-section">
          <h2>1. App 用途</h2>
          <p>
            IDPhoto Pro 用于帮助用户制作护照照、签证照、身份证件照、居留卡照、绿卡照和其他证件照。App 提供规格模板、本地编辑、本地检查、文件导出、目标文件大小压缩和打印排版等功能。
          </p>
        </section>

        <section className="policy-section">
          <h2>2. 非政府官方服务</h2>
          <p>
            IDPhoto Pro 不隶属于任何政府机构、使领馆、签证中心、身份认证机构、移民机构或官方申请平台。它只是一个证件照准备工具。
          </p>
        </section>

        <section className="policy-section">
          <h2>3. 照片要求和最终受理</h2>
          <p>
            App 中的检查和说明基于公开照片要求整理，但不同国家、证件类型、申请渠道和审核机构的要求可能不同，也可能随时变化。提交前，你仍需要核对官方来源。IDPhoto Pro 不能保证任何照片一定会被官方或第三方机构受理。
          </p>
        </section>

        <section className="policy-section">
          <h2>4. 购买和退款</h2>
          <p>
            IDPhoto Pro 可能通过 Apple 提供一次性买断的终身解锁内购。购买和退款由 Apple 按照 App Store 政策处理。App 不会获取你的银行卡或支付卡信息。
          </p>
        </section>

        <section className="policy-section">
          <h2>5. 合理使用</h2>
          <p>
            你不得使用本 App 制作欺诈、误导或违法用途的图片或文件。你需要自行负责导出照片的准确性、合法性和实际使用方式。
          </p>
        </section>

        <section className="policy-section">
          <h2>6. 隐私</h2>
          <p>
            App 的核心照片处理设计为在设备本地完成。关于本地处理、本地制作记录、导出、分享和恢复购买等信息，请查看隐私政策。
          </p>
        </section>

        <section className="policy-section">
          <h2>7. 责任限制</h2>
          <p>
            在法律允许的最大范围内，IDPhoto Pro 作为工具提供，不承诺照片一定被第三方接受。因申请延误、审核拒绝、打印问题、上传限制或依赖过期/错误要求造成的损失，开发者不承担责任。
          </p>
        </section>

        <section className="policy-section">
          <h2>8. 联系方式</h2>
          <p>
            如需技术支持，请联系{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>。
          </p>
        </section>
      </div>
    </main>
  );
}
