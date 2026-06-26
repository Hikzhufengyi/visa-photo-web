import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Technical Support",
  description: "Technical support for IDPhoto Pro."
};

export default function SupportPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">Technical Support</p>
        <h1>IDPhoto Pro Support</h1>
        <p>
          Need help creating, checking, or exporting passport, visa, green
          card, residence card, or ID photos? Use the information below to
          troubleshoot common issues or contact the developer.
        </p>

        <section className="notice-card">
          <strong>Privacy reminder:</strong> Photo processing happens on your
          device. IDPhoto Pro does not upload your photos to a server.
        </section>

        <section className="notice-card">
          <strong>Purchase reminder:</strong> IDPhoto Pro uses a one-time
          lifetime unlock. There is no subscription, no recurring charge, and
          no advertising.
        </section>

        <section className="policy-section">
          <h2>Contact</h2>
          <p>
            Email:{" "}
            <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
          </p>
          <div className="hero-actions">
            <Link
              className="button button-primary"
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open App Store
            </Link>
            <Link className="button button-secondary" href="/download">
              Download page
            </Link>
          </div>
        </section>

        <section className="policy-section">
          <h2>Common Questions</h2>

          <h3>Why was my photo marked as needing attention?</h3>
          <p>
            The app checks common requirements such as head size, face position,
            eye line height, top margin, background, sharpness, and file-size
            guidance. Review the checklist and adjust the photo before
            exporting.
          </p>

          <h3>Why does the preview show guide lines?</h3>
          <p>
            Guide lines help you align the face, eye line, top margin, and
            printable area for the selected document type. Different countries
            and document types may use different size and framing rules.
          </p>

          <h3>Does IDPhoto Pro guarantee acceptance?</h3>
          <p>
            No. IDPhoto Pro helps prepare photos based on published
            requirements, but it cannot guarantee acceptance by any government,
            embassy, visa center, or application portal. Always review the
            official source before submitting.
          </p>

          <h3>Are my face checks uploaded to a server?</h3>
          <p>
            No. Face position, eye line, head proportion, and margin checks are
            processed on your device. IDPhoto Pro does not upload your photos or
            create server-side face templates.
          </p>

          <h3>Where are my creation records stored?</h3>
          <p>
            Creation records are stored locally on your device. They are not
            uploaded to a cloud account by IDPhoto Pro.
          </p>

          <h3>How do I restore my purchase?</h3>
          <p>
            Open the purchase screen or the Profile page in the app and choose
            Restore Purchase. Purchases are processed by Apple through StoreKit.
            Restore Purchase checks your App Store account purchase history and
            does not upload your photos.
          </p>

          <h3>Is the purchase a subscription?</h3>
          <p>
            No. The unlock is a one-time, non-consumable in-app purchase. It is
            not a subscription and does not renew.
          </p>
        </section>

        <section className="policy-section">
          <h2>Supported Features</h2>
          <ul className="policy-list">
            <li>
              Official-size passport, visa, immigration, and ID photo presets
            </li>
            <li>
              On-device checks for head size, face position, eye line, top
              margin, and background guidance
            </li>
            <li>Background replacement and light repair</li>
            <li>300 DPI JPG, PNG, HEIF, and PDF export</li>
            <li>Target-KB compression for upload portals</li>
            <li>4x6 inch, A4, and Letter print layouts</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Legal Notice</h2>
          <p>
            IDPhoto Pro is not affiliated with any government, embassy, visa
            center, or official application portal. Compliance checks are
            guidance only, and final acceptance is decided by the receiving
            authority.
          </p>
          <p>
            You can also review the full <Link href="/privacy">privacy policy</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}
