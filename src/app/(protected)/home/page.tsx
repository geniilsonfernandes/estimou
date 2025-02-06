import { Analytics } from '@/components/AnalyticsCard/Analytics'
import { BudgetList } from '@/components/BudgetList/BudgetList'
import { Notifications } from '@/components/Notifications/Notifications'
import { Button } from '@/components/ui/button'
import { UserInfo } from '@/components/UserInfo/UserInfo'
import { auth, signOut } from '@/utils/auth'
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

export default async function HomePage() {
  const session = await auth()
  return (
    <div className="flex flex-col md:flex-row">
      {session?.user?.email}

    <form action={
      async () => {
        "use server"
       await signOut()
      }
    }>
      <button>
        Sair
      </button>

    </form>
      <div className="flex-1 space-y-4 p-8">
        <UserInfo />
        <Notifications />
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <Button className="w-full bg-green-600 text-left"

          
          >
            <IconScriptPlus strokeWidth={2} />
            Budget
          </Button>
          <Button className="w-full text-left">
            <IconUserPlus strokeWidth={2} />
            Client
          </Button>
          <Button className="w-full text-left">
            <IconTagPlus strokeWidth={2} />
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
