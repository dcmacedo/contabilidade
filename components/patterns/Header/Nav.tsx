import React from 'react'
import Link from 'next/link'

const enderecos = {
  viscari: 'https://www.viscari.com.br/power-bi-expert-5?ref=D46938188L',
  canal: 'https://www.youtube.com/channel/UCCpOwI4cOpGyP_OmWjo243g',
}

const Nav = (): JSX.Element => {
  return (
    <nav className="bg-green-900 text-gray-100 invisible md:visible box-border md:box-content flex justify-start md:justify-center sticky top-0">
      <div className="text-xs sm:text-sm md:text-base lg:text-lg flex flex-col md:flex-row">
        <Link href="/">
          <a className="p-1 mx-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 hover:text-black rounded-sm">
            Home
          </a>
        </Link>{' '}
        <Link href={enderecos.viscari}>
          <a
            className="p-1 mx-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 hover:text-black rounded-sm"
            target="_blank"
          >
            Cursos
          </a>
        </Link>{' '}
        <Link href={enderecos.canal}>
          <a
            className="p-1 mx-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 hover:text-black rounded-sm"
            target="_blank"
          >
            Videos
          </a>
        </Link>{' '}
        <Link href="/">
          <a className="p-1 mx-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 hover:text-black rounded-sm">
            Planilhas
          </a>
        </Link>{' '}
        <Link href="/">
          <a className="p-1 mx-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 hover:text-black rounded-sm">
            Dicas e Truques
          </a>
        </Link>{' '}
        <Link href="/about">
          <a className="p-1 mx-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 hover:text-black rounded-sm">
            Sobre
          </a>
        </Link>{' '}
        <Link href="/">
          <a className="p-1 mx-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 hover:text-black rounded-sm">
            Contato
          </a>
        </Link>{' '}
      </div>
    </nav>
  )
}

export default Nav
