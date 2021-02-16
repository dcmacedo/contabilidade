import React, { ReactNode } from 'react'
import Head from './foundation/Head'
import Logo from './patterns/Header/Logo'
import Nav from './patterns/Header/Nav'
import Footer from './patterns/Footer/Main'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div>
    <Head title={title} />
    <Logo />
    <Nav />
    {children}
    <Footer />
  </div>
)

export default Layout
