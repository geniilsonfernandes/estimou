import { BudgetList } from '@/components/BudgetList/BudgetList'
import {
  IconBell,
  IconScriptPlus,
  IconSettings,
  IconTagPlus,
  IconUser,
  IconUserPlus,
} from '@tabler/icons-react'
import { format } from 'date-fns'

import { forwardRef } from 'react'

const UserInfo = () => {
  return (
    <div aria-label="user info group" className="flex justify-between">
      <div>
        <h2 className="text-sm text-gray-500">Hello. Welcome back,</h2>
        <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
      </div>
      <div className="h-10 w-10 rounded-full bg-gray-200">
        <IconUser strokeWidth={1} />
      </div>
    </div>
  )
}

const NotificationsCard: React.FC = () => {
  return (
    <div className="relative">
      <div className="relative z-10 flex flex-1 items-center justify-between rounded-md bg-gray-900 p-4 py-6 shadow-md">
        <div>
          <span className="text-xs text-gray-400">{format(new Date(), 'PP')}</span>
          <h1 className="text-md font-semibold text-white">Suas Notificações irão aparecer aqui</h1>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-200 text-gray-700 active:bg-brand-300">
          <IconBell strokeWidth={1} />
        </button>
      </div>
      <div className="relative mx-2 -mt-[18px] h-6 rounded-md bg-blue-200"></div>
    </div>
  )
}

const AnalyticsCard: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold text-gray-900">Seus orcamentos este mes</h1>
        <span className="text-sm text-gray-500">
          234 <span className="text-gray-500">orcamentos</span> foram criados
        </span>
      </div>
      <button className="flex h-10 w-10 items-center justify-center rounded-lg border text-gray-700">
        <IconSettings strokeWidth={1} />
      </button>
    </div>
  )
}

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
        <NotificationsCard />
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <ButtonWithIcon label="Orcamento" icon={<IconScriptPlus strokeWidth={1} size={18} />} />
          <ButtonWithIcon label="Cliente" icon={<IconUserPlus strokeWidth={1} size={18} />} />
          <ButtonWithIcon label="Servico" icon={<IconTagPlus strokeWidth={1} size={18} />} />
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
      <div className="min-h-screen flex-1 bg-gray-100 p-8">
        <AnalyticsCard />
      </div>
    </div>
  )
}
