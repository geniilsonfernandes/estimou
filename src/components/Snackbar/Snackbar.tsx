import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { AlertCircle, AlertTriangle, CheckCircle } from 'lucide-react'

const snackbarVariants = cva('my-2 flex items-center rounded-md border p-4 text-sm font-medium', {
  variants: {
    variant: {
      success: 'border-green-300 bg-green-200 text-green-600',
      error: 'border-red-300 bg-red-200 text-red-600',
      warning: 'border-yellow-300 bg-yellow-200 text-yellow-600',
    },
  },
  defaultVariants: {
    variant: 'success',
  },
})

type SnackbarProps = {
  title?: string
  message?: string
} & VariantProps<typeof snackbarVariants> & React.HTMLAttributes<HTMLDivElement>

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
}

export const Snackbar: React.FC<SnackbarProps> = ({ message, variant = 'success', title, className, ...props }) => {
  if (!message) return null

  const Icon = iconMap[variant!]

  return (
    <div className={clsx(snackbarVariants({ variant }), className)} {...props}>
      <Icon className="mr-2 h-4 w-4" />
      <div>
        {title && <div className="font-semibold">{title}</div>}
        <div>{message}</div>
      </div>
    </div>
  )
}
