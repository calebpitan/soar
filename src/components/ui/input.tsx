import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prependNode?: React.ReactNode
  appendNode?: React.ReactNode
  rootProps?: React.HTMLAttributes<HTMLDivElement>
}

const InputAddOn: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  if (!children) return null
  return <div className="inline-flex items-center">{children}</div>
}

const InputBase = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex bg-transparent text-base ring-offset-background-alt file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, appendNode, prependNode, rootProps: _rootProps = {}, ...props }, ref) => {
    const { className: rootClassName, ...rootProps } = _rootProps
    return (
      <div
        className={cn(
          'flex items-center h-10 rounded-xl border border-input bg-background px-4 py-2 space-x-3 [&:not(:has(:focus-visible))]:hover:border-gray-200 ring-offset-background [&:has(:focus-visible)]:ring-1 [&:has(:focus-visible)]:ring-ring [&:has(:focus-visible)]:ring-offset-0',
          rootClassName,
        )}
        {...rootProps}
      >
        <InputAddOn>{prependNode}</InputAddOn>
        <InputBase className={cn('grow', className)} {...props} ref={ref} />
        <InputAddOn>{appendNode}</InputAddOn>
      </div>
    )
  },
)

InputAddOn.displayName = 'InputAddOn'
InputBase.displayName = 'InputBase'
Input.displayName = 'Input'

export { Input }
