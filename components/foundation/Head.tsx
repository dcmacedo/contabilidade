import React from 'react'
import NextHead from 'next/head'

type Props = {
    title?: string
  }

const Head = ({title='This is the default title'}: Props):JSX.Element => {
    return (
        <div>
            <NextHead>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </NextHead>
        </div>
    )
}

export default Head