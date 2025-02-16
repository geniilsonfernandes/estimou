import * as React from 'react'

import { cn } from '@/lib/utils'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { cva } from 'class-variance-authority'

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:bg-brand-100/70 hover:bg-brand-100/70 focus:border-brand-300 hover:border-brand-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all aria-[invalid=true]:bg-red-100/70 aria-[invalid=true]:border-red-300'
)

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return <input type={type} className={cn(inputVariants(), className)} ref={ref} {...props} />
  }
)

Input.displayName = 'Input'

const InputPassword = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)

    const toggleVisibility = () => {
      setIsVisible((prev) => !prev)
    }

    return (
      <div className="relative">
        <input
          ref={ref}
          type={isVisible ? 'text' : 'password'}
          className={cn(inputVariants(), className)}
          {...props}
        />
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 transform text-brand-500"
        >
          {isVisible ? <IconEye size={18} /> : <IconEyeOff size={18} />}
        </button>
      </div>
    )
  }
)

InputPassword.displayName = 'InputPassword'

export { Input, InputPassword }
