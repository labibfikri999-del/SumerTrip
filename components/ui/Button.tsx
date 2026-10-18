import { cva, type VariantProps } from 'class-variance-authority'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-sunset text-ink-deep shadow-lg shadow-sunset/25 hover:bg-sunset-light',
        dark: 'bg-ink text-white hover:bg-ocean',
        light: 'bg-white text-ink shadow-float hover:bg-sand-100',
        glass: 'border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20',
      },
      size: {
        sm: 'h-10 px-4 text-sm',
        md: 'h-12 px-6 text-sm',
        lg: 'h-14 px-7 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

type Variants = VariantProps<typeof buttonVariants>

export function Button({ className, variant, size, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & Variants) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export function ButtonLink({ className, variant, size, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & Variants) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
