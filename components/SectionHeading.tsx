'use client'

import { cn } from '../lib/cn'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  accent?: string
  description: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, accent, description, align = 'left', className }: SectionHeadingProps) {
  return (
    <Reveal className={cn('mb-8 max-w-2xl sm:mb-12', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-sunset-deep sm:text-xs sm:tracking-[0.28em]">{eyebrow}</p>
      <h2 className="mt-3 font-display text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.01em] text-ink sm:mt-4 sm:text-5xl">
        {title}
        {accent && (
          <>
            {' '}
            <span className="font-serif font-normal italic tracking-normal text-ocean">{accent}</span>
          </>
        )}
      </h2>
      <p className="mt-3 text-sm leading-7 text-ink-soft sm:mt-4 sm:text-base">{description}</p>
    </Reveal>
  )
}
