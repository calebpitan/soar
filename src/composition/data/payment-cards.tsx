import type { PaymentCardProps } from '@/components/payment-card'

export const cards: Array<Pick<PaymentCardProps, 'details' | 'variant'>> = [
  {
    variant: 'diamond',
    details: {
      balance: '5,756',
      currency: '$',
      holder: 'Eddy Cusuma',
      expiry: '12/22',
      number: '3778 6542 9671 1234',
    },
  },
  {
    variant: 'platinum',
    details: {
      balance: '5,756',
      currency: '$',
      holder: 'Eddy Cusuma',
      expiry: '12/22',
      number: '3778 6542 9671 1234',
    },
  },
]
