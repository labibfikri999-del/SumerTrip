'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { GalleryImage } from '../lib/travel-data'
import { SectionHeading } from './SectionHeading'

type GalleryProps = {
  images: GalleryImage[]
}

export function Gallery({ images }: GalleryProps) {
  return (
    <section id="gallery" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title="A quieter look at NTB"
          description="Cinematic beaches, mountain light, island water, and local textures without the noise."
          align="center"
        />
        <div className="grid auto-rows-[240px] gap-4 md:auto-rows-[280px] md:grid-cols-4">
          {images.map((item, index) => (
            <motion.article
              key={item.title}
              className={`group relative overflow-hidden rounded-[1.6rem] ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              whileHover={{ scale: 0.985 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 50vw, 92vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F7E6C8]">{item.location}</p>
                <h3 className="mt-1 text-2xl font-black">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
