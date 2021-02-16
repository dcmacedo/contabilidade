import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = (): JSX.Element => {
  return (
    <header className="box-border p-2 sm:box-content flex justify-center bg-green-900">
      <Link href="/">
        <a>
          <Image src="/Logo_Verde_600x280.png" alt="Logo" width={386} height={180} />
        </a>
      </Link>
    </header>
  )
}

export default Logo
