"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Script from "next/script";
import { publicEnv } from "@/lib/env";

const GA_MEASUREMENT_ID = publicEnv.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADS_ID = publicEnv.NEXT_PUBLIC_ADS_ID;

const CONSENT_COOKIE = "cookie_consent";
const CONSENT_VERSION = "v1";

function getConsent(): "granted" | "denied" | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`));
  if (!match) return null;
  try {
    const val = JSON.parse(decodeURIComponent(match[1]));
    return val.version === CONSENT_VERSION && val.analytics === true ? "granted" : "denied";
  } catch {
    return null;
  }
}

function setDefaultConsent() {
  if (typeof window === "undefined") return;
  const consent = getConsent();
  if (consent) {
    window.gtag?.("consent", "update", {
      analytics_storage: consent,
      ad_storage: consent,
    });
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consent, setConsent] = useState<"granted" | "denied" | "unknown">("unknown");

  useEffect(() => {
    setConsent(getConsent() ?? "unknown");
  }, []);

  // Update consent mode when consent changes
  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return;
    const c = getConsent();
    if (c) {
      window.gtag("consent", "update", {
        analytics_storage: c,
        ad_storage: c,
      });
      setConsent(c);
    }
  }, [pathname]); // re-check on navigation

  // Track page views only with consent
  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag || !pathname || consent !== "granted") return;

    const url =
      window.location.origin +
      pathname +
      (searchParams?.toString() ? `?${searchParams}` : "");

    window.gtag("event", "page_view", {
      page_location: url,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname, searchParams, consent]);

  // Initialize with default consent
  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return;
    setDefaultConsent();
  }, []);

  if (!GA_MEASUREMENT_ID && !ADS_ID) return null;

  // Only load scripts if consent is granted
  if (consent !== "granted") return null;

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
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            wait_for_update: 500,
          });
          ${GA_MEASUREMENT_ID ? `gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });` : ""}
          ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
