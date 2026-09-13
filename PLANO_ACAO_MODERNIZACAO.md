# Plano de Ação - Implementações Pendentes da Modernização

Baseado no arquivo `MODERNIZACAO.md`, os seguintes itens ainda não foram implementados. Este plano organiza as tarefas por fase, sugere uma ordem lógica de execução e define critérios de verificação.

## Visão Geral das Pendências

| Fase | Item | Status |
|------|------|--------|
| **Fase 1** | Avaliar CAPTCHA ou proteção equivalente contra automação | ✅ Concluído |
| **Fase 3** | Criar um painel ou rotina de conferência de leads e conversões | ✅ Concluído |
| **Fase 3** | Validar URLs de compartilhamento social e imagem Open Graph em produção | ❌ Pendente |
| **Fase 4** | Reescrever o hero para comunicar público, problema e resultado em poucos segundos | ✅ Concluído |
| **Fase 4** | Destacar benefícios específicos para MEI, autônomo e pequeno negócio | ✅ Concluído |
| **Fase 4** | Adicionar demonstração mais rica do dashboard e do fluxo de uso | ✅ Concluído |
| **Fase 4** | Organizar provas sociais com nome ou contexto verificável | ✅ Concluído |
| **Fase 4** | Adicionar FAQ sobre compatibilidade, instalação, suporte, garantia e reembolso | ✅ Concluído |
| **Fase 4** | Tornar garantia, pagamento único e entrega imediata mais visíveis | ✅ Concluído |
| **Fase 4** | Criar CTA persistente em mobile sem bloquear o conteúdo | ❌ Pendente |
| **Fase 4** | Testar variações de headline, oferta e CTA com eventos de conversão | ❌ Pendente |
| **Fase 4** | Revisar o countdown e substituir urgência artificial por uma oferta com regra real | ❌ Pendente |
| **Fase 5** | Definir tokens de cor, tipografia, espaçamento e estados em `globals.css` | ❌ Pendente |
| **Fase 5** | Usar de forma consistente as fontes já carregadas pelo layout | ❌ Pendente |
| **Fase 5** | Reduzir repetição de gradientes e cards arredondados | ❌ Pendente |
| **Fase 5** | Melhorar contraste, foco visível e estados de interação | ❌ Pendente |
| **Fase 5** | Adicionar `aria-live` para estados de envio do formulário | ❌ Pendente |
| **Fase 5** | Associar mensagens de erro aos campos com `aria-describedby` | ❌ Pendente |
| **Fase 5** | Revisar textos alternativos das imagens | ❌ Pendente |
| **Fase 5** | Validar a página com Lighthouse, axe e testes em viewport mobile | ❌ Pendente |
| **Fase 5** | Otimizar imagens em formatos modernos quando o ganho for comprovado | ❌ Pendente |

---

## Plano de Ação Detalhado

### Princípio Orientador
Seguir a **Ordem de Execução Sugerida** do documento (itens 246-253), ajustando para focar apenas nos itens pendentes.

### Fase 1 — Segurança, confiabilidade e LGPD
**Item pendente:** Avaliar CAPTCHA ou proteção equivalente contra automação

**Plano de ação:**
1. **Pesquisa (1-2 dias):** Avaliar soluções (reCAPTCHA v3, hCaptcha, Cloudflare Turnstile, técnicas comportamentais), considerar impacto na UX e taxa de falsos positivos, revisar eficácia do honeypot atual.
2. **Decisão (0.5 dia):** Definir critérios (eficácia >95%, impacto na conversão <2%, conformidade LGPD), documentar justificativa.
3. **Implementação (se aprovado, 1-3 dias):** Integrar solução no fluxo de submissão, adicionar métricas de bloqueio, atualizar documentação.

**Critério de conclusão:** Decisão documentada em `MODERNIZACAO.md` ou issue vinculada com plano de implementação.

---

### Fase 3 — SEO, aquisição e medição
**Itens pendentes:** 
- Criar um painel ou rotina de conferência de leads e conversões
- Validar URLs de compartilhamento social e imagem Open Graph em produção

**A. Painel de Conferência de Leads (2-3 dias):**
1. **Definição de métricas (0.5 dia):** Leads por dia/semana, taxa de conversão, custo por lead por fonte, UTMs performance, performance do honeypot/rate limit.
2. **Implementação (1-2 dias):** Script que extrai dados do Google Sheets semanalmente e envia relatório por email, ou integração com Metabase/Power BI/Google Data Studio, automatização via GitHub Actions/Vercel Cron Jobs.
3. **Rotina (contínua):** Revisão semanal pela equipe de marketing/produto.

**B. Validação de URLs Sociais (1-2 dias + contínuo):**
1. **Padronização (0.5 dia):** Definir template padrão para Open Graph, estabelecer regras para URLs canonicas.
2. **Automatização (0.5-1 dia):** Step no CI/CD validando tags meta, teste em staging antes do deploy, ferramentas como og-image para geração dinâmica.
3. **Monitoramento contínuo:** Verificações semanais (Facebook Sharing Debugger, Twitter Card Validator), alertas para quedas de tráfego social.

**Critério de conclusão:** Painel ativo e revisado há pelo menos duas semanas; validação integrada ao pipeline com 100% sucesso em últimos 5 deploys.

---

### Fase 4 — Produto e conversão
**Itens pendentes:** 9 itens relacionados a conteúdo, prova social, confiança e otimização

**1. Workshops de Alinhamento (1 dia):** Definir mensagens-chave por segmento, elementos de prova social disponíveis, FAQ reais do suporte, hipóteses para testes A/B.

**2. Implementação de Conteúdo e Prova Social (3-5 dias):**
- **Hero (0.5-1 dia):** Reescrever com foco em público (MEI/autônomos/pequenos negócios), problema (planilhas manuais), resultado (clareza financeira em minutos).
- **Benefícios específicos (1 dia):** Seção com ícones + texto curto para cada segmento.
- **Demonstração do produto (1-2 dias):** Vídeo curto (60-90s) ou demonstração interativa com dados de exemplo.
- **Provas sociais (0.5-1 dia):** Reorganizar depoimentos com nome, foto, contexto específico; adicionar selos de parceiros.
- **FAQ detalhado (1 dia):** Organizado por categoria com accordion para mobile.
- **Elementos de confiança (0.5 dia):** Destacar garantia 30 dias, pagamento único, acesso imediato próximos ao CTA.

**3. Otimização de Conversão e Testes (2-3 dias + contínuo):**
- **CTA mobile persistente (0.5 dia):** Footer fixo em mobile (<768px) com link direto para checkout.
- **Revisão do countdown (0.5 dia):** Substituir por oferta real com regras verificáveis (preço promocional até data/bônus limitado).
- **Testes A/B (contínuo):** 2-3 testes iniciais (hero, oferta com/sem bônus, texto CTA), medir conversão real via GA, mínimo 7 dias ou significância estatística.

**Critério de conclusão:** Mudanças em staging, pelo menos um teste A/B concluído com resultado documentado, melhoria na taxa de conversão (+5% sobre baseline).

---

### Fase 5 — Sistema visual e acessibilidade
**Itens pendentes:** 9 itens relacionados a design system, acessibilidade e refinamento visual

**1. Fundação do Design System (1-2 dias):**
- **Tokens em `globals.css` (1 dia):** Cores, tipografia, espaçamento (grid 8px), estados.
- **Diretrizes de uso:** Documentar em `STYLE_GUIDE.md`, treinar equipe.

**2. Melhorias de Acessibilidade (2-3 dias):**
- **Contraste (0.5 dia):** Verificar combinações com axe/Lighthouse, ajustar para WCAG AA (4.5:1 texto normal, 3:1 grande).
- **Foco visível (0.5 dia):** Outline visível em todos elementos interativos, usar `focus-visible`.
- **ARIA live (0.5 dia):** `aria-live="polite"` no container de mensagens do formulário.
- **Associação de erro (0.5 dia):** `aria-describedby` no campo apontando para mensagem de erro.
- **Textos alternativos (0.5 dia):** Revisar todas tags `<img>`, descritivo para informativas, vazio para decorativas.

**3. Refinamento Visual e Performance (1-2 dias):**
- **Reduzir repetição (0.5 dia):** Auditar gradientes/bordas, aplicar apenas em elementos-chave, consistência de border-radius.
- **Otimização de imagens (0.5-1 dia):** Converter para WebP (>25% ganho), `<picture>` com fallbacks, lazy loading, definir dimensões.
- **Consistência de fontes (0.25 dia):** Verificar uso apenas das fontes declaradas no layout.

**4. Validação Final (0.5-1 dia contínuo):**
- Lighthouse CI/manual: Performance >90, Acessibilidade >90, Best Practices >90, SEO >90.
- Testar navegação por teclado em todos fluxos.
- Validar em 3 viewports: 320px, 768px, 1440px.

**Critério de conclusão:** Lighthouse acessibilidade ≥90 em produção, zero erros contraste WCAG AA, navegação teclado 100% funcional, documentação de tokens atualizada.

---

## Cronograma Sugerido (4-6 semanas)

| Semana | Foco Principal | Atividades-Chave |
|--------|----------------|------------------|
| **1** | Fundação e Alinhamento | Workshop de alinhamento, definição tokens design, pesquisa CAPTCHA |
| **2** | Implementação de Conteúdo | Reescrita hero/benefícios, demonstração produto, reorganização provas sociais |
| **3** | Confiança e Otimização Mobile | FAQ detalhado, destaque garantia/pagamento único, CTA mobile persistente |
| **4** | Testes e Refinamento | Revisão countdown com oferta real, início testes A/B, melhorias contraste/foco |
| **5** | Acessibilidade e Validação | ARIA live, associação erro, textos alternativos, otimização imagens, validação Lighthouse |
| **6** | Monitoramento e Relatório | Painel leads MVP, validação URLs sociais no pipeline, relatório testes A/B |

---

## Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Testes A/B inconclusivos (baixo tráfego) | Médio | Alto | Aumentar duração, focar variações com hipóteses fortes, usar bayesian statistics |
| Retrabalho por falta alinhamento copy/design/dev | Médio | Médio | Workshop inicial, revisões design em estágios iniciais, guia de estilo antes da implementação |
| Sobrecarga equipe com muitas mudanças simultâneas | Alto | Médio | Limitar WIP, Kanban com limite de tarefas, priorizar ICE (Impact, Confidence, Ease) |
| CAPTCHA afetando negativamente conversão | Baixo | Alto | Testar em % tráfego primeiro, métricas claras pré/pós, rollback rápido |

---

## Próximos Passos Imediatos

1. Revisão deste plano com partes interessadas (produto, design, marketing, dev)
2. Definição de OKRs trimestrais vinculados (ex: +20% taxa conversão leads)
3. Criação de projeto no sistema de gestão (Jira, Trello, etc.) com épicos, histórias, estimativas
4. Setup de ambiente de teste A/B se não existir
5. Agendamento do workshop de alinhamento (Semana 1)