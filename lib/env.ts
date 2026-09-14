import { z } from "zod";

const publicEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://pv.dcmacedo.com.br"),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional().default(""),
  NEXT_PUBLIC_ADS_ID: z.string().optional().default(""),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
});

const serverEnvSchema = z.object({
  GOOGLE_SERVICE_ACCOUNT_EMAIL: z.string().min(1).optional(),
  GOOGLE_SERVICE_ACCOUNT_KEY: z.string().min(1).optional(),
  GOOGLE_SHEETS_ID: z.string().min(1).optional(),
  GOOGLE_SHEETS_TAB: z.string().optional().default("Leads"),
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM: z.string().optional(),
  LEAD_NOTIFY_TO: z.string().optional(),
  TURNSTILE_SECRET_KEY: z.string().optional(),
});

export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  NEXT_PUBLIC_ADS_ID: process.env.NEXT_PUBLIC_ADS_ID,
});

export const serverEnv = serverEnvSchema.parse({
  GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_SERVICE_ACCOUNT_KEY: process.env.GOOGLE_SERVICE_ACCOUNT_KEY,
  GOOGLE_SHEETS_ID: process.env.GOOGLE_SHEETS_ID,
  GOOGLE_SHEETS_TAB: process.env.GOOGLE_SHEETS_TAB,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM: process.env.RESEND_FROM,
  LEAD_NOTIFY_TO: process.env.LEAD_NOTIFY_TO,
});

export function requireServerEnv(name: keyof typeof serverEnv) {
  const value = serverEnv[name];
  if (!value || value.trim() === "") {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}
