'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, MapPin, MessageCircle } from 'lucide-react'
import type { TravelPackage } from '../lib/travel-data'
import { whatsappUrl } from '../lib/travel-data'

type PackageCardProps = {
  item: TravelPackage
}

export function PackageCard({ item }: PackageCardProps) {
  return (
    <motion.article
      className="group h-full overflow-hidden rounded-[1.35rem] bg-white shadow-xl shadow-[#092A37]/8 sm:relative sm:h-[540px] sm:rounded-[2rem] sm:bg-[#092A37]"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-56 overflow-hidden sm:absolute sm:inset-0 sm:h-auto">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 410px, 92vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 hidden bg-gradient-to-t from-[#061B23]/94 via-[#061B23]/28 to-transparent sm:block" />
      <div className="relative p-5 text-[#092A37] sm:absolute sm:inset-x-0 sm:bottom-0 sm:p-7 sm:text-white">
        <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#E9783F] sm:text-xs sm:tracking-[0.22em] sm:text-[#F4A261]">{item.badge}</p>
        <h3 className="font-display text-[1.9rem] font-black leading-[1.02] sm:text-4xl sm:leading-[0.98]">{item.title}</h3>
        <p className="mt-4 text-sm leading-6 text-[#617780] sm:hidden">{item.description}</p>
        <div className="mt-5 grid gap-2 text-sm font-semibold text-[#617780] sm:text-white/76">
          <span className="flex items-center gap-2">
            <Clock size={15} className="text-[#138A72] sm:text-[#F7E6C8]" />
            {item.duration}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={15} className="text-[#138A72] sm:text-[#F7E6C8]" />
            {item.location}
          </span>
        </div>
        <p className="mt-5 text-xl font-black text-[#092A37] sm:mt-6 sm:text-white">{item.price}</p>
        <a
          href={whatsappUrl(`Halo SummerTrip, saya ingin booking ${item.title}. Bisa cek ketersediaan?`)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F4A261] px-5 py-3 text-sm font-black text-[#071D25] shadow-xl shadow-black/10 transition hover:bg-[#FFD29B] sm:mt-6"
        >
          <MessageCircle size={20} />
          Book via WhatsApp
        </a>
      </div>
    </motion.article>
  )
}
