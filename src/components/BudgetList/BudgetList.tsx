import { BudgetItem, BudgetItemProps } from '../BudgetItem/BudgetItem'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface BudgetListProps {
  budgets: BudgetItemProps[]
}

export const BudgetList: React.FC<BudgetListProps> = ({ budgets }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-800">Orcamentos</span>
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <BudgetItem title="Orcamento 1" date="22/01/2023" status="Pendente" amount="R$ 2.000,00" />
        {budgets.map((budget) => (
          <BudgetItem key={budget.title} {...budget} />
        ))}
      </div>
    </div>
  )
}
