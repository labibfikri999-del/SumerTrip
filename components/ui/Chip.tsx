import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export const chipVariants = cva(
  'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full font-semibold',
  {
    variants: {
      variant: {
        glass: 'border border-white/25 bg-white/15 text-white backdrop-blur-md',
        light: 'bg-white text-ink shadow-float',
        sunset: 'bg-sunset-deep text-white shadow-lg shadow-sunset-deep/30',
        outline: 'border border-ink/10 bg-white/60 text-ink',
      },
      size: {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
      },
    },
    defaultVariants: { variant: 'glass', size: 'sm' },
  },
)

export function Chip({ className, variant, size, ...props }: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof chipVariants>) {
  return <span className={cn(chipVariants({ variant, size }), className)} {...props} />
}
