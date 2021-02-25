import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const LayoutHeaderPages = ({ children }: Props) => <header>{children}</header>

export default LayoutHeaderPages
