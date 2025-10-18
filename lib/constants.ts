export const PRODUCT = {
    name: "Planilha de Fluxo de Caixa Avançado",
    tagline:
        "Clareza total do dinheiro que entra e sai, decida com segurança todo mês.",
    price: 29.9,
    offerPrice: 9.9,
    checkout: {
        full: "https://pay.kiwify.com.br/bteZeop",
        offer: "https://pay.kiwify.com.br/5zOJENA",
    },
    domain: "https://planilhafinanceirafacil.net.br",
} as const;


export const BADGES = [
    "Download imediato",
    "Pagamento Seguro Kiwify",
    "Sem mensalidade",
    "Suporte básico por e-mail",
] as const;


export const BENEFITS = [
    { title: "Controle em 10 minutos/dia", desc: "Rotina leve e objetiva para manter tudo em ordem." },
    { title: "Decisões com dados", desc: "Pare de adivinhar: tenha relatórios e KPIs claros." },
    { title: "Sem mensalidade", desc: "Pagamento único e uso ilimitado." },
] as const;


export const FEATURES = [
    { title: "Menu de Opções", key: "menu", desc: "Fluxo guiado para começar em minutos, sem travar.", image: "/MenuFluxoCaixa.jpg" },
    { title: "Lançamentos", key: "lancamentos", desc: "Registre entradas e saídas com validações simples.", image: "/Lancamentos.jpg" },
    { title: "Relatórios", key: "relatorios", desc: "Resumo por período, categorias e centros de custo.", image: "/Relatorio.jpg" },
    { title: "Dashboard", key: "dashboard", desc: "KPIs essenciais: saldo, receita, despesas, tendência.", image: "/Dashboard.jpg" },
    { title: "Gráficos", key: "graficos", desc: "Visual limpo das variações mês a mês.", image: "/Graficos.jpg" },
    { title: "Tabelas Auxiliares", key: "tabelas", desc: "Cadastros e consistência para análises confiáveis.", image: "/TabelasAuxiliares.jpg" },
] as const;


export const FUTURE = [
    { title: "Modo MEI", desc: "Apuração simplificada e visão do DAS (próximas versões)." },
    { title: "Alertas inteligentes", desc: "Notificações de risco de caixa e gastos fora da meta." },
    { title: "Projeções", desc: "Planeje o mês seguinte com base no histórico real." },
] as const;


export const TESTIMONIALS = [
    { n: "S.G.R.M.M", t: "MEI Serviços", d: "Em 2 dias já sabia onde cortar gastos. Salvou meu mês." },
    { n: "I.M.M", t: "Autônomo", d: "Relatórios simples. Parei de sofrer no fim do mês." },
    { n: "D.C.M", t: "Autônomo", d: "Nunca consegui manter controle, agora faço em 10 minutos." },
    { n: "Aline C.M.", t: "MEI", d: "Fiquei muito feliz em conseguir controlar meu caixa." },
    { n: "Luzia C.", t: "Pessoa Fisica", d: "Uso como meu orçamento familiar. Muito Bom!" },
    { n: "Manuel P.", t: "MEI Serviços", d: "Agora consigo saber quanto ganho no mês." },
] as const;