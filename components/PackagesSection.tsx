'use client'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { TravelPackage } from '../lib/travel-data'
import { PackageCard } from './PackageCard'
import { SectionHeading } from './SectionHeading'

type PackagesSectionProps = {
  packages: TravelPackage[]
}

export function PackagesSection({ packages }: PackagesSectionProps) {
  return (
    <section id="packages" className="bg-white px-4 py-12 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Travel packages"
          title="Signature trips, ready to book"
          description="Private, flexible, and locally guided packages with clear pricing and direct WhatsApp confirmation."
        />

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={14}
          slidesPerView={1.02}
          breakpoints={{
            720: { slidesPerView: 2, spaceBetween: 20 },
            1180: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="ntb-swiper !overflow-visible !pb-12 sm:!overflow-hidden sm:!pb-14"
        >
          {packages.map((item) => (
            <SwiperSlide key={item.title} className="!h-auto">
              <PackageCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
