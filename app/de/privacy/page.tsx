import { PrivacyPolicyPage } from "@/components/privacy-policy-page";

export const metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung für IDPhoto Pro. Die Fotobearbeitung bleibt auf dem Gerät; keine Foto-Uploads, keine Werbe-SDKs und keine Analyse-SDKs."
};

export default function DePrivacyPage() {
  return <PrivacyPolicyPage locale="de" />;
}
