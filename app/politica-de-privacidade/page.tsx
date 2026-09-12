import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade",
  description: "Como a Planilha Financeira Fácil trata os dados enviados pelo site.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-12 text-zinc-900">
      <article className="mx-auto max-w-3xl rounded-2xl border bg-white p-6 shadow-sm md:p-10">
        <h1 className="text-3xl font-bold">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-zinc-600">Última atualização: 25 de agosto de 2026</p>

        <section className="mt-8 space-y-4 text-zinc-700">
          <h2 className="text-xl font-semibold text-zinc-900">Dados coletados</h2>
          <p>Podemos coletar nome, e-mail, telefone, origem de acesso e dados de campanha quando você envia o formulário do site.</p>

          <h2 className="text-xl font-semibold text-zinc-900">Finalidade</h2>
          <p>Usamos esses dados para responder solicitações, enviar materiais autorizados e melhorar a comunicação sobre nossos produtos.</p>

          <h2 className="text-xl font-semibold text-zinc-900">Armazenamento e compartilhamento</h2>
          <p>Os dados podem ser armazenados em ferramentas operacionais de terceiros, como Google Sheets e Resend, usadas para organizar leads e enviar comunicações.</p>

          <h2 className="text-xl font-semibold text-zinc-900">Seus direitos</h2>
          <p>Você pode solicitar acesso, correção ou exclusão dos seus dados pelo e-mail suporte@pv.dcmacedo.com.br.</p>
        </section>

        <Link href="/" className="mt-8 inline-block underline">Voltar para a página inicial</Link>
      </article>
    </main>
  );
}