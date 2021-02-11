import React from 'react'
import Link from 'next/link'

const Nav = (): JSX.Element => {
  return (
    <nav className="p-1 flex items-center justify-center shadow-lg">
      <Link href="/">
        <a className="p-1 mx-5 hover:bg-blue-200 rounded-md">Home</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="p-1 mx-5 hover:bg-blue-200 rounded-md">Cursos</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="p-1 mx-5 hover:bg-blue-200 rounded-md">Videos</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="p-1 mx-5 hover:bg-blue-200 rounded-md">Planilhas</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="p-1 mx-5 hover:bg-blue-200 rounded-md">Dicas e Truques</a>
      </Link>{' '}
      |{' '}
      <Link href="/about">
        <a className="p-1 mx-5 hover:bg-blue-200 rounded-md">Sobre</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="p-1 mx-5 hover:bg-blue-200 rounded-md">Contato</a>
      </Link>{' '}
    </nav>
  )
}

export default Nav
