import { ArrowRight, Camera, Mail, MapPin, MessageCircle } from 'lucide-react'

type FooterProps = {
  whatsappHref: string
}

export function Footer({ whatsappHref }: FooterProps) {
  return (
    <footer id="contact" className="bg-[#071D25] px-4 py-12 text-white sm:px-8 sm:py-14 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F4A261]">SummerTrip NTB</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-black leading-tight sm:mt-4 sm:text-5xl">
            Design your NTB escape.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:mt-5 sm:text-base sm:leading-8">
            Send your date, group size, and preferred route. We will shape it into a clear WhatsApp booking.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F4A261] px-6 py-4 text-sm font-black text-[#071D25] transition hover:bg-[#FFD29B] sm:mt-8 sm:w-auto"
          >
            Start Your Journey
            <ArrowRight size={18} />
          </a>
        </div>
        <div className="grid gap-4 text-sm font-semibold text-white/68">
          <span className="flex items-center gap-3">
            <MapPin size={18} className="text-[#F4A261]" />
            Lombok, Nusa Tenggara Barat
          </span>
          <a href={whatsappHref} className="flex items-center gap-3 transition hover:text-white">
            <MessageCircle size={18} className="text-[#F4A261]" />
            Book via WhatsApp
          </a>
          <a href="mailto:hello@summertrip.example" className="flex items-center gap-3 transition hover:text-white">
            <Mail size={18} className="text-[#F4A261]" />
            hello@summertrip.example
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
            <Camera size={18} className="text-[#F4A261]" />
            Instagram
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/44 sm:flex-row sm:items-center sm:justify-between">
        <span>(c) 2026 SummerTrip Explore NTB</span>
        <span>Lombok - Gili Islands - Sumbawa - Mandalika</span>
      </div>
    </footer>
  )
}
