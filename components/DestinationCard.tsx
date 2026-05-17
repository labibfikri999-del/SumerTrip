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
      className="group h-full overflow-hidden rounded-[1.35rem] bg-white shadow-xl shadow-[#092A37]/8 sm:relative sm:h-[440px] sm:rounded-[2rem] sm:bg-[#092A37]"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-56 overflow-hidden sm:absolute sm:inset-0 sm:h-auto">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          sizes="(min-width: 1024px) 360px, 88vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 hidden bg-gradient-to-t from-[#061B23]/88 via-[#061B23]/24 to-transparent sm:block" />
      <div className="relative p-5 text-[#092A37] sm:absolute sm:inset-x-0 sm:bottom-0 sm:p-7 sm:text-white">
        <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#E9783F] sm:text-xs sm:tracking-[0.22em] sm:text-[#F7E6C8]">
          {destination.tags[0]}
        </p>
        <h3 className="font-display text-3xl font-black leading-none sm:text-4xl">{destination.title}</h3>
        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#617780] sm:text-white/76">
          <MapPin size={15} />
          {destination.area}
        </p>
        <a
          href="#packages"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#092A37] px-5 py-3 text-sm font-black text-white shadow-lg shadow-black/10 transition hover:bg-[#0E5A71] sm:mt-6 sm:w-auto sm:bg-white sm:text-[#092A37] sm:hover:bg-[#F7E6C8]"
        >
          View trips
          <ArrowRight size={16} />
        </a>
      </div>
    </motion.article>
  )
}
