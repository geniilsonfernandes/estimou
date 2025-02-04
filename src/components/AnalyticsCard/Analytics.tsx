'use client'

import { Settings2, TrendingUp } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Card } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Button } from '../ui/button'
const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
  { month: 'July', desktop: 214, mobile: 140 },
  { month: 'August', desktop: 214, mobile: 140 },
  { month: 'September', desktop: 214, mobile: 140 },
  { month: 'October', desktop: 214, mobile: 140 },
  { month: 'November', desktop: 214, mobile: 140 },
  { month: 'December', desktop: 214, mobile: 140 },
]

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
    <div className="px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Seus orcamentos este mes</h1>
          <span className="text-sm text-gray-500">
            234 <span className="text-gray-500">orcamentos</span> foram criados
          </span>
        </div>
        <Button variant="ghost">
          <Settings2 strokeWidth={1} />
        </Button>
      </div>
      <div className="my-6 flex items-center gap-2">
        {['6 months', '2022', '2023', '2024', '2025'].map((year) => (
          <Button
            size={'sm'}
            key={year}
            variant={year === '2025' ? 'default' : 'outline'}
            className="cursor-pointer rounded-full text-sm"
          >
            {year}
          </Button>
        ))}
      </div>

      <div>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" stackId="a" fill="var(--color-desktop)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="mobile" stackId="a" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
        <Card className="my-8 space-y-2 p-4">
          <div className="flex gap-2 text-sm font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-xs leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </Card>
      </div>
    </div>
  )
}
