import { cn } from '@/lib/utils'
import * as React from 'react'

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  scale?: number
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ children, className, scale = 1, ...props }, ref) => {
    return (
      <span
        data-component="Icon"
        style={{ '--icon-scale': scale } as React.CSSProperties}
        className={cn(
          'inline-flex items-center justify-center align-middle text-[length:calc(var(--icon-size)*var(--icon-scale))] h-[1em] w-[1em]',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    )
  },
)

Icon.displayName = 'Icon'
