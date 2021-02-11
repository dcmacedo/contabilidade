import Link from 'next/link'
import React from 'react'

const Footer = (): JSX.Element => {
  return (
    <footer className="flex items-center justify-end p-1 bg-green-900 text-gray-50 fixed bottom-0 w-screen">
      <Link href="https://github.com/dcmacedo">
        <a className="px-6 text-sm" target="_blank">
          Desenvolvido por Danilo C. Macedo
        </a>
      </Link>
    </footer>
  )
}

export default Footer
