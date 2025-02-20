'use client'

import { cn } from '@/lib/cn'
import Link from 'next/link'

import { cva, type VariantProps } from 'class-variance-authority'
import { ClassValue } from 'clsx'

const menuLinkVariants = cva('flex items-center gap-4 p-3  text-sm capitalize rounded-lg', {
  variants: {
    variant: {
      primary: ' text-white',
      secondary: 'bg-gray-200 text-gray-900',
      outline: ' text-gray-900',
      transparent: 'bg-transparent text-gray-600 hover:bg-white/50',
    },
    hiddenLabel: {
      true: 'justify-center lg:justify-start',
      false: '',
    },
    size: {
      sm: 'py-1 text-xs',
      md: 'py-3 text-sm',
      lg: 'py-4 text-base',
    },
    active: {
      true: ' bg-gradient-to-r from-brand-400/15 to-brand-100/10 text-brand-500 [&_svg]:text-brand-600 hover:bg-white/10',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    hiddenLabel: true,
  },
})

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
