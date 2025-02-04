import { format } from 'date-fns'
import { ChevronsUpDown } from 'lucide-react'

export const Notifications: React.FC = () => {
  return (
    <div className="relative">
      <div className="relative z-10 flex flex-1 items-center justify-between rounded-md bg-gray-900 p-4 py-6 shadow-md">
        <div>
          <span className="text-xs text-gray-400">{format(new Date(), 'PP')}</span>
          <h1 className="text-md font-semibold text-white">Suas Notificações irão aparecer aqui</h1>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-200 text-gray-700 active:bg-brand-300">
          <ChevronsUpDown strokeWidth={1} size={24} />
        </button>
      </div>
      <div className="relative mx-2 -mt-[18px] h-6 rounded-md bg-blue-200"></div>
    </div>
  )
}
