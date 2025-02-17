import 'swiper/css'
import 'swiper/css/navigation';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Inter, Lato } from 'next/font/google'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} {...{ fonts: { inter, lato } }} />
}

export type LoadedFonts = {
  inter: NextFontWithVariable
  lato: NextFontWithVariable
}

export type PassedProps = {
  fonts: LoadedFonts
}
