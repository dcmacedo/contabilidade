import type { LeadRow } from "./googleSheets";

export type Metric = {
  total: number;
  today: number;
  thisWeek: number;
  thisMonth: number;
  bySource: Record<string, number>;
  byUtmSource: Record<string, number>;
  byUtmMedium: Record<string, number>;
  consentRate: number;
  honeypotDrops: number;
  rateLimited: number;
};

export function computeLeadMetrics(
  rows: LeadRow[],
  options?: { rateLimited?: number; honeypotDrops?: number }
): Metric {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
  const weekStart = new Date(now.getTime() - 7 * 86400000).toISOString();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  let today = 0;
  let thisWeek = 0;
  let thisMonth = 0;
  const bySource: Record<string, number> = {};
  const byUtmSource: Record<string, number> = {};
  const byUtmMedium: Record<string, number> = {};
  let consent = 0;

  for (const row of rows) {
    const ts = row["Timestamp"] || "";
    if (ts >= todayStart) today++;
    if (ts >= weekStart) thisWeek++;
    if (ts >= monthStart) thisMonth++;
    const src = row["Origem"] || "direct";
    bySource[src] = (bySource[src] || 0) + 1;
    const u = row["utm_source"] || "none";
    byUtmSource[u] = (byUtmSource[u] || 0) + 1;
    const m = row["utm_medium"] || "none";
    byUtmMedium[m] = (byUtmMedium[m] || 0) + 1;
    if (row["Consentimento"] === "Sim") consent++;
  }

  return {
    total: rows.length,
    today,
    thisWeek,
    thisMonth,
    bySource,
    byUtmSource,
    byUtmMedium,
    consentRate: rows.length ? consent / rows.length : 0,
    honeypotDrops: options?.honeypotDrops ?? 0,
    rateLimited: options?.rateLimited ?? 0,
  };
}
