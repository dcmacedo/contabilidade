import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-green-900 w-screen">
        <Link href="/">
          <a>
            <Image src="/Logo_Verde_1340x280.png" alt="Logo" width={1340} height={200} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Logo
