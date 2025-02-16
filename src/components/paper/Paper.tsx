import { cn } from '@/lib/utils'
import * as React from 'react'

export const Paper: React.FC<React.ComponentProps<'div'>> = ({ className, children, ...props }) => {
  return (
    <div data-component="Paper" className={cn('bg-background rounded-3xl', className)} {...props}>
      {children}
    </div>
  )
}

Paper.displayName = 'Paper'
