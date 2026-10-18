'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { ArrowRight, Car, MapPin, Sailboat, Ship } from 'lucide-react'
import { islandRoute, whatsappUrl, type RouteStop } from '../lib/travel-data'
import { cn } from '../lib/cn'
import { ButtonLink } from './ui/Button'
import { Chip } from './ui/Chip'

gsap.registerPlugin(ScrollTrigger)

const transportIcon = { boat: Sailboat, car: Car, ferry: Ship }
const tilts = ['-rotate-[5deg]', 'rotate-[4deg]', '-rotate-[2deg]', 'rotate-[5deg]', '-rotate-[3deg]']
// Card centres on a 1000x320 canvas: top row y=90, bottom row y=230.
const ROUTE_PATH = 'M100 90 C200 90 200 230 300 230 S400 90 500 90 S600 230 700 230 S800 90 900 90'

function Polaroid({ stop, index, className }: { stop: RouteStop; index: number; className?: string }) {
  return (
    <motion.article
      className={cn('group relative rounded-[1.25rem] bg-white p-2 pb-4 text-ink shadow-glass', className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[0.9rem]">
        <Image src={stop.image} alt={stop.title} fill sizes="(min-width: 1024px) 200px, 120px" className="object-cover transition duration-700 group-hover:scale-110" />
        <Chip variant="sunset" className="route-chip absolute left-2 top-2">
          <MapPin size={12} />
          {stop.place}
        </Chip>
      </div>
      <p className="mt-3 px-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sunset-deep">{stop.day}</p>
      <h3 className="px-1 font-display text-lg font-semibold leading-tight">{stop.title}</h3>
    </motion.article>
  )
}

function TransportBadge({ stop, className }: { stop: RouteStop; className?: string }) {
  if (!stop.transport) return null
  const Icon = transportIcon[stop.transport]
  return (
    <span className={cn('flex items-center gap-2 whitespace-nowrap rounded-full bg-ink-deep/80 py-1.5 pl-1.5 pr-3 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur', className)}>
      <span className="grid h-7 w-7 place-items-center rounded-full bg-sunset text-ink-deep">
        <Icon size={14} />
      </span>
      {stop.transportLabel}
    </span>
  )
}

function TransportStop({ stop, className }: { stop: RouteStop; className?: string }) {
  if (!stop.transport) return null
  const Icon = transportIcon[stop.transport]
  return (
    <span className={cn('group/stop absolute z-20 flex flex-col items-center', className)}>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-sunset text-ink-deep shadow-lg shadow-black/30 ring-4 ring-ink-deep transition group-hover/stop:scale-110">
        <Icon size={18} />
      </span>
      <span className="pointer-events-none absolute top-full mt-2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink opacity-0 shadow-float transition group-hover/stop:opacity-100">
        {stop.transportLabel}
      </span>
    </span>
  )
}

export function IslandRoute() {
  const drawRef = useRef<SVGPathElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const path = drawRef.current
    if (!path) return
    const length = path.getTotalLength()
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: { trigger: trackRef.current, start: 'top 80%', end: 'bottom 55%', scrub: 0.6 },
    })
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  const routeMessage = `Hi SummerTrip, I'm interested in the 5-day island-hopping route (${islandRoute.map((s) => s.place).join(' → ')}). Could you check availability and price?`

  return (
    <section id="route" className="bg-sand-50 px-2 py-10 sm:px-3 sm:py-16">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-ink-deep px-4 py-12 text-white sm:rounded-frame sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-ocean/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-lagoon/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sunset">Island-hopping route</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.01em] sm:text-6xl">
              Five days, <span className="font-serif font-normal italic tracking-normal text-sunset-light">one island story</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-white/70 sm:text-base">
              From Sasak villages to Moyo&apos;s waterfalls — boats, cars, and ferries all arranged by our local hosts. Mix it,
              shorten it, or make it private.
            </p>
            <ButtonLink href={whatsappUrl(routeMessage)} target="_blank" rel="noreferrer" className="mt-6">
              Book this route
              <ArrowRight size={17} />
            </ButtonLink>
          </div>
        </div>

        {/* Desktop: polaroids on a winding route */}
        <div ref={trackRef} className="relative mx-auto mt-16 hidden h-[560px] max-w-6xl lg:block">
          <svg viewBox="0 0 1000 320" preserveAspectRatio="none" className="absolute inset-x-0 top-[60px] h-[440px] w-full" aria-hidden>
            <defs>
              <mask id="route-mask">
                <path ref={drawRef} d={ROUTE_PATH} fill="none" stroke="white" strokeWidth="6" vectorEffect="non-scaling-stroke" />
              </mask>
            </defs>
            <path d={ROUTE_PATH} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            <path d={ROUTE_PATH} fill="none" stroke="#F4A261" strokeWidth="2.5" strokeDasharray="10 10" strokeLinecap="round" vectorEffect="non-scaling-stroke" mask="url(#route-mask)" />
          </svg>

          <div className="relative grid h-full grid-cols-5 gap-6">
            {islandRoute.map((stop, index) => (
              <div key={stop.title} className={cn('relative', index % 2 ? 'pt-[230px]' : 'pt-0')}>
                <Polaroid stop={stop} index={index} className={cn('mx-auto w-full max-w-[180px]', tilts[index])} />
                <TransportStop stop={stop} className="-right-3 top-[258px] translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & tablet: vertical timeline */}
        <ol className="relative mx-auto mt-10 max-w-xl lg:hidden">
          <span className="absolute bottom-6 left-[19px] top-6 border-l-2 border-dashed border-sunset/50" aria-hidden />
          {islandRoute.map((stop, index) => (
            <li key={stop.title} className="relative pb-6 pl-12 last:pb-0">
              <span className="absolute left-2.5 top-6 grid h-5 w-5 place-items-center rounded-full bg-sunset ring-4 ring-ink-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-deep" />
              </span>
              <div className="flex gap-4 rounded-[1.25rem] bg-white/[0.06] p-2.5 ring-1 ring-white/10">
                <Polaroid stop={stop} index={index} className={cn('w-28 shrink-0 p-1.5 pb-2 [&_.route-chip]:hidden [&_h3]:hidden [&_p]:hidden sm:w-32', tilts[index])} />
                <div className="min-w-0 py-1">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sunset">{stop.day}</p>
                  <h3 className="font-display text-xl font-semibold leading-tight">{stop.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{stop.description}</p>
                </div>
              </div>
              <TransportBadge stop={stop} className="mt-4 w-fit" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
