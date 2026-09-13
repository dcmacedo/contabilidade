# Plano de Testes A/B — Fase 4

## Infraestrutura

- Middleware `middleware.ts` atribui variantes A/B via cookie `ab_test_<experimento>` (50/50, duração 30 dias).
- O Server Component `app/page.tsx` lê o cookie e renderiza a variação correspondente (sem flash de conteúdo).
- `ExperimentView` dispara `experiment_view` no GA com `{ experiment_id, variant }`.
- Todos os links de checkout incluem `ab_variant=A|B` para atribuir conversão por variante no GA/checkout.

## Como ativar/desativar

- Adicionar o experimento em `lib/ab.ts` (seção `EXPERIMENTS`) e consumir a variante na página.
- Para encerrar um teste: remover o experimento do `EXPERIMENTS` e fixar a variante vencedora no conteúdo (manter no HTML).

## Teste 1 — Headline do Hero

- **ID:** `hero_headline`
- **Variante A:** "Chega de perder horas com planilhas complexas" (problema)
- **Variante B:** "Seu caixa sob controle em 10 minutos por dia" (resultado)
- **Métrica:** taxa de conversão da home (cliques no CTA / visitantes), medida via `ab_variant` no link de checkout + `experiment_view`.
- **Duração mínima:** 7 dias ou n ≥ 95% de confiança estatística.
- **Hipótese:** variação focada em resultado converte mais que a focada em problema.

## Teste 2 — Texto do CTA

- **ID:** `cta_color`
- **Variante A:** "Garantir por R$ 9,90" (preço explícito)
- **Variante B:** "Quero minha planilha agora" (ação + posse)
- **Métrica:** CTR do CTA principal e conversão.
- **Duração mínima:** 7 dias.

## Teste 3 — Oferta com/sem bônus (futuro)

- **Hipótese:** adicionar bônus verificável (ex.: mini-guia de MEI) próximo ao preço aumenta conversão.
- **Implementação:** quando definido, adicionar condicional no PricingCard + medir com `ab_variant`.

## Regras

- Um experimento por vez na página principal.
- Converter em `experiment_view` → eventos `begin_checkout` (CTA) → compra (checkout Kiwify/AdWords) para calcular conversão real por variante.
- Documentar resultado (conversão A vs B, intervalo de confiança) no próprio PR/issue antes de remover o teste.