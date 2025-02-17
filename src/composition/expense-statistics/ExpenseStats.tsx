import * as React from 'react'

import { Cell, Pie, PieChart } from 'recharts'

import { Paper } from '@/components/paper'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import { cn } from '@/lib/utils'

type StatsData = { item: string; ratio: number; highlight: string }

export interface ExpenseStatsProps extends React.HTMLAttributes<HTMLDivElement> {
  stats: Array<StatsData>
}

const getChartConfig = (stats: Array<StatsData>) => {
  const entries = stats.map((stat, index) => {
    return [`item-${index}`, { label: stat.item, color: stat.highlight }] as const
  })

  return {
    ratio: {
      label: 'Percentage',
    },
    ...Object.fromEntries(entries),
  } satisfies ChartConfig
}

const transformData = (stats: Array<StatsData>) => {
  return stats.map((stat, index) => {
    const label = `item-${index}`
    return {
      ...stat,
      label,
      fill: `var(--color-${label})`,
    }
  })
}

const CustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  item,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
Record<string, any>) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <React.Fragment>
      <text
        x={x}
        y={y}
        fill="white"
        className='font-semibold'
        textAnchor={x > cx ? 'start' : 'middle'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text
        x={x}
        y={y + 20}
        fill="white"
        className='tracking-tighter font-semibold'
        textAnchor={x > cx ? 'start' : 'middle'}
        dominantBaseline="auto"
      >
        {item}
      </text>
    </React.Fragment>
  )
}

export const ExpenseStats: React.FC<ExpenseStatsProps> = ({ className, stats, ...props }) => {
  const chartConfig = React.useMemo(() => getChartConfig(stats), [stats])
  const data = transformData(stats)

  return (
    <Paper className={cn('md:p-6', className)} {...props}>
      <ChartContainer className="mx-auto aspect-auto" config={chartConfig} height={320 - 48}>
        <PieChart>
          <Pie
            data={data}
            dataKey="ratio"
            cx="50%"
            cy="50%"
            label={CustomizedLabel}
            labelLine={false}
          >
            {data.map((entry, index) => {
              const RADIAN = Math.PI / 180
              const midAngle =
                (entry.ratio * 360) / 2 +
                data.slice(0, index).reduce((sum, d) => sum + d.ratio * 360, 0)
              const offsetX = Math.cos(-midAngle * RADIAN) * 5 // Move outward
              const offsetY = Math.sin(-midAngle * RADIAN) * 5
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  transform={`translate(${offsetX}, ${offsetY})`}
                />
              )
            })}
          </Pie>
        </PieChart>
      </ChartContainer>
    </Paper>
  )
}

ExpenseStats.displayName = 'ExpenseStats'
