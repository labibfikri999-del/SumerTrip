'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check, Clock, MapPin, MessageCircle } from 'lucide-react'
import type { TravelPackage } from '../lib/travel-data'
import { whatsappUrl } from '../lib/travel-data'
import { cn } from '../lib/cn'
import { buttonVariants } from './ui/Button'
import { Chip } from './ui/Chip'

type PackageCardProps = {
  item: TravelPackage
  index?: number
}

function splitPrice(price: string) {
  const [amount, unit] = price.split(' / ')
  return { amount: amount.replace(/^From /, ''), from: amount.startsWith('From'), unit }
}

export function PackageCard({ item, index = 0 }: PackageCardProps) {
  const price = splitPrice(item.price)

  return (
    <motion.article
      id={`package-${item.slug}`}
      className="group flex h-full scroll-mt-28 flex-col rounded-[1.5rem] bg-white p-2 shadow-[0_18px_50px_rgba(9,42,55,0.08)] ring-sunset transition-shadow duration-500 target:ring-4 sm:rounded-[1.75rem]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem] sm:rounded-[1.35rem]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <Chip variant="light" className="absolute left-3 top-3">{item.badge}</Chip>
        <Chip className="absolute right-3 top-3">
          <Clock size={12} />
          {item.duration}
        </Chip>
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-4 sm:px-4">
        <p className="flex items-center gap-1.5 text-xs font-semibold text-ink-soft">
          <MapPin size={13} className="text-lagoon" />
          {item.location}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold leading-[1.1] text-ink">{item.title}</h3>
        <p className="mt-2 hidden text-sm leading-6 text-ink-soft sm:block">{item.description}</p>

        <ul className="mb-5 mt-4 flex flex-wrap gap-2">
          {item.inclusions.map((inclusion) => (
            <li key={inclusion} className="flex items-center gap-1.5 rounded-full bg-sand-50 px-3 py-1.5 text-xs font-semibold text-ink">
              <Check size={12} className="text-lagoon" />
              {inclusion}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-ink/5 pt-4">
          <p className="leading-tight">
            <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
              {price.from ? 'Starting from' : 'Price'}
            </span>
            <span className="font-display text-2xl font-semibold text-ink">{price.amount}</span>
            {price.unit && <span className="text-sm font-medium text-ink-soft"> / {price.unit}</span>}
          </p>
          <a
            href={whatsappUrl(`Hi SummerTrip, I'd like to book the ${item.title}. Could you check availability?`)}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: 'dark', size: 'md' }), 'shrink-0 group-hover:bg-sunset group-hover:text-ink-deep')}
          >
            <MessageCircle size={16} />
            Book
          </a>
        </div>
      </div>
    </motion.article>
  )
}
