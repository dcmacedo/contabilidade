import Image from 'next/image'
import Link from 'next/link'
import { enderecos } from '../../../utils/enderecos'

type Props = {
  title?: string
  subtitle?: string
}

const Header = ({ title, subtitle }: Props): JSX.Element => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
      <nav className="social_links">
        <Link href={enderecos.canal}>
          <a className="youtube" target="_blank">
            <Image src="/youtube.png" alt="YouTube" width={25} height={25} />
          </a>
        </Link>{' '}
        <Link href={enderecos.facebook}>
          <a className="facebook" target="_blank">
            <Image src="/facebook.png" alt="Facebook" width={25} height={25} />
          </a>
        </Link>{' '}
        <Link href={enderecos.instagram}>
          <a className="instagram" target="_blank">
            <Image src="/instagram.png" alt="Instagram" width={25} height={25} />
          </a>
        </Link>{' '}
        <Link href={enderecos.twitter}>
          <a className="twitter" target="_blank">
            <Image src="/twitter.png" alt="Twitter" width={25} height={25} />
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
