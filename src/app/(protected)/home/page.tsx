import { Analytics } from '@/components/AnalyticsCard/Analytics'
import { BudgetItemProps, Company } from '@/components/BudgetItem/BudgetItem'
import { BudgetList } from '@/components/BudgetList/BudgetList'
import { QuickAction } from '@/components/QuickActions/QuickAction'
import { UserInfo } from '@/components/UserInfo/UserInfo'
import { auth } from '@/utils/auth'

const clientCompany: Company = {
  name: 'TechNova Solutions',
  industry: 'Software Development',
  location: 'San Francisco, CA',
}

export const budgetItemsMock: BudgetItemProps[] = [
  {
    title: 'Website Redesign',
    date: '2025-02-20',
    status: 'Pending',
    amount: 2500.0,
    company: clientCompany,
    view: true,
  },
  {
    title: 'Marketing Campaign',
    date: '2025-02-18',
    status: 'Completed',
    amount: 4800.0,
    company: clientCompany,
    view: true,
  },
  {
    title: 'Software Development',
    date: '2025-02-15',
    status: 'In Progress',
    amount: 10000.0,
    company: clientCompany,
    view: true,
  },
  {
    title: 'Cloud Hosting Services',
    date: '2025-02-10',
    status: 'Pending',
    amount: 1200.0,
    company: clientCompany,
    view: false,
  },
  {
    title: 'SEO Optimization',
    date: '2025-02-05',
    status: 'Completed',
    amount: 3000.0,
    company: clientCompany,
    view: false,
  },
]

export default async function HomePage() {
  const session = await auth()
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 animate-top-bottom p-8 py-12">
        <UserInfo session={session} />
        <QuickAction />
        <BudgetList budgets={budgetItemsMock} />
      </div>
      <div className="sticky top-0 h-screen flex-1 py-4">
        <Analytics />
      </div>
    </div>
  )
}
