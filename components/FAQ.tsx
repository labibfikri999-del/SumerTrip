'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Faq } from '../lib/travel-data'
import { SectionHeading } from './SectionHeading'

type FAQProps = {
  faqs: Faq[]
}

export function FAQ({ faqs }: FAQProps) {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-white px-4 py-12 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Before you book"
          description="Simple answers for private trips, family travel, pickup, weather, and payment details."
          align="center"
        />
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <article key={item.question} className="rounded-[1rem] border border-[#E4ECE8] bg-[#F8F5EF] sm:rounded-[1.4rem]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-black text-[#092A37] sm:text-base">{item.question}</span>
                  <ChevronDown className={`shrink-0 text-[#138A72] transition ${isOpen ? 'rotate-180' : ''}`} size={20} />
                </button>
                {isOpen && <p className="px-4 pb-4 text-sm leading-7 text-[#66808A] sm:px-5 sm:pb-5">{item.answer}</p>}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
