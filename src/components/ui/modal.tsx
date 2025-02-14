'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { HTMLAttributes, useEffect } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      setTimeout(() => {
        document.body.style.overflow = 'auto'
        document.body.style.paddingRight = '0px'
      }, 200) 
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.paddingRight = '0px'
    }
  }, [isOpen])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative z-50 w-full max-w-md rounded-2xl bg-white p-4 shadow-sm"
          >
            {title && <div className="font-regular text-md flex opacity-45">{title}</div>}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-lg border p-2 text-gray-500 hover:text-gray-700"
            >
              <X size={16} />
            </button>
            <div className="space-y-4">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}

type ModalHeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, ...props }) => {
  return (
    <div className="my-4" {...props}>
      {children}
    </div>
  )
}

export const ModalFooter: React.FC<ModalHeaderProps> = ({ children, className,...props }) => {
  return (
    <div className={cn('pt-4', className)} {...props}>
      {children}
    </div>
  )
}

export default Modal
