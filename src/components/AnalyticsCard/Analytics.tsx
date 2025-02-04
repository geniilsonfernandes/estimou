import { Settings2 } from 'lucide-react'

export const Analytics: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold text-gray-900">Seus orcamentos este mes</h1>
        <span className="text-sm text-gray-500">
          234 <span className="text-gray-500">orcamentos</span> foram criados
        </span>
      </div>
      <button className="flex h-10 w-10 items-center justify-center rounded-lg border text-gray-700">
        <Settings2 strokeWidth={1} />
      </button>
    </div>
  )
}
