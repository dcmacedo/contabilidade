import { NextResponse } from "next/server";
import { z } from "zod";
import { appendLeadToSheet } from "@/lib/googleSheets";

export const runtime = "nodejs";

const LeadSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.email().max(120),
  phone: z.string().max(25).optional().default(""),
  consent: z.boolean(),
  company: z.string().max(0).optional().default(""), // honeypot
  source: z.string().max(60).optional().default("site"),

  utm_source: z.string().max(120).optional(),
  utm_medium: z.string().max(120).optional(),
  utm_campaign: z.string().max(120).optional(),
  utm_content: z.string().max(120).optional(),
  utm_term: z.string().max(120).optional(),
  gclid: z.string().max(200).optional(),
  fbclid: z.string().max(200).optional(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = LeadSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid payload", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      phone,
      consent,
      company,
      source,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      gclid,
      fbclid,
    } = parsed.data;

    if (company && company.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const referer = req.headers.get("referer") || "";
    const userAgent = req.headers.get("user-agent") || "";

    console.log("GOOGLE_SHEETS_ID:", process.env.GOOGLE_SHEETS_ID ? "ok" : "missing");

    console.log("[LEAD]", {
      name,
      email,
      phone,
      consent,
      source,
      referer,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      gclid,
      fbclid,
    });

    // Salva na planilha (ordem deve bater com HEADER em googleSheets.ts)
    try {
      await appendLeadToSheet([
        new Date().toISOString(),
        name,
        email,
        phone || "",
        consent ? "Sim" : "Não",
        source || "",
        referer,
        userAgent,
        utm_source || "",
        utm_medium || "",
        utm_campaign || "",
        utm_content || "",
        utm_term || "",
        gclid || "",
        fbclid || "",
      ]);
    } catch (gsErr) {
      console.error("[LEAD_SHEETS_ERROR]", gsErr);
      // Não quebra o request
    }

    // (Opcional) Envio de e-mail via Resend — igual sua versão anterior
    if (process.env.RESEND_API_KEY && process.env.RESEND_FROM && process.env.LEAD_NOTIFY_TO) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: process.env.RESEND_FROM!,
          to: process.env.LEAD_NOTIFY_TO!,
          subject: `Novo lead: ${name}`,
          html: `
            <h2>Novo lead</h2>
            <p><b>Nome:</b> ${name}</p>
            <p><b>E-mail:</b> ${email}</p>
            <p><b>WhatsApp:</b> ${phone || "-"}</p>
            <p><b>Consentimento:</b> ${consent ? "Sim" : "Não"}</p>
            <p><b>Origem:</b> ${source || "-"}</p>
            <p><b>UTMs:</b> ${[
              utm_source && `source=${utm_source}`,
              utm_medium && `medium=${utm_medium}`,
              utm_campaign && `campaign=${utm_campaign}`,
              utm_content && `content=${utm_content}`,
              utm_term && `term=${utm_term}`,
              gclid && `gclid=${gclid}`,
              fbclid && `fbclid=${fbclid}`,
            ]
              .filter(Boolean)
              .join(" | ")}</p>
            <p><b>Referer:</b> ${referer}</p>
            <small>${new Date().toLocaleString("pt-BR")}</small>
          `,
        });
      } catch (err) {
        console.error("[LEAD_EMAIL_ERROR]", err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[LEAD_ERROR]", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
