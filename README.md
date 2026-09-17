# Planilha Financeira Fácil

Landing page e fluxo de captura de leads para a Planilha de Fluxo de Caixa Avançado.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Zod
- Google Sheets
- Resend
- Cloudflare Turnstile

## Requisitos

- Node.js 22+
- npm

- **Variáveis de ambiente**
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - `NEXT_PUBLIC_ADS_ID`
  - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
  - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
  - `GOOGLE_SERVICE_ACCOUNT_KEY`
  - `GOOGLE_SHEETS_ID`
  - `GOOGLE_SHEETS_TAB`
  - `RESEND_API_KEY`
  - `RESEND_FROM`
  - `LEAD_NOTIFY_TO`
  - `LEAD_REPORT_TOKEN`


## Configuração local

1. Instale as dependências:

```bash
npm install
```

1. Crie um arquivo `.env.local` com as variáveis abaixo:

```bash
NEXT_PUBLIC_SITE_URL=https://pv.dcmacedo.com.br
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_ADS_ID=

GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_SERVICE_ACCOUNT_KEY=
GOOGLE_SHEETS_ID=
GOOGLE_SHEETS_TAB=Leads

RESEND_API_KEY=
RESEND_FROM=
LEAD_NOTIFY_TO=

# Lead report
LEAD_REPORT_TOKEN=

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

1. Rode o projeto:

```bash
npm run dev
```

A aplicação fica disponível em `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run test
```

## Fluxo de lead

- O formulário coleta nome, e-mail, WhatsApp, consentimento e UTMs.
- O endpoint `/api/leads` valida o payload com Zod.
- O consentimento precisa ser explicitamente `true`.
- Há honeypot e rate limit para reduzir abuso.
- Leads válidos são gravados no Google Sheets.
- Um e-mail de notificação pode ser enviado via Resend quando as variáveis estiverem configuradas.

- **Relatório de leads**
  - Endpoint `/api/leads/report?token=SEU_TOKEN` retorna métricas de leads (total, por dia/semana/mês, por origem/UTM, taxa de consentimento).
  - Endpoint `/api/leads/report` com método POST pode enviar um relatório semanal por e‑mail (usa `LEAD_REPORT_TOKEN`).
  - Configure o token de acesso e o token de relatório em `LEAD_REPORT_TOKEN` e `LEAD_NOTIFY_TO` respectivamente.
  - Consulte `STYLE_GUIDE.md` para padrões de design e acessibilidade.
  - Consulte `A_B_TESTES.md` para detalhes de experimentos A/B.

## Deploy

Recomendado em Vercel com variáveis de ambiente configuradas no painel do projeto.

- Verifique o domínio canônico em `NEXT_PUBLIC_SITE_URL`.
- Defina IDs de analytics (`NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_ADS_ID`).

- **Observações**
  - `NEXT_PUBLIC_*` são expostas ao cliente e devem ser usadas apenas para dados públicos.
  - Credenciais do Google e do Resend devem permanecer somente em ambiente server-side.
  - Para produção, configure também o domínio canônico e os IDs de analytics conforme o ambiente real.
