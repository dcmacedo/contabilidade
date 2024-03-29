import React from 'react'
import NextHead from 'next/head'

type Props = {
  title?: string
}

const Head = ({ title = 'This is the default title' }: Props): JSX.Element => {
  return (
    <div>
      <NextHead>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="lxUj2h_hL2iwHOHKKqEGcTeMIGKj3_FE6WHpR25y3jQ" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </NextHead>
    </div>
  )
}

export default Head
