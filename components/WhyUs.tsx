'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Compass, MapPin, MessageCircle } from 'lucide-react'
import { bookingSteps, whyUs } from '../lib/travel-data'
import { ButtonLink } from './ui/Button'
import { Chip } from './ui/Chip'
import { SectionHeading } from './SectionHeading'

const stepIcons = [Compass, MessageCircle, BadgeCheck]
const ease = [0.22, 1, 0.36, 1] as const

export function WhyUs({ whatsappHref }: { whatsappHref: string }) {
  return (
    <section id="why-us" className="bg-sand-50 px-2 py-6 sm:px-3 sm:py-10">
      <div className="rounded-[1.75rem] bg-white px-4 py-12 sm:rounded-frame sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Why SummerTrip"
              title="Why travel with"
              accent="local hosts"
              description="We plan every route the way we would show NTB to our own friends — unhurried, safe, and full of places most visitors miss."
            />

            <div className="relative mx-auto max-w-lg pb-10 pr-10 sm:pb-14 sm:pr-16">
              <motion.div
                className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
              >
                <Image src="/images/ntb/hero-gili.webp" alt="Boat trip in the Gili Islands" fill sizes="(min-width: 1024px) 480px, 90vw" className="object-cover" />
                <Chip variant="light" className="absolute left-3 top-3">
                  <MapPin size={12} className="text-sunset-deep" />
                  Lombok · Gili · Sumbawa
                </Chip>
              </motion.div>
              <motion.div
                className="absolute bottom-0 right-0 w-[46%] rotate-[4deg] rounded-[1.25rem] bg-white p-1.5 shadow-glass"
                initial={{ opacity: 0, y: 30, rotate: 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease }}
              >
                <div className="relative aspect-square overflow-hidden rounded-[1rem]">
                  <Image src="/images/ntb/rinjani-trekking.webp" alt="Trekking on Mount Rinjani" fill sizes="220px" className="object-cover" />
                </div>
              </motion.div>
            </div>
          </div>

          <ol className="lg:pt-24">
            {whyUs.map((item, index) => (
              <motion.li
                key={item.title}
                className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-ink/10 py-6 sm:grid-cols-[5rem_1fr] sm:py-7"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease }}
              >
                <span className="font-display text-3xl font-semibold text-sunset-deep sm:text-4xl">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft sm:text-base sm:leading-7">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-14 max-w-7xl rounded-[1.5rem] bg-ink-deep p-5 text-white sm:mt-20 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sunset">How booking works</p>
              <h3 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Three steps, <span className="font-serif font-normal italic text-sunset-light">no forms</span>
              </h3>
            </div>
            <ButtonLink href={whatsappHref} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              Start on WhatsApp
              <ArrowRight size={17} />
            </ButtonLink>
          </div>

          <ol className="relative mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
            <span className="absolute left-[16.6%] right-[16.6%] top-7 hidden border-t-2 border-dashed border-white/20 md:block" aria-hidden />
            {bookingSteps.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <motion.li
                  key={step.title}
                  className="relative flex gap-4 rounded-[1.25rem] bg-white/[0.06] p-4 ring-1 ring-white/10 md:flex-col md:items-center md:bg-transparent md:p-0 md:text-center md:ring-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease }}
                >
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-sunset text-ink-deep ring-8 ring-ink-deep">
                    <Icon size={22} />
                    <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-white text-xs font-bold text-ink">{index + 1}</span>
                  </span>
                  <div>
                    <h4 className="font-display text-xl font-semibold md:mt-4">{step.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-white/65 md:mx-auto md:max-w-[260px]">{step.description}</p>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
