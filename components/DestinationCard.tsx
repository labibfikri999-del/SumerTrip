'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import type { Destination } from '../lib/travel-data'

type DestinationCardProps = {
  destination: Destination
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <motion.article
      className="group relative h-[440px] overflow-hidden rounded-[2rem] bg-[#092A37] shadow-xl shadow-[#092A37]/8"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={destination.image}
        alt={destination.title}
        fill
        sizes="(min-width: 1024px) 360px, 86vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061B23]/88 via-[#061B23]/24 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#F7E6C8]">
          {destination.tags[0]}
        </p>
        <h3 className="font-display text-4xl font-black leading-none">{destination.title}</h3>
        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-white/76">
          <MapPin size={15} />
          {destination.area}
        </p>
        <a
          href="#packages"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#092A37] shadow-lg shadow-black/10 transition hover:bg-[#F7E6C8]"
        >
          View trips
          <ArrowRight size={16} />
        </a>
      </div>
    </motion.article>
  )
}
