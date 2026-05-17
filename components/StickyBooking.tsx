import { CalendarCheck, MessageCircle } from 'lucide-react'

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

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/12 bg-[#071D25]/94 p-3 text-white backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          <a
            href="#packages"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 px-4 py-3 text-sm font-black"
          >
            <CalendarCheck size={17} />
            Packages
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4A261] px-4 py-3 text-sm font-black text-[#071D25]"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
