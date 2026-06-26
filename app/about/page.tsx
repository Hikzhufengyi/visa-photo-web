export const metadata = {
  title: "About",
  description: "About IDPhoto Pro and this document photo website."
};

export default function AboutPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="eyebrow">About</p>
        <h1>About IDPhoto Pro</h1>
        <p>
          IDPhoto Pro is built for people who need passport photos, visa photos,
          green card photos, residence card photos, and other official document
          photos without visiting a studio first.
        </p>
        <p>
          The product focuses on practical workflow: choose a preset, align the
          face, review checks, then export a digital file or a print-ready
          layout. The website is designed to explain those capabilities clearly
          and to publish searchable guidance for common document photo types.
        </p>
        <p>
          This site is not an official government service. It is a product site
          for a photo-preparation tool, and users should always verify final
          requirements with the receiving authority.
        </p>
      </div>
    </main>
  );
}
