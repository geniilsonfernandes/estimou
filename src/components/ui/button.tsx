import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { Loader } from '../Loader/Loader'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-brand  text-primary-foreground/90 hover:bg-brand/90',
        destructive: 'bg-destructive text-destructive-foreground/90 hover:bg-destructive/90',
        outline:
          'border border-input text-black/70  bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'text-secondary-foreground/90 hover:btn-gray-500/80',
        ghost: 'hover:bg-accent text-black/70 hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const children = props.children

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        <span
          className={cn(
            'duration-400 absolute transition-all ease-in-out',
            isLoading ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          )}
        >
          <Loader />
        </span>

        <span
          className={cn(
            'duration-400 flex items-center gap-2 transition-all ease-in-out',
            isLoading ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
          )}
        >
          {children}
        </span>
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
