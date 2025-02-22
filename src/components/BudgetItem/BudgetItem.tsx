import { Scroll } from 'lucide-react'
import { Badge } from '../ui/badge'

export interface BudgetItemProps {
  title: string
  date: string
  status: string
  amount: string
}

export const BudgetItem: React.FC<BudgetItemProps> = ({ title, date, status, amount }) => {
  return (
    <div className="inline-flex w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-500 ease-out hover:translate-y-[2px] hover:bg-gray-100">
      <div className="flex gap-2 p-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-secondary text-gray-500">
          <Scroll size={16} />
        </div>

        <div className="flex flex-1 flex-col items-start justify-start">
          <h1 className="text-xs font-semibold">{title}</h1>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col items-start justify-start">
            <h1 className="text-xs font-semibold">Valor</h1>
            <span className="text-xs text-gray-500">{amount}</span>
          </div>

          <Badge className="" variant="outline">
            <span className="mr-2 h-2 w-2 rounded-full bg-red-600" />
            {status}
          </Badge>
        </div>
      </div>
    </div>
  )
}
