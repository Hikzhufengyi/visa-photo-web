import { redirect } from "next/navigation";
import { defaultLocale } from "@/data/localization";

export default function RootRedirectPage() {
  redirect(`/${defaultLocale}`);
}
