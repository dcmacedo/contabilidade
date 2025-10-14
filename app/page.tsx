"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { trackAndGo } from "@/lib/ga";

// V3 — Página de vendas com GA4 (pageview + eventos), next/image e SEO JSON-LD

export default function Page() {
  // ===== Countdown for launch offer (local per visitor) =====
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

  // ===== Data =====
  const product = {
    name: "Planilha de Fluxo de Caixa Avançado",
    tagline: "Clareza total do dinheiro que entra e sai, decida com segurança todo mês.",
    price: 29.9,
    offerPrice: 9.9,
    checkout: {
      full: "https://pay.kiwify.com.br/bteZeop",
      offer: "https://pay.kiwify.com.br/5zOJENA",
    },
    domain: "https://planilhafinanceirafacil.net.br",
  };

  const features = [
    { title: "Menu de Opções", desc: "Fluxo guiado para começar em minutos, sem travar." },
    { title: "Lançamentos", desc: "Registre entradas e saídas com validações simples." },
    { title: "Relatórios", desc: "Resumo por período, categorias e centros de custo." },
    { title: "Dashboard", desc: "KPIs essenciais: saldo, receita, despesas, tendência." },
    { title: "Gráficos", desc: "Visual limpo das variações mês a mês." },
    { title: "Tabelas Auxiliares", desc: "Cadastros e consistência para análises confiáveis." },
  ];

  const future = [
    { title: "Modo MEI", desc: "Apuração simplificada e visão do DAS (próximas versões)." },
    { title: "Alertas inteligentes", desc: "Notificações de risco de caixa e gastos fora da meta." },
    { title: "Projeções", desc: "Planeje o mês seguinte com base no histórico real." },
  ];

  const faqs = [
    {
      q: "Funciona para MEI e pequenos negócios?",
      a: "Sim. Já atende MEI e autônomos, e as próximas versões terão recursos exclusivos para MEI.",
    },
    {
      q: "Como recebo o arquivo?",
      a: "Após a compra no checkout seguro da Kiwify, o download é liberado imediatamente.",
    },
    {
      q: "Tem garantia?",
      a: "Sim, garantia incondicional de 7 dias: não gostou, basta solicitar o reembolso.",
    },
    {
      q: "Preciso saber contabilidade?",
      a: "Não. A planilha é didática e possui instruções dentro das abas.",
    },
  ];

  const benefits = [
    { title: "Controle em 10 minutos/dia", desc: "Rotina leve e objetiva para manter tudo em ordem." },
    { title: "Decisões com dados", desc: "Pare de adivinhar: tenha relatórios e KPIs claros." },
    { title: "Sem mensalidade", desc: "Pagamento único e uso ilimitado." },
  ];

  const badges = ["Download imediato", "Pagamento Seguro Kiwify", "Sem mensalidade", "Suporte básico por e-mail"];

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-zinc-900">
      {/* JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.tagline,
            brand: "Planilha Financeira Fácil",
            offers: {
              "@type": "Offer",
              priceCurrency: "BRL",
              price: product.offerPrice,
              url: product.checkout.offer,
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* Top Bar / Offer */}
      <div className="w-full bg-gradient-to-r from-emerald-600 to-sky-600 text-white text-center text-sm py-2">
        Oferta de lançamento: de R$ {product.price.toFixed(2)} por <span className="font-semibold">R$ {product.offerPrice.toFixed(2)}</span> — expira em <span className="font-mono">{timeLeft}</span>
      </div>

      {/* Hero */}
      <section className="px-5 md:px-8 lg:px-12 max-w-6xl mx-auto py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm">
              <span>🧮</span>
              <span>Controle de caixa para o dia a dia</span>
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-zinc-700">
              {product.tagline}
            </p>
            <ul className="mt-6 space-y-2 text-zinc-700">
              <li className="flex gap-3"><span>✔️</span><span>Comece com um passo a passo simples sem curva de aprendizado.</span></li>
              <li className="flex gap-3"><span>✔️</span><span>Veja onde está o dinheiro, quais gastos pesam e como agir.</span></li>
              <li className="flex gap-3"><span>✔️</span><span>Dashboard e gráficos claros para decidir com confiança.</span></li>
            </ul>
            <div className="mt-8 flex flex-wrap items-end gap-4">
              {/* CTA HERO - begin_checkout */}
              <button
                type="button"
                onClick={() =>
                  trackAndGo(
                    `${product.checkout.offer}?utm_source=site&utm_medium=hero_btn&utm_campaign=launch_offer_v3`,
                    "begin_checkout",
                    {
                      currency: "BRL",
                      value: product.offerPrice,
                      items: [
                        { item_id: "pfc_avancado", item_name: product.name, quantity: 1, price: product.offerPrice },
                      ],
                      promotion_name: "Oferta de Lançamento",
                      promotion_id: "launch_offer_v3",
                      location: "hero",
                    }
                  )
                }
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-lg bg-gradient-to-r from-emerald-600 to-sky-600 text-white hover:opacity-90 transition"
              >
                Garantir por R$ {product.offerPrice.toFixed(2)}
              </button>
              <div className="text-sm text-zinc-600">
                <div className="line-through">R$ {product.price.toFixed(2)}</div>
                <div className="font-semibold">Oferta por tempo limitado</div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {badges.map((b) => (
                <span key={b} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-800">{b}</span>
              ))}
            </div>
            {/* <p className="mt-3 text-xs text-zinc-500">Domínio oficial: <a className="underline" href={product.domain}>{product.domain}</a></p> */}
          </div>

          {/* Visual Card with real images (next/image) */}
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
      </section>

      {/* Benefits */}
      <section className="px-5 md:px-8 lg:px-12 max-w-6xl mx-auto py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border p-6 bg-white/70 backdrop-blur">
              <div className="text-xl font-extrabold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">{b.title}</div>
              <div className="mt-2 text-sm text-zinc-700">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="recursos" className="px-5 md:px-8 lg:px-12 max-w-6xl mx-auto py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold">Dentro da planilha</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border p-6 bg-white hover:shadow-sm transition">
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-zinc-600">{f.desc}</p>
              {/* Inline preview chips */}
              {f.title === "Dashboard" && (
                <Image src="/Dashboard.jpg" alt="Preview Dashboard" className="mt-4 w-full rounded-xl border" width={1200} height={800} />
              )}
              {f.title === "Menu de Opções" && (
                <Image src="/MenuFluxoCaixa.jpg" alt="Preview Menu" className="mt-4 w-full rounded-xl border" width={1200} height={800} />
              )}
              {f.title === "Gráficos" && (
                <Image src="/Graficos.jpg" alt="Preview Gráficos" className="mt-4 w-full rounded-xl border" width={1200} height={800} />
              )}
              {f.title === "Lançamentos" && (
                <Image src="/Lancamentos.jpg" alt="Preview Lançamentos" className="mt-4 w-full rounded-xl border" width={1200} height={800} />
              )}
              {f.title === "Relatórios" && (
                <Image src="/Relatorio.jpg" alt="Preview Relatórios" className="mt-4 w-full rounded-xl border" width={1200} height={800} />
              )}
              {f.title === "Tabelas Auxiliares" && (
                <Image src="/TabelasAuxiliares.jpg" alt="Preview Tabelas Auxiliares" className="mt-4 w-full rounded-xl border" width={1200} height={800} />
              )}              
            </div>
          ))}
        </div>
      </section>

      {/* Future for MEI */}
      <section className="px-5 md:px-8 lg:px-12 max-w-6xl mx-auto py-12">
        <div className="rounded-3xl border bg-gradient-to-br from-white to-emerald-50 p-8">
          <h3 className="text-xl md:text-2xl font-extrabold">Próximas versões: Foco em MEI</h3>
          <p className="mt-2 text-zinc-700">Compre agora e receba atualizações da linha base. Recursos pensados para a rotina do MEI.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {future.map((f) => (
              <div key={f.title} className="rounded-2xl border bg-white p-6">
                <div className="font-semibold">{f.title}</div>
                <p className="mt-2 text-zinc-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 md:px-8 lg:px-12 max-w-6xl mx-auto py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">Quem já usou aprovou</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { n: "S.G.R.M.M", t: "MEI Serviços", d: "Em 2 dias já sabia onde cortar gastos. Salvou meu mês." },
            { n: "I.M.M", t: "Autônomo", d: "Relatórios simples. Parei de sofrer no fim do mês." },
            { n: "D.C.M", t: "Autônomo", d: "Nunca consegui manter controle, agora faço em 10 minutos." },
            { n: "A.C.A", t: "MEI", d: "Fiquei muito feliz em conseguir controlar meu caixa." },
            { n: "L.C", t: "Pessoa Fisica", d: "Uso como meu orçamento familiar. Muito Bom!" },
            { n: "M.P", t: "MEI Serviços", d: "Agora consigo saber quanto ganho no mês." },
          ].map((c) => (
            <div key={c.n} className="rounded-2xl border bg-white p-6">
              <div className="text-sm text-zinc-600">{c.t}</div>
              <div className="mt-2 text-zinc-800">“{c.d}”</div>
              <div className="mt-3 text-sm font-semibold">{c.n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Risk Reversal / Guarantee */}
      <section className="px-5 md:px-8 lg:px-12 max-w-6xl mx-auto py-12">
        <div className="rounded-3xl border bg-white p-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-xl md:text-2xl font-extrabold">Garantia incondicional de 7 dias</h3>
            <p className="mt-2 text-zinc-700">Teste sem risco. Se não for para você, peça reembolso em até 7 dias.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">Compra segura</span>
              <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-800">Suporte básico</span>
              <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-800">Atualizações da base</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            {/* CTA GARANTIA - begin_checkout */}
            <button
              type="button"
              onClick={() =>
                trackAndGo(
                  `${product.checkout.offer}?utm_source=site&utm_medium=guarantee_btn&utm_campaign=launch_offer_v3`,
                  "begin_checkout",
                  {
                    currency: "BRL",
                    value: product.offerPrice,
                    items: [
                      { item_id: "pfc_avancado", item_name: product.name, quantity: 1, price: product.offerPrice },
                    ],
                    promotion_name: "Oferta de Lançamento",
                    promotion_id: "launch_offer_v3",
                    location: "guarantee",
                  }
                )
              }
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-lg bg-gradient-to-r from-emerald-600 to-sky-600 text-white hover:opacity-90 transition"
            >
              Começar agora
            </button>
            <div className="mt-2 text-xs text-zinc-500">Expira em {timeLeft}</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preco" className="px-5 md:px-8 lg:px-12 max-w-6xl mx-auto py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">Escolha sua opção</h2>
        <p className="mt-2 text-center text-zinc-600">Leve agora e desbloqueie clareza financeira.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Launch Offer */}
          <div className="rounded-3xl border p-6 md:p-8 bg-gradient-to-br from-emerald-600 to-sky-600 text-white">
            <div className="text-sm uppercase tracking-widest opacity-90">Oferta de Lançamento</div>
            <div className="mt-2 text-3xl font-extrabold">R$ {product.offerPrice.toFixed(2)}</div>
            <div className="text-sm line-through opacity-90">De R$ {product.price.toFixed(2)}</div>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex gap-3"><span>✓</span><span>Planilha completa pronta para uso</span></li>
              <li className="flex gap-3"><span>✓</span><span>Guia de início rápido</span></li>
              <li className="flex gap-3"><span>✓</span><span>Garantia 7 dias</span></li>
            </ul>
            {/* CTA OFERTA - begin_checkout */}
            <button
              type="button"
              onClick={() =>
                trackAndGo(
                  `${product.checkout.offer}?utm_source=site&utm_medium=pricing_card&utm_campaign=launch_offer_v3`,
                  "begin_checkout",
                  {
                    currency: "BRL",
                    value: product.offerPrice,
                    items: [
                      { item_id: "pfc_avancado", item_name: product.name, quantity: 1, price: product.offerPrice },
                    ],
                    promotion_name: "Oferta de Lançamento",
                    promotion_id: "launch_offer_v3",
                    location: "pricing_offer",
                  }
                )
              }
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-lg bg-white text-emerald-700 hover:opacity-90 transition"
            >
              Garantir a oferta
            </button>
            <div className="mt-2 text-xs opacity-90">Expira em {timeLeft}</div>
          </div>

          {/* Regular */}
          <div className="rounded-3xl border p-6 md:p-8 bg-white">
            <div className="text-sm uppercase tracking-widest text-zinc-500">Preço Regular</div>
            <div className="mt-2 text-3xl font-extrabold">R$ {product.price.toFixed(2)}</div>
            <br/>
            <ul className="mt-6 space-y-2 text-sm text-zinc-700">
              <li className="flex gap-3"><span>✓</span><span>Planilha completa pronta para uso</span></li>
              <li className="flex gap-3"><span>✓</span><span>Guia de início rápido</span></li>
              <li className="flex gap-3"><span></span><span></span></li>
              <li className="flex gap-3"><span></span><span></span></li>
              <li className="flex gap-3"><span></span><span></span></li>
            </ul>
            {/* CTA REGULAR - begin_checkout */}
            <button
              type="button"
              onClick={() =>
                trackAndGo(
                  `${product.checkout.full}?utm_source=site&utm_medium=pricing_card&utm_campaign=standard_checkout_v3`,
                  "begin_checkout",
                  {
                    currency: "BRL",
                    value: product.price,
                    items: [
                      { item_id: "pfc_avancado", item_name: product.name, quantity: 1, price: product.price },
                    ],
                    location: "pricing_regular",
                  }
                )
              }
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-lg bg-zinc-900 text-white hover:opacity-90 transition"
            >
              Comprar agora
            </button>
            <div className="mt-2 text-xs text-zinc-500">Checkout seguro Kiwify</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 md:px-8 lg:px-12 max-w-6xl mx-auto py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold">Perguntas frequentes</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border p-6 bg-white">
              <div className="font-semibold">{f.q}</div>
              <p className="mt-2 text-zinc-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 md:px-8 lg:px-12 max-w-6xl mx-auto pb-16">
        <div className="rounded-3xl border bg-gradient-to-br from-sky-50 to-emerald-50 p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">Deixe o caixa sob controle</h3>
          <p className="mt-2 text-zinc-700">Leve a planilha hoje com oferta de lançamento.</p>
          {/* CTA FINAL - begin_checkout */}
          <button
            type="button"
            onClick={() =>
              trackAndGo(
                `${product.checkout.offer}?utm_source=site&utm_medium=final_cta&utm_campaign=launch_offer_v3`,
                "begin_checkout",
                {
                  currency: "BRL",
                  value: product.offerPrice,
                  items: [
                    { item_id: "pfc_avancado", item_name: product.name, quantity: 1, price: product.offerPrice },
                  ],
                  promotion_name: "Oferta de Lançamento",
                  promotion_id: "launch_offer_v3",
                  location: "final_cta",
                }
              )
            }
            className="mt-6 inline-flex items-center justify-center rounded-2xl px-8 py-3 text-base font-semibold shadow-lg bg-gradient-to-r from-emerald-600 to-sky-600 text-white hover:opacity-90 transition"
          >
            Garantir por R$ {product.offerPrice.toFixed(2)}
          </button>
          <div className="mt-2 text-xs text-zinc-600">Sem mensalidade. Pagamento único.</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-8 lg:px-12 max-w-6xl mx-auto pb-10 text-xs text-zinc-600">
        <div className="border-t pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Planilha Financeira Fácil. Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
            <a href="#recursos" className="underline">Recursos</a>
            <a href="#preco" className="underline">Preço</a>
            <a href="#faq" className="underline">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
