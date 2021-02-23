import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

const enderecos = {
  viscari: 'https://www.viscari.com.br/power-bi-expert-5?ref=D46938188L',
  canal: 'https://www.youtube.com/channel/UCCpOwI4cOpGyP_OmWjo243g',
}

const IndexPage = () => (
  <Layout title="Contabilidade e Excel" subtitle=":) Bem Vindo!">
    <main className="content container-fluid">
      <div className="content_main">
        <h2 className="header_main">
          <strong>Escolha uma opção:</strong>
        </h2>
        <section className="planilhas">
          <Link href="/planilhas">
            <a>Planilhas</a>
          </Link>
        </section>
        <section className="dicas">
          <Link href="/dicas">
            <a>Dicas e Truques</a>
          </Link>
        </section>
        <section className="cursos">
          <Link href={enderecos.viscari}>
            <a target="_blank">Cursos</a>
          </Link>
        </section>
        <section className="videos">
          <Link href={enderecos.canal}>
            <a target="_blank">Videos</a>
          </Link>
        </section>
      </div>
    </main>
  </Layout>
)

export default IndexPage
