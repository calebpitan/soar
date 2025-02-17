import * as React from 'react'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import { Paper } from '@/components/paper'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'

export type WklyActivitySummary = {
  day: string
  totalDeposit: string
  totalWithdrawal: string
}

export interface WeeklyActivityProps extends React.HTMLAttributes<HTMLDivElement> {
  summary: Array<WklyActivitySummary>
}

const chartConfig = {
  totalDeposit: {
    label: 'Deposit',
    color: 'hsla(225, 100%, 61%, 1)',
  },
  totalWithdrawal: {
    label: 'Withdrawal',
    color: 'hsla(0, 0%, 14%, 1)',
  },
} satisfies ChartConfig

export const WeeklyActivity: React.FC<WeeklyActivityProps> = ({ className, summary, ...props }) => {
  const isMobile = useIsMobile()
  const barSize = isMobile ? 8 : 16
  return (
    <Paper className={cn('md:p-6', className)} {...props}>
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={summary}
          barSize={barSize}
          barGap={barSize}
          margin={{ left: -20, right: 12 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} tickMargin={10} axisLine={false} />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent className="justify-end" />} />
          <Bar dataKey="totalWithdrawal" fill="var(--color-totalWithdrawal)" radius={24} />
          <Bar dataKey="totalDeposit" fill="var(--color-totalDeposit)" radius={24} />
        </BarChart>
      </ChartContainer>
    </Paper>
  )
}

WeeklyActivity.displayName = 'WeeklyActivity'
