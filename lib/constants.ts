export const PRODUCT = {
    name: "Planilha de Fluxo de Caixa Avançado",
    tagline:
        "Controle financeiro prático para MEI e autônomos: tenha clareza total do seu caixa em minutos, sem complicação.",
    hero: {
        badge: "Para MEI, Autônomos e Pequenos Negócios",
        title: "Chega de perder horas com planilhas complexas",
        subtitle: "A ferramenta definitiva para você ter clareza total do dinheiro que entra e sai, e decidir com segurança o futuro do seu negócio.",
    },
    price: 29.9,
    offerPrice: 9.9,
    checkout: {
        full: "https://pay.kiwify.com.br/bteZeop",
        offer: "https://pay.kiwify.com.br/5zOJENA",
    },
    domain: "https://pv.dcmacedo.com.br/",
} as {
    name: string;
    tagline: string;
    hero: { badge: string; title: string; subtitle: string };
    price: number;
    offerPrice: number;
    checkout: { full: string; offer: string };
    domain: string;
};


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

export const BRAND = {
    name: "Planilha Financeira Fácil",
    supportEmail: "contato@pv.dcmacedo.com.br", // ajuste se quiser
    whatsappE164: "5511998807892", // ex.: 55 11 91234-5678 -> "5511912345678"
    whatsappDefaultMsg:
        "Olá! Tenho uma dúvida sobre a Planilha de Fluxo de Caixa Avançado. Pode me ajudar?",
} as const;

export const FAQ = [
    {
        q: "Preciso pagar mensalidade?",
        a: "Não. O pagamento é único. Você compra a planilha uma vez e tem acesso vitalício à versão adquirida."
    },
    {
        q: "Como recebo a planilha?",
        a: "Assim que o pagamento for confirmado (imediato para Pix e Cartão), você recebe um e-mail da Kiwify com o link para download."
    },
    {
        q: "Funciona no Excel e no Google Sheets?",
        a: "Sim, ela foi desenvolvida para ser compatível com as versões recentes do Excel e também funciona perfeitamente ao ser importada no Google Sheets."
    },
    {
        q: "Tem suporte?",
        a: "Sim, oferecemos suporte básico por e-mail para dúvidas sobre a instalação e uso inicial da planilha."
    },
    {
        q: "E se eu não gostar?",
        a: "Você tem 7 dias de garantia incondicional. Se não for o que você esperava, devolvemos seu dinheiro via Kiwify."
    }
] as const;
