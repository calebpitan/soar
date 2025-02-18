import * as React from 'react'

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import { Paper } from '@/components/paper'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { cn } from '@/lib/utils'
import { valueToMonth } from '@/utils/utils'

export type HistoryData = {
  timestamp: string
  amount: string
}

export interface BalanceHistoryProps extends React.HTMLAttributes<HTMLDivElement> {
  history: Array<HistoryData>
}

const chartConfig = {
  amount: {
    label: 'Amount',
    color: 'hsla(241, 90%, 52%, 1)',
  },
} satisfies ChartConfig

export const BalanceHistory: React.FC<BalanceHistoryProps> = ({ className, history, ...props }) => {
  const transformedHistory = React.useMemo(
    () =>
      history.map(({ timestamp, ...rest }) => ({
        timestamp: valueToMonth(new Date(timestamp).getMonth()),
        ...rest,
      })),
    [history],
  )

  return (
    <Paper data-composition="BalanceHistory" className={cn('md:p-8', className)} {...props}>
      <ChartContainer className="aspect-auto" config={chartConfig} width="100%" height={295 - 64}>
        <AreaChart data={transformedHistory} margin={{ left: -20, right: 12 }} accessibilityLayer>
          <defs>
            <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-amount)" stopOpacity={0.48} />
              <stop offset="95%" stopColor="var(--color-amount)" stopOpacity={0.01} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="5 5" />

          <XAxis
            dataKey="timestamp"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            // domain={['dataMin', 'dataMax']}
            type="category"
            // scale="time"
            // tickFormatter={(v: Date) => valueToMonth(new Date(v).getMonth())}
            // allowDataOverflow
          />
          <YAxis tickLine={true} tickMargin={8} axisLine={false} />

          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                indicator="line"
                labelFormatter={(v, p) => {
                  console.log(v, p)
                  return v
                }}
              />
            }
          />

          <Area
            dataKey="amount"
            type="natural"
            fill="url(#fill)"
            stroke="var(--color-amount)"
            strokeWidth={3}
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </Paper>
  )
}

BalanceHistory.displayName = 'BalanceHistory'
