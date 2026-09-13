"use client";

import { useEffect, useState } from "react";
import { PRODUCT } from "@/lib/constants";

export function MobileStickyCTA() {
  const [isMobile, setIsMobile] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Check if user dismissed this session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dismissedFlag = sessionStorage.getItem("mobile_cta_dismissed");
      if (dismissedFlag) setDismissed(true);
    }
  }, []);

  if (!isMobile || dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("mobile_cta_dismissed", "true");
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-emerald-200 shadow-xl"
      role="region"
      aria-label="Acesso rápido ao checkout"
    >
      <div className="flex items-center justify-between p-4 gap-3 max-w-screen-xl mx-auto">
        <div className="flex-1 text-center">
          <span className="text-sm font-semibold text-emerald-800">
            🛡️ Garantia 7 dias · 💰 Pagamento único · ⚡ Entrega imediata
          </span>
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          className="flex-shrink-0 p-1 text-zinc-400 hover:text-zinc-600 transition"
          aria-label="Fechar botão fixo"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <a
        href={`${PRODUCT.checkout.offer}?utm_source=site&utm_medium=mobile_sticky_cta&utm_campaign=launch_offer_v3`}
        className="block w-full bg-gradient-to-r from-emerald-600 to-sky-600 text-white text-center py-3 font-semibold text-base shadow-lg hover:opacity-90 transition"
        role="button"
      >
        Quero minha planilha agora
      </a>
    </div>
  );
}