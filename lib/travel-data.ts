export const WHATSAPP_NUMBER = '6281234567890'

export const whatsappMessage =
  'Halo SummerTrip, saya ingin konsultasi paket wisata NTB. Bisa bantu buatkan itinerary?'

export function whatsappUrl(message = whatsappMessage) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type HeroSlide = {
  title: string
  label: string
  image: string
}

export type Destination = {
  title: string
  area: string
  description: string
  image: string
  tags: string[]
}

export type TravelPackage = {
  title: string
  duration: string
  location: string
  price: string
  badge: string
  image: string
  description: string
  inclusions: string[]
}

export type GalleryImage = {
  title: string
  location: string
  image: string
}

export type Testimonial = {
  name: string
  country: string
  quote: string
  trip: string
}

export type Faq = {
  question: string
  answer: string
}

export const heroSlides: HeroSlide[] = [
  {
    title: 'Discover Lombok, Gili & Sumbawa',
    label: 'Premium NTB Island Experiences',
    image: '/images/ntb/hero-rinjani.webp',
  },
  {
    title: 'Explore the Beauty of Nusa Tenggara Barat',
    label: 'Private Trips, Snorkeling, Culture',
    image: '/images/ntb/hero-gili.webp',
  },
  {
    title: 'Mandalika Sunsets & Rinjani Mornings',
    label: 'Curated by Local NTB Hosts',
    image: '/images/ntb/hero-mandalika.webp',
  },
]

export const destinations: Destination[] = [
  {
    title: 'Lombok',
    area: 'South Coast to Senaru',
    description: 'A complete island route with surf beaches, Sasak villages, waterfalls, and quiet bays.',
    image: '/images/ntb/lombok-culture.webp',
    tags: ['Beach tour', 'Culture', 'Waterfalls'],
  },
  {
    title: 'Gili Trawangan',
    area: 'Northwest Lombok',
    description: 'Sunset cycling, beach clubs, turtle points, and easy island nights without cars.',
    image: '/images/ntb/gili-trawangan.webp',
    tags: ['Snorkeling', 'Sunset', 'Island hopping'],
  },
  {
    title: 'Gili Air',
    area: 'Gili Islands',
    description: 'Balanced island energy with calm beaches, clear water, and family-friendly stays.',
    image: '/images/ntb/gili-air-meno.webp',
    tags: ['Family', 'Coral reef', 'Slow travel'],
  },
  {
    title: 'Gili Meno',
    area: 'Gili Islands',
    description: 'Quiet beaches, honeymoon villas, turtle sanctuary stops, and underwater statues.',
    image: '/images/ntb/gili-air-meno.webp',
    tags: ['Honeymoon', 'Turtles', 'Private boat'],
  },
  {
    title: 'Mandalika',
    area: 'Kuta Lombok',
    description: 'Modern coastal escape with Merese Hill, Tanjung Aan, surf breaks, and luxury resorts.',
    image: '/images/ntb/hero-mandalika.webp',
    tags: ['Surf', 'Sunset', 'MICE'],
  },
  {
    title: 'Pink Beach',
    area: 'East Lombok',
    description: 'Soft rose sand, hidden reefs, boat picnics, and remote coastal scenery.',
    image: '/images/ntb/pink-beach.webp',
    tags: ['Boat trip', 'Photography', 'Snorkeling'],
  },
  {
    title: 'Mount Rinjani',
    area: 'Sembalun & Senaru',
    description: 'Volcano trekking, crater lake views, soft trekking options, and sunrise ridgelines.',
    image: '/images/ntb/rinjani-trekking.webp',
    tags: ['Trekking', 'Nature', 'Sunrise'],
  },
  {
    title: 'Sumbawa',
    area: 'West Nusa Tenggara',
    description: 'Wild beaches, surf coast, whale shark routes, and expansive island landscapes.',
    image: '/images/ntb/sumbawa-coast.webp',
    tags: ['Adventure', 'Surf', 'Road trip'],
  },
  {
    title: 'Moyo Island',
    area: 'Sumbawa Besar',
    description: 'Waterfalls, forest walks, blue coves, and an off-grid luxury island atmosphere.',
    image: '/images/ntb/moyo-waterfall.webp',
    tags: ['Luxury nature', 'Waterfall', 'Escape'],
  },
]

export const packages: TravelPackage[] = [
  {
    title: 'Three Gili Snorkeling Escape',
    duration: 'Full Day',
    location: 'Gili Trawangan, Meno, Air',
    price: 'IDR 750K / pax',
    badge: 'Best Seller',
    image: '/images/ntb/gili-trawangan.webp',
    description: 'Private boat route to turtle points, underwater statues, coral gardens, and sunset beach time.',
    inclusions: ['Hotel transfer', 'Boat & guide', 'Snorkeling gear'],
  },
  {
    title: 'Lombok Family Beach Tour',
    duration: '2 Days 1 Night',
    location: 'Mandalika, Sade, Merese',
    price: 'IDR 1.4M / pax',
    badge: 'Family Friendly',
    image: '/images/ntb/hero-mandalika.webp',
    description: 'Easy-paced beach, culture, sunset, and dining route designed for parents and children.',
    inclusions: ['Private car', 'Local guide', 'Flexible stops'],
  },
  {
    title: 'Rinjani Soft Trekking',
    duration: '2 Days 1 Night',
    location: 'Senaru or Sembalun',
    price: 'IDR 2.2M / pax',
    badge: 'Nature Adventure',
    image: '/images/ntb/rinjani-trekking.webp',
    description: 'Scenic trekking route with village stay, waterfalls, foothill views, and mountain sunrise.',
    inclusions: ['Guide & porter', 'Meals', 'Permit support'],
  },
  {
    title: 'Sumbawa Whale Shark & Moyo',
    duration: '3 Days 2 Nights',
    location: 'Saleh Bay, Moyo Island',
    price: 'IDR 3.8M / pax',
    badge: 'Wild NTB',
    image: '/images/ntb/moyo-waterfall.webp',
    description: 'A cinematic Sumbawa escape combining blue water, forest waterfalls, and marine adventure.',
    inclusions: ['Island transport', 'Boat charter', 'Local host'],
  },
  {
    title: 'Private NTB Luxury Route',
    duration: 'Custom 4-7 Days',
    location: 'Lombok, Gili, Sumbawa',
    price: 'From IDR 5.5M / trip',
    badge: 'Private',
    image: '/images/ntb/hero-gili.webp',
    description: 'Tailored itinerary with boutique stays, curated dining, private cars, and flexible daily pacing.',
    inclusions: ['Concierge planning', 'Private driver', 'VIP route design'],
  },
  {
    title: 'Rental Car with Driver',
    duration: 'Daily',
    location: 'Lombok & Mandalika',
    price: 'From IDR 650K / day',
    badge: 'Easy Booking',
    image: '/images/ntb/sumbawa-coast.webp',
    description: 'Clean car, professional local driver, airport transfer, and fully flexible daily routes.',
    inclusions: ['Fuel options', 'Airport pickup', '12-hour usage'],
  },
]

export const gallery: GalleryImage[] = [
  {
    title: 'Rinjani Foothills',
    location: 'Sembalun',
    image: '/images/ntb/hero-rinjani.webp',
  },
  {
    title: 'Island Hopping',
    location: 'Gili Islands',
    image: '/images/ntb/gili-trawangan.webp',
  },
  {
    title: 'Mandalika Coast',
    location: 'Kuta Lombok',
    image: '/images/ntb/hero-mandalika.webp',
  },
  {
    title: 'Hidden Waterfall',
    location: 'North Lombok',
    image: '/images/ntb/moyo-waterfall.webp',
  },
  {
    title: 'Sasak Landscape',
    location: 'Central Lombok',
    image: '/images/ntb/lombok-culture.webp',
  },
  {
    title: 'Sumbawa Blue',
    location: 'Moyo Island',
    image: '/images/ntb/sumbawa-coast.webp',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    country: 'Australia',
    trip: 'Three Gili Snorkeling',
    quote: 'Everything felt premium but still local. The guide knew exactly when to visit each snorkeling spot before the crowds arrived.',
  },
  {
    name: 'David Leong',
    country: 'Singapore',
    trip: 'Rental Car with Driver',
    quote: 'Clean car, polite driver, transparent pricing, and excellent restaurant recommendations around Mandalika.',
  },
  {
    name: 'Elena Muller',
    country: 'Germany',
    trip: 'Private Lombok Route',
    quote: 'The itinerary balanced waterfalls, Sasak culture, and beaches beautifully. It felt personal, safe, and very smooth.',
  },
]

export const faqs: Faq[] = [
  {
    question: 'Apakah paket bisa dibuat private?',
    answer: 'Bisa. Hampir semua paket bisa dibuat private dengan jadwal, rute, dan tempo perjalanan yang disesuaikan dengan kebutuhan tamu.',
  },
  {
    question: 'Nomor WhatsApp bisa diganti?',
    answer: 'Bisa. Ganti nilai WHATSAPP_NUMBER di file lib/travel-data.ts, semua tombol booking akan otomatis memakai nomor baru.',
  },
  {
    question: 'Apakah ada pickup dari airport?',
    answer: 'Ada. Kami bisa menjemput dari Lombok International Airport, hotel Kuta, Senggigi, Mataram, Bangsal, atau Teluk Nare.',
  },
  {
    question: 'Apakah trip aman untuk keluarga?',
    answer: 'Ya. Family Trip dibuat dengan pacing santai, pilihan kendaraan nyaman, dan destinasi yang aman untuk anak.',
  },
  {
    question: 'Bagaimana jika cuaca laut kurang baik?',
    answer: 'Kami akan menyarankan reschedule, rute alternatif, atau opsi refund sesuai kondisi paket. Keselamatan selalu prioritas.',
  },
  {
    question: 'Apakah harga sudah termasuk semua?',
    answer: 'Setiap paket punya inclusion yang jelas. Detail final seperti tiket masuk, makan, dan transport akan dikonfirmasi lewat WhatsApp.',
  },
]
