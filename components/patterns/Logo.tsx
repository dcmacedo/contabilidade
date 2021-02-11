import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'
// import Logo from '../../assets/img/logo_size_480x80_invert.jpg'

const Logo = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-32 p-1">
      <Link href="/">
        <a>Logo</a>
        {/* <Image src="/assets/img/logo_size_480x80_invert.jpg" alt="Picture of the author" width={480} height={80} /> */}
      </Link>
    </div>
  )
}

export default Logo
