'use client'

import { useEffect } from 'react'
import type { TravelPackage } from '../lib/travel-data'
import { PackageCard } from './PackageCard'
import { SectionHeading } from './SectionHeading'

type PackagesSectionProps = {
  packages: TravelPackage[]
}

export function PackagesSection({ packages }: PackagesSectionProps) {
  // On mobile the cards sit in a horizontal scroller, so bring the linked card into view sideways too.
  useEffect(() => {
    const reveal = () => {
      if (!window.location.hash.startsWith('#package-')) return
      document.querySelector(window.location.hash)?.scrollIntoView({ inline: 'center', block: 'nearest' })
    }
    reveal()
    window.addEventListener('hashchange', reveal)
    return () => window.removeEventListener('hashchange', reveal)
  }, [])

  return (
    <section id="packages" className="bg-sand-50 py-12 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Travel packages"
          title="Signature trips,"
          accent="ready to book"
          description="Private, flexible, and locally guided. Every package shows what is included, with the final price confirmed on WhatsApp."
          className="px-4 sm:px-0"
        />

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-6 [&::-webkit-scrollbar]:hidden">
          {packages.map((item, index) => (
            <div key={item.slug} className="w-[84%] shrink-0 snap-center sm:w-auto">
              <PackageCard item={item} index={index} />
            </div>
          ))}
        </div>
        <p className="mt-2 px-4 text-center text-xs font-semibold text-ink-soft sm:hidden">Swipe to see all {packages.length} trips →</p>
      </div>
    </section>
  )
}
