import { DestinationCarousel } from '../components/DestinationCarousel'
import { FAQ } from '../components/FAQ'
import { Footer } from '../components/Footer'
import { Gallery } from '../components/Gallery'
import { Hero } from '../components/Hero'
import { IslandRoute } from '../components/IslandRoute'
import { PackagesSection } from '../components/PackagesSection'
import { StickyBooking } from '../components/StickyBooking'
import { Testimonials } from '../components/Testimonials'
import { WhyUs } from '../components/WhyUs'
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
    <main className="overflow-x-clip bg-sand-50 pb-20 md:pb-0">
      <Hero slides={heroSlides} whatsappHref={bookingHref} />
      <DestinationCarousel destinations={destinations} />
      <IslandRoute />
      <PackagesSection packages={packages} />
      <WhyUs whatsappHref={bookingHref} />
      <Gallery images={gallery} />
      <Testimonials testimonials={testimonials} />
      <FAQ faqs={faqs} />
      <Footer whatsappHref={bookingHref} />
      <StickyBooking whatsappHref={bookingHref} />
    </main>
  )
}
