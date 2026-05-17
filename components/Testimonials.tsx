import { Star } from 'lucide-react'
import type { Testimonial } from '../lib/travel-data'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

type TestimonialsProps = {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="bg-[#F8F5EF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
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
              <article className="h-full rounded-[2rem] bg-white p-7 shadow-lg shadow-[#092A37]/6">
                <div className="mb-6 flex gap-1 text-[#F4A261]" aria-label="Five star rating">
                  {[0, 1, 2, 3, 4].map((starIndex) => (
                    <Star key={`${testimonial.name}-${starIndex}`} size={17} fill="currentColor" />
                  ))}
                </div>
                <p className="text-base leading-8 text-[#183D49]">"{testimonial.quote}"</p>
                <div className="mt-7 border-t border-[#E4ECE8] pt-5">
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
