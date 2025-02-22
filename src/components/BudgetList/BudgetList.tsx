import { BudgetItem, BudgetItemProps } from '../BudgetItem/BudgetItem'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface BudgetListProps {
  budgets: BudgetItemProps[]
}

export const BudgetList: React.FC<BudgetListProps> = ({ budgets }) => {
  const statusOptions = [
    { label: 'Pending', value: 'Pending' },
    { label: 'Approved', value: 'Approved' },
    { label: 'Rejected', value: 'Rejected' },
  ]

  return (
    <div className="flex flex-col gap-2 rounded-md bg-gradient-to-b from-gray-100 to-transparent p-3 shadow-brand-100/30">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">Orcamentos recentes</span>
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Status" className="text-xs" />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <BudgetItem title="Orcamento 1" date="22/01/2023" status="Pendente" amount="R$ 2.000,00" />
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
