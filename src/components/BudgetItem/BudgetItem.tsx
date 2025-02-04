import { IconScript } from '@tabler/icons-react'
import { Badge } from '../ui/badge'

export interface BudgetItemProps {
  title: string
  date: string
  status: string
  amount: string
}

export const BudgetItem: React.FC<BudgetItemProps> = ({ title, date, status, amount }) => {
  return (
    <div className="inline-flex w-full cursor-pointer items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2 text-gray-700 hover:bg-gray-100">
      <div className="rounded-md bg-indigo-300 p-2">
        <IconScript strokeWidth={1} size={24} />
      </div>
      <div className="flex flex-1 flex-col items-start justify-start">
        <h1 className="text-sm font-semibold">{title}</h1>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <Badge className="mx-4" variant="outline">
        <span className="mr-1 h-2 w-2 rounded-full bg-red-600" />
        {status}
      </Badge>
      <span className="ml-auto text-xs font-semibold">{amount}</span>
    </div>
  )
}
