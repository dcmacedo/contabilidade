import React from 'react'
import Link from 'next/link'

const Nav = (): JSX.Element => {
  return (
    <nav className="p-1 flex items-center justify-center shadow-lg">
      <Link href="/">
        <a className="p-1 mx-5 hover:bg-blue-200 hover:text-black rounded-sm">Home</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="p-1 mx-5 hover:bg-blue-200 hover:text-black rounded-sm">Cursos</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="p-1 mx-5 hover:bg-blue-200 hover:text-black rounded-sm">Videos</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="p-1 mx-5 hover:bg-blue-200 hover:text-black rounded-sm">Planilhas</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="p-1 mx-5 hover:bg-blue-200 hover:text-black rounded-sm">Dicas e Truques</a>
      </Link>{' '}
      |{' '}
      <Link href="/about">
        <a className="p-1 mx-5 hover:bg-blue-200 hover:text-black rounded-sm">Sobre</a>
      </Link>{' '}
      |{' '}
      <Link href="/">
        <a className="p-1 mx-5 hover:bg-blue-200 hover:text-black rounded-sm">Contato</a>
      </Link>{' '}
    </nav>
  )
}

export default Nav
