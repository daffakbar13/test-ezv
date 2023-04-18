import { MuiProvider, ReactQueryProvider } from '@ezv/providers'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiProvider>
      <ReactQueryProvider>
        <Head>
          <title>EZV</title>
          <meta name="description" content="Powered by EZV" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ReactQueryProvider>
    </MuiProvider>
  )
}
