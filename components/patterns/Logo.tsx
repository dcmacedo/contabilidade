import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-24 p-1">
      <Link href="/">
        <a>
          <Image src="/logo_size_480x80_invert.png" alt="Logo" width={480} height={80} />
        </a>
      </Link>
    </div>
  )
}

export default Logo
