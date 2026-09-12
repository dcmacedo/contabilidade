import { z } from "zod";

export const LeadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(120),
  phone: z.string().trim().max(25).optional().default(""),
  consent: z.literal(true, { error: "Consent is required" }),
  company: z.string().trim().max(0).optional().default(""),
  source: z.string().trim().max(60).optional().default("site"),

  utm_source: z.string().trim().max(120).optional(),
  utm_medium: z.string().trim().max(120).optional(),
  utm_campaign: z.string().trim().max(120).optional(),
  utm_content: z.string().trim().max(120).optional(),
  utm_term: z.string().trim().max(120).optional(),
  gclid: z.string().trim().max(200).optional(),
  fbclid: z.string().trim().max(200).optional(),
});

export type LeadPayload = z.infer<typeof LeadSchema>;

export function parseLeadPayload(input: unknown) {
  return LeadSchema.safeParse(input);
}
