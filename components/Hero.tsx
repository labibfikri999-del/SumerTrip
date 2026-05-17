'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'
import type { HeroSlide } from '../lib/travel-data'

type HeroProps = {
  slides: HeroSlide[]
  whatsappHref: string
}

export function Hero({ slides, whatsappHref }: HeroProps) {
  const [active, setActive] = useState(0)
  const shellRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const slide = slides[active]

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
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % slides.length)
    }, 5600)

    return () => window.clearInterval(timer)
  }, [slides.length])

  useEffect(() => {
    gsap.fromTo(imageRef.current, { scale: 1.08 }, { scale: 1, duration: 1.6, ease: 'power3.out' })
  }, [active])

  return (
    <section ref={shellRef} className="relative min-h-screen overflow-hidden bg-[#071D25] text-white">
      <div ref={imageRef} className="absolute inset-0">
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,24,31,0.86)_0%,rgba(4,24,31,0.54)_46%,rgba(4,24,31,0.26)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,24,31,0.28)_0%,rgba(4,24,31,0.1)_48%,rgba(4,24,31,0.86)_100%)]" />

      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-3" aria-label="SummerTrip NTB">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#073B4C] shadow-lg">
            <Sparkles size={19} />
          </span>
          <span>
            <span className="block text-base font-black leading-none tracking-tight">SummerTrip</span>
            <span className="mt-1 block text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/64">
              NTB Travel
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.24em] text-white/70 lg:flex">
          <a href="#home" className="transition hover:text-white">Home</a>
          <a href="#destinations" className="transition hover:text-white">Destinations</a>
          <a href="#packages" className="transition hover:text-white">Packages</a>
          <a href="#gallery" className="transition hover:text-white">Gallery</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#073B4C] shadow-xl shadow-black/10 transition hover:bg-[#F7E6C8] sm:inline-flex"
        >
          <MessageCircle size={17} />
          WhatsApp
        </a>
      </header>

      <div id="home" className="relative z-10 mx-auto flex min-h-[calc(100vh-5.5rem)] max-w-7xl items-center px-5 pb-16 pt-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <div className="hero-copy mb-6 inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/82 backdrop-blur-md">
            <ShieldCheck size={15} className="text-[#F4A261]" />
            {slide.label}
          </div>
          <h1 className="hero-copy max-w-4xl font-display text-5xl font-black leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
            {slide.title}
          </h1>
          <p className="hero-copy mt-6 max-w-xl text-base leading-8 text-white/76 sm:text-lg">
            Private island routes, refined local hosts, and effortless WhatsApp booking across Lombok,
            Gili, Mandalika, Rinjani, and Sumbawa.
          </p>

          <div className="hero-copy mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F4A261] px-7 py-4 text-sm font-black text-[#071D25] shadow-2xl shadow-[#F4A261]/25 transition hover:bg-[#FFD29B]"
            >
              <MessageCircle size={18} />
              Book via WhatsApp
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/24 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur-md transition hover:bg-white/18"
            >
              Explore Packages
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
