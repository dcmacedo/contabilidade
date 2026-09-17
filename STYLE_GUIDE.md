# Guia de Estilos

## Cores e Tema
Integrado via Tailwind CSS v4 `@theme`:
- **Primária:** `var(--color-primary)` (#2563eb)
- **Secundária:** `var(--color-secondary)` (#64748b)
- **Fundo:** `var(--background)`
- **Texto:** `var(--foreground)`

## Tipografia
- **Sans:** `var(--font-geist-sans)`
- **Mono:** `var(--font-geist-mono)`
- **Display:** `var(--font-montserrat)`

## Estados e Acessibilidade (WCAG AA)
- **Focus:** `focus-visible` com anel de 2px e offset.
- **Transições:** Padronizadas em 150ms (`var(--state-transition)`).
- **Skip Link:** Disponível para navegação por teclado (`#main-content`).

## Imagens
- **Componente:** `PictureImg` (usa `next/image`).
- **Formato:** Otimização automática (WebP) pelo Next.js.
- **Acessibilidade:** Todas as imagens com `alt` descritivo obrigatório.
- **Performance:** `priority` para Hero, `lazy loading` para demais.
