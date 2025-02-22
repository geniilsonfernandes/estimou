import { BudgetItem, BudgetItemProps } from '../BudgetItem/BudgetItem'
import { Button } from '../ui/button'

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
    <div className="card flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">Orcamentos recentes</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Filtrar por:</span>
          <Button variant="default" size="xs">
            Todos
          </Button>
          <Button size="xs" variant="outline">
            Pendentes
          </Button>
          <Button size="xs" variant="outline">
            Aprovados
          </Button>
        </div>
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
