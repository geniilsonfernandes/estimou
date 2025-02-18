import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, AlertTriangle, CheckCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const snackbarVariants = cva(
  'my-2 flex items-center w-full rounded-md border p-2 px-4 text-sm font-medium relative',
  {
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
  }
)

type SnackbarProps = {
  title?: string
  message?: string
  hiddenCloseButton?: boolean
} & VariantProps<typeof snackbarVariants> &
  React.HTMLAttributes<HTMLDivElement>

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
}

export const Snackbar: React.FC<SnackbarProps> = ({
  message,
  variant = 'success',
  title,
  className,
  hiddenCloseButton = false,
}) => {
  const [open, setOpen] = useState(message ? true : false)

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (message) {
      setOpen(true)
    }
  }, [message])

  const Icon = iconMap[variant!]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={clsx(snackbarVariants({ variant }), className)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            type: 'spring',
            stiffness: 200, // Define a força da mola (aumentar para um bounce mais rápido)
            damping: 12, // Controla o amortecimento (menor = mais oscilação)
            mass: 0.5, // Deixa o objeto mais "leve" e saltitante
          }}
        >
          <Icon className="mr-2 h-4 w-4 flex-shrink-0" />
          <div>
            {title && <div className="font-semibold">{title}</div>}
            <div>{message}</div>
          </div>
          {!hiddenCloseButton && (
            <button
              type="button"
              onClick={handleClose}
              className="right-2 top-2 ml-auto flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
