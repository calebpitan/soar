import { cn } from '@/lib/utils'
import { maskCardNumber } from '@/utils/utils'
import { cva } from 'class-variance-authority'
import * as React from 'react'

export type PaymentCardDetails = {
  balance: string | number
  currency: string
  holder: string
  expiry: string
  number: string
}

export interface PaymentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  details: PaymentCardDetails
  variant: 'diamond' | 'platinum'
}

const cardVariants = cva('rounded-3xl max-w-full w-[350] md:w-full overflow-hidden', {
  variants: {
    variant: {
      diamond:
        'bg-linear-to-r from-payment-card-diamond-start to-payment-card-diamond-stop text-white border',
      platinum: 'bg-white text-gray-600 border',
    },
  },
})

const textVariants = cva(undefined, {
  variants: {
    variant: {
      title: 'text-xs text-gray-400',
      subtitle: 'font-semibold',
    },
    size: {
      default: 'text-base',
      lg: 'text-xl',
    },
    defaultVariants: {
      size: 'default',
    },
  },
})

const Text: React.FC<
  React.ComponentProps<'span'> & {
    variant: 'title' | 'subtitle'
    size?: 'lg' | 'default'
    children: React.ReactNode
  }
> = ({ className, children, variant, size }) => {
  return <span className={cn(textVariants({ variant, size }), className)}>{children}</span>
}

const CardDetail: React.FC<
  React.ComponentProps<'div'> & {
    label: string
    value: string
    size?: 'lg' | 'default'
  }
> = ({ className, label, value, size = 'default' }) => {
  return (
    <div className={cn('inline-flex flex-col', className)}>
      <Text variant="title">{label}</Text>
      <Text variant="subtitle" size={size}>
        {value}
      </Text>
    </div>
  )
}

export const PaymentCard: React.FC<PaymentCardProps> = ({
  className,
  variant,
  details,
  ...props
}) => {
  const chipBgImage =
    variant === 'diamond' ? 'url(/images/card-chip.png)' : 'url(/images/card-chip-dark.png)'
  const pciBgImage =
    variant === 'diamond' ? 'url(/images/pci-logo.svg)' : 'url(/images/pci-logo-dark.svg)'

  return (
    <div
      data-component="PaymentCard"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    >
      <div className="px-6 py-4 md:py-6 xl:py-8">
        <div className="flex items-center">
          <CardDetail label="Balance" value={`${details.currency}${details.balance}`} size="lg" />

          <div
            style={{
              backgroundImage: chipBgImage,
              backgroundSize: 'cover',
              width: '3rem',
              height: '3rem',
              backgroundRepeat: 'no-repeat',
            }}
            className="ms-auto"
          />
        </div>

        <div className="flex justify-stretch mt-6">
          <CardDetail className="w-1/2" label="CARD HOLDER" value={details.holder} />
          <CardDetail className="w-1/2" label="VALID THRU" value={details.expiry} />
        </div>
      </div>

      <div
        className={cn(
          'flex items-center px-6 py-4 md:py-6 xl:py-8 bg-linear-to-br from-payment-card-diamond-footer-start to-payment-card-diamond-footer-stop',
          {
            'border-t': variant !== 'diamond',
            'mt-[1px]': variant === 'diamond', // make up for the 1px missing border
          },
        )}
      >
        <div className="text-2xl font-semibold">
          {maskCardNumber(details.number)}
        </div>
        <div
          style={{
            backgroundImage: pciBgImage,
            backgroundSize: 'contain',
            width: '3.5rem',
            height: '2.33rem',
            backgroundRepeat: 'no-repeat',
          }}
          className="ms-auto"
        />
      </div>
    </div>
  )
}

PaymentCard.displayName = 'PaymentCard'
