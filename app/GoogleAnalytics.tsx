"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";
import { publicEnv } from "@/lib/env";

const GA_MEASUREMENT_ID = publicEnv.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADS_ID = publicEnv.NEXT_PUBLIC_ADS_ID;

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag || !pathname) return;

    const url =
      window.location.origin +
      pathname +
      (searchParams?.toString() ? `?${searchParams}` : "");

    window.gtag("event", "page_view", {
      page_location: url,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  if (!GA_MEASUREMENT_ID && !ADS_ID) return null;

  return (
    <>
      {GA_MEASUREMENT_ID ? (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
      ) : null}

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA_MEASUREMENT_ID ? `gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });` : ""}
          ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
