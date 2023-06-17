import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Reset from "../styles/globalstyles"
import * as THEME from "../styles/tudn/index";


export default function App({ Component, pageProps }: AppProps) {
  const theme=THEME;
  return (
    <ThemeProvider theme={theme}>
      <Reset/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
