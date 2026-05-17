'use client'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Destination } from '../lib/travel-data'
import { DestinationCard } from './DestinationCard'
import { SectionHeading } from './SectionHeading'

type DestinationCarouselProps = {
  destinations: Destination[]
}

export function DestinationCarousel({ destinations }: DestinationCarouselProps) {
  return (
    <section id="destinations" className="bg-[#F8F5EF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured destinations"
          title="The icons of NTB"
          description="Lombok, Gili, Mandalika, Rinjani, Pink Beach, Sumbawa, and Moyo in one refined island collection."
        />

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1.08}
          breakpoints={{
            640: { slidesPerView: 1.65, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="ntb-swiper !pb-14"
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination.title}>
              <DestinationCard destination={destination} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
