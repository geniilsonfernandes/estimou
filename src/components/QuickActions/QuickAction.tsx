'use client'

import { cn } from '@/lib/utils'
import { IconScriptPlus } from '@tabler/icons-react'
import { Package, UserPlus } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'




type QuickActionItemProps = {
  title: string
  icon: React.ReactNode
  color?: 'brand' | 'green' | 'red' | 'blue' | 'yellow'
}

const QuickActionItem: React.FC<QuickActionItemProps> = ({ title, icon, color }) => {
  const colorScheme = {
    brand: 'bg-brand-200/40 text-brand-600 border-brand-300/40 hover:ring-4 ring-brand-100  ',
    green: 'bg-green-200/40 text-green-600 border-green-300/40 hover:ring-4 ring-green-100',
    red: 'bg-red-200/40 text-red-600 border-red-300/40 hover:ring-4 ring-red-100',
    blue: 'bg-blue-200/40 text-blue-600 border-blue-300/40 hover:ring-4 ring-blue-100',
    yellow: 'bg-yellow-200/40 text-yellow-600 border-yellow-300/40 hover:ring-4 ring-yellow-100',
  }
  const colorIcon = {
    brand: 'text-brand-600 bg-brand-200/40',
    green: 'text-green-600 bg-green-200/40',
    red: 'text-red-600 bg-red-200/40',
    blue: 'text-blue-600 bg-blue-200/40',
    yellow: 'text-yellow-600 bg-yellow-200/40',
  }
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.01 }}
      className={cn(
        'flex w-full gap-2 rounded-xl ring-0 transition-all p-3 border text-left text-sm text-gray-800/90 md:flex-col md:gap-0 ',
        colorScheme[color ?? 'brand']
      )}
    >
      <div
        className={cn(
          'flex h-7 w-7 items-center justify-center rounded-lg bg-brand-200/40 text-brand-600',
          colorIcon[color ?? 'brand']
        )}
      >
        {icon}
      </div>
      <div className="mt-5 text-xs font-semibold">{title}</div>
    </motion.button>
  )
}

export const QuickAction = () => {
  return (
    <motion.div
      // initial={{ opacity: 0, y: -8 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.2, ease: 'easeOut' }}
      className="card my-6 flex animate-top-bottom flex-col gap-2"
    >
      <h1 className="text-xs text-gray-500">Acesso rápido</h1>
      <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
        <QuickActionItem
          title="Novo orcamento"
          icon={<IconScriptPlus size={18} strokeWidth={1.4} />}
        />
        <QuickActionItem
          title="Novo cliente"
          icon={<UserPlus size={18} strokeWidth={1.4} />}
        
        />
        <QuickActionItem
          title="Novo servico"
          icon={<Package size={18} strokeWidth={1.4} />}
        />
      </div>
    </motion.div>
  )
}
