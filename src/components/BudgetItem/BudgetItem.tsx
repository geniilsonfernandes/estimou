import { PanelRight, Scroll } from 'lucide-react'
import { Badge } from '../ui/badge'

export interface BudgetItemProps {
  title: string
  date: string
  status: string
  amount: string
}

export const BudgetItem: React.FC<BudgetItemProps> = ({ title, date, status, amount }) => {
  return (
    <div className="inline-flex w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-500 ease-out hover:translate-y-1 hover:bg-gray-100">
      <div className="flex gap-2 p-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200/50 text-gray-500">
          <Scroll size={16} />
        </div>
        <div className="flex flex-1 flex-col items-start justify-start">
          <h1 className="text-xs font-semibold">{title}</h1>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <button className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 text-gray-400 hover:bg-gray-200">
          <PanelRight size={16} />
        </button>
      </div>
      <div className="flex justify-between border-t border-gray-200 bg-gray-100 p-2 py-1">
        <Badge className="" variant="outline">
          <span className="mr-2 h-2 w-2 rounded-full bg-red-600" />
          {status}
        </Badge>
        <span className="ml-auto text-xs font-semibold">{amount}</span>
      </div>
    </div>
  )
}
