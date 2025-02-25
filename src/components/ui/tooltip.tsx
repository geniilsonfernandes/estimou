import { motion } from 'motion/react'
import { useState } from 'react'

type TooltipProps = {
  text: string
  children: React.ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      tabIndex={0} // Permite foco para acessibilidade
    >
      {children}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          role="tooltip"
          className="absolute bottom-full mb-2 rounded-lg bg-gray-800 px-3 py-1 text-sm text-white shadow-md"
        >
          {text}
        </motion.div>
      )}
    </div>
  )
}
