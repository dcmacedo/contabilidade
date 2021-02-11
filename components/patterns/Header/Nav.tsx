import React from 'react'
import Link from 'next/link'

const Nav = (): JSX.Element => {
  return (
    <nav className="p-1 flex items-center justify-center">
      <Link href="/">
        <a className="m-1">Home</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="m-1">Cursos</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="m-1">Videos</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="m-1">Planilhas</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="m-1">Dicas e Truques</a>
      </Link>{' '}
      |{' '}
      <Link href="/about">
        <a className="m-1">Sobre</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="m-1">Contato</a>
      </Link>{' '}
    </nav>
  )
}

export default Nav
