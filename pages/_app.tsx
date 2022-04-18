import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: '100%'
      },
      body: {
        bgGradient: 'linear-gradient(0deg, #FF8295 51.22%, rgba(255, 182, 193, 0.5) 114.97%)',
      },
    },
  },
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
