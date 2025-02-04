import { Analytics } from '@/components/AnalyticsCard/Analytics'
import { BudgetList } from '@/components/BudgetList/BudgetList'
import { Notifications } from '@/components/Notifications/Notifications'
import { Button } from '@/components/ui/button'
import { UserInfo } from '@/components/UserInfo/UserInfo'
import { IconScriptPlus, IconTagPlus, IconUserPlus } from '@tabler/icons-react'

import { forwardRef } from 'react'

interface ButtonWithIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  icon?: React.ReactNode
}

const ButtonWithIcon = forwardRef<HTMLButtonElement, ButtonWithIconProps>(
  ({ label, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className="lg`:flex-col flex w-full items-center gap-2 rounded-md border border-gray-200 bg-gray-100 p-2 text-left text-xs font-normal text-gray-900"
        {...props}
      >
        {icon && <span className="inline-flex rounded-lg border p-1 text-gray-900">{icon}</span>}
        <span className="block max-w-[70px]">{label}</span>
      </button>
    )
  }
)

ButtonWithIcon.displayName = 'ButtonWithIcon'

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 space-y-4 p-8">
        <UserInfo />
        <Notifications />
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <Button className="w-full text-left" variant={'secondary'}>
            <IconScriptPlus strokeWidth={1} size={18} />
            Budget
          </Button>
          <Button className="w-full text-left" variant={'secondary'}>
            <IconUserPlus strokeWidth={1} size={18} />
            Client
          </Button>
          <Button className="w-full text-left" variant={'secondary'}>
            <IconTagPlus strokeWidth={1} size={18} />
            Service
          </Button>
        </div>
        <BudgetList
          budgets={Array.from({ length: 5 }).map((_, index) => ({
            title: `Orcamento ${index + 1}`,
            date: '22/01/2023',
            status: 'Pendente',
            amount: 'R$ 2.000,00',
          }))}
        />
      </div>
      <div className="min-h-screen flex-1 bg-gray-100 py-8">
        <Analytics />
      </div>
    </div>
  )
}
