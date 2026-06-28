import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/data/localization";

const languageMap: Record<string, Locale> = {
  ar: "ar",
  de: "de",
  zh: "zh",
  en: "en"
};

function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  const languageRanges = header
    .split(",")
    .map((item) => item.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  for (const range of languageRanges) {
    const primary = range.split("-")[0];
    if (primary && primary in languageMap) {
      return languageMap[primary];
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (pathname !== "/" || isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/"
};
