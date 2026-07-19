import type { Locale } from "@/data/localization";

const staticLocales: Locale[] = ["en", "zh", "ar", "de"];

export function staticRouteAlternates(locale: Locale, route: string) {
  return {
    canonical: `/${locale}${route}`,
    languages: {
      ...Object.fromEntries(
        staticLocales.map((nextLocale) => [
          nextLocale,
          `/${nextLocale}${route}`
        ])
      ),
      "x-default": `/en${route}`
    }
  };
}
