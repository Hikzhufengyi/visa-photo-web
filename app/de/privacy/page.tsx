import { PrivacyPolicyPage } from "@/components/privacy-policy-page";
import { staticRouteAlternates } from "@/data/static-route-metadata";

export const metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung für IDPhoto Pro. Die Fotobearbeitung bleibt auf dem Gerät; keine Foto-Uploads, keine Werbe-SDKs und keine Analyse-SDKs.",
  alternates: staticRouteAlternates("de", "/privacy")
};

export default function DePrivacyPage() {
  return <PrivacyPolicyPage locale="de" />;
}
