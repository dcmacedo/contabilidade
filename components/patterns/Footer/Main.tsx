import Link from 'next/link'
import React from 'react'

const Footer = (): JSX.Element => {
  return (
    <footer className="flex justify-center bottom-0 p-1 text-green-900 font-semibold">
      <Link href="https://github.com/dcmacedo">
        <a className="text-xs sm:text-sm bottom-0 p-2" target="_blank">
          Desenvolvido por Danilo C. Macedo
        </a>
      </Link>
    </footer>
  )
}

export default Footer
