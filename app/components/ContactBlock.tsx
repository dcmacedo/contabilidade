"use client";

import { BRAND } from "@/lib/constants";
import { gaEvent } from "@/lib/ga";

export default function ContactBlock() {
  const waUrl = `https://wa.me/${BRAND.whatsappE164}?text=${encodeURIComponent(BRAND.whatsappDefaultMsg)}`;
  const mailUrl = `mailto:${BRAND.supportEmail}?subject=${encodeURIComponent("Dúvida sobre a planilha")}`;

  function clickWhatsapp() {
    gaEvent({ action: "contact_whatsapp", params: { location: "contact_block" } });
    window.open(waUrl, "_blank", "noopener,noreferrer");
  }

  function clickEmail() {
    gaEvent({ action: "contact_email", params: { location: "contact_block" } });
    window.location.href = mailUrl;
  }

  return (
    <div className="rounded-2xl border bg-gradient-to-br from-white to-emerald-50 p-6">
      <h4 className="text-lg md:text-xl font-extrabold">Fale com a gente</h4>
      <p className="mt-1 text-sm text-zinc-700">
        Está com alguma dúvida antes de comprar? Podemos ajudar agora.
      </p>

      <div className="mt-4 grid sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={clickWhatsapp}
          className="rounded-2xl bg-zinc-900 text-white px-5 py-3 font-semibold shadow hover:opacity-90"
        >
          Conversar no WhatsApp
        </button>
        <button
          type="button"
          onClick={clickEmail}
          className="rounded-2xl bg-white border px-5 py-3 font-semibold shadow hover:bg-zinc-50"
        >
          Enviar e-mail
        </button>
      </div>

      <ul className="mt-4 text-xs text-zinc-600 list-disc list-inside">
        <li>Tempo médio de resposta: rápido no horário comercial.</li>
        <li>Suporte básico por e-mail após a compra (configuração inicial).</li>
      </ul>
    </div>
  );
}
