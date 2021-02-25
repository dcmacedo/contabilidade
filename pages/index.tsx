import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout/Layout'
import { enderecos } from '../utils/enderecos'

const IndexPage = () => (
  <Layout title="Contabilidade e Excel" subtitle=":) Bem Vindo!">
    <main className="content container-fluid">
      <div className="content_main">
        <h2 className="header_main">
          <strong>Escolha uma opção:</strong>
        </h2>
        <section className="planilhas">
          <Link href="/planilhas">
            <a>
              {' '}
              <FontAwesomeIcon icon="file-excel" width="1em" /> Planilhas
            </a>
          </Link>
        </section>
        <section className="dicas">
          <Link href="/dicas">
            <a>
              {' '}
              <FontAwesomeIcon icon="bolt" width="1em" /> Dicas e Truques
            </a>
          </Link>
        </section>
        <section className="cursos">
          <Link href="/cursos">
            <a>
              {' '}
              <FontAwesomeIcon icon="book-open" width="1em" /> Cursos
            </a>
          </Link>
        </section>
        <section className="videos">
          <Link href={enderecos.canal}>
            <a target="_blank">
              {' '}
              <FontAwesomeIcon icon="video" width="1em" /> Videos
            </a>
          </Link>
        </section>
      </div>
    </main>
  </Layout>
)

export default IndexPage
