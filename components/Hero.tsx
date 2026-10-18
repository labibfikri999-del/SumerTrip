'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, MapPin, MessageCircle, ShieldCheck, Star } from 'lucide-react'
import {
  heroHighlights,
  packages,
  trustBadges,
  trustStats,
  type HeroSlide,
} from '../lib/travel-data'
import { cn } from '../lib/cn'
import { ButtonLink } from './ui/Button'
import { Chip } from './ui/Chip'
import { TripPlanner } from './TripPlanner'

type HeroProps = {
  slides: HeroSlide[]
  whatsappHref: string
}

const SLIDE_MS = 5600
const navLinks = [
  ['Destinations', '#destinations'],
  ['Route', '#route'],
  ['Packages', '#packages'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
]
const chipPositions = ['right-[6%] top-[18%]', 'right-[24%] top-[31%]', 'right-[10%] top-[44%]']

export function Hero({ slides, whatsappHref }: HeroProps) {
  const [active, setActive] = useState(0)
  const shellRef = useRef<HTMLElement>(null)
  const slide = slides[active]
  const featured = packages[0]

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        '.hero-copy',
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out', stagger: 0.08 },
      )
    }, shellRef)

    return () => context.revert()
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => setActive((value) => (value + 1) % slides.length), SLIDE_MS)
    return () => window.clearTimeout(timer)
  }, [active, slides.length])

  return (
    <section ref={shellRef} id="home" className="relative bg-sand-50 p-2 sm:p-3">
      <div className="relative flex min-h-[88svh] flex-col overflow-hidden rounded-[1.75rem] bg-ink-deep text-white sm:min-h-[calc(100svh-1.5rem)] sm:rounded-frame">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1 }, scale: { duration: 1.8, ease: [0.22, 1, 0.36, 1] } }}
          >
            <Image src={slide.image} alt={slide.place} fill priority sizes="100vw" className="object-cover object-center" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,24,31,0.78)_0%,rgba(4,24,31,0.42)_50%,rgba(4,24,31,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,24,31,0.35)_0%,transparent_28%,transparent_55%,rgba(4,24,31,0.85)_100%)]" />

        <header className="relative z-20 flex items-center justify-between gap-4 px-4 pt-4 sm:px-7 sm:pt-6 lg:px-10">
          <a href="#home" className="block w-[118px] transition hover:opacity-90 sm:w-[150px]" aria-label="Summer Trip">
            <Image
              src="/images/summer-trip-logo-white.png"
              alt="Summer Trip"
              width={1129}
              height={481}
              priority
              className="h-auto w-full drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]"
            />
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/15 bg-white/10 p-1.5 backdrop-blur-xl lg:flex">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white hover:text-ink">
                {label}
              </a>
            ))}
          </nav>

          <ButtonLink href={whatsappHref} target="_blank" rel="noreferrer" variant="light" className="h-11 w-11 px-0 sm:w-auto sm:px-5" aria-label="Chat via WhatsApp">
            <MessageCircle size={17} />
            <span className="hidden sm:inline">WhatsApp</span>
          </ButtonLink>
        </header>

        <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
          {heroHighlights.map((item, index) => (
            <motion.div
              key={item.label}
              className={cn('absolute', chipPositions[index])}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ opacity: { delay: 0.6 + index * 0.15 }, y: { duration: 5 + index, repeat: Infinity, ease: 'easeInOut' } }}
            >
              <Chip size="md" className="gap-2 py-2 pl-2 pr-4 shadow-glass">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-ocean">
                  <MapPin size={14} />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm">{item.label}</span>
                  <span className="block text-[0.7rem] font-medium text-white/70">{item.place}</span>
                </span>
              </Chip>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 mt-auto grid gap-8 px-4 pb-20 pt-24 sm:px-7 sm:pb-24 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10 lg:pb-28">
          <div className="max-w-3xl">
            <Chip size="md" className="hero-copy mb-5 max-w-full">
              <ShieldCheck size={15} className="text-sunset" />
              <span className="truncate">{slide.label}</span>
            </Chip>
            <h1 className="hero-copy font-display text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.01em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={slide.title}
                  className="block"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  {slide.title}{' '}
                  <span className="font-serif font-normal italic tracking-normal text-sunset-light">{slide.accent}</span>
                </motion.span>
              </AnimatePresence>
            </h1>
            <p className="hero-copy mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-lg sm:leading-8">
              Private island routes, local NTB hosts, and effortless WhatsApp booking across Lombok, Gili, Mandalika,
              Rinjani, and Sumbawa.
            </p>
            <div className="hero-copy mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappHref} target="_blank" rel="noreferrer" size="lg" className="w-full sm:w-auto">
                <MessageCircle size={18} />
                Book via WhatsApp
              </ButtonLink>
              <ButtonLink href="#route" variant="glass" size="lg" className="w-full sm:w-auto">
                See the island route
                <ArrowRight size={18} />
              </ButtonLink>
            </div>

            <div className="mt-9 flex gap-2 sm:mt-12 sm:gap-3">
              {slides.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  onClick={() => setActive(index)}
                  className="group w-full max-w-[150px] text-left"
                  aria-label={`Show ${item.place}`}
                >
                  <span className="block h-[3px] overflow-hidden rounded-full bg-white/25">
                    {index === active && (
                      <motion.span
                        key={`bar-${active}`}
                        className="block h-full bg-sunset"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
                      />
                    )}
                  </span>
                  <span className={cn('mt-2 block text-xs font-semibold transition', index === active ? 'text-white' : 'text-white/50 group-hover:text-white/80')}>
                    0{index + 1} <span className="hidden sm:inline">· {item.place}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <motion.aside
            className="hidden w-[330px] rounded-[1.75rem] border border-white/20 bg-white/10 p-4 shadow-glass backdrop-blur-2xl lg:block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <div className="flex -space-x-3">
                {slides.map((item) => (
                  <span key={item.image} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/80">
                    <Image src={item.image} alt="" fill sizes="40px" className="object-cover" />
                  </span>
                ))}
              </div>
              <Chip variant="light">{trustStats.guests} {trustStats.guestsLabel}</Chip>
            </div>
            <div className="mt-4 flex items-end gap-3">
              <span className="font-display text-5xl font-semibold leading-none">{trustStats.rating}</span>
              <span className="pb-1">
                <span className="flex gap-0.5 text-sunset">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </span>
                <span className="text-xs font-medium text-white/70">{trustStats.ratingLabel}</span>
              </span>
            </div>
            <a href="#packages" className="group mt-4 flex items-center gap-3 rounded-2xl bg-white/10 p-2 transition hover:bg-white/20">
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                <Image src={featured.image} alt={featured.title} fill sizes="56px" className="object-cover" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-sunset-light">{featured.badge}</span>
                <span className="block truncate text-sm font-semibold">{featured.title}</span>
                <span className="block text-xs text-white/70">{featured.price}</span>
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ink transition group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </motion.aside>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-12 max-w-5xl px-2 sm:-mt-14 sm:px-6">
        <TripPlanner />
        <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-ink-soft sm:text-sm">
          {trustBadges.map((badge) => (
            <li key={badge} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lagoon" />
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
