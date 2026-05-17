import { CalendarCheck, MapPinned, MessageCircle } from 'lucide-react'

type StickyBookingProps = {
  whatsappHref: string
}

export function StickyBooking({ whatsappHref }: StickyBookingProps) {
  return (
    <>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-5 z-50 hidden h-16 w-16 place-items-center rounded-full bg-[#138A72] text-white shadow-2xl shadow-[#138A72]/30 transition hover:scale-105 hover:bg-[#0E5A71] md:grid"
        aria-label="Book via WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/12 bg-[rgba(7,29,37,0.96)] px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 text-white shadow-[0_-18px_40px_rgba(7,29,37,0.24)] backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
          <a
            href="#destinations"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-3 py-3 text-xs font-black text-white"
          >
            <MapPinned size={16} />
            Rute
          </a>
          <a
            href="#packages"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-3 py-3 text-xs font-black text-white"
          >
            <CalendarCheck size={16} />
            Paket
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F4A261] px-3 py-3 text-xs font-black text-[#071D25]"
          >
            <MessageCircle size={16} />
            Chat WA
          </a>
        </div>
      </div>
    </>
  )
}
