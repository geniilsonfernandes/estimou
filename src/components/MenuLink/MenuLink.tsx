'use client'

import { cn } from '@/lib/cn'
import Link from 'next/link'

import { cva, type VariantProps } from 'class-variance-authority'
import { ClassValue } from 'clsx'
import { Plus } from 'lucide-react'
import { AnimatePresence } from 'motion/react'

const menuLinkVariants = cva(
  'flex items-center gap-4  border-transparent hover:gap-[14px] transition-all text-sm font-normal capitalize rounded-xl border',
  {
    variants: {
      hiddenLabel: {
        true: '',
        false: '',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-[11px] text-sm ',
        lg: 'h-12 px-4 text-base',
      },
      active: {
        true: 'bg-brand-200/40 text-brand-600 border-brand-300/40 ',
        false: 'hover:border-gray-100/90 hover:bg-white/70 text-gray-600',
      },
    },
    defaultVariants: {
      size: 'md',
      hiddenLabel: true,
    },
  }
)

interface MenuLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof menuLinkVariants> {
  href: string
  label?: string
  leftSection?: React.ReactNode
  actionClick?: () => void
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
  size,
  hiddenLabel = false,
  actionClick,
  ...props
}) => {
  return (
    <AnimatePresence>
      <div className="relative">
        <Link
          aria-label={label}
          href={href}
          className={cn(menuLinkVariants({ active, size, hiddenLabel }), className)}
          {...props}
        >
          {leftSection && <span>{leftSection}</span>}
          {!hiddenLabel && <span className="animate-leftRight duration-500">{label}</span>}
        </Link>
        {actionClick && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              actionClick?.()
            }}
            className="absolute right-2 top-2 flex animate-leftRight items-center justify-center rounded-lg border border-brand-300/40 bg-brand-200/40 p-[3px] text-brand-600 ring-0 ring-brand-200 transition-all duration-300 ease-in-out hover:ring-2"
          >
            <Plus size={16} />
          </button>
        )}
      </div>
    </AnimatePresence>
  )
}
