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
    <section id="faq" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
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
              <article key={item.question} className="rounded-[1.4rem] border border-[#E4ECE8] bg-[#F8F5EF]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-black text-[#092A37]">{item.question}</span>
                  <ChevronDown className={`shrink-0 text-[#138A72] transition ${isOpen ? 'rotate-180' : ''}`} size={20} />
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm leading-7 text-[#66808A]">{item.answer}</p>}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
