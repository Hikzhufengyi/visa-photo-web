"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type GtagParameters = [
  command: "event",
  eventName: string,
  eventParameters?: Record<string, string | number | boolean | undefined>
];

declare global {
  interface Window {
    gtag?: (...args: GtagParameters) => void;
  }
}

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string;
  eventParams?: Record<string, string | number | boolean | undefined>;
};

export function TrackedLink({
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        window.gtag?.("event", eventName, {
          product: "idphoto_pro",
          page_hostname: window.location.hostname,
          ...eventParams
        });
        onClick?.(event);
      }}
    />
  );
}
