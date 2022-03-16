import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="..." />
        <link rel="preconnect" href="https://fonts.googleapis.com/%22/%3E"/>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,700&family=Sunflower:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}