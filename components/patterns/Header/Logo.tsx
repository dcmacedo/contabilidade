import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = (): JSX.Element => {
  return (
    <aside className="logo">
      <Link href="/">
        <a>
          <Image src="/Logo_Verde_600x280.png" alt="Logo" layout="responsive" width={386} height={180} />
        </a>
      </Link>
    </aside>
  )
}

export default Logo
