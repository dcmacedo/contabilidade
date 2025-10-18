
"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Section from "@/app/components/Section";
import Badge from "@/app/components/Badge";
import FeatureCard from "@/app/components/FeatureCard";
import PricingCard from "@/app/components/PricingCard";
import CTAButton from "@/app/components/CTAButton";
import TestimonialCard from "@/app/components/TestimonialCard";
import { PRODUCT, BADGES, BENEFITS, FEATURES, FUTURE, TESTIMONIALS } from "@/lib/constants";

export default function Page() {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const deadline = useMemo(() => {
    const key = "pfc_v2_countdown_deadline";
    const existing = typeof window !== "undefined" ? localStorage.getItem(key) : null;
    let end = existing ? new Date(existing) : null;
    if (!end || end.getTime() < Date.now()) {
      end = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      if (typeof window !== "undefined") localStorage.setItem(key, end.toISOString());
    }
    return end;
  }, []);

  useEffect(() => {
    const tick = () => {
      const diff = deadline.getTime() - Date.now();
      if (diff <= 0) return setTimeLeft("00:00:00");
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1000);
      setTimeLeft(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [deadline]);

  const itemOffer = [
    { item_id: "pfc_avancado", item_name: PRODUCT.name, quantity: 1, price: PRODUCT.offerPrice },
  ];
  const itemRegular = [
    { item_id: "pfc_avancado", item_name: PRODUCT.name, quantity: 1, price: PRODUCT.price },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-zinc-900">
      {/* JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: PRODUCT.name,
            description: PRODUCT.tagline,
            brand: "Planilha Financeira Fácil",
            offers: {
              "@type": "Offer",
              priceCurrency: "BRL",
              price: PRODUCT.offerPrice,
              url: PRODUCT.checkout.offer,
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* Top Bar / Offer */}
      <div className="w-full bg-gradient-to-r from-emerald-600 to-sky-600 text-white text-center text-sm py-2">
        Oferta de lançamento: de R$ {PRODUCT.price.toFixed(2)} por <span className="font-semibold">R$ {PRODUCT.offerPrice.toFixed(2)}</span> — expira em <span className="font-mono">{timeLeft}</span>
      </div>

      {/* Hero */}
      <Section className="py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm">
              <span>🧮</span>
              <span>Controle de caixa para o dia a dia</span>
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">{PRODUCT.name}</h1>
            <p className="mt-4 text-lg md:text-xl text-zinc-700">{PRODUCT.tagline}</p>
            <ul className="mt-6 space-y-2 text-zinc-700">
              <li className="flex gap-3"><span>✔️</span><span>Comece com um passo a passo simples sem curva de aprendizado.</span></li>
              <li className="flex gap-3"><span>✔️</span><span>Veja onde está o dinheiro, quais gastos pesam e como agir.</span></li>
              <li className="flex gap-3"><span>✔️</span><span>Dashboard e gráficos claros para decidir com confiança.</span></li>
            </ul>
            <div className="mt-8 flex flex-wrap items-end gap-4">
              <CTAButton
                label={`Garantir por R$ ${PRODUCT.offerPrice.toFixed(2)}`}
                href={`${PRODUCT.checkout.offer}?utm_source=site&utm_medium=hero_btn&utm_campaign=launch_offer_v3`}
                value={PRODUCT.offerPrice}
                items={itemOffer}
                location="hero"
                promotionName="Oferta de Lançamento"
                promotionId="launch_offer_v3"
              />
              <div className="text-sm text-zinc-600">
                <div className="line-through">R$ {PRODUCT.price.toFixed(2)}</div>
                <div className="font-semibold">Oferta por tempo limitado</div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {BADGES.map((b) => (
                <Badge key={b}>{b}</Badge>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border bg-white shadow-xl overflow-hidden">
              <Image
                src="/Dashboard.jpg"
                alt="Prévia do Dashboard da Planilha de Fluxo de Caixa Avançado"
                className="w-full h-auto block"
                width={1280}
                height={720}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section id="beneficios" title="Benefícios">
        <div className="grid md:grid-cols-3 gap-6">
          {BENEFITS.map((b) => (
            <div key={b.title} className="mb-6 rounded-2xl border p-6 bg-white/70 backdrop-blur">
              <div className="text-xl font-extrabold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">{b.title}</div>
              <div className="mt-2 text-sm text-zinc-700">{b.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section id="recursos" title="Dentro da planilha">
        <div className="mb-6 grid md:grid-cols-2 gap-6">
          {FEATURES.map((f) => (
            <FeatureCard key={f.key} title={f.title} desc={f.desc} image={f.key === "dashboard" || f.key === "menu" || f.key === "lancamentos" || f.key === "relatorios" || f.key === "graficos" || f.key === "tabelas" ? f.image : undefined} />
          ))}
        </div>
      </Section>

      {/* Future for MEI */}
      <Section>
        <div className="rounded-3xl border bg-gradient-to-br from-white to-emerald-50 p-8">
          <h3 className="text-xl md:text-2xl font-extrabold">Próximas versões: Foco em MEI</h3>
          <p className="mt-2 text-zinc-700">Compre agora e receba atualizações da linha base. Recursos pensados para a rotina do MEI.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {FUTURE.map((f) => (
              <div key={f.title} className="rounded-2xl border bg-white p-6">
                <div className="font-semibold">{f.title}</div>
                <p className="mt-2 text-zinc-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section title="Quem já usou aprovou" center>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.n} n={t.n} t={t.t} d={t.d} />
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="preco" title="Escolha sua opção" subtitle="Leve agora e desbloqueie clareza financeira." center>
        <div className="mb-8 grid md:grid-cols-2 gap-6">
          <PricingCard
            title="Oferta de Lançamento"
            price={PRODUCT.offerPrice}
            compareAtPrice={PRODUCT.price}
            features={["Planilha completa pronta para uso", "Guia de início rápido", "Garantia 7 dias"]}
            cta={{
              label: "Garantir a oferta",
              href: `${PRODUCT.checkout.offer}?utm_source=site&utm_medium=pricing_card&utm_campaign=launch_offer_v3`,
              value: PRODUCT.offerPrice,
              items: itemOffer,
              location: "pricing_offer",
              promotionName: "Oferta de Lançamento",
              promotionId: "launch_offer_v3",
              variant: "inverse",
              fullWidth: true,
            }}
            gradient
          />
          <PricingCard
            title="Preço Regular"
            price={PRODUCT.price}
            features={["Planilha completa pronta para uso", "Guia de início rápido"]}
            cta={{
              label: "Comprar agora",
              href: `${PRODUCT.checkout.full}?utm_source=site&utm_medium=pricing_card&utm_campaign=standard_checkout_v3`,
              value: PRODUCT.price,
              items: itemRegular,
              location: "pricing_regular",
              variant: "dark",
              fullWidth: true,
            }}
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="pb-16">
        <div className="rounded-3xl border bg-gradient-to-br from-sky-50 to-emerald-50 p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">Deixe o caixa sob controle</h3>
          <p className="mt-2 text-zinc-700">Leve a planilha hoje com oferta de lançamento.</p>
          <CTAButton
            label={`Garantir por R$ ${PRODUCT.offerPrice.toFixed(2)}`}
            href={`${PRODUCT.checkout.offer}?utm_source=site&utm_medium=final_cta&utm_campaign=launch_offer_v3`}
            value={PRODUCT.offerPrice}
            items={itemOffer}
            location="final_cta"
            promotionName="Oferta de Lançamento"
            promotionId="launch_offer_v3"
            className="mt-6"
          />
          <div className="mt-2 text-xs text-zinc-600">Sem mensalidade. Pagamento único.</div>
        </div>
      </Section>

      {/* Footer */}
      <Section className="pb-10">
        <div className="border-t pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-zinc-600">
          <div>© {new Date().getFullYear()} Planilha Financeira Fácil. Todos os direitos reservados.</div>
          <div className="flex gap-4">
            <a href="#recursos" className="underline">Recursos</a>
            <a href="#preco" className="underline">Preço</a>
            <a href="#faq" className="underline">FAQ</a>
          </div>
        </div>
      </Section>
    </main>
  );
}
