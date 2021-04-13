/* eslint-disable react/prop-types */
import '../styles/globals.css'
import { Fragment } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jeremy Fujimoto</title>
        <link rel="shortcut icon" href="/images/JF-logo.png" />
        <meta name="image" property="og:image" content="/images/homepage.png"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
