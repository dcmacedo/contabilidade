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


export const SEGMENT_BENEFITS = {
    mei: {
        label: "MEI",
        icon: "🏷️",
        color: "from-emerald-500 to-teal-600",
        benefits: [
            { title: "Apuração do DAS simplificada", desc: "Cálculo automático do documento de arrecadação mensal." },
            { title: "Enquadramento e limites", desc: "Acompanhe faturamento vs. teto do MEI em tempo real." },
            { title: "Notas e recibos organizados", desc: "Emissão e controle de documentos fiscais sem dor de cabeça." },
        ],
    },
    autonomo: {
        label: "Autônomo",
        icon: "💼",
        color: "from-sky-500 to-blue-600",
        benefits: [
            { title: "Recebíveis variáveis", desc: "Controle de pagamentos parcelados, Pix e boletos com datas diferentes." },
            { title: "Gastos por cliente/projeto", desc: "Saiba exatamente quanto cada trabalho custa e rende." },
            { title: "Reserva para impostos", desc: "Provisão automática de IR e ISS para não ser surpreendido." },
        ],
    },
    pequenoNegocio: {
        label: "Pequeno Negócio",
        icon: "🏢",
        color: "from-violet-500 to-purple-600",
        benefits: [
            { title: "Fluxo multi-conta", desc: "Gerencie contas bancárias, caixas e cartões em um só lugar." },
            { title: "Centros de custo e projeção", desc: "Planeje o mês seguinte com base no histórico real." },
            { title: "Relatórios para sócios/contador", desc: "Exporte demonstrativos prontos para reunião e contabilidade." },
        ],
    },
} as const;


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
    { n: "S.G.R.M.M", t: "MEI Serviços, São Paulo/SP", d: "Em 2 dias já sabia onde cortar gastos. Salvou meu mês.", context: "Uso da planilha: 3 meses · verificado por e-mail em março/2026", initial: "S" },
    { n: "I.M.M", t: "Autônomo · Consultoria, BH/MG", d: "Relatórios simples. Parei de sofrer no fim do mês.", context: "Uso da planilha: 5 meses · compra confirmada em jan/2026", initial: "I" },
    { n: "D.C.M", t: "Autônomo · Freelancer, Rio de Janeiro/RJ", d: "Nunca consegui manter controle, agora faço em 10 minutos.", context: "Uso da planilha: 2 meses · verificado por e-mail em fev/2026", initial: "D" },
    { n: "Aline C.M.", t: "MEI · Comércio, Curitiba/PR", d: "Fiquei muito feliz em conseguir controlar meu caixa.", context: "Uso da planilha: 4 meses · compra confirmada em dez/2025", initial: "A" },
    { n: "Luzia C.", t: "Orçamento pessoal, João Pessoa/PB", d: "Uso como meu orçamento familiar. Muito Bom!", context: "Uso da planilha: 6 meses · verificado por e-mail em nov/2025", initial: "L" },
    { n: "Manuel P.", t: "MEI · Serviços, Recife/PE", d: "Agora consigo saber quanto ganho no mês.", context: "Uso da planilha: 3 meses · compra confirmada em jan/2026", initial: "M" },
] as const;


export const PARTNER_SEALS = [
    "✔ Compatível com Excel",
    "✔ Recursos para MEI",
    "✔ Indicada por contadores",
    "✔ Conteúdo educativo",
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
        category: "Compatibilidade",
        items: [
            {
                q: "Funciona no Excel e no Google Sheets?",
                a: "Sim, ela foi desenvolvida para ser compatível com as versões recentes do Excel e também funciona perfeitamente ao ser importada no Google Sheets.",
            },
            {
                q: "Qual sistema operacional preciso?",
                a: "Funciona no Windows, macOS e Linux. Também pode ser acessado pelo Google Sheets em qualquer dispositivo com navegador.",
            },
        ],
    },
    {
        category: "Instalação",
        items: [
            {
                q: "Como recebo a planilha?",
                a: "Assim que o pagamento for confirmado (imediato para Pix e Cartão), você recebe um e-mail da Kiwify com o link para download.",
            },
            {
                q: "Preciso instalar algo?",
                a: "Não. O download é direto do Kiwify. Basta abrir o arquivo no Excel ou Google Sheets e começar.",
            },
        ],
    },
    {
        category: "Suporte",
        items: [
            {
                q: "Tem suporte?",
                a: "Sim, oferecemos suporte básico por e-mail para dúvidas sobre a instalação e uso inicial da planilha.",
            },
            {
                q: "Como entro em contato?",
                a: "Envie um e-mail para contato@pv.dcmacedo.com.br ou use o WhatsApp disponível na página de contato.",
            },
        ],
    },
    {
        category: "Garantia e Reembolso",
        items: [
            {
                q: "E se eu não gostar?",
                a: "Você tem 7 dias de garantia incondicional. Se não for o que você esperava, devolvemos seu dinheiro via Kiwify.",
            },
            {
                q: "Como solicito o reembolso?",
                a: "Entre em contato com o suporte em até 7 dias após a compra. O processo é simples e feito diretamente pela Kiwify.",
            },
            {
                q: "A garantia cobre o que?",
                a: "A garantia de 7 dias cobre a compatibilidade e funcionamento básico da planilha conforme descrito na página.",
            },
        ],
    },
] as const;
