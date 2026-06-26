import Link from "next/link";
import { getCopy } from "@/data/localization";
import { siteConfig } from "@/data/site";

export default function EnPrivacyPage() {
  const copy = getCopy("en");

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">Privacy Policy</p>
        <h1>{copy.privacy.title}</h1>
        <p className="policy-meta">{copy.privacy.effective}</p>
        <p>
          IDPhoto Pro is designed to help users prepare passport, visa,
          immigration, green card, residence card, and ID photos while keeping
          processing local on device.
        </p>
        <section className="policy-section">
          <h2>1. Photo Processing</h2>
          <p>
            All photo processing happens on your device. IDPhoto Pro does not
            upload your photos to a server for cropping, background replacement,
            light repair, compression, export, or creation history.
          </p>
        </section>
        <section className="policy-section">
          <h2>2. Local Data Storage</h2>
          <p>
            The app may store local usernames, avatars, creation records,
            exported previews, and app preferences on your device. This data is
            used only for on-device features and is not synced by IDPhoto Pro to
            a cloud account.
          </p>
        </section>
        <section className="policy-section">
          <h2>3. Contact</h2>
          <p>
            For privacy questions, contact{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>{" "}
            or visit the <Link href="/en/support">support page</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}
