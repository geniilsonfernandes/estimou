import { cn } from '@/lib/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

const buttonVariants = cva(
  'flex items-center gap-4 border border-transparent p-3 text-sm capitalize transition-colors rounded-md',
  {
    variants: {
      variant: {
        primary: 'bg-brand-500 text-white hover:bg-brand-600',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        outline: 'border-gray-300 text-gray-900 hover:bg-gray-100',
        transparent: 'bg-transparent text-gray-500 hover:bg-gray-100',
      },
      size: {
        sm: 'px-3 py-1 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftSection?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, leftSection, variant, size, className, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props}>
        {leftSection && <span>{leftSection}</span>}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button' // Evita warnings no React DevTools
