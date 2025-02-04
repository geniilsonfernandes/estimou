import { cn } from '@/lib/cn'
import { IconBrandAlipay } from '@tabler/icons-react'
import React from 'react'

export const Logo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      <IconBrandAlipay size={22} stroke={1} />
    </div>
  )
}
