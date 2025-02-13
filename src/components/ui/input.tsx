import * as React from 'react'

import { cn } from '@/lib/utils'
import { IconEye, IconEyeOff } from '@tabler/icons-react'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:border-brand-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    )
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
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:border-brand-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className
          )}
          {...props}
        />
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500"
        >
          {isVisible ? <IconEye size={18} /> : <IconEyeOff size={18} />}
        </button>
      </div>
    )
  }
)

InputPassword.displayName = 'InputPassword'

export { Input, InputPassword }
