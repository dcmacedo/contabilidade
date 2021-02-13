import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="Sobre | Contabilidade e Excel">
    <div className="container mx-auto flex items-center justify-center ml-1">
      <div className="box-content h-auto w-auto p-4 border-0 rounded-2xl shadow-lg">
        <p className="align-middle text-center text-2xl font-sans font-semibold">
          Você vai aprender <strong>Excel</strong> na prática <br />
          sem complicações
        </p>
        <p className="align-middle text-center text-sm font-sans font-semibold">
          <br />
          Nós ajudamos você a construir <br /> planilhas memoráveis
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
