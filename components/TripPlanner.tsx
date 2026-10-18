'use client'

import { useState, type ReactNode } from 'react'
import * as Popover from '@radix-ui/react-popover'
import * as Select from '@radix-ui/react-select'
import { DayPicker, type DateRange } from 'react-day-picker'
import { CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, MapPin, Minus, Plus, Send, Users } from 'lucide-react'
import { plannerDestinations, whatsappUrl } from '../lib/travel-data'
import { cn } from '../lib/cn'
import { buttonVariants } from './ui/Button'

const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short' })

function formatRange(range?: DateRange) {
  if (!range?.from) return 'Add dates'
  if (!range.to || range.to.getTime() === range.from.getTime()) return dateFormat.format(range.from)
  return `${dateFormat.format(range.from)} – ${dateFormat.format(range.to)}`
}

function Field({ icon, label, value, muted }: { icon: ReactNode; label: string; value: string; muted?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-3 text-left">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sand-100 text-ocean">{icon}</span>
      <span className="min-w-0">
        <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">{label}</span>
        <span className={cn('block truncate text-sm font-semibold', muted ? 'text-ink-soft/70' : 'text-ink')}>{value}</span>
      </span>
    </span>
  )
}

const triggerClass =
  'group flex w-full items-center justify-between gap-2 rounded-2xl px-3 py-2.5 outline-none transition hover:bg-sand-50 focus-visible:ring-2 focus-visible:ring-sunset data-[state=open]:bg-sand-50'

const panelClass =
  'z-[60] rounded-3xl border border-ink/5 bg-white p-3 shadow-[0_24px_60px_rgba(9,42,55,0.18)]'

function Stepper({ label, hint, value, min, onChange }: { label: string; hint: string; value: number; min: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center justify-between gap-6 px-2 py-3">
      <div>
        <p className="text-sm font-semibold text-ink">{label}</p>
        <p className="text-xs text-ink-soft">{hint}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-ink transition hover:border-ocean hover:text-ocean disabled:opacity-30"
          aria-label={`Fewer ${label.toLowerCase()}`}
        >
          <Minus size={15} />
        </button>
        <span className="w-5 text-center font-display text-lg font-semibold tabular-nums">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-ink transition hover:border-ocean hover:text-ocean"
          aria-label={`More ${label.toLowerCase()}`}
        >
          <Plus size={15} />
        </button>
      </div>
    </div>
  )
}

export function TripPlanner({ className }: { className?: string }) {
  const [destination, setDestination] = useState<string>()
  const [range, setRange] = useState<DateRange>()
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)

  const guests = `${adults} adult${adults > 1 ? 's' : ''}${children ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''}`
  const message = [
    'Halo SummerTrip, saya ingin rencanakan trip:',
    `• Destinasi: ${destination ?? 'belum ditentukan'}`,
    `• Tanggal: ${range?.from ? formatRange(range) : 'fleksibel'}`,
    `• Tamu: ${guests}`,
    'Bisa bantu buatkan itinerary dan harganya?',
  ].join('\n')

  return (
    <div
      className={cn(
        'grid gap-1 rounded-[1.75rem] bg-white p-2 shadow-[0_30px_70px_rgba(9,42,55,0.16)] md:grid-cols-[1.25fr_1fr_1fr_auto] md:items-center md:gap-0',
        className,
      )}
    >
      <Select.Root value={destination} onValueChange={setDestination}>
        <Select.Trigger className={triggerClass} aria-label="Destination">
          <Field icon={<MapPin size={17} />} label="Destination" value={destination ?? 'Where to?'} muted={!destination} />
          <Select.Icon>
            <ChevronDown size={16} className="text-ink-soft transition group-data-[state=open]:rotate-180" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content position="popper" sideOffset={10} className={cn(panelClass, 'w-[var(--radix-select-trigger-width)] min-w-[240px]')}>
            <Select.Viewport data-lenis-prevent>
              {plannerDestinations.map((item) => (
                <Select.Item
                  key={item}
                  value={item}
                  className="flex cursor-pointer select-none items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-semibold text-ink outline-none data-[highlighted]:bg-sand-50 data-[state=checked]:text-ocean"
                >
                  <Select.ItemText>{item}</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check size={15} />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>


      <Popover.Root>
        <Popover.Trigger className={cn(triggerClass, 'md:border-l md:border-ink/10 md:rounded-l-none')}>
          <Field icon={<CalendarDays size={17} />} label="Dates" value={formatRange(range)} muted={!range?.from} />
          <ChevronDown size={16} className="text-ink-soft transition group-data-[state=open]:rotate-180" />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content sideOffset={10} align="start" className={panelClass}>
            <DayPicker
              mode="range"
              selected={range}
              onSelect={setRange}
              disabled={{ before: new Date() }}
              weekStartsOn={1}
              showOutsideDays
              components={{
                Chevron: ({ orientation }) =>
                  orientation === 'left' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />,
              }}
              classNames={{
                root: 'relative p-1',
                months: 'relative',
                month_caption: 'flex h-10 items-center px-2 font-display text-base font-semibold text-ink',
                nav: 'absolute right-1 top-1 z-10 flex gap-1',
                button_previous: 'grid h-8 w-8 place-items-center rounded-full text-ink hover:bg-sand-50 disabled:opacity-30',
                button_next: 'grid h-8 w-8 place-items-center rounded-full text-ink hover:bg-sand-50 disabled:opacity-30',
                month_grid: 'mt-1 border-collapse',
                weekdays: '',
                weekday: 'h-9 w-10 text-[0.68rem] font-semibold uppercase tracking-wider text-ink-soft',
                week: '',
                day: 'p-0 text-center',
                day_button:
                  'mx-auto grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-ink outline-none transition hover:bg-sand-100 focus-visible:ring-2 focus-visible:ring-sunset',
                today: '[&>button]:text-sunset-deep',
                outside: '[&>button]:text-ink-soft/40',
                disabled: '[&>button]:pointer-events-none [&>button]:text-ink-soft/30',
                range_middle: 'bg-sand-100 [&>button]:rounded-none [&>button]:hover:bg-sand-200',
                range_start: 'rounded-l-full bg-sand-100 [&>button]:bg-ink [&>button]:text-white',
                range_end: 'rounded-r-full bg-sand-100 [&>button]:bg-ink [&>button]:text-white',
                selected: '',
              }}
            />
            <div className="mt-2 flex items-center justify-between border-t border-ink/5 px-2 pt-3">
              <button type="button" onClick={() => setRange(undefined)} className="text-xs font-semibold text-ink-soft hover:text-ink">
                Clear
              </button>
              <Popover.Close className={buttonVariants({ variant: 'dark', size: 'sm' })}>Done</Popover.Close>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger className={cn(triggerClass, 'md:border-l md:border-ink/10 md:rounded-l-none')}>
          <Field icon={<Users size={17} />} label="Guests" value={guests} />
          <ChevronDown size={16} className="text-ink-soft transition group-data-[state=open]:rotate-180" />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content sideOffset={10} align="start" className={cn(panelClass, 'w-72 divide-y divide-ink/5')}>
            <Stepper label="Adults" hint="Age 13+" value={adults} min={1} onChange={setAdults} />
            <Stepper label="Children" hint="Age 2–12" value={children} min={0} onChange={setChildren} />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <a
        href={whatsappUrl(message)}
        target="_blank"
        rel="noreferrer"
        className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'mt-1 w-full md:ml-2 md:mt-0 md:w-auto')}
      >
        <Send size={17} />
        Plan my trip
      </a>
    </div>
  )
}
