import { Analytics } from '@/components/AnalyticsCard/Analytics'
import { BudgetList } from '@/components/BudgetList/BudgetList'
import { UserInfo } from '@/components/UserInfo/UserInfo'
import { auth } from '@/utils/auth'
import { IconScriptPlus } from '@tabler/icons-react'
import { Sparkles } from 'lucide-react'

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

type ButtonActionProps = {
  title: string
  icon: React.ReactNode
}

const ButtonAction: React.FC<ButtonActionProps> = ({ title, icon }) => {
  return (
    <button className="flex w-full gap-2 rounded-md border border-gray-200 bg-gray-50 p-2 text-left text-sm text-gray-600 transition-all duration-500 ease-out hover:translate-y-1 md:flex-col md:gap-0">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200/50 text-gray-500">
        {icon}
      </div>
      <div className="mt-2 text-xs font-semibold">{title}</div>
    </button>
  )
}

export default async function HomePage() {
  const session = await auth()
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="flex-1 p-8 py-12">
        <UserInfo session={session} />
        <div className="my-6 flex flex-col gap-2 rounded-md bg-gradient-to-b from-gray-100 to-transparent p-3 shadow-brand-100/30">
          <div className="flex items-center justify-between text-gray-500">
            <h1 className="text-xs">Acesso rápido</h1>
            <Sparkles size={16} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
            <ButtonAction
              title="Novo orcamento"
              icon={<IconScriptPlus size={18} strokeWidth={1.4} />}
            />
            <ButtonAction
              title="Novo cliente"
              icon={<IconScriptPlus size={18} strokeWidth={1.4} />}
            />
            <ButtonAction
              title="Novo servico"
              icon={<IconScriptPlus size={18} strokeWidth={1.4} />}
            />
          </div>
        </div>
        <BudgetList
          budgets={Array.from({ length: 2 }).map((_, index) => ({
            title: `Orcamento ${index + 1}`,
            date: '22/01/2023',
            status: 'Pendente',
            amount: 'R$ 2.000,00',
          }))}
        />
      </div>
      <div className="flex-1 bg-gray-100">
        <Analytics />
      </div>
    </div>
  )
}
