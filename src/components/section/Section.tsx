import { cn } from '@/lib/utils'
import * as React from 'react'

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode
  action?: React.ReactNode
  rootProps?: React.HTMLAttributes<HTMLDivElement>
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, children, label, action, rootProps: _rootProps = {}, ...props }, ref) => {
    const { className: rootClassName, ...rootProps } = _rootProps
    if (!label && !!action) throw new Error('Must provide a "label" if "action" is provided')

    return (
      <div data-component="Section" className={cn('flex flex-col', rootClassName)} {...rootProps}>
        {label && (
          <div className="flex mb-6">
            <div className="font-semibold text-base md:text-xl inline">{label}</div>
            {action && <div className="font-medium text-sm ms-auto">{action}</div>}
          </div>
        )}
        <div className={cn('h-full', className)} ref={ref} {...props}>
          {children}
        </div>
      </div>
    )
  },
)

Section.displayName = 'Section'
