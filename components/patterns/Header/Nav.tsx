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
          <Link href="/about">
            <a>Sobre</a>
          </Link>{' '}
          <Link href="/">
            <a>Contato</a>
          </Link>{' '}
        </div>
      </nav>
    </aside>
  )
}

export default Nav
