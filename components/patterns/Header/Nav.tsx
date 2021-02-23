import React from 'react'
import Link from 'next/link'

const Nav = (): JSX.Element => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          <Link href="/planilhas">
            <a>Planilhas</a>
          </Link>{' '}
          <Link href="/dicas">
            <a>Dicas e Truques</a>
          </Link>{' '}
          <Link href="/">
            <a>Cursos</a>
          </Link>{' '}
          <Link href="/">
            <a>Videos</a>
          </Link>{' '}
          <Link href="/about">
            <a>Sobre</a>
          </Link>{' '}
          <Link href="/contato">
            <a>Contato</a>
          </Link>{' '}
        </div>
      </nav>
    </aside>
  )
}

export default Nav
