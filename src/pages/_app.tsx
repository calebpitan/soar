import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import type { AppProps } from 'next/app'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { Inter, Lato } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/navigation'

import '@/styles/globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} {...{ fonts: { inter, lato } }} />
    </QueryClientProvider>
  )
}

export type LoadedFonts = {
  inter: NextFontWithVariable
  lato: NextFontWithVariable
}

export type PassedProps = {
  fonts: LoadedFonts
}
