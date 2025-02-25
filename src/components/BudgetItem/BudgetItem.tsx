'use client'

import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import {
  Building,
  Calendar,
  CheckCheck,
  CheckCircle,
  DollarSign,
  Edit,
  Eye,
  Loader,
  Scroll,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from 'react'

export type Company = {
  name: string
  industry: string
  location: string
}

export type BudgetItemProps = {
  title: string
  date: string
  status: 'Pending' | 'Completed' | 'In Progress'
  amount: number
  company?: Company
  view?: boolean
}

export const BudgetItem: React.FC<BudgetItemProps> = ({
  title,
  date,
  status,
  amount,
  company,
  view,
}) => {
  const wrapper = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const height = 48
  const heightHovered = 90

  const statusColor = {
    Pending: 'bg-yellow-100 text-yellow-600 border-yellow-300',
    Completed: 'bg-green-100 text-green-600 border-green-300',
    'In Progress': 'bg-blue-100 text-blue-600 border-blue-300',
  }
  const statusIcon = {
    Pending: <Loader size={12} />,
    Completed: <CheckCircle size={12} />,
    'In Progress': <Loader size={12} />,
  }
  return (
    <AnimatePresence>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex w-full cursor-pointer flex-col justify-between rounded-xl border border-gray-100 bg-gray-50 p-2"
        animate={{ height: isHovered ? heightHovered : height }}
        initial={false}
        exit={{ height: height }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        layout
        ref={wrapper}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-300/40 bg-brand-200/40 text-brand-600">
            <Scroll size={16} strokeWidth={1.4} />
          </div>

          <div className="flex flex-1 flex-col items-start justify-start">
            <h1 className="text-xs font-semibold">{title}</h1>
            <div className="flex gap-1 text-xs text-gray-500">
              <Building size={14} strokeWidth={1} />
              {company?.name}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'flex items-center gap-2 rounded-md border border-green-300 bg-green-100 p-1 px-2 text-xs text-green-600 transition-all duration-500 ease-in-out',
                statusColor[status]
              )}
            >
              {statusIcon[status]}
              {status}
            </div>
            <span className="flex items-center gap-2 rounded-md border bg-white p-1 px-2 text-xs text-gray-500 transition-all duration-500 ease-in-out">
              <DollarSign size={16} />
              {amount.toLocaleString('pt-BR', { currency: 'BRL' })}
            </span>
          </div>
        </div>
        {isHovered && (
          <motion.div
            className="mt-auto flex items-center justify-between rounded-md text-xs text-gray-500"
            initial={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.2, delay: 0.1 },
            }}
            exit={{ opacity: 0, y: -8 }}
          >
            <span
              className={cn(
                'rounded-mdbg-white flex items-center gap-2 p-1 px-2 text-xs text-green-500 transition-all duration-500 ease-in-out',
                {
                  'text-red-600': !view,
                }
              )}
            >
              {view ? (
                <CheckCheck size={16} strokeWidth={1} />
              ) : (
                <CheckCheck size={16} strokeWidth={1} />
              )}

              {view ? 'Visualizado' : 'Não visualizado'}
            </span>
            <div className="flex gap-1 text-xs text-gray-500">
              <Calendar size={14} strokeWidth={1} />
              {format(new Date(date), 'dd/MM/yyyy')}
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-md border bg-white p-1 px-2 text-xs transition-all duration-500 ease-in-out hover:bg-gray-100">
                <Eye size={16} strokeWidth={1} />
                Preview
              </button>
              <button className="flex items-center gap-2 rounded-md border bg-white p-1 px-2 text-xs transition-all duration-500 ease-in-out hover:bg-gray-100">
                <Edit size={16} strokeWidth={1} />
                Editar
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
