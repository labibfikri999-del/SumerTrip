import { Star } from 'lucide-react'
import type { Testimonial } from '../lib/travel-data'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

type TestimonialsProps = {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="bg-[#F8F5EF] px-4 py-12 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by thoughtful travelers"
          description="Quietly premium routes, reliable local hosts, and smooth travel days across NTB."
          align="center"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.05}>
              <article className="h-full rounded-[1.25rem] bg-white p-5 shadow-lg shadow-[#092A37]/6 sm:rounded-[2rem] sm:p-7">
                <div className="mb-5 flex gap-1 text-[#F4A261] sm:mb-6" aria-label="Five star rating">
                  {[0, 1, 2, 3, 4].map((starIndex) => (
                    <Star key={`${testimonial.name}-${starIndex}`} size={17} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-[#183D49] sm:text-base sm:leading-8">"{testimonial.quote}"</p>
                <div className="mt-5 border-t border-[#E4ECE8] pt-5 sm:mt-7">
                  <p className="font-black text-[#092A37]">{testimonial.name}</p>
                  <p className="mt-1 text-sm font-semibold text-[#66808A]">
                    {testimonial.country} - {testimonial.trip}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
