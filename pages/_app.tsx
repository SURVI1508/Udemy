import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Main from './Main'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Main/>
    </>
  )
}
