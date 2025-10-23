"use client";

import { useEffect, useState } from "react";
import { gaEvent } from "@/lib/ga";

type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  consent: boolean;
  company?: string; // honeypot
  source?: string;

  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
};

export default function LeadForm({ source = "site" }: { source?: string }) {
  const [data, setData] = useState<LeadPayload>({
    name: "",
    email: "",
    phone: "",
    consent: true,
    company: "",
    source,
  });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [msg, setMsg] = useState<string>("");

  // Captura UTMs da URL
  useEffect(() => {
    try {
      const sp = new URLSearchParams(window.location.search);
      const u = {
        utm_source: sp.get("utm_source") || undefined,
        utm_medium: sp.get("utm_medium") || undefined,
        utm_campaign: sp.get("utm_campaign") || undefined,
        utm_content: sp.get("utm_content") || undefined,
        utm_term: sp.get("utm_term") || undefined,
        gclid: sp.get("gclid") || undefined,
        fbclid: sp.get("fbclid") || undefined,
      };
      setData((d) => ({ ...d, ...u }));
    } catch {
      // ignora
    }
  }, []);

  const handleChange =
    (field: keyof LeadPayload) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        field === "consent" ? (e.target as HTMLInputElement).checked : e.target.value;
      setData((d) => ({ ...d, [field]: value }));
    };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!data.name || !data.email) {
      setOk(false);
      setMsg("Preencha nome e e-mail.");
      return;
    }
    setLoading(true);
    setOk(null);
    setMsg("");

    gaEvent({ action: "generate_lead", params: { location: source } });

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setOk(true);
        setMsg("Recebido! Em breve envio materiais e novidades.");
        setData({
          name: "",
          email: "",
          phone: "",
          consent: true,
          company: "",
          source,
        });
        gaEvent({ action: "lead_submit_success", params: { location: source } });
      } else {
        setOk(false);
        setMsg("Não consegui enviar agora. Tente novamente em instantes.");
        gaEvent({
          action: "lead_submit_error",
          params: { location: source, reason: json.error || "unknown" },
        });
      }
    } catch {
      setOk(false);
      setMsg("Falha na conexão. Tente novamente.");
      gaEvent({ action: "lead_submit_error", params: { location: source, reason: "network" } });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border bg-white p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium text-zinc-700">Nome</label>
        <input
          type="text"
          required
          value={data.name}
          onChange={handleChange("name")}
          className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700">E-mail</label>
        <input
          type="email"
          required
          value={data.email}
          onChange={handleChange("email")}
          className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          placeholder="voce@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700">WhatsApp (opcional)</label>
        <input
          type="tel"
          value={data.phone}
          onChange={handleChange("phone")}
          className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          placeholder="(xx) xxxxx-xxxx"
        />
      </div>

      {/* Honeypot (invisível para humanos) */}
      <input
        type="text"
        name="company"
        value={data.company}
        onChange={handleChange("company")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="flex items-start gap-2">
        <input
          id="consent"
          type="checkbox"
          checked={data.consent}
          onChange={handleChange("consent")}
          className="mt-1 h-4 w-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-600"
        />
        <label htmlFor="consent" className="text-xs text-zinc-600">
          Aceito receber materiais, conteúdos e comunicações e concordo com a LGPD.
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 px-6 py-3 text-white font-semibold shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-600"
      >
        {loading ? "Enviando..." : "Quero receber materiais e novidades"}
      </button>

      {ok === true && <p className="text-sm text-emerald-700">{msg}</p>}
      {ok === false && <p className="text-sm text-red-600">{msg}</p>}

      <p className="text-[10px] text-zinc-500">Guardamos seu e-mail com segurança.</p>
    </form>
  );
}
