import React, { ReactNode } from 'react'
import Head from './foundation/Head'
import Footer from './patterns/Footer'
import Header from './patterns/Header/Main'
import Logo from './patterns/Logo'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div className="bg-gradient-to-r from-green-100 via-white to-green-100">
    <Head title={title} />
    <Logo />
    <header className="sticky top-0">
      <Header />
    </header>
    {children}
    <Footer />
  </div>
)

export default Layout
