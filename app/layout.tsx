import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

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
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#F8F5EF] text-[#092A37] antialiased selection:bg-[#F4A261] selection:text-[#071D25]">
        {children}
      </body>
    </html>
  )
}
