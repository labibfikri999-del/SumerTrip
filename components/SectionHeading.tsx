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
      className={`mx-auto mb-9 max-w-2xl sm:mb-12 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E9783F]">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-black leading-tight text-[#092A37] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#617780]">{description}</p>
    </Reveal>
  )
}
