import * as React from 'react'

import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode
  action?: { link: string; label: string; fn?: () => void }
  rootProps?: React.HTMLAttributes<HTMLDivElement>
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, children, label, action, rootProps: _rootProps = {}, ...props }, ref) => {
    const { className: rootClassName, ...rootProps } = _rootProps
    if (!label && !!action) throw new Error('Must provide a "label" if "action" is provided')

    return (
      <div data-component="Section" className={cn('flex flex-col', rootClassName)} {...rootProps}>
        {label && (
          <div className="flex items-center mb-6 text-gray-700">
            <div className="font-semibold text-base md:text-xl inline">{label}</div>
            {action && (
              <a
                className="font-semibold text-sm leading-none ms-auto hover:underline transition-all"
                {...(action.link ? { href: action.link } : null)}
                {...(action.fn ? { onClick: action.fn } : null)}
              >
                {action.label}
              </a>
            )}
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
