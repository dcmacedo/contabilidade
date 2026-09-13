export type Variant = "A" | "B";

export const EXPERIMENTS = {
  hero_headline: {
    id: "hero_headline",
    variants: {
      A: {
        title: "Chega de perder horas com planilhas complexas",
        subtitle:
          "A ferramenta definitiva para você ter clareza total do dinheiro que entra e sai, e decidir com segurança o futuro do seu negócio.",
        cta: `Garantir por R$ 9,90`,
      },
      B: {
        title: "Seu caixa sob controle em 10 minutos por dia",
        subtitle:
          "Porque você já trabalha demais para gastar tempo tentando entender para onde seu dinheiro foi.",
        cta: "Quero minha planilha agora",
      },
    },
  },
  cta_color: {
    id: "cta_color",
    variants: {
      A: { label: "Garantir por R$ 9,90" },
      B: { label: "Quero minha planilha agora" },
    },
  },
} as const;

export type ExperimentName = keyof typeof EXPERIMENTS;

const COOKIE_PREFIX = "ab_test_";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

export function getVariantForCookie(cookieHeader: string | null, experiment: ExperimentName): Variant {
  const exp = EXPERIMENTS[experiment];
  const key = `${COOKIE_PREFIX}${exp.id}`;
  const match = cookieHeader
    ?.split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${key}=`));
  if (match) {
    const v = match.split("=")[1]?.toUpperCase();
    if (v === "A" || v === "B") return v;
  }
  return Math.random() < 0.5 ? "A" : "B";
}

export function buildVariantCookie(experiment: ExperimentName, variant: Variant, domain?: string): string {
  const exp = EXPERIMENTS[experiment];
  const cookie = `${COOKIE_PREFIX}${exp.id}=${variant}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  return domain ? `${cookie}; Domain=${domain}` : cookie;
}