import { BudgetItem, BudgetItemProps } from '../BudgetItem/BudgetItem'
import { Button } from '../ui/button'

interface BudgetListProps {
  budgets: BudgetItemProps[]
}

export const BudgetList: React.FC<BudgetListProps> = ({ budgets }) => {
  return (
    <div className="card flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">Recentes</span>
      </div>
      <div className="space-y-2">
        {budgets.map((budget) => (
          <BudgetItem key={budget.title} {...budget} />
        ))}
        <Button variant="link" className="w-full" size="sm">
          Ver Todos
        </Button>
      </div>
    </div>
  )
}
