export type SeoPage = {
  slug: string;
  title: string;
  heading: string;
  country: string;
  documentName: string;
  size: string;
  pixels: string;
  background: string;
  keyword: string;
  intro: string;
  requirements: string[];
  steps: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

export const seoPages: SeoPage[] = [
  {
    slug: "us-passport-photo-size",
    title: "US Passport Photo Size",
    heading: "US passport photo size and requirements",
    country: "United States",
    documentName: "Passport",
    size: "2 x 2 in",
    pixels: "600 x 600 px or higher",
    background: "White or off-white",
    keyword: "us passport photo size",
    intro:
      "Create a US passport photo on iPhone with a 2 x 2 inch square crop, white or off-white background guidance, face-position checks, and 4x6 print layout export.",
    requirements: [
      "Photo size: 2 x 2 inches",
      "Common digital target: 600 x 600 px or higher",
      "Plain white or off-white background",
      "Face centered, looking directly at the camera",
      "No heavy shadows, blur, filters, or face obstruction"
    ],
    steps: [
      "Choose the US passport preset in IDPhoto Pro.",
      "Take or import a clear front-facing portrait.",
      "Review head size, eye height, centering, top margin, background, and sharpness checks.",
      "Export a digital file or generate a 4x6 inch print layout for photo labs."
    ],
    faq: [
      {
        question: "What size is a US passport photo?",
        answer:
          "The standard US passport photo size is 2 x 2 inches. Always review the latest official instructions before submitting."
      },
      {
        question: "Can I print US passport photos on a 4x6 sheet?",
        answer:
          "Yes. A 4x6 inch print layout is commonly used by photo labs and can hold multiple 2 x 2 inch photos depending on the selected layout."
      }
    ]
  },
  {
    slug: "us-visa-photo-size",
    title: "US Visa Photo Size",
    heading: "US visa photo size and requirements",
    country: "United States",
    documentName: "Visa",
    size: "2 x 2 in",
    pixels: "600 x 600 px or higher",
    background: "White or off-white",
    keyword: "us visa photo size",
    intro:
      "Prepare a US visa photo on iPhone with square sizing, white background guidance, face-position checks, and export options for online upload or printing.",
    requirements: [
      "Photo size: 2 x 2 inches",
      "Square digital image, commonly 600 x 600 px or higher",
      "Plain white or off-white background",
      "Neutral expression with both eyes open",
      "No excessive retouching or distracting shadows"
    ],
    steps: [
      "Select the US visa photo preset.",
      "Import or capture a front-facing photo with even lighting.",
      "Use on-device checks for head proportion, eye height, centering, and background.",
      "Export JPG, PNG, HEIF, PDF, or a print-ready layout."
    ],
    faq: [
      {
        question: "Is a US visa photo the same size as a US passport photo?",
        answer:
          "Many US visa and passport photo workflows use a 2 x 2 inch square photo, but you should verify the current requirement for your exact application."
      },
      {
        question: "Can IDPhoto Pro guarantee visa photo acceptance?",
        answer:
          "No. The app provides preparation and checks based on published requirements, while final acceptance is decided by the receiving authority."
      }
    ]
  },
  {
    slug: "green-card-photo-requirements",
    title: "Green Card Photo Requirements",
    heading: "Green card photo requirements",
    country: "United States",
    documentName: "Green Card",
    size: "2 x 2 in",
    pixels: "600 x 600 px or higher",
    background: "White or off-white",
    keyword: "green card photo requirements",
    intro:
      "Use IDPhoto Pro to prepare a green card style photo with square sizing, background guidance, face alignment checks, and digital export options.",
    requirements: [
      "Common photo size: 2 x 2 inches",
      "Square digital file, commonly 600 x 600 px or higher",
      "Plain white or off-white background",
      "Full face visible and centered",
      "Photo should be sharp, recent, and evenly lit"
    ],
    steps: [
      "Choose the green card or US document photo preset.",
      "Import a recent front-facing portrait.",
      "Adjust crop, scale, rotation, and background on device.",
      "Review the checks before exporting the final file."
    ],
    faq: [
      {
        question: "Can I use a phone photo for a green card application?",
        answer:
          "A phone photo may work if it is sharp, recent, evenly lit, front-facing, and adjusted to the required size and framing."
      },
      {
        question: "Does the app upload my green card photo?",
        answer:
          "No. IDPhoto Pro processes photos on device and does not upload photos to a server for its core workflow."
      }
    ]
  },
  {
    slug: "schengen-visa-photo-size",
    title: "Schengen Visa Photo Size",
    heading: "Schengen visa photo size and requirements",
    country: "Schengen Area",
    documentName: "Visa",
    size: "35 x 45 mm",
    pixels: "413 x 531 px at 300 DPI or higher",
    background: "Light plain background",
    keyword: "schengen visa photo size",
    intro:
      "Prepare a Schengen visa photo on iPhone with 35 x 45 mm sizing, light background guidance, face-framing checks, and digital or print-ready export.",
    requirements: [
      "Photo size: 35 x 45 mm",
      "Light, plain background",
      "Face centered and looking straight ahead",
      "Balanced head size and top margin",
      "No blur, heavy shadow, or strong color cast"
    ],
    steps: [
      "Choose the Schengen visa preset.",
      "Import or take a passport-style portrait.",
      "Review face position, head proportion, eye height, and background guidance.",
      "Export a digital file, PDF, or print layout."
    ],
    faq: [
      {
        question: "What size is a Schengen visa photo?",
        answer:
          "A common Schengen visa photo size is 35 x 45 mm. Check the embassy or visa center instructions for your application country."
      },
      {
        question: "Does every Schengen country use exactly the same rules?",
        answer:
          "Many requirements are similar, but application channels can vary. Always review the latest official source before final submission."
      }
    ]
  },
  {
    slug: "canada-visa-photo-size",
    title: "Canada Visa Photo Size",
    heading: "Canada visa photo size and requirements",
    country: "Canada",
    documentName: "Visa",
    size: "35 x 45 mm",
    pixels: "413 x 531 px at 300 DPI or higher",
    background: "White or light-colored",
    keyword: "canada visa photo size",
    intro:
      "Create a Canada visa photo on iPhone with 35 x 45 mm sizing, light background guidance, face-position checks, and export options for upload or print.",
    requirements: [
      "Common photo size: 35 x 45 mm",
      "White or light-colored plain background",
      "Face centered and fully visible",
      "Balanced head size and clear top margin",
      "Sharp image with natural lighting"
    ],
    steps: [
      "Select the Canada visa preset.",
      "Import a clear portrait photo.",
      "Adjust the crop and review local checks for framing and background.",
      "Export the final digital photo or print-ready sheet."
    ],
    faq: [
      {
        question: "What size is used for Canada visa photos?",
        answer:
          "A common target is 35 x 45 mm. Verify the latest requirement for your exact Canada visa or immigration pathway."
      },
      {
        question: "Can I export a PDF for Canada visa photos?",
        answer:
          "Yes. IDPhoto Pro supports PDF export in addition to common image formats."
      }
    ]
  },
  {
    slug: "canada-pr-card-photo-size",
    title: "Canada PR Card Photo Size",
    heading: "Canada PR card photo size and requirements",
    country: "Canada",
    documentName: "Permanent Resident Card",
    size: "50 x 70 mm",
    pixels: "591 x 827 px at 300 DPI or higher",
    background: "White or light-colored",
    keyword: "canada pr card photo size",
    intro:
      "Prepare a Canada permanent resident card photo with size, background, head-position guidance, and print or digital export support on iPhone.",
    requirements: [
      "Common photo size: 50 x 70 mm",
      "White or light-colored plain background",
      "Face and shoulders visible with balanced framing",
      "Head upright and centered",
      "No heavy shadows, blur, or face obstruction"
    ],
    steps: [
      "Choose the Canada PR card preset.",
      "Use a recent, front-facing portrait.",
      "Review head size, centering, top margin, background, and sharpness checks.",
      "Export a digital file or print layout as needed."
    ],
    faq: [
      {
        question: "Is a Canada PR card photo the same as a visa photo?",
        answer:
          "No. Canada PR card workflows may use a different physical size and framing, so choose the specific PR card preset when available."
      },
      {
        question: "Should I verify the official Canada photo requirement?",
        answer:
          "Yes. Requirements can change by document type and submission channel."
      }
    ]
  },
  {
    slug: "india-passport-photo-size",
    title: "India Passport Photo Size",
    heading: "India passport photo size and requirements",
    country: "India",
    documentName: "Passport",
    size: "51 x 51 mm",
    pixels: "600 x 600 px or higher",
    background: "White or light plain background",
    keyword: "india passport photo size",
    intro:
      "Create an India passport photo on iPhone with square sizing, plain background guidance, face-position checks, and digital or print-ready export.",
    requirements: [
      "Common photo size: 51 x 51 mm",
      "Square digital image, commonly 600 x 600 px or higher",
      "White or light plain background",
      "Face centered and looking straight at the camera",
      "Sharp, recent photo with natural color"
    ],
    steps: [
      "Select the India passport preset.",
      "Import or capture a recent front-facing photo.",
      "Adjust scale, crop, rotation, and background on device.",
      "Review checks and export the final photo."
    ],
    faq: [
      {
        question: "What size is an India passport photo?",
        answer:
          "A common India passport photo target is 51 x 51 mm, but you should verify the latest official requirement for your application channel."
      },
      {
        question: "Can I make an India passport photo on iPhone?",
        answer:
          "Yes. You can use IDPhoto Pro to crop, check, and export the photo on iPhone."
      }
    ]
  },
  {
    slug: "india-visa-photo-size",
    title: "India Visa Photo Size",
    heading: "India visa photo size and requirements",
    country: "India",
    documentName: "Visa",
    size: "2 x 2 in",
    pixels: "600 x 600 px or higher",
    background: "White or light plain background",
    keyword: "india visa photo size",
    intro:
      "Prepare an India visa photo on iPhone with square sizing, background guidance, face checks, target-KB compression, and export support.",
    requirements: [
      "Common photo size: 2 x 2 inches",
      "Square digital image, commonly 600 x 600 px or higher",
      "Plain white or light background",
      "Face centered with eyes open",
      "File should be sharp and suitable for the target upload portal"
    ],
    steps: [
      "Choose the India visa preset.",
      "Import a clear front-facing photo.",
      "Adjust crop and background, then review on-device checks.",
      "Use target-KB compression if the upload portal has a size limit."
    ],
    faq: [
      {
        question: "Does India visa photo upload require a specific file size?",
        answer:
          "Some online portals may limit file size. IDPhoto Pro includes target-KB compression to help prepare upload-ready files."
      },
      {
        question: "Is the final approval guaranteed?",
        answer:
          "No. The app helps prepare the file, but final acceptance is decided by the receiving authority."
      }
    ]
  },
  {
    slug: "aadhaar-photo-size",
    title: "Aadhaar Photo Size",
    heading: "Aadhaar photo size and ID photo guidance",
    country: "India",
    documentName: "Aadhaar",
    size: "ID photo preset",
    pixels: "Use the selected submission requirement",
    background: "Plain light background",
    keyword: "aadhaar photo size",
    intro:
      "Use IDPhoto Pro to prepare an Aadhaar-style ID photo with a plain background, centered face guidance, and export options for common document workflows.",
    requirements: [
      "Use the document-specific size required by the receiving channel",
      "Plain light background",
      "Face centered and fully visible",
      "Sharp photo with natural lighting",
      "Avoid heavy filters, shadows, or obstruction"
    ],
    steps: [
      "Choose an Aadhaar or ID photo preset when available.",
      "Import a clear front-facing portrait.",
      "Adjust crop, background, and face position.",
      "Export a digital file in the format you need."
    ],
    faq: [
      {
        question: "Does Aadhaar always use one fixed photo size?",
        answer:
          "Requirements can depend on the service channel. Use the matching preset and verify the current official or service-provider instruction."
      },
      {
        question: "Can I use this for other India ID photos?",
        answer:
          "Yes. The app also supports general ID-style workflows such as background, crop, and export preparation."
      }
    ]
  },
  {
    slug: "pan-card-photo-size",
    title: "PAN Card Photo Size",
    heading: "PAN card photo size and requirements",
    country: "India",
    documentName: "PAN Card",
    size: "3.5 x 2.5 cm",
    pixels: "413 x 295 px at 300 DPI or higher",
    background: "Plain light background",
    keyword: "pan card photo size",
    intro:
      "Prepare a PAN card style photo on iPhone with size guidance, plain background checks, and export options for online or printed use.",
    requirements: [
      "Common photo size: 3.5 x 2.5 cm",
      "Plain light background",
      "Face clear and centered",
      "Sharp image without heavy shadows",
      "Use the exact requirement from your submission channel"
    ],
    steps: [
      "Select the PAN card or custom ID photo preset.",
      "Import a clean portrait.",
      "Adjust crop, background, and file output.",
      "Export the final image for your application workflow."
    ],
    faq: [
      {
        question: "What is a common PAN card photo size?",
        answer:
          "A common printed PAN card photo target is 3.5 x 2.5 cm, but online requirements may vary by service channel."
      },
      {
        question: "Can IDPhoto Pro make small document photos?",
        answer:
          "Yes. The app includes document presets and export tools for both digital files and print layouts."
      }
    ]
  },
  {
    slug: "4x6-passport-photo-print-layout",
    title: "4x6 Passport Photo Print Layout",
    heading: "4x6 passport photo print layout",
    country: "Multiple countries",
    documentName: "Print Layout",
    size: "4 x 6 in sheet",
    pixels: "1200 x 1800 px at 300 DPI",
    background: "Based on selected photo preset",
    keyword: "4x6 passport photo print layout",
    intro:
      "Generate a 4x6 inch passport photo print layout on iPhone so the final sheet can be printed at common photo labs.",
    requirements: [
      "Print sheet size: 4 x 6 inches",
      "Recommended output: 1200 x 1800 px at 300 DPI",
      "Photo count depends on the selected document size and layout",
      "Crop marks can help with trimming after printing",
      "Use the selected country or document preset before generating the sheet"
    ],
    steps: [
      "Create and check the single document photo first.",
      "Open the export screen and choose a print layout.",
      "Select 4x6 inch if you need a common photo-lab sheet.",
      "Export the sheet as an image or PDF depending on your use case."
    ],
    faq: [
      {
        question: "Why use a 4x6 print layout for passport photos?",
        answer:
          "Many photo labs and retail printers commonly support 4x6 inch prints, so a prepared sheet can be easier and cheaper to print."
      },
      {
        question: "Does every document photo fit the same number on 4x6?",
        answer:
          "No. The number of photos depends on the document photo size, margins, and selected layout."
      }
    ]
  },
  {
    slug: "passport-photo-pdf-export",
    title: "Passport Photo PDF Export",
    heading: "Passport photo PDF export",
    country: "Multiple countries",
    documentName: "PDF Export",
    size: "Based on selected document preset",
    pixels: "300 DPI export where applicable",
    background: "Based on selected photo preset",
    keyword: "passport photo pdf export",
    intro:
      "Export passport, visa, and ID photos as PDF files on iPhone for workflows that require document-style upload or printing.",
    requirements: [
      "Start from the correct country or document preset",
      "Review background, face position, head size, and sharpness first",
      "Use PDF export when the receiving workflow asks for a document file",
      "Use target-KB compression if there is an upload size limit",
      "Verify the final upload requirement before submission"
    ],
    steps: [
      "Prepare the photo in IDPhoto Pro.",
      "Review the on-device checks and fix visible issues.",
      "Open export and choose PDF when needed.",
      "Save, share, or upload the exported PDF."
    ],
    faq: [
      {
        question: "Can I export passport photos as PDF?",
        answer:
          "Yes. IDPhoto Pro supports PDF export in addition to JPG, PNG, and HEIF."
      },
      {
        question: "Should I use PDF or JPG?",
        answer:
          "Use the format requested by the application portal, embassy, visa center, or printing workflow."
      }
    ]
  },
  {
    slug: "saudi-iqama-photo-size",
    title: "Saudi Iqama Photo Size",
    heading: "Saudi Iqama photo size and requirements",
    country: "Saudi Arabia",
    documentName: "Iqama",
    size: "4 x 6 cm",
    pixels: "480 x 640 px",
    background: "White",
    keyword: "saudi iqama photo size",
    intro:
      "Use IDPhoto Pro on iPhone to prepare a Saudi Iqama photo with the right size, background, framing, and export format before submission or printing.",
    requirements: [
      "Target photo size: 4 x 6 cm",
      "Recommended digital size: 480 x 640 px or higher",
      "Plain white background",
      "Face centered and looking directly at the camera",
      "No heavy shadow, blur, or obstruction on the face"
    ],
    steps: [
      "Choose the Saudi Iqama preset from the built-in document library.",
      "Import or take a clear front-facing portrait on iPhone.",
      "Adjust crop, zoom, background, and review on-device checks.",
      "Export the final digital photo or a print sheet layout."
    ],
    faq: [
      {
        question: "What is the Saudi Iqama photo size?",
        answer:
          "A common target is 4 x 6 cm with a plain white background. Always verify the latest submission channel requirements before final use."
      },
      {
        question: "Can I print the Saudi Iqama photo at home?",
        answer:
          "Yes. You can export a print sheet layout and print it on photo paper if the receiving office accepts printed photos."
      }
    ]
  },
  {
    slug: "uae-emirates-id-photo-size",
    title: "UAE Emirates ID Photo Size",
    heading: "UAE Emirates ID photo size and requirements",
    country: "United Arab Emirates",
    documentName: "Emirates ID",
    size: "4 x 6 cm",
    pixels: "480 x 640 px",
    background: "White",
    keyword: "uae emirates id photo size",
    intro:
      "Use IDPhoto Pro to understand a typical UAE Emirates ID photo size, background, and framing requirement before exporting a final file on iPhone.",
    requirements: [
      "Common photo size: 4 x 6 cm",
      "Recommended digital file: 480 x 640 px or higher",
      "White or very light background",
      "Neutral expression with eyes open",
      "Face should occupy a clear central area"
    ],
    steps: [
      "Pick the Emirates ID preset from the document picker.",
      "Import a portrait with even lighting.",
      "Use the alignment frame and checks to center the face and verify background guidance.",
      "Export a digital version or print-ready layout."
    ],
    faq: [
      {
        question: "What background is used for UAE Emirates ID photos?",
        answer:
          "A white or very light plain background is commonly required. Confirm the final requirement with the latest official instructions."
      },
      {
        question: "Can I use a selfie for Emirates ID photos?",
        answer:
          "You can start from a selfie if it is sharp, front-facing, and evenly lit, then adjust it to fit the final requirement."
      }
    ]
  },
  {
    slug: "qatar-residence-permit-photo-size",
    title: "Qatar Residence Permit Photo Size",
    heading: "Qatar residence permit photo size and requirements",
    country: "Qatar",
    documentName: "Residence Permit",
    size: "4 x 6 cm",
    pixels: "480 x 640 px",
    background: "White",
    keyword: "qatar residence permit photo size",
    intro:
      "Generate a Qatar residence permit photo on iPhone with the expected dimensions, white background, and centered portrait layout.",
    requirements: [
      "Common size: 4 x 6 cm",
      "Recommended minimum digital file: 480 x 640 px",
      "Plain white background",
      "Head upright and centered",
      "No distracting accessories or shadows"
    ],
    steps: [
      "Select the Qatar residence permit preset.",
      "Upload a clean passport-style photo.",
      "Review face position, background, and framing checks inside the editor.",
      "Save the final export once ready."
    ],
    faq: [
      {
        question: "What size is used for Qatar residence permit photos?",
        answer:
          "A common target is 4 x 6 cm, though you should always verify the current requirement for your submission channel."
      },
      {
        question: "Can I export both digital and print versions?",
        answer:
          "Yes. The app workflow is designed for both digital export and print sheet output."
      }
    ]
  },
  {
    slug: "kuwait-civil-id-photo-size",
    title: "Kuwait Civil ID Photo Size",
    heading: "Kuwait Civil ID photo size and requirements",
    country: "Kuwait",
    documentName: "Civil ID",
    size: "4 x 5 cm",
    pixels: "480 x 600 px",
    background: "White",
    keyword: "kuwait civil id photo size",
    intro:
      "Check a typical Kuwait Civil ID photo size and create a compliant export with the right framing, background, and file format on iPhone.",
    requirements: [
      "Typical size: 4 x 5 cm",
      "Suggested digital dimensions: 480 x 600 px or higher",
      "Plain white background",
      "Face fully visible and front-facing",
      "Sharp image with no blur or heavy edits"
    ],
    steps: [
      "Open the Kuwait Civil ID preset in the app.",
      "Import your portrait and align the face.",
      "Adjust the background and review the compliance report.",
      "Export the final file or print layout."
    ],
    faq: [
      {
        question: "What is the Kuwait Civil ID photo size?",
        answer:
          "A typical target is 4 x 5 cm with a plain white background. Double-check the latest official guidance before submission."
      },
      {
        question: "Does the app check face position?",
        answer:
          "Yes. The workflow is built to help review head size, centering, background, and similar checks before export."
      }
    ]
  },
  {
    slug: "oman-residence-card-photo-size",
    title: "Oman Residence Card Photo Size",
    heading: "Oman residence card photo size and requirements",
    country: "Oman",
    documentName: "Residence Card",
    size: "4 x 6 cm",
    pixels: "480 x 640 px",
    background: "White",
    keyword: "oman residence card photo size",
    intro:
      "Create an Oman residence card photo with the correct size, a clean background, and a print-ready export option using IDPhoto Pro on iPhone.",
    requirements: [
      "Common size: 4 x 6 cm",
      "Recommended digital size: 480 x 640 px or higher",
      "White background",
      "Straight pose with visible facial features",
      "Balanced lighting with no dark shadows"
    ],
    steps: [
      "Select the Oman residence card preset.",
      "Upload a clear front photo.",
      "Review the rule checks and refine crop, background, and position if needed.",
      "Export to Photos, Files, or generate a print sheet."
    ],
    faq: [
      {
        question: "What background should I use for an Oman residence card photo?",
        answer:
          "A plain white background is a common expectation for this type of ID photo."
      },
      {
        question: "Can I prepare Oman residence card photos on my phone?",
        answer:
          "Yes. A phone photo can work if it is sharp, evenly lit, and adjusted to the final requirement."
      }
    ]
  }
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}
