'use client'

import { CheckCircle, PackageX, TrendingUp, UserPlus } from 'lucide-react'
import { Line, LineChart, XAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { cn } from '@/lib/utils'
const chartData = [
  { month: 'January', closed: 1, pending: 80 },
  { month: 'February', closed: 305, pending: 200 },
  { month: 'March', closed: 237, pending: 120 },
  { month: 'April', closed: 73, pending: 190 },
  { month: 'May', closed: 209, pending: 130 },
  { month: 'June', closed: 214, pending: 140 },
  { month: 'July', closed: 215, pending: 150 },
  { month: 'August', closed: 216, pending: 160 },
  { month: 'September', closed: 217, pending: 170 },
  { month: 'October', closed: 218, pending: 180 },
  { month: 'November', closed: 219, pending: 190 },
  { month: 'December', closed: 220, pending: 200 },
]

// const data = [
//   { x: 1, y: 1, z: 2 },
//   { x: 2, y: 1, z: 5 },
//   { x: 3, y: 1, z: 10 },
//   { x: 4, y: 1, z: 1 },
//   { x: 5, y: 1, z: 7 },
//   { x: 6, y: 1, z: 3 },
// ]

// const getColor = (z: number) => {
//   if (z === 0) return '#ebedf0'
//   if (z < 3) return '#c6e48b'
//   if (z < 6) return '#7bc96f'
//   if (z < 9) return '#239a3b'
//   return '#196127'
// }

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#363636',
  },
  mobile: {
    label: 'Mobile',
    color: '#949494',
  },
} satisfies ChartConfig

type AnalyticsProps = {
  title: string
  color?: 'brand' | 'green' | 'red' | 'blue' | 'yellow'
  icon?: React.ReactNode
}

const AnalyticCard: React.FC<AnalyticsProps> = ({ title, color, icon }) => {
  const colorScheme = {
    gray: 'bg-gray-200/40 text-gray-600 border-gray-300/40',
    brand: 'bg-brand-200/40 text-brand-600 border-brand-300/40',
    green: 'bg-green-200/40 text-green-600 border-green-300/40',
    red: 'bg-red-200/40 text-red-600 border-red-300/40',
    blue: 'bg-blue-200/40 text-blue-600 border-blue-300/40',
    yellow: 'bg-yellow-200/40 text-yellow-600 border-yellow-300/40',
  }
  return (
    <div
      className={cn(
        'space-y-2 rounded-lg border border-brand-200 bg-white/30 p-4 text-card-foreground',
        colorScheme[color ?? 'gray']
      )}
    >
      <div className="flex flex-row items-center justify-between space-y-0">
        <h1 className="text-sm font-bold">{title}</h1>
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold opacity-70">+12</div>
        <p className="text-xs opacity-50">Crescimento de 19% em relação ao mês passado</p>
      </div>
    </div>
  )
}

export const Analytics: React.FC = () => {
  return (
    <div className="sticky top-0 animate-right-left space-y-4 rounded-l-2xl border-b border-l border-t border-brand-200 bg-brand-200/10 p-4 shadow-gray-200/50">
      <div>
        <h1 className="text-lg font-semibold text-gray-900">Seus orçamentos neste mês</h1>
        <span className="text-sm text-gray-500">
          234 <span className="text-gray-500">orçamentos</span> foram criados até agora
        </span>
      </div>

      <div className="rounded-lg border border-brand-200 bg-brand-200/10 p-4">
        <div className="mb-7 space-y-2 rounded-lg text-card-foreground">
          <div className="flex gap-2 text-sm font-medium leading-none">
            Crescimento de 5,2% este mês <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-xs leading-none text-muted-foreground">
            Exibindo o total de orçamentos dos últimos 6 meses
          </div>
        </div>
        <ChartContainer config={chartConfig} className="h-[100px] w-full">
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 10,
              left: 20,
              bottom: 10,
            }}
          >
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="closed"
              fill="#4F46E5"
              stroke="#4F46E5"
              activeDot={{
                r: 6,
                fill: '#4F46E5',
              }}
            />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(month: string) => {
                    return month?.substring(0, 3)
                  }}
                  indicator="line"
                />
              }
              cursor={false}
              defaultIndex={1}
            />
            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} hide />
          </LineChart>
        </ChartContainer>
      </div>
      <AnalyticCard title="Novos Clients" icon={<UserPlus size={18} strokeWidth={1.4} />} />
      <AnalyticCard
        title="Orcamentos fechados"
        icon={<CheckCircle size={18} strokeWidth={1.4} />}
      />
      <AnalyticCard
        title="Cancelados"
        color="red"
        icon={<PackageX size={18} strokeWidth={1.4} />}
      />
    </div>
  )
}
