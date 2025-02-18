'use client'

import { Settings2, TrendingUp, User2 } from 'lucide-react'
import { Line, LineChart, XAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Button } from '../ui/button'
const chartData = [
  { month: 'January', closed: 1, pending: 80 },
  { month: 'February', closed: 305, pending: 200 },
  { month: 'March', closed: 237, pending: 120 },
  { month: 'April', closed: 73, pending: 190 },
  { month: 'May', closed: 209, pending: 130 },
  { month: 'June', closed: 214, pending: 140 },
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

export const Analytics: React.FC = () => {
  return (
    <div className="sticky top-0 space-y-8 px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Seus orçamentos neste mês</h1>
          <span className="text-sm text-gray-500">
            234 <span className="text-gray-500">orçamentos</span> foram criados até agora
          </span>
        </div>
        <Button variant="ghost">
          <Settings2 strokeWidth={1} />
        </Button>
      </div>

      <div className="my-6 flex items-center gap-2">
        {['2024', '2025'].map((year) => (
          <Button
            size="sm"
            key={year}
            variant={year === '2025' ? 'default' : 'outline'}
            className="cursor-pointer rounded-full text-sm"
          >
            {year}
          </Button>
        ))}
      </div>

      <ChartContainer config={chartConfig} className="h-[200px] w-full">
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
            fill="url(#gradientClosed)"
            stroke="green"
            activeDot={{
              r: 6,
              fill: 'green',
            }}
          />
          <Line
            type="monotone"
            dataKey="pending"
            strokeWidth={2}
            stroke="orange"
            activeDot={{
              r: 8,
              style: { fill: 'orange' },
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

      <div className="space-y-2 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <div className="flex gap-2 text-sm font-medium leading-none">
          Crescimento de 5,2% este mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-xs leading-none text-muted-foreground">
          Exibindo o total de orçamentos dos últimos 6 meses
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Novos clientes</CardTitle>
          <User2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12</div>
          <p className="text-xs text-muted-foreground">
            Crescimento de 19% em relação ao mês passado
          </p>
        </CardContent>
      </Card>
    </div>
  )
}