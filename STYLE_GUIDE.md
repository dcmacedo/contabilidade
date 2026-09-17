# Guia de Estilos

## Cores
Tokens definidos em `globals.css` usando variáveis CSS:
- **Background:** `--color-background`
- **Foreground (Texto):** `--color-foreground`
- **Primária:** `--color-primary` (e variantes `-hover`, `-active`, `-disabled`)
- **Secundária:** `--color-secondary` (e variantes `-hover`, `-active`)
- **Estados:** `--color-success`, `--color-warning`, `--color-error`, `--color-info`
- **Borda:** `--color-border`

## Tipografia
- **Fontes:** 
  - Sans: `--font-sans` (Geist Sans)
  - Mono: `--font-mono` (Geist Mono)
  - Display: `--font-display` (Montserrat)
- **Tamanhos:** `--font-size-xs` (12px) até `--font-size-5xl` (48px)
- **Pesos:** Light (300) até Bold (700)

## Espaçamento
Baseado em grid de 8px:
- `--space-1`: 4px
- `--space-2`: 8px
- `--space-3`: 12px
- `--space-4`: 16px
- ... até `--space-16`: 64px

## Estados e Acessibilidade (WCAG AA)
- **Hover:** Mudança de cor e borda suave.
- **Focus:** Anel de foco visível via `box-shadow` (sem depender apenas de cor).
- **Disabled:** Opacidade reduzida e cursor `not-allowed`.
- **Transições:** Padronizadas em 150ms.

## Uso no Tailwind
As variáveis estão mapeadas no `tailwind.config.js`. Exemplo: `text-primary`, `bg-background`, `p-4` (usa `--space-4`).

## Imagens e Acessibilidade
- Todas as imagens devem ter atributo `alt` descritivo
- Imagens informativas: `alt` deve descrever o conteúdo (ex: "Menu de Opções - Preview da funcionalidade")
- Imagens decorativas: `alt=""`
- O componente `FeatureCard` aceita `altText` opcional para personalização

## Otimização de Imagens
- Todas as imagens são servidas em WebP quando disponível (ganho > 55% de compressão)
- Uso do componente `PictureImg` com `<picture>` para fallback JPG/PNG
- Imagens abaixo da dobra possuem `loading="lazy"`
- Imagens acima da dobra possuem `fetchPriority="high"`
- Dimensões explícitas (`width`/`height`) definidas para evitar layout shift
