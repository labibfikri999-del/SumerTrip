'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import type { Destination } from '../lib/travel-data'
import { cn } from '../lib/cn'
import { Chip } from './ui/Chip'

type DestinationCardProps = {
  destination: Destination
  featured?: boolean
  className?: string
  index?: number
}

export function DestinationCard({ destination, featured, className, index = 0 }: DestinationCardProps) {
  return (
    <motion.a
      href={`#package-${destination.packageSlug}`}
      className={cn('group relative block overflow-hidden rounded-[1.25rem] bg-ink sm:rounded-[1.75rem]', className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={destination.image}
        alt={destination.title}
        fill
        sizes={featured ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/20 to-transparent" />

      <Chip className="absolute left-3 top-3 sm:left-4 sm:top-4">{destination.tags[0]}</Chip>
      <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition duration-300 group-hover:rotate-45 group-hover:bg-sunset sm:right-4 sm:top-4 sm:h-10 sm:w-10">
        <ArrowUpRight size={17} />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-3.5 text-white sm:p-5">
        <h3 className={cn('font-display font-semibold leading-none', featured ? 'text-3xl sm:text-5xl' : 'text-xl sm:text-2xl')}>
          {destination.title}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-white/75 sm:text-sm">
          <MapPin size={13} />
          {destination.area}
        </p>
        {featured && <p className="mt-3 hidden max-w-md text-sm leading-6 text-white/75 sm:block">{destination.description}</p>}
        <p className="grid grid-rows-[0fr] text-sm leading-6 text-white/75 transition-all duration-500 group-hover:grid-rows-[1fr] max-sm:hidden">
          <span className={cn('overflow-hidden', featured && 'hidden')}>{destination.description}</span>
        </p>
      </div>
    </motion.a>
  )
}
