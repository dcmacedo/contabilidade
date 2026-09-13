"use client";

import { useState } from "react";

export function DashboardDemo() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section id="dashboard-demo" className="py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900">
            Veja a planilha em ação
          </h2>
          <p className="mt-3 text-lg text-zinc-600 max-w-2xl mx-auto">
            Uma prévia rápida do que você vai dominar com o Fluxo de Caixa Avançado.
          </p>
        </header>

        <div className="mx-auto max-w-4xl rounded-2xl border bg-zinc-900 p-1 shadow-xl">
          <div className="flex items-center justify-between rounded-t-xl bg-zinc-800 px-4 py-2">
            <div className="flex gap-2">
              {["dashboard", "relatorios", "lancamentos"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-lg px-4 py-1.5 text-sm font-medium transition ${
                    activeTab === tab
                      ? "bg-emerald-600 text-white"
                      : "text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  {tab === "dashboard" ? "Dashboard" : tab === "relatorios" ? "Relatórios" : "Lançamentos"}
                </button>
              ))}
            </div>
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
          </div>

          <div className="p-6 text-zinc-100">
            {activeTab === "dashboard" && (
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-xl bg-zinc-800 p-4">
                  <div className="text-xs text-zinc-400">Saldo Total</div>
                  <div className="mt-1 text-2xl font-extrabold text-emerald-400">R$ 12.450,00</div>
                  <div className="mt-1 text-xs text-emerald-500">↑ 12% mês anterior</div>
                </div>
                <div className="rounded-xl bg-zinc-800 p-4">
                  <div className="text-xs text-zinc-400">Receitas</div>
                  <div className="mt-1 text-2xl font-extrabold text-sky-400">R$ 18.200,00</div>
                  <div className="mt-1 text-xs text-sky-500">+3 clientes este mês</div>
                </div>
                <div className="rounded-xl bg-zinc-800 p-4">
                  <div className="text-xs text-zinc-400">Despesas</div>
                  <div className="mt-1 text-2xl font-extrabold text-red-400">R$ 5.750,00</div>
                  <div className="mt-1 text-xs text-red-500">↓ 8% vs meta</div>
                </div>
              </div>
            )}

            {activeTab === "relatorios" && (
              <div className="space-y-4">
                <div className="rounded-xl bg-zinc-800 p-4">
                  <div className="text-sm font-semibold text-zinc-200">Resumo Mensal — Setembro 2026</div>
                  <div className="mt-2 h-32 rounded-lg bg-zinc-700" />
                  <div className="mt-2 text-xs text-zinc-400">Gráfico de receita vs despesa</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-zinc-800 p-4">
                    <div className="text-xs text-zinc-400">Maior Receita</div>
                    <div className="mt-1 text-lg font-bold text-sky-400">Cliente A</div>
                  </div>
                  <div className="rounded-xl bg-zinc-800 p-4">
                    <div className="text-xs text-zinc-400">Maior Despesa</div>
                    <div className="mt-1 text-lg font-bold text-red-400">Aluguel</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "lancamentos" && (
              <div className="space-y-3">
                {[
                  { desc: "Venda - Cliente A", valor: "+R$ 4.500,00", cor: "text-emerald-400" },
                  { desc: "Aluguel", valor: "-R$ 1.500,00", cor: "text-red-400" },
                  { desc: "Frete - Entrega", valor: "-R$ 320,00", cor: "text-red-400" },
                  { desc: "PIX - Serviço", valor: "+R$ 2.800,00", cor: "text-emerald-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-zinc-800 px-4 py-3">
                    <div>
                      <div className="text-sm font-medium text-zinc-200">{item.desc}</div>
                      <div className="text-xs text-zinc-500">{i === 0 ? "Hoje" : "Ontem"}</div>
                    </div>
                    <div className={`font-bold ${item.cor}`}>{item.valor}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
