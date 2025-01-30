'use client'

import { cn } from '@/lib/cn'
import Link from 'next/link'

import { cva, type VariantProps } from 'class-variance-authority'
import { ClassValue } from 'clsx'

const menuLinkVariants = cva(
  'flex items-center gap-4 border-r-2 border-transparent p-3 text-sm capitalize transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-brand-500 text-white hover:bg-brand-600',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        outline: 'border-gray-300 text-gray-900 hover:bg-gray-100',
        transparent: 'bg-transparent text-gray-500 hover:bg-gray-100',
      },
      hiddenLabel: {
        true: 'justify-center lg:justify-start',
        false: '',
      },
      size: {
        sm: 'py-1 text-xs',
        md: 'py-2 text-sm',
        lg: 'py-3 text-base',
      },
      active: {
        true: 'font-bold text-gray-900 border-gray-900',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      hiddenLabel: true,
    },
  }
)

interface MenuLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof menuLinkVariants> {
  href: string
  label: string
  leftSection?: React.ReactNode
  styles?: {
    label: ClassValue
  }
}

export const MenuLink: React.FC<MenuLinkProps> = ({
  href,
  leftSection,
  label,
  active,
  className,
  variant,
  size,
  hiddenLabel = true,
  ...props
}) => {
  return (
    <Link
      aria-label={label}
      href={href}
      className={cn(menuLinkVariants({ active, variant, size, hiddenLabel }), className)}
      {...props}
    >
      {leftSection && <span>{leftSection}</span>}
      <span className={cn({ 'hidden lg:block': hiddenLabel })}>{label}</span>
    </Link>
  )
}
