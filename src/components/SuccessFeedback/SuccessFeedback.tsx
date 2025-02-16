'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

type SuccessFeedbackProps = {
  icon?: React.ReactNode
  title?: string
  subtitle?: string
  children?: React.ReactNode
  color?: "brand" | "green"
}
export const SuccessFeedback: React.FC<SuccessFeedbackProps> = ({
  title,
  subtitle,
  children,
  icon,
  color = 'green',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.2,
        bounce: 0.5,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className="fade flex flex-col items-center gap-4 pt-6"
    >
      <div className={cn("inline-flex rounded-full bg-green-100/50 p-2 text-green-600",{
        'bg-brand-100/50 text-brand-600': color === 'brand'
      })}>
        <div className={cn("inline-flex items-center justify-center rounded-full bg-green-200 p-2",{
          'bg-brand-200': color === 'brand'
        })}>
          {icon ? icon : <CheckCircle strokeWidth={1} size={32} />}
        </div>
      </div>
      <div className="">
      <h1 className="text-center text-2xl mb-2 font-semibold">{title}</h1>
      <p className="text-center text-sm text-muted-foreground">{subtitle}</p>
      </div>
      {children}
    </motion.div>
  )
}
