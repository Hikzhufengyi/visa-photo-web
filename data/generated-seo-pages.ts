import { appPhotoSpecs } from "@/data/app-photo-specs";
import type { SeoPage } from "@/data/seo-pages";

const curatedSlugBySpecId: Record<string, string> = {
  "us-passport": "us-passport-photo-size",
  "us-visa": "us-visa-photo-size",
  "us-green-card": "green-card-photo-requirements",
  "dv-lottery": "dv-lottery-photo-requirements",
  "schengen-visa": "schengen-visa-photo-size",
  "canada-passport": "canada-passport-photo-size",
  "canada-visa": "canada-visa-photo-size",
  "canada-pr": "canada-pr-card-photo-size",
  "uk-passport": "uk-passport-photo-size",
  "india-visa": "india-visa-photo-size",
  "india-passport": "india-passport-photo-size",
  "japan-visa": "japan-visa-photo-size",
  "china-visa": "china-visa-photo-size",
  "australia-passport": "australia-passport-photo-size",
  "france-visa": "france-visa-photo-size",
  "germany-passport": "germany-passport-photo-size",
  "singapore-passport": "singapore-passport-photo-size",
  "malaysia-passport": "malaysia-passport-photo-size",
  "saudi-iqama": "saudi-iqama-photo-size",
  "uae-emirates-id": "uae-emirates-id-photo-size",
  "qatar-residence-permit": "qatar-residence-permit-photo-size",
  "kuwait-civil-id": "kuwait-civil-id-photo-size",
  "oman-residence-card": "oman-residence-card-photo-size",
  "bahrain-cpr": "bahrain-cpr-photo-size",
  "print-us-2x2": "2x2-passport-photo-size",
  "print-square-digital": "600x600-passport-photo"
};

const backgroundByCategory: Record<string, string> = {
  passport: "Plain official background",
  visa: "Plain light background",
  immigration: "Plain official background",
  print: "Depends on the selected photo use"
};

const documentNameByCategory: Record<string, string> = {
  passport: "Passport",
  visa: "Visa",
  immigration: "Immigration / ID",
  print: "Print Size"
};

function generatedSlug(specId: string) {
  return `${specId}-photo-size`;
}

export function getSeoSlugForSpec(specId: string) {
  return curatedSlugBySpecId[specId] ?? generatedSlug(specId);
}

export const generatedSeoPages: SeoPage[] = appPhotoSpecs
  .filter((spec) => !curatedSlugBySpecId[spec.id])
  .map((spec) => {
    const documentName = spec.category === "print" ? spec.title : documentNameByCategory[spec.category];
    const background = backgroundByCategory[spec.category];
    const title = `${spec.title} Photo Size`;

    return {
      slug: generatedSlug(spec.id),
      title,
      heading: `${spec.title} photo size and requirements`,
      searchIntent: spec.category === "print" ? "document-size" : "country-document",
      country: spec.country,
      documentName,
      size: spec.size,
      pixels: `${spec.pixels} or higher`,
      background,
      keyword: `${spec.title.toLowerCase()} photo size`,
      intro: `Prepare a ${spec.title} photo on iPhone with ${spec.size} sizing, ${spec.pixels} export guidance, face-position checks, background review, and digital or print layout export.`,
      requirements: [
        `Photo size: ${spec.size}`,
        `Recommended digital file: ${spec.pixels} or higher`,
        `Background: ${background.toLowerCase()}`,
        "Face centered, looking directly at the camera",
        "Sharp image with no heavy shadow, blur, or face obstruction",
        "Review the latest official or application-channel requirement before final submission"
      ],
      steps: [
        `Choose the ${spec.title} preset in IDPhoto Pro.`,
        "Import a clear front-facing portrait.",
        "Review size, head position, eye line, centering, background, and sharpness checks.",
        "Export a digital file or create a print-ready layout when physical copies are needed."
      ],
      faq: [
        {
          question: `What size is a ${spec.title} photo?`,
          answer: `The ${spec.title} preset uses ${spec.size}, with a recommended digital target of ${spec.pixels} or higher. Always verify the latest receiving authority or portal requirement before submitting.`
        },
        {
          question: `Can I prepare a ${spec.title} photo on iPhone?`,
          answer:
            "Yes. IDPhoto Pro can help choose the preset, align the face, check common issues, and export a digital or print-ready file locally on iPhone."
        }
      ]
    };
  });
