"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_COOKIE = "cookie_consent";
const CONSENT_VERSION = "v1";

type ConsentData = {
  version: string;
  analytics: boolean;
  timestamp: string;
};

function getConsent(): ConsentData | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`));
  if (!match) return null;
  try {
    const val = JSON.parse(decodeURIComponent(match[1]));
    return val.version === CONSENT_VERSION ? val : null;
  } catch {
    return null;
  }
}

function setConsent(analytics: boolean) {
  const data: ConsentData = {
    version: CONSENT_VERSION,
    analytics,
    timestamp: new Date().toISOString(),
  };
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(data))}; expires=${expires}; path=/; SameSite=Lax`;
  // Trigger consent update in gtag if available
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: analytics ? "granted" : "denied",
      ad_storage: analytics ? "granted" : "denied",
    });
  }
}

export default function ConsentBanner() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const existing = getConsent();
    if (!existing) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    setConsent(true);
    setShow(false);
  };

  const reject = () => {
    setConsent(false);
    setShow(false);
  };

  if (!mounted || !show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white/95 backdrop-blur-sm shadow-lg"
      role="dialog"
      aria-label="Consentimento de cookies"
    >
      <div className="max-w-4xl mx-auto px-4 py-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-zinc-700">
            Usamos cookies para analisar o tráfego e melhorar a experiência.
            <Link href="/politica-de-privacidade" className="underline ml-1">
              Política de privacidade
            </Link>
            .
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={reject}
              className="rounded-xl border px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              Recusar
            </button>
            <button
              onClick={accept}
              className="rounded-xl bg-gradient-to-r from-emerald-600 to-sky-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}