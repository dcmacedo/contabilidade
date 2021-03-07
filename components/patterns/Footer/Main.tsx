import React from 'react'
import Link from 'next/link'

// import { enderecos } from '../../../utils/enderecos'

const Footer = (): JSX.Element => {
  const ano = new Date().getFullYear()
  return (
    <footer className="footer">
      <Link href="/">
        <a target="_blank">
          <span>
            Copyright © <span>{ano} </span>
          </span>
          Contabilidade e Excel
        </a>
      </Link>{' '}
      {/* <Link href={enderecos.github}>
        <a target="_blank"> Desenvolvido por Danilo C. Macedo</a>
      </Link> */}
    </footer>
  )
}

export default Footer
