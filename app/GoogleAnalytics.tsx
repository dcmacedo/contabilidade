"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";

// IDs de medição
const GA_MEASUREMENT_ID = "G-WHH5NFS1H3"; // GA4
const ADS_ID = "AW-405311343"; // Google Ads

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag || !pathname) return;

    const url =
      window.location.origin +
      pathname +
      (searchParams?.toString() ? `?${searchParams}` : "");

    // Rastreia visualização de página
    window.gtag("event", "page_view", {
      page_location: url,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return (
    <>
      {/* Script principal do gtag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* Inicialização do GA4 + Ads */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // GA4
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });

          // Google Ads
          gtag('config', '${ADS_ID}');
        `}
      </Script>
    </>
  );
}
