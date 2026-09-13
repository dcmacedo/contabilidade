import { NextResponse } from "next/server";
import { readLeadsFromSheet } from "@/lib/googleSheets";
import { computeLeadMetrics } from "@/lib/leadStats";
import type { Metric } from "@/lib/leadStats";

const REPORT_TOKEN = process.env.LEAD_REPORT_TOKEN;

export const runtime = "nodejs";

export async function GET(req: Request) {
  // Token auth
  const authHeader = req.headers.get("authorization") || "";
  const tokenFromQuery = new URL(req.url).searchParams.get("token") ?? "";

  if (!REPORT_TOKEN) {
    return NextResponse.json(
      { ok: false, error: "Report endpoint not configured (missing LEAD_REPORT_TOKEN)" },
      { status: 500 }
    );
  }

  const providedToken = authHeader.replace(/^Bearer /, "") || tokenFromQuery;
  if (providedToken !== REPORT_TOKEN) {
    return NextResponse.json({ ok: false, error: "Invalid report token" }, { status: 401 });
  }

  try {
    const rows = await readLeadsFromSheet();
    const metrics: Metric = computeLeadMetrics(rows, {
      honeypotDrops: 0,
      rateLimited: 0,
    });

    return NextResponse.json({ ok: true, metrics });
  } catch (err) {
    console.error("[LEAD_REPORT_ERROR]", err);
    return NextResponse.json({ ok: false, error: "Failed to read leads" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!REPORT_TOKEN) {
    return NextResponse.json(
      { ok: false, error: "Report endpoint not configured" },
      { status: 500 }
    );
  }

  // Token auth
  const authHeader = req.headers.get("authorization") || "";
  const providedToken = authHeader.replace(/^Bearer /, "");
  if (providedToken !== REPORT_TOKEN) {
    return NextResponse.json({ ok: false, error: "Invalid report token" }, { status: 401 });
  }

  try {
    const rows = await readLeadsFromSheet();
    const metrics: Metric = computeLeadMetrics(rows, {
      honeypotDrops: 0,
      rateLimited: 0,
    });

    // Enviar relatório por e-mail via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const notifyTo = process.env.LEAD_NOTIFY_TO;

    if (resendApiKey && from && notifyTo) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);
        const now = new Date().toLocaleString("pt-BR");
        const summary = `
          <h2>Relatório Semanal de Leads</h2>
          <p><b>Total de leads:</b> ${metrics.total}</p>
          <p><b>Leios hoje:</b> ${metrics.today}</p>
          <p><b>Leios (7 dias):</b> ${metrics.thisWeek}</p>
          <p><b>Leios (30 dias):</b> ${metrics.thisMonth}</p>
          <p><b>Taxa de consentimento:</b> ${(metrics.consentRate * 100).toFixed(1)}%</p>
          <p><b>Leads por origem:</b></p>
          <ul>
            ${Object.entries(metrics.bySource)
              .map(
                ([source, count]) => `<li>${source}: ${count}</li>`
              )
              .join("")}
          </ul>
          <p><b>Leads por fonte UTM:</b></p>
          <ul>
            ${Object.entries(metrics.byUtmSource)
              .map(
                ([source, count]) => `<li>${source}: ${count}</li>`
              )
              .join("")}
          </ul>
          <p><b>Leads por meio UTM:</b></p>
          <ul>
            ${Object.entries(metrics.byUtmMedium)
              .map(
                ([medium, count]) => `<li>${medium}: ${count}</li>`
              )
              .join("")}
          </ul>
          <p><small>Gerado em ${now}</small></p>
        `;

        await resend.emails.send({
          from,
          to: notifyTo,
          subject: `Relatório semanal de leads — ${metrics.total} novos leads`,
          html: summary,
        });
      } catch (err) {
        console.error("[LEAD_REPORT_EMAIL_ERROR]", err);
      }
    }

    return NextResponse.json({ ok: true, metrics, emailSent: !!resendApiKey });
  } catch (err) {
    console.error("[LEAD_REPORT_ERROR]", err);
    return NextResponse.json({ ok: false, error: "Failed to read leads" }, { status: 500 });
  }
}