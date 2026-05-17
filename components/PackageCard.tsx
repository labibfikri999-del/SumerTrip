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
      className="group relative h-[540px] overflow-hidden rounded-[2rem] bg-[#092A37] shadow-xl shadow-[#092A37]/8"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(min-width: 1024px) 410px, 92vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061B23]/94 via-[#061B23]/28 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#F4A261]">{item.badge}</p>
        <h3 className="font-display text-4xl font-black leading-[0.98]">{item.title}</h3>
        <div className="mt-5 grid gap-2 text-sm font-semibold text-white/76">
          <span className="flex items-center gap-2">
            <Clock size={15} className="text-[#F7E6C8]" />
            {item.duration}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={15} className="text-[#F7E6C8]" />
            {item.location}
          </span>
        </div>
        <p className="mt-6 text-xl font-black text-white">{item.price}</p>
        <a
          href={whatsappUrl(`Halo SummerTrip, saya ingin booking ${item.title}. Bisa cek ketersediaan?`)}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F4A261] px-5 py-3 text-sm font-black text-[#071D25] shadow-xl shadow-black/10 transition hover:bg-[#FFD29B]"
        >
            <MessageCircle size={20} />
          Book via WhatsApp
        </a>
      </div>
    </motion.article>
  )
}
