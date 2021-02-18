import Link from 'next/link'
import React from 'react'

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <Link href="https://github.com/dcmacedo">
        <a target="_blank">Desenvolvido por Danilo C. Macedo</a>
      </Link>
    </footer>
  )
}

export default Footer
