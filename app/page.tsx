import { DestinationCarousel } from '../components/DestinationCarousel'
import { FAQ } from '../components/FAQ'
import { Footer } from '../components/Footer'
import { Gallery } from '../components/Gallery'
import { Hero } from '../components/Hero'
import { PackagesSection } from '../components/PackagesSection'
import { StickyBooking } from '../components/StickyBooking'
import { Testimonials } from '../components/Testimonials'
import {
  destinations,
  faqs,
  gallery,
  heroSlides,
  packages,
  testimonials,
  whatsappUrl,
} from '../lib/travel-data'

export default function Home() {
  const bookingHref = whatsappUrl()

  return (
    <main className="overflow-x-hidden bg-[#F8F5EF] pb-20 md:pb-0">
      <Hero slides={heroSlides} whatsappHref={bookingHref} />
      <DestinationCarousel destinations={destinations} />
      <PackagesSection packages={packages} />
      <Gallery images={gallery} />
      <Testimonials testimonials={testimonials} />
      <FAQ faqs={faqs} />
      <Footer whatsappHref={bookingHref} />
      <StickyBooking whatsappHref={bookingHref} />
    </main>
  )
}
