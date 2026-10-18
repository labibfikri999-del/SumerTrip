import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google'
import { SmoothScroll } from '../components/SmoothScroll'
import 'lenis/dist/lenis.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
})
const clash = localFont({
  src: [
    { path: './fonts/ClashDisplay-Medium.woff2', weight: '500' },
    { path: './fonts/ClashDisplay-Semibold.woff2', weight: '600' },
    { path: './fonts/ClashDisplay-Bold.woff2', weight: '700' },
  ],
  variable: '--font-clash',
})

export const metadata: Metadata = {
  title: 'SummerTrip NTB | Lombok, Gili, Sumbawa Travel Experiences',
  description:
    'Premium tour and travel experiences across Nusa Tenggara Barat: Lombok, Gili Islands, Mandalika, Rinjani, Sumbawa, snorkeling, island hopping, family trips, and rental car.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrument.variable} ${clash.variable}`}>
      <body className="bg-sand-50 font-sans text-ink antialiased selection:bg-sunset selection:text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
