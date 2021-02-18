import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { GTMPageView } from '../utils/gtm'
import '../assets/styles.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
