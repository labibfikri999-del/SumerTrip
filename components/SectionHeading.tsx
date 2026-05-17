'use client'

import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal
      className={`mx-auto mb-7 max-w-2xl sm:mb-12 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E9783F] sm:text-xs sm:tracking-[0.28em]">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-black leading-tight text-[#092A37] sm:mt-4 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-[#617780] sm:mt-4 sm:text-base">{description}</p>
    </Reveal>
  )
}
