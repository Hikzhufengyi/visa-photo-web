"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, getCopy, isLocale, locales } from "@/data/localization";
import { siteConfig } from "@/data/site";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];
  const locale = isLocale(firstSegment) ? firstSegment : defaultLocale;
  const copy = getCopy(locale);
  const isRtl = locale === "ar";
  const pathWithoutLocale = isLocale(firstSegment)
    ? pathname.replace(`/${firstSegment}`, "") || "/"
    : pathname;

  function localizedHref(path: string) {
    if (path === "/") {
      return `/${locale}`;
    }
    return `/${locale}${path}`;
  }

  return (
    <>
      <header className="site-header" dir={isRtl ? "rtl" : "ltr"}>
        <Link className="brand" href={`/${locale}`} aria-label={`${siteConfig.name} home`}>
          <span className="brand-mark">ID</span>
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="header-links" aria-label="Main navigation">
          <Link href={localizedHref("/")}>{copy.nav.home}</Link>
          <Link href={localizedHref("/download")}>{copy.nav.download}</Link>
          <Link href={localizedHref("/support")}>{copy.nav.support}</Link>
          <Link href={localizedHref("/privacy")}>{copy.nav.privacy}</Link>
          <div className="locale-switcher">
            {locales.map((nextLocale) => (
              <Link
                className={nextLocale === locale ? "locale-link locale-link-active" : "locale-link"}
                href={`/${nextLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
                key={nextLocale}
              >
                {nextLocale.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <div dir={isRtl ? "rtl" : "ltr"}>{children}</div>

      <footer className="site-footer" dir={isRtl ? "rtl" : "ltr"}>
        <span>{`© 2026 ${siteConfig.name}`}</span>
        <span>{copy.footer.notice}</span>
        <Link href={localizedHref("/support")}>{copy.nav.support}</Link>
        <Link href={localizedHref("/privacy")}>{copy.nav.privacy}</Link>
        <a href={`mailto:${siteConfig.supportEmail}`}>{copy.footer.contact}</a>
      </footer>
    </>
  );
}
