import { google } from "googleapis";

let _sheets: ReturnType<typeof google.sheets> | null = null;

function getSheets() {
  if (_sheets) return _sheets;

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY!;
  const privateKey = rawKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  _sheets = google.sheets({ version: "v4", auth });
  return _sheets;
}

const HEADER = [
  "Timestamp",
  "Nome",
  "Email",
  "WhatsApp",
  "Consentimento",
  "Origem",
  "Referer",
  "UserAgent",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

async function ensureHeader() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID!;
  const sheetName = process.env.GOOGLE_SHEETS_TAB || "Leads";
  const sheets = getSheets();

  // Lê a primeira linha
  const get = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!1:1`,
  });

  const row = (get.data.values && get.data.values[0]) || [];

  // Se não existe header ou está diferente/tamanho menor, grava HEADER completo
  const needsWrite =
    row.length === 0 ||
    HEADER.some((col, i) => (row[i] || "").toString().trim() !== col);

  if (needsWrite) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [Array.from(HEADER)] },
    });
  }
}

export async function appendLeadToSheet(values: (string | number | boolean)[]) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID!;
  const sheetName = process.env.GOOGLE_SHEETS_TAB || "Leads";
  const sheets = getSheets();

  await ensureHeader();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A1`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [values] },
  });
}
