import * as React from 'react'

import { Paper } from '@/components/paper'
import { cn } from '@/lib/utils'

export type TransactionDetails = {
  narration: string
  date: string
  amount: string
  currency: string
  type: 'credit' | 'debit'
  provider: React.ReactNode
}

export interface TransactionsProps extends React.HTMLAttributes<HTMLDivElement> {
  transactions: Array<TransactionDetails>
}

export const Transactions: React.FC<TransactionsProps> = ({
  className,
  transactions,
  ...props
}) => {
  return (
    <Paper
      data-composition="Transactions"
      className={cn('md:p-6 h-full space-y-8', className)}
      {...props}
    >
      {transactions.map((tx, index) => {
        const isCredit = tx.type === 'credit'
        return (
          <div key={index} className="flex items-center">
            <div
              style={{
                backgroundImage: `url(${tx.provider})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
              className="size-[3.125rem] md:size-[3.5rem]"
            />

            <div className="flex flex-col ms-8">
              <span className="font-semibold text-foreground text-sm md:text-base">
                {tx.narration}
              </span>
              <span className="text-gray-400 text-xs md:text-sm">{tx.date}</span>
            </div>

            <div
              className={cn('text-xs md:text-base font-medium ms-auto', {
                'text-teal-500': isCredit,
                'text-red-600': !isCredit,
              })}
            >
              <span>{isCredit ? '+' : '-'}</span>
              <span>{tx.currency}</span>
              <span>{tx.amount}</span>
            </div>
          </div>
        )
      })}
    </Paper>
  )
}

Transactions.displayName = 'Transactions'
