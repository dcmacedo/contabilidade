import React from 'react'
import Link from 'next/link'
import { enderecos } from '../../../utils/enderecos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = (): JSX.Element => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <div>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon="home" width="1em" /> Home
            </a>
          </Link>{' '}
          <Link href="/planilhas">
            <a>
              {' '}
              <FontAwesomeIcon icon="file-excel" width="1em" /> Planilhas
            </a>
          </Link>{' '}
          <Link href="/dicas">
            <a>
              {' '}
              <FontAwesomeIcon icon="bolt" width="1em" /> Dicas e Truques
            </a>
          </Link>{' '}
          <Link href="/cursos">
            <a>
              {' '}
              <FontAwesomeIcon icon="book-open" width="1em" /> Cursos
            </a>
          </Link>{' '}
          <Link href={enderecos.canal}>
            <a target="_blank">
              {' '}
              <FontAwesomeIcon icon="video" width="1em" /> Videos
            </a>
          </Link>{' '}
          <Link href="/about">
            <a>
              <FontAwesomeIcon icon="id-badge" width="1em" /> Sobre
            </a>
          </Link>{' '}
          <Link href="/contato">
            <a>
              {' '}
              <FontAwesomeIcon icon="headphones" width="1em" /> Contato
            </a>
          </Link>{' '}
        </div>
      </nav>
    </aside>
  )
}

export default Nav
