export type SeoPage = {
  slug: string;
  title: string;
  heading: string;
  searchIntent: "country-document" | "document-size" | "export-workflow";
  country: string;
  documentName: string;
  size: string;
  pixels: string;
  background: string;
  keyword: string;
  sourceUrl?: string;
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
    searchIntent: "country-document",
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
    searchIntent: "country-document",
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
    searchIntent: "country-document",
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
    slug: "uscis-photo-requirements",
    title: "USCIS Photo Requirements",
    heading: "USCIS photo requirements for immigration applications",
    searchIntent: "country-document",
    country: "United States",
    documentName: "USCIS Photo",
    size: "2 x 2 in",
    pixels: "600 x 600 px or higher",
    background: "White or off-white",
    keyword: "USCIS photo requirements",
    intro:
      "Prepare USCIS-style immigration photos on iPhone with 2 x 2 inch sizing, white or off-white background guidance, face-position checks, and digital export support.",
    requirements: [
      "Common USCIS photo size: 2 x 2 inches",
      "Square digital file, commonly 600 x 600 px or higher",
      "Plain white or off-white background",
      "Full face visible, centered, and looking directly at the camera",
      "Recent, sharp photo with no heavy shadows or filters"
    ],
    steps: [
      "Choose a US immigration or USCIS-style preset.",
      "Import a clear front-facing portrait.",
      "Review head size, eye height, centering, top margin, background, and sharpness checks.",
      "Export a digital file for the selected application workflow."
    ],
    faq: [
      {
        question: "Are USCIS photos usually the same size as US passport photos?",
        answer:
          "Many USCIS-style photo workflows use a 2 x 2 inch photo, but always verify the exact requirement for the form or portal you are using."
      },
      {
        question: "Can IDPhoto Pro guarantee USCIS acceptance?",
        answer:
          "No. The app helps prepare and check the photo, while final acceptance is decided by USCIS or the receiving service."
      }
    ]
  },
  {
    slug: "dv-lottery-photo-requirements",
    title: "DV Lottery Photo Requirements",
    heading: "DV Lottery photo size and requirements",
    searchIntent: "country-document",
    country: "United States",
    documentName: "DV Lottery",
    size: "2 x 2 in",
    pixels: "600 x 600 px",
    background: "White or off-white",
    keyword: "DV lottery photo requirements",
    intro:
      "Prepare a DV Lottery style photo on iPhone with a square 600 x 600 px target, white or off-white background guidance, and face-position checks before export.",
    requirements: [
      "Digital target commonly used for DV Lottery: 600 x 600 px",
      "Square 2 x 2 inch style framing",
      "Plain white or off-white background",
      "Neutral expression with both eyes open",
      "No filters, heavy shadows, or face obstruction"
    ],
    steps: [
      "Select a US 2 x 2 inch photo preset.",
      "Import or capture a recent front-facing photo.",
      "Use on-device checks for head size, eye height, centering, and background.",
      "Export the final square digital image."
    ],
    faq: [
      {
        question: "What pixel size is used for DV Lottery photos?",
        answer:
          "A common DV Lottery digital target is 600 x 600 px. Verify the latest official instruction before submitting."
      },
      {
        question: "Can I use a phone photo for DV Lottery?",
        answer:
          "A phone photo may work if it is sharp, recent, evenly lit, front-facing, and adjusted to the required size and framing."
      }
    ]
  },
  {
    slug: "schengen-visa-photo-size",
    title: "Schengen Visa Photo Size",
    heading: "Schengen visa photo size and requirements",
    searchIntent: "country-document",
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
    searchIntent: "country-document",
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
    slug: "canada-passport-photo-size",
    title: "Canada Passport Photo Size",
    heading: "Canada passport photo size and requirements",
    searchIntent: "country-document",
    country: "Canada",
    documentName: "Passport",
    size: "50 x 70 mm",
    pixels: "591 x 827 px at 300 DPI or higher",
    background: "White or light-colored",
    keyword: "Canada passport photo size",
    intro:
      "Prepare a Canada passport photo on iPhone with 50 x 70 mm sizing, white or light-colored background guidance, face-framing checks, and print-ready export support.",
    requirements: [
      "Common Canada passport photo size: 50 x 70 mm",
      "Plain white or light-colored background",
      "Face centered with neutral expression",
      "Head height and chin-to-crown measurement should follow current official guidance",
      "Sharp photo with balanced lighting and no heavy shadows"
    ],
    steps: [
      "Choose the Canada passport preset.",
      "Import a recent front-facing portrait.",
      "Review head size, centering, top margin, background, and sharpness checks.",
      "Export a digital file or print-ready sheet."
    ],
    faq: [
      {
        question: "Is a Canada passport photo 50 x 70 mm?",
        answer:
          "A common Canada passport photo size is 50 x 70 mm. Always verify the latest Passport Canada instruction before final submission."
      },
      {
        question: "Can I create a Canada passport photo on iPhone?",
        answer:
          "Yes. You can use the app to crop, check, and export the photo, but the final receiving authority decides acceptance."
      }
    ]
  },
  {
    slug: "canada-pr-card-photo-size",
    title: "Canada PR Card Photo Size",
    heading: "Canada PR card photo size and requirements",
    searchIntent: "country-document",
    country: "Canada",
    documentName: "Permanent Resident Card",
    size: "50 x 70 mm",
    pixels: "715 x 1000 px to 2000 x 2800 px",
    background: "White or light-colored",
    keyword: "canada pr card photo size",
    intro:
      "Prepare a Canada permanent resident card photo with size, background, head-position guidance, and print or digital export support on iPhone.",
    requirements: [
      "Common photo size: 50 x 70 mm",
      "Face height target: 31 x 36 mm from chin to crown",
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
    searchIntent: "country-document",
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
    searchIntent: "country-document",
    country: "India",
    documentName: "Visa",
    size: "2 x 2 in",
    pixels: "350 x 350 px to 1000 x 1000 px",
    background: "White or light plain background",
    keyword: "india visa photo size",
    intro:
      "Prepare an India visa photo on iPhone with square sizing, background guidance, face checks, target-KB compression, and export support.",
    requirements: [
      "Common photo size: 2 x 2 inches",
      "Square digital image: minimum 350 x 350 px, maximum 1000 x 1000 px",
      "JPEG file size commonly required between 10 KB and 300 KB",
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
    searchIntent: "country-document",
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
    searchIntent: "country-document",
    country: "India",
    documentName: "PAN Card",
    size: "2.5 x 3.5 cm",
    pixels: "295 x 413 px at 300 DPI or higher",
    background: "Plain light background",
    keyword: "pan card photo size",
    intro:
      "Prepare a PAN card style photo on iPhone with size guidance, plain background checks, and export options for online or printed use.",
    requirements: [
      "Common printed photo size: 2.5 x 3.5 cm",
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
          "A common printed PAN card photo target is 2.5 x 3.5 cm, but online requirements may vary by service channel."
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
    searchIntent: "export-workflow",
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
    slug: "2x2-passport-photo-size",
    title: "2x2 Passport Photo Size",
    heading: "2x2 passport photo size guide",
    searchIntent: "document-size",
    country: "Multiple countries",
    documentName: "2x2 Passport Photo",
    size: "2 x 2 in",
    pixels: "600 x 600 px or higher",
    background: "Depends on selected country or document",
    keyword: "2x2 passport photo size",
    intro:
      "Create a 2 x 2 inch passport or visa photo on iPhone with square framing, background guidance, face-position checks, and digital or print-ready export.",
    requirements: [
      "Photo size: 2 x 2 inches",
      "Common digital target: 600 x 600 px or higher",
      "Background depends on the selected country or application",
      "Face centered, looking directly at the camera",
      "Review the exact official requirement before submission"
    ],
    steps: [
      "Choose a 2 x 2 inch preset in the app.",
      "Import or capture a clear front-facing portrait.",
      "Review head size, eye height, centering, top margin, background, and sharpness checks.",
      "Export the digital photo or generate a 4x6 print layout."
    ],
    faq: [
      {
        question: "Which documents use a 2x2 photo?",
        answer:
          "US passport, many US visa, green card, USCIS, and India visa workflows commonly use a 2 x 2 inch style photo, but exact requirements vary."
      },
      {
        question: "Can a 2x2 photo be printed on 4x6 paper?",
        answer:
          "Yes. A 4x6 inch print sheet can hold multiple 2 x 2 inch photos depending on margins and layout."
      }
    ]
  },
  {
    slug: "600x600-passport-photo",
    title: "600x600 Passport Photo",
    heading: "600 x 600 passport photo guide",
    searchIntent: "document-size",
    country: "Multiple countries",
    documentName: "600 x 600 Photo",
    size: "Square digital photo",
    pixels: "600 x 600 px",
    background: "Depends on selected country or document",
    keyword: "600x600 passport photo",
    intro:
      "Prepare a 600 x 600 px passport, visa, or immigration photo on iPhone with square crop, face-position checks, and export support.",
    requirements: [
      "Digital image target: 600 x 600 px",
      "Square crop with face centered",
      "Background depends on the selected application",
      "Sharp, recent, front-facing photo",
      "Use the exact portal requirement before uploading"
    ],
    steps: [
      "Choose a square passport or visa preset.",
      "Adjust crop, zoom, and rotation.",
      "Review the local checks before export.",
      "Export the final digital image."
    ],
    faq: [
      {
        question: "Is 600 x 600 px enough for a passport photo?",
        answer:
          "Some digital passport, visa, and immigration workflows use 600 x 600 px, but requirements vary by country and portal."
      },
      {
        question: "Can IDPhoto Pro export 600 x 600 photos?",
        answer:
          "Yes. The app supports square document photo presets and digital export workflows."
      }
    ]
  },
  {
    slug: "passport-photo-pdf-export",
    title: "Passport Photo PDF Export",
    heading: "Passport photo PDF export",
    searchIntent: "export-workflow",
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
    searchIntent: "country-document",
    country: "Saudi Arabia",
    documentName: "Iqama",
    size: "4 x 6 cm",
    pixels: "472 x 709 px at 300 DPI or higher",
    background: "White",
    keyword: "saudi iqama photo size",
    intro:
      "Use IDPhoto Pro on iPhone to prepare a Saudi Iqama photo with the right size, background, framing, and export format before submission or printing.",
    requirements: [
      "Common local ID photo preset: 4 x 6 cm",
      "Recommended digital size: 472 x 709 px at 300 DPI or higher",
      "Plain white background",
      "Face centered and looking directly at the camera",
      "No heavy shadow, blur, or obstruction on the face",
      "Verify the latest Absher, Muqeem, or receiving-office instruction before final submission"
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
    searchIntent: "country-document",
    country: "United Arab Emirates",
    documentName: "Emirates ID",
    size: "35 x 45 mm or 40 x 60 mm, depending on channel",
    pixels: "Use the ICP or receiving-channel requirement",
    background: "White",
    keyword: "uae emirates id photo size",
    intro:
      "Use IDPhoto Pro to understand a typical UAE Emirates ID photo size, background, and framing requirement before exporting a final file on iPhone.",
    requirements: [
      "Use the size required by the selected ICP or service channel",
      "Some UAE ID and residence workflows use 35 x 45 mm or 40 x 60 mm presets",
      "White or very light background",
      "Neutral expression with eyes open",
      "Face should occupy a clear central area",
      "Verify the latest ICP smart services instruction before final submission"
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
    searchIntent: "country-document",
    country: "Qatar",
    documentName: "Residence Permit",
    size: "4 x 6 cm",
    pixels: "472 x 709 px at 300 DPI or higher",
    background: "White",
    keyword: "qatar residence permit photo size",
    intro:
      "Generate a Qatar residence permit photo on iPhone with the expected dimensions, white background, and centered portrait layout.",
    requirements: [
      "Common GCC residence photo preset: 4 x 6 cm",
      "Recommended minimum digital file: 472 x 709 px at 300 DPI or higher",
      "Plain white background",
      "Head upright and centered",
      "No distracting accessories or shadows",
      "Verify the exact Metrash or receiving-channel instruction before final submission"
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
    searchIntent: "country-document",
    country: "Kuwait",
    documentName: "Civil ID",
    size: "4 x 6 cm",
    pixels: "472 x 709 px at 300 DPI or higher",
    background: "White",
    keyword: "kuwait civil id photo size",
    intro:
      "Check a typical Kuwait Civil ID photo size and create a compliant export with the right framing, background, and file format on iPhone.",
    requirements: [
      "Typical Civil ID photo preset: 4 x 6 cm",
      "Suggested digital dimensions: 472 x 709 px at 300 DPI or higher",
      "Plain white background",
      "Face fully visible and front-facing",
      "Sharp image with no blur or heavy edits",
      "Kuwait passport services may use different sizes, so verify the selected service before submission"
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
          "A typical Civil ID photo preset is 4 x 6 cm with a plain white background. Double-check the latest official guidance before submission."
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
    searchIntent: "country-document",
    country: "Oman",
    documentName: "Residence Card",
    size: "4 x 6 cm",
    pixels: "472 x 709 px at 300 DPI or higher",
    background: "White or service-specific plain background",
    keyword: "oman residence card photo size",
    intro:
      "Create an Oman residence card photo with the correct size, a clean background, and a print-ready export option using IDPhoto Pro on iPhone.",
    requirements: [
      "Common residence photo preset: 4 x 6 cm",
      "Recommended digital size: 472 x 709 px at 300 DPI or higher",
      "Use the background required by the selected Oman service channel",
      "Straight pose with visible facial features",
      "Balanced lighting with no dark shadows",
      "Verify the latest Royal Oman Police or receiving-channel instruction before final submission"
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
  },
  {
    slug: "uk-passport-photo-size",
    title: "UK Passport Photo Size",
    heading: "UK passport photo size and requirements",
    searchIntent: "country-document",
    country: "United Kingdom",
    documentName: "Passport",
    size: "35 x 45 mm",
    pixels: "600 x 750 px or higher",
    background: "Plain light grey or cream",
    keyword: "UK passport photo size",
    sourceUrl: "https://www.gov.uk/photos-for-passports/photo-requirements",
    intro:
      "Create a UK passport photo on iPhone with 35 x 45 mm sizing, light background guidance, face-framing checks, and export options for digital upload or printing.",
    requirements: [
      "Photo size: 35 x 45 mm",
      "Plain light grey or cream background",
      "Head and shoulders visible with the face centered",
      "Neutral expression, mouth closed, and eyes open",
      "No shadows, blur, red eye, or visible heavy retouching",
      "Review the latest GOV.UK photo rules before submitting"
    ],
    steps: [
      "Choose the UK passport preset in IDPhoto Pro.",
      "Import or capture a front-facing portrait with even lighting.",
      "Use checks for head size, eye height, centering, top margin, background, and sharpness.",
      "Export a digital file or print-ready sheet after reviewing the checklist."
    ],
    faq: [
      {
        question: "What size is a UK passport photo?",
        answer:
          "A common UK passport photo size is 35 x 45 mm. Digital submission rules can include additional quality checks, so review the latest GOV.UK guidance."
      },
      {
        question: "What background is used for UK passport photos?",
        answer:
          "UK passport photos commonly require a plain light grey or cream background with no shadows or patterns."
      }
    ]
  },
  {
    slug: "australia-passport-photo-size",
    title: "Australia Passport Photo Size",
    heading: "Australia passport photo size and requirements",
    searchIntent: "country-document",
    country: "Australia",
    documentName: "Passport",
    size: "35 x 45 mm",
    pixels: "420 x 540 px at 300 DPI or higher",
    background: "Plain white or light-colored",
    keyword: "Australia passport photo size",
    sourceUrl: "https://www.passports.gov.au/getting-passport-how-it-works/photo-guidelines",
    intro:
      "Prepare an Australia passport photo on iPhone with 35 x 45 mm sizing, light background guidance, face-position checks, and print or digital export.",
    requirements: [
      "Photo size: 35 x 45 mm",
      "Plain white or light-colored background",
      "Face looking directly at the camera with a neutral expression",
      "Head size and eye line should match the selected guide",
      "No glare, heavy shadow, blur, or face obstruction",
      "Check the current Australian Passport Office guidance before final use"
    ],
    steps: [
      "Select the Australia passport preset.",
      "Use a recent front-facing photo with balanced lighting.",
      "Adjust crop, rotation, scale, background, and sharpness on device.",
      "Export a digital image, PDF, or print sheet for your workflow."
    ],
    faq: [
      {
        question: "What size is an Australia passport photo?",
        answer:
          "A common Australia passport photo size is 35 x 45 mm. Always verify the latest Australian Passport Office guidance before submitting."
      },
      {
        question: "Can I make an Australia passport photo on iPhone?",
        answer:
          "Yes. IDPhoto Pro can help crop, align, check, and export the photo locally on iPhone."
      }
    ]
  },
  {
    slug: "china-visa-photo-size",
    title: "China Visa Photo Size",
    heading: "China visa photo size and requirements",
    searchIntent: "country-document",
    country: "China",
    documentName: "Visa",
    size: "33 x 48 mm",
    pixels: "390 x 567 px at 300 DPI or higher",
    background: "White or near-white",
    keyword: "China visa photo size",
    sourceUrl: "https://www.visaforchina.cn/",
    intro:
      "Create a China visa photo on iPhone with 33 x 48 mm sizing, white background guidance, strict face-framing checks, and digital or print export.",
    requirements: [
      "Common China visa photo size: 33 x 48 mm",
      "White or near-white plain background",
      "Face centered with full facial features visible",
      "Head height and margins should be checked carefully",
      "Natural color, no heavy retouching, blur, or strong shadows",
      "Confirm the latest visa center or consulate photo instruction before submission"
    ],
    steps: [
      "Choose the China visa preset.",
      "Import a sharp passport-style portrait.",
      "Review head size, eye line, centering, top margin, background, and sharpness checks.",
      "Export the finished digital file or print layout."
    ],
    faq: [
      {
        question: "What size is a China visa photo?",
        answer:
          "A common China visa photo size is 33 x 48 mm. Requirements may vary by visa center or application channel, so verify the current instruction."
      },
      {
        question: "What background should I use for a China visa photo?",
        answer:
          "A white or near-white plain background is commonly expected for China visa photos."
      }
    ]
  },
  {
    slug: "japan-visa-photo-size",
    title: "Japan Visa Photo Size",
    heading: "Japan visa photo size and requirements",
    searchIntent: "country-document",
    country: "Japan",
    documentName: "Visa",
    size: "35 x 45 mm",
    pixels: "413 x 531 px at 300 DPI or higher",
    background: "Plain white or light background",
    keyword: "Japan visa photo size",
    sourceUrl: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
    intro:
      "Prepare a Japan visa photo on iPhone with 35 x 45 mm sizing, plain background guidance, face-position checks, and export for upload or printing.",
    requirements: [
      "Common Japan visa photo size: 35 x 45 mm",
      "Plain white or light background",
      "Face forward with eyes open and head upright",
      "Balanced top margin and centered face position",
      "Sharp, recent image with no distracting shadows",
      "Review the latest embassy or Ministry of Foreign Affairs instruction before applying"
    ],
    steps: [
      "Select the Japan visa preset.",
      "Import or take a recent front-facing portrait.",
      "Adjust crop, scale, rotation, and background on device.",
      "Review the checklist, then export the final file or print sheet."
    ],
    faq: [
      {
        question: "What size is a Japan visa photo?",
        answer:
          "A common Japan visa photo size is 35 x 45 mm, but embassies and application channels can publish specific instructions."
      },
      {
        question: "Can IDPhoto Pro export Japan visa photos for printing?",
        answer:
          "Yes. You can export a single photo or generate a print-ready sheet depending on your workflow."
      }
    ]
  },
  {
    slug: "singapore-passport-photo-size",
    title: "Singapore Passport Photo Size",
    heading: "Singapore passport photo size and requirements",
    searchIntent: "country-document",
    country: "Singapore",
    documentName: "Passport",
    size: "35 x 45 mm",
    pixels: "400 x 514 px or higher",
    background: "White or light-colored",
    keyword: "Singapore passport photo size",
    sourceUrl: "https://www.ica.gov.sg/",
    intro:
      "Create a Singapore passport photo on iPhone with 35 x 45 mm sizing, light background guidance, face alignment checks, and digital export support.",
    requirements: [
      "Common passport photo size: 35 x 45 mm",
      "White or light-colored plain background",
      "Face and shoulders visible with the face centered",
      "Eyes open, neutral expression, and no heavy shadows",
      "Digital upload rules can include pixel and file-size checks",
      "Verify the latest ICA photo requirement before submitting"
    ],
    steps: [
      "Choose the Singapore passport preset.",
      "Import a clear portrait with even lighting.",
      "Review face position, head size, background, sharpness, and export guidance.",
      "Export a digital image or print layout as needed."
    ],
    faq: [
      {
        question: "What size is a Singapore passport photo?",
        answer:
          "A common Singapore passport photo size is 35 x 45 mm. Check ICA instructions for the latest digital submission rules."
      },
      {
        question: "Can I prepare a Singapore passport photo on iPhone?",
        answer:
          "Yes. The app can help align, check, and export a passport-style photo locally on your iPhone."
      }
    ]
  },
  {
    slug: "malaysia-passport-photo-size",
    title: "Malaysia Passport Photo Size",
    heading: "Malaysia passport photo size and requirements",
    searchIntent: "country-document",
    country: "Malaysia",
    documentName: "Passport",
    size: "35 x 50 mm",
    pixels: "413 x 591 px at 300 DPI or higher",
    background: "White or blue depending on channel",
    keyword: "Malaysia passport photo size",
    sourceUrl: "https://www.imi.gov.my/",
    intro:
      "Prepare a Malaysia passport photo on iPhone with 35 x 50 mm sizing, background color guidance, face-position checks, and print-ready export.",
    requirements: [
      "Common Malaysia passport photo size: 35 x 50 mm",
      "Background requirements can vary by service channel",
      "Face should be centered and looking straight ahead",
      "Use even lighting with no heavy shadow or blur",
      "Head size and top margin should match the selected guide",
      "Review the latest immigration office requirement before final submission"
    ],
    steps: [
      "Select the Malaysia passport preset.",
      "Import or capture a front-facing photo.",
      "Choose the required background color and review framing checks.",
      "Export the digital photo or a print-ready sheet."
    ],
    faq: [
      {
        question: "What size is a Malaysia passport photo?",
        answer:
          "A common Malaysia passport photo size is 35 x 50 mm. Background and submission details can vary by channel, so verify the current requirement."
      },
      {
        question: "Does IDPhoto Pro support blue backgrounds?",
        answer:
          "Yes. The app includes common document background options including white, off-white, light gray, and blue."
      }
    ]
  },
  {
    slug: "germany-passport-photo-size",
    title: "Germany Passport Photo Size",
    heading: "Germany passport photo size and biometric requirements",
    searchIntent: "country-document",
    country: "Germany",
    documentName: "Passport",
    size: "35 x 45 mm",
    pixels: "413 x 531 px at 300 DPI or higher",
    background: "Plain light background",
    keyword: "Germany passport photo size",
    sourceUrl: "https://www.germany.info/",
    intro:
      "Create a Germany passport photo on iPhone with 35 x 45 mm biometric-style sizing, plain background guidance, face-framing checks, and export options.",
    requirements: [
      "Photo size: 35 x 45 mm",
      "Plain light background with no distracting shadows",
      "Face centered, looking directly at the camera",
      "Neutral expression and eyes open",
      "Head height and eye line should follow biometric photo guidance",
      "Review the latest German authority instructions before using the final photo"
    ],
    steps: [
      "Choose the Germany passport preset.",
      "Use a sharp, recent, front-facing photo.",
      "Review head size, eye height, centering, top margin, background, and sharpness checks.",
      "Export a digital file, PDF, or print-ready layout."
    ],
    faq: [
      {
        question: "What size is a German passport photo?",
        answer:
          "A common German passport photo size is 35 x 45 mm. Biometric photo rules can be strict, so check the latest official instruction."
      },
      {
        question: "Can IDPhoto Pro check biometric-style framing?",
        answer:
          "The app provides guidance for head size, eye height, centering, margins, background, and image quality before export."
      }
    ]
  },
  {
    slug: "france-visa-photo-size",
    title: "France Visa Photo Size",
    heading: "France visa photo size and requirements",
    searchIntent: "country-document",
    country: "France",
    documentName: "Visa",
    size: "35 x 45 mm",
    pixels: "413 x 531 px at 300 DPI or higher",
    background: "Plain light background",
    keyword: "France visa photo size",
    sourceUrl: "https://france-visas.gouv.fr/",
    intro:
      "Prepare a France visa photo on iPhone with 35 x 45 mm sizing, light background guidance, face-position checks, and digital or print export.",
    requirements: [
      "Photo size: 35 x 45 mm",
      "Plain light background",
      "Face centered and looking straight at the camera",
      "Neutral expression, eyes open, and full face visible",
      "No heavy shadows, blur, filters, or distracting accessories",
      "Verify the latest France-Visas or visa center requirement before submission"
    ],
    steps: [
      "Select the France visa preset.",
      "Import a recent passport-style portrait.",
      "Check face position, head size, eye line, background, and sharpness.",
      "Export the file for upload or create a print sheet."
    ],
    faq: [
      {
        question: "What size is a France visa photo?",
        answer:
          "A common France visa photo size is 35 x 45 mm, similar to many Schengen visa workflows."
      },
      {
        question: "Is a France visa photo the same as a Schengen visa photo?",
        answer:
          "France is part of the Schengen Area, but you should still follow the current France-Visas or visa center instructions for your application."
      }
    ]
  }
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}
