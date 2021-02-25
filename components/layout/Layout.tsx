import React, { ReactNode } from 'react'
import Head from '../foundation/Head'
import Logo from '../patterns/Header/Logo'
import Nav from '../patterns/Header/Nav'
import Footer from '../patterns/Footer/Main'
import Header from '../patterns/Header/Main'

type Props = {
  children?: ReactNode
  title?: string
  subtitle?: string
}

const Layout = ({ children, title, subtitle }: Props) => (
  <div className="app">
    <Head title={title} />
    <Header title={title} subtitle={subtitle} />
    <Logo />
    <Nav />
    {children}
    <Footer />
  </div>
)

export default Layout
