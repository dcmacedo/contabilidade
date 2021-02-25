import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const LayoutContentPages = ({ children }: Props) => <div>{children}</div>

export default LayoutContentPages
