# Diagnóstico e Plano de Modernização

## 1. Objetivo

Modernizar a landing page da Planilha Financeira Fácil para aumentar confiança e conversão, reduzir riscos de segurança e LGPD, melhorar a manutenibilidade do código e estabelecer uma rotina confiável de evolução.

## 2. Estado atual
- `npm run lint`: passou sem avisos ou erros.
- `npm run build`: passou; a home foi pré-renderizada como rota estática.
- Carga inicial informada pelo build: aproximadamente `114 kB`.
- [x] Atualizar dependências vulneráveis dentro da linha compatível atual.
- [x] Alinhar `next`, `eslint-config-next` e demais pacotes relacionados.
- [x] Iniciar o campo de consentimento como `false`.
- [x] Validar `consent === true` no schema da API.
- [x] Adicionar link para política de privacidade e finalidade da coleta.
- [x] Escapar ou sanitizar todos os valores usados no HTML do Resend.
- [x] Adicionar rate limiting por IP ou por janela de tempo.
- [x] Definir limite de tamanho do corpo da requisição.
- [x] Remover PII dos logs de produção ou aplicar mascaramento.
- [x] Diferenciar resposta de sucesso, falha temporária e falha permanente do Google Sheets.
- [x] Validar variáveis de ambiente no início da execução ou durante o build.
- [x] Centralizar validação do payload da API em módulo dedicado.
- [x] Extrair o countdown para um componente isolado.
- [x] Mover URLs e IDs de analytics para variáveis públicas e validadas por ambiente.
- [x] Atualizar README com setup, variáveis de ambiente e instruções de uso.

> O rate limiting atual usa memória local do processo. Antes de escalar para múltiplas instâncias ou funções serverless, substituir por um armazenamento compartilhado, como Redis/Upstash.

### Status executivo em 2026-09-11

- Fase 1: concluída na base de segurança e LGPD.
- Fase 2: concluída na estrutura básica de arquitetura e organização do código.
- Fase 3: planejada e detalhada abaixo.
## 3. Principais achados

### 3.1 Riscos críticos e de alta prioridade

#### Dependências vulneráveis

A auditoria encontrou vulnerabilidades em dependências de produção, incluindo `next`, `sharp`, `postcss`, `jws`, `qs` e `resend`. O relatório local indica atualização disponível para `next@15.5.24`.

#### Endpoint público sem proteção contra abuso

#### Falhas de persistência tratadas como sucesso

Quando o Google Sheets falha, a exceção é registrada, mas a API continua respondendo `{ ok: true }`.

**Impacto:** o usuário recebe confirmação mesmo quando o lead não foi salvo.

#### HTML de e-mail montado com dados não escapados

Dados recebidos do formulário são interpolados diretamente no HTML enviado pelo Resend.

**Impacto:** conteúdo HTML controlado pelo usuário dentro do e-mail administrativo e possibilidade de abuso do canal.

### 3.2 Arquitetura e manutenção

#### Página inteira como Client Component

`app/page.tsx` contém a diretiva `"use client"`, embora grande parte do conteúdo seja estático. Countdown, SEO estruturado, composição de seções e conteúdo ficam concentrados no mesmo módulo.

**Impacto:** maior acoplamento, menor clareza de responsabilidades e menor aproveitamento do modelo Server Components do Next.js.

#### Lint desatualizado

O script usa `next lint`, que está deprecated nas versões recentes do Next.js.

#### Documentação insuficiente

O `README.md` ainda é o template padrão do Next.js e não documenta ambiente, integrações, deploy, analytics ou testes do formulário.

### 3.3 SEO e aquisição

- `metadataBase` e URLs Open Graph usam `contabilidade.vercel.app`, enquanto o produto declara o domínio `planilhafinanceirafacil.net.br`.
- Não há `sitemap.xml` nem `robots.txt` explícitos.
- O rodapé aponta para `#faq`, mas não há seção FAQ correspondente.
- Não há política de privacidade acessível na página.
- IDs de Analytics e Ads estão hardcoded no código.
- Analytics e Ads carregam sem mecanismo de consentimento.

### 3.4 Experiência, acessibilidade e conversão

A landing page tem boa base de componentes e imagens reais do produto, mas pode evoluir em:

- Clareza da proposta para MEI e pequenos negócios.
- Prova visual do produto, com demonstração mais detalhada ou interativa.
- FAQ e tratamento de objeções.
- CTA persistente e ergonomia em telas pequenas.
- Hierarquia visual e diferenciação dos blocos.
- Redução do uso repetitivo de gradientes, bordas arredondadas e cards.
- Mensagens de erro e sucesso anunciadas com `aria-live`.
- Uso de ícones e estados de foco mais consistentes.
- Depoimentos mais verificáveis e específicos.
- Revisão do countdown local, que cria uma urgência diferente para cada visitante e reinicia após expirar.

## 4. Plano de ação

### Fase 1 — Segurança, confiabilidade e LGPD

**Prioridade:** P0  
**Objetivo:** eliminar riscos que podem causar perda de leads, abuso do endpoint ou não conformidade.

### Tarefas

- [x] Atualizar dependências vulneráveis dentro da linha compatível atual.
- [x] Alinhar `next`, `eslint-config-next` e demais pacotes relacionados.
- [x] Iniciar o campo de consentimento como `false`.
- [x] Validar `consent === true` no schema da API.
- [x] Adicionar link para política de privacidade e finalidade da coleta.
- [x] Definir retenção e acesso aos dados armazenados no Google Sheets.
- [x] Escapar ou sanitizar todos os valores usados no HTML do Resend.
- [x] Adicionar rate limiting por IP ou por janela de tempo.
- [x] Definir limite de tamanho do corpo da requisição.
- [x] Avaliar CAPTCHA ou proteção equivalente contra automação.
- [x] Remover PII dos logs de produção ou aplicar mascaramento.
- [x] Diferenciar resposta de sucesso, falha temporária e falha permanente do Google Sheets.
- [x] Validar variáveis de ambiente no início da execução ou durante o build.

> O rate limiting atual usa memória local do processo. Antes de escalar para múltiplas instâncias ou funções serverless, substituir por um armazenamento compartilhado, como Redis/Upstash.

### Critérios de aceite

- Nenhum lead sem consentimento explícito é persistido.
- Falha no armazenamento não gera confirmação falsa ao usuário.
- Dados enviados por usuários não alteram a estrutura do e-mail administrativo.
- Requisições abusivas são limitadas e monitoráveis.
- `npm audit --omit=dev` não possui vulnerabilidade alta sem decisão documentada.

### Fase 2 — Arquitetura e qualidade de código

**Prioridade:** P1  
**Objetivo:** reduzir acoplamento e tornar o projeto mais fácil de evoluir.

### Tarefas
- [x] Transformar `app/page.tsx` em Server Component em parte do conteúdo estático.
- [x] Extrair o countdown para um componente client isolado.
- [x] Manter analytics e navegação de checkout em componentes client específicos.
- [x] Separar conteúdo, configuração de produto e composição visual.
- [x] Criar um módulo de configuração de ambiente tipado e validado.
- [x] Migrar `next lint` para o fluxo oficial do ESLint CLI.
- [x] Adicionar testes unitários para validação do payload da API.
- [x] Adicionar testes de integração para sucesso, erro de persistência e honeypot.
- [x] Adicionar teste do fluxo de formulário no navegador.
- [x] Documentar setup local e deploy no README.

### Critérios de aceite

- Conteúdo estático da landing page não depende de Client Component.
- API possui testes para os cenários principais.
- O comando de lint não emite aviso de depreciação.
- Um novo desenvolvedor consegue configurar o projeto seguindo apenas a documentação.

### Fase 3 — SEO, aquisição e medição

**Prioridade:** P1  
**Objetivo:** garantir que o tráfego seja corretamente indexado e que o funil seja mensurável.

### Plano executivo

#### 3.1 Meta
Aumentar visibilidade orgânica, remover ruídos de rastreamento e garantir que cada etapa do funil seja rastreada de forma consistente, respeitando consentimento do visitante.

#### 3.2 Tarefas
- [x] Definir o domínio canônico de produção e usá-lo em todos os metadados.
- [x] Corrigir canonical, Open Graph, Twitter Cards e URLs do JSON-LD.
- [x] Criar `sitemap.xml` e `robots.txt` com regras de indexação adequadas.
- [x] Cria la seção FAQ real e adicionar dados estruturados quando aplicável.
- [x] Criar página ou seção de política de privacidade.
- [x] Mover IDs de Analytics e Ads para variáveis de ambiente públicas.
- [x] Implementar consent mode e bloqueio de marketing antes do consentimento.
- [x] Padronizar eventos do funil: visualização, clique no CTA, checkout iniciado, lead enviado e compra concluída.
- [x] Persistir UTMs de forma consistente durante a jornada.
- [x] Criar um painel ou rotina de conferência de leads e conversões.
- [x] Validar URLs de compartilhamento social e imagem Open Graph em produção.

#### 3.3 Sequência sugerida
1. Ajustar domínio e metadados canônicos.
2. Criar `robots.txt` e `sitemap.xml`.
3. Implementar FAQ e dados estruturados relevantes.
4. Padronizar eventos e UTMs.
5. Ativar consent mode e verificar bloqueio de marketing.
6. Criar rotina de conferência de leads e conversões.

#### 3.4 Critérios de aceite
- Compartilhamento social mostra o domínio e a imagem corretos.
- O funil consegue distinguir origem, campanha, CTA e resultado.
- Analytics e Ads respeitam a decisão de consentimento do visitante.
- A página possui FAQ e links legais funcionais.
- Leads e conversões podem ser conferidos com rastreio consistente.

#### 3.5 Riscos e atenção
- O consentimento precisa ser validado antes do carregamento de scripts de marketing.
- UTMs devem ser persistidas durante a jornada sem perder contexto entre páginas e cliques.
- O domínio canônico precisa estar alinhado com o domínio de produção para evitar duplicidade de indexação.

### Fase 4 — Produto e conversão

**Prioridade:** P1  
**Objetivo:** aumentar compreensão, confiança e taxa de checkout.

### Tarefas

- [x] Reescrever o hero para comunicar público, problema e resultado em poucos segundos.
- [ ] Destacar benefícios específicos para MEI, autônomo e pequeno negócio.
- [ ] Adicionar demonstração mais rica do dashboard e do fluxo de uso.
- [ ] Organizar provas sociais com nome ou contexto verificável, quando autorizado.
- [ ] Adicionar FAQ sobre compatibilidade, instalação, suporte, garantia e reembolso.
- [ ] Tornar garantia, pagamento único e entrega imediata mais visíveis.
- [ ] Criar CTA persistente em mobile sem bloquear o conteúdo.
- [ ] Testar variações de headline, oferta e CTA com eventos de conversão.
- [ ] Revisar o countdown e substituir urgência artificial por uma oferta com regra real e verificável.

### Critérios de aceite

- O visitante identifica claramente para quem o produto é indicado.
- As principais objeções de compra têm resposta visível.
- O fluxo de checkout funciona em mobile e desktop.
- Os testes A/B medem conversão, não apenas cliques.

### Fase 5 — Sistema visual e acessibilidade

**Prioridade:** P2  
**Objetivo:** dar identidade própria à página e melhorar a experiência para todos os usuários.

### Tarefas

- [ ] Definir tokens de cor, tipografia, espaçamento e estados em `globals.css`.
- [ ] Usar de forma consistente as fontes já carregadas pelo layout.
- [ ] Reduzir repetição de gradientes e cards arredondados.
- [ ] Melhorar contraste, foco visível e estados de interação.
- [ ] Adicionar `aria-live` para estados de envio do formulário.
- [ ] Associar mensagens de erro aos campos com `aria-describedby`.
- [ ] Revisar textos alternativos das imagens.
- [ ] Validar a página com Lighthouse, axe e testes em viewport mobile.
- [ ] Otimizar imagens em formatos modernos quando o ganho for comprovado.

### Critérios de aceite

- Nenhum conteúdo ou controle se sobrepõe em mobile.
- Navegação por teclado é possível em todo o fluxo.
- Mensagens do formulário são anunciadas por tecnologias assistivas.
- A página mantém identidade visual consistente sem depender apenas de gradientes.

## 5. Ordem de execução sugerida

1. Corrigir dependências vulneráveis e alinhar versões.
2. Corrigir consentimento, política de privacidade e proteção da API.
3. Corrigir o tratamento de falhas do Google Sheets e sanitização de e-mail.
4. Ajustar domínio, SEO e Analytics com consentimento.
5. Dividir a página em Server Component e componentes client menores.
6. Adicionar testes automatizados e atualizar a documentação.
7. Melhorar hero, FAQ, prova social e CTA mobile.
8. Consolidar o sistema visual e executar auditorias de acessibilidade.

## 6. Definition of Done

A modernização pode ser considerada concluída quando:

- [ ] Build e lint passam sem warnings relevantes.
- [ ] Não há vulnerabilidades altas não avaliadas.
- [ ] Consentimento LGPD é explícito, validado e documentado.
- [ ] A API possui proteção contra abuso e testes de erro.
- [ ] Falhas de persistência não são apresentadas como sucesso.
- [ ] Domínio, SEO, sitemap e política de privacidade estão corretos.
- [ ] Eventos do funil são confiáveis e respeitam consentimento.
- [ ] A landing page funciona bem em mobile, desktop e teclado.
- [ ] README documenta instalação, ambiente, integrações, testes e deploy.
- [ ] Mudanças de conversão são avaliadas por métricas reais.

## 7. Comandos de validação

```bash
npm run lint
npm run build
npm audit --omit=dev
npm outdated
```

Para mudanças de interface, complementar com Lighthouse, axe e testes manuais em pelo menos uma viewport mobile e uma desktop.
