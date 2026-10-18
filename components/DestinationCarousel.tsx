'use client'

import type { Destination } from '../lib/travel-data'
import { cn } from '../lib/cn'
import { DestinationCard } from './DestinationCard'
import { SectionHeading } from './SectionHeading'

type DestinationCarouselProps = {
  destinations: Destination[]
}

// Bento spans for a 4-column grid (desktop) and 2-column grid (mobile), keyed by destination title.
const spans: Record<string, string> = {
  Lombok: 'col-span-2 row-span-2',
  'Gili Trawangan': 'lg:row-span-2',
  'Pink Beach': 'col-span-2',
  'Mount Rinjani': 'lg:row-span-2',
  Sumbawa: 'col-span-2',
}

export function DestinationCarousel({ destinations }: DestinationCarouselProps) {
  return (
    <section id="destinations" className="bg-sand-50 px-4 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured destinations"
            title="The icons of"
            accent="West Nusa Tenggara"
            description="Nine places our hosts know by heart. Tap one to jump straight to the trips that go there."
            className="mb-0 sm:mb-0"
          />
          <p className="text-sm font-semibold text-ink-soft lg:pb-2">{destinations.length} destinations · 3 islands</p>
        </div>

        <div className="mt-8 grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-3 sm:mt-12 sm:auto-rows-[200px] sm:gap-4 lg:auto-rows-[230px] lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              destination={destination}
              index={index}
              featured={destination.title === 'Lombok'}
              className={cn(spans[destination.title])}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
