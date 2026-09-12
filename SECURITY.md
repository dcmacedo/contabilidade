# Política de Segurança de Dependências

## Visão Geral

Este projeto possui uma pipeline de segurança contínua que valida dependências npm em cada PR para garantir que vulnerabilidades críticas não sejam introduzidas.

## Regras

- **Audit-Dependências**: Executa `npm audit` em cada push e PR
- **Nível de Risco**: Prioriza vulnerabilities "moderate" ou superior
- **Ação**: Bloqueia merge se vulnerabilidades forem encontradas

## Checklist da Equipe

### Antes de Commit
- [ ] Verificar que `npm audit --omit=dev` retorna 0 vulnerabilities
- [ ] Garantir que todas dependências estão atualizáveis (-B opção)
- [ ] Avaliar impacto de `npm audit fix` nas branches principais

### Em Caso de Vulnerabilidade

1. Acessar [Dependabot alerts](https://github.com/dcmacedo/contabilidade/security/dependabot)
2. Verificar escopo: produção vs desenvolvimento
3. Tentar `npm audit fix` em branch de desenvolvimento apenas
4. Testar build/lint antes de commitar package-lock.json
5. Merged fix para branch `main` com commit dedicado

## Exemplos de Cenários

### Cenário 1: Transitive Dev-Dep Vulnerability

**Situação**: `js-yaml` (via eslint-config-next) vs `js-yaml` (dev) com vulnerabilidade alta em versão <4.3.2

**Decisão**:
- Bloquear if: `npm audit` sem `--omit=dev` detecta vulnerabilidade
- Se aceitável: Atualizar package-lock via `npm audit fix` e revert package.json se não aplicável

### Cenário 2: Runtime Vulnerability

**Situação**: `qs` (via googleapis-common) com vulnerabilidade leve/moderate

**Decisão**:
- Nunca bloquear if usa --omit=dev em auditoria
- Em produção: Correção obrigatória após avaliação

### Cenário 3: Dependência Muito Antiga

**Situação**: Versão sem patches em main, adicione dependência estável sem regressão (`latest` + range `^`)

**Decisão**:
1. Provar compatibilidade sem breaking changes
2. Atualizar version_range no package.json
3. Documentation de dependency rationale

## Mídia-Term

| Arquivo | Propósito | Frequência |
|---------|-----------|------------|
| `security.yml` | GitHub Actions pipeline | Commit |
| `SECURITY.md` | Documentação e decisiones | Semanal |
| Dependabot alerts | Notify about PRs | Automático |

## Configuração da Principal Branch

main: Auditando com `npm audit --omit=dev`
develop: Auditando com `npm audit --omit=dev`

---