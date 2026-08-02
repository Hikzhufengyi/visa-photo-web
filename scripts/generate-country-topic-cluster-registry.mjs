import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const specsPath = resolve(root, "data/app-photo-specs.ts");
const outputPath = resolve(root, "geo/country-topic-cluster-registry.json");

const questionTypesByCategory = {
  passport: ["overview", "size", "requirements", "background", "glasses", "example", "maker", "print"],
  visa: ["overview", "size", "requirements", "background", "maker", "print"],
  immigration: ["overview", "size", "requirements", "maker", "print"],
  print: ["print"]
};

const evidenceBackedRows = {
  "us-passport": {
    evidenceIds: ["CLM-011"],
    reviewedAt: "2026-07-27",
    indexState: "published",
    note: "US passport cluster is the reference implementation. The country-specific rule source must be refreshed by 2026-10-27."
  },
  "uk-passport": {
    evidenceIds: ["CLM-012"],
    reviewedAt: "2026-08-02",
    indexState: "published",
    note: "Published official-first UK passport guidance. The online digital and paper printed-photo routes remain separate; refresh the primary source by 2026-11-02."
  },
  "canada-passport": {
    evidenceIds: ["CLM-013"],
    reviewedAt: "2026-08-02",
    indexState: "published",
    note: "Published official-first Canada passport guidance. The commercial-photographer requirement and editing limits remain visible; refresh the primary source by 2026-11-02."
  }
};

const source = await readFile(specsPath, "utf8");
const match = source.match(/export const appPhotoSpecs = (\[[\s\S]*\]) satisfies AppPhotoSpec\[\];\s*$/);

if (!match) {
  throw new Error("Could not read appPhotoSpecs from data/app-photo-specs.ts");
}

const specs = JSON.parse(match[1]);
const rows = specs.map((spec) => {
  const evidenceBacked = evidenceBackedRows[spec.id];

  return {
    id: `CTC-${spec.id}`,
    specId: spec.id,
    country: spec.country,
    document: spec.title,
    category: spec.category,
    existingSizeSlug: `${spec.id}-photo-size`,
    candidateQuestionTypes: questionTypesByCategory[spec.category],
    requiredEvidence: [
      "Primary authority URL for this exact document workflow",
      "Source review date and expiry date",
      "Scope boundary: country, document, application channel, and exceptions",
      "Product preset parity with the released iOS version"
    ],
    evidenceIds: evidenceBacked?.evidenceIds ?? [],
    reviewedAt: evidenceBacked?.reviewedAt ?? null,
    indexState: evidenceBacked?.indexState ?? "blocked",
    owner: evidenceBacked ? "增长运营 / 产品经理" : "增长运营",
    publicationRule: evidenceBacked?.indexState === "published"
      ? "Published only for the exact country and document scope backed by the recorded evidence."
      : evidenceBacked
        ? "Evidence is recorded, but page creation and indexation remain blocked until product, design, CTO, and QA gates pass."
        : "Do not create or index long-tail pages until every required evidence field is complete and the task has unique facts beyond the size page.",
    note: evidenceBacked?.note ?? "Candidate only; no country-specific long-tail page is authorized from the preset dataset alone."
  };
});

const registry = {
  schemaVersion: "1.0",
  generatedAt: new Date().toISOString(),
  source: "data/app-photo-specs.ts",
  publicationPolicy: {
    purpose: "Create country-specific search and GEO pages only where the user task and official evidence are distinct.",
    prohibited: [
      "Copying the U.S. page set to another country without country-specific evidence",
      "Publishing size, background, glasses, example, or print claims solely from the app preset dataset",
      "Claiming government approval or guaranteed acceptance"
    ],
    indexGate: [
      "A primary authority source supports the exact visible rule",
      "The page has a distinct search task and unique answer",
      "The released iOS app supports the referenced preset or workflow",
      "Product, design, CTO, and QA gates have passed"
    ]
  },
  summary: {
    totalCandidates: rows.length,
    published: rows.filter((row) => row.indexState === "published").length,
    readyForDesign: rows.filter((row) => row.indexState === "ready_for_design").length,
    blockedPendingEvidence: rows.filter((row) => row.indexState === "blocked").length
  },
  rows
};

await writeFile(outputPath, `${JSON.stringify(registry, null, 2)}\n`);
console.log(`Wrote ${rows.length} country-topic candidates to ${outputPath}`);
