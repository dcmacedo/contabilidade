import { NextResponse } from "next/server";
import { appendLeadToSheet } from "@/lib/googleSheets";
import { checkRateLimit } from "@/lib/rateLimit";
import { parseLeadPayload } from "@/lib/lead";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > 16_384) {
      return NextResponse.json({ ok: false, error: "Payload too large" }, { status: 413 });
    }

    const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { ok: false, error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } }
      );
    }

    const rawBody = await req.text();
    if (rawBody.length > 16_384) {
      return NextResponse.json({ ok: false, error: "Payload too large" }, { status: 413 });
    }

    const json = JSON.parse(rawBody);

    // Validação Turnstile
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      const token = json.cf_token;
      if (!token) {
        return NextResponse.json({ ok: false, error: "Missing captcha token" }, { status: 400 });
      }

      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: turnstileSecret,
          response: token,
          remoteip: ip,
        }),
      });
      const verifyJson = await verifyRes.json();
      if (!verifyJson.success) {
        return NextResponse.json({ ok: false, error: "Invalid captcha" }, { status: 400 });
      }
    }

    const parsed = parseLeadPayload(json);
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
      return NextResponse.json(
        { ok: false, error: "Lead storage unavailable" },
        { status: 503 }
      );
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
            <p><b>Nome:</b> ${escapeHtml(name)}</p>
            <p><b>E-mail:</b> ${escapeHtml(email)}</p>
            <p><b>WhatsApp:</b> ${escapeHtml(phone || "-")}</p>
            <p><b>Consentimento:</b> ${consent ? "Sim" : "Não"}</p>
            <p><b>Origem:</b> ${escapeHtml(source || "-")}</p>
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
              .map((value) => escapeHtml(String(value)))
              .join(" | ")}</p>
            <p><b>Referer:</b> ${escapeHtml(referer)}</p>
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

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}
