import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'

import { PaymentCard } from '@/components/payment-card'
import { Section } from '@/components/section/Section'
import { BalanceHistory } from '@/composition/balance-history'
import { ExpenseStats } from '@/composition/expense-statistics'
import { AppLayout } from '@/composition/layout'
import { QuickTransfer } from '@/composition/quick-transfer'
import { Transactions } from '@/composition/transactions'
import { WeeklyActivity } from '@/composition/weekly-activity'
import { cn } from '@/lib/utils'
import { getOverview } from '@/services/api'

import type { PassedProps } from './_app'

export default function Home({ fonts }: PassedProps) {
  const [height, setHeight] = useState(0)
  const result = useQuery({
    queryKey: ['overview'],
    queryFn: getOverview,
  })

  const breakpoints: SwiperOptions['breakpoints'] = {
    768: {
      slidesPerView: 'auto',
      slidesPerGroupAuto: true,
    },
    1024: {
      slidesPerView: 'auto',
      slidesPerGroupAuto: true,
      slidesOffsetBefore: 32,
      slidesOffsetAfter: 32,
    },
    1280: {
      spaceBetween: 48,
      slidesPerView: 'auto',
      slidesPerGroupAuto: true,
      slidesOffsetBefore: 32,
      slidesOffsetAfter: 0,
    },
  }

  if (result.isPending) return 'Loading...'
  if (result.error) return 'Error occured'

  return (
    <div className={cn(fonts.inter.className)}>
      <AppLayout>
        <Section className="grid grid-cols-3 gap-8 items-start auto-rows-min">
          <Section
            label="My Cards"
            action={{ label: 'See All', link: '/cards' }}
            className={cn('-mx-6 lg:-mx-8 xl:mx-0 xl:-ms-8')}
            rootProps={{ className: 'col-span-3 xl:col-span-2' }}
            ref={(el) => {
              setHeight(el?.getBoundingClientRect().height ?? 0)
            }}
          >
            <Swiper
              autoplay={true}
              cssMode={false}
              spaceBetween={24}
              slidesPerView={1.175}
              slidesOffsetBefore={24}
              slidesOffsetAfter={24}
              breakpoints={breakpoints}
            >
              {result.data.cards.map((card, index) => {
                return (
                  <SwiperSlide className="md:w-auto! xl:last-of-type:me-0!" key={index}>
                    <PaymentCard
                      className={cn(
                        'md:w-[400px] lg:w-[400px] xl:w-[440px] shrink-0',
                        fonts.lato.className,
                      )}
                      variant={card.variant}
                      details={card.details}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Section>

          <Section
            style={{ height: `${height}px` }}
            label="Recent Transactions"
            rootProps={{ className: 'col-span-3 xl:col-span-1' }}
          >
            <Transactions className="overflow-auto" transactions={result.data.recentTransactions} />
          </Section>
        </Section>

        <Section className="grid grid-cols-3 gap-8">
          <Section label="Weekly Activity" rootProps={{ className: 'col-span-3 lg:col-span-2' }}>
            <WeeklyActivity summary={result.data.weeklyActivities} />
          </Section>

          <Section label="Expense Staistics" rootProps={{ className: 'col-span-3 lg:col-span-1' }}>
            <ExpenseStats
              className="h-full [&>div]:relative [&>div]:top-1/2 [&>div]:-translate-y-1/2"
              stats={result.data.expenseStatistics}
            />
          </Section>
        </Section>

        <Section className="grid grid-cols-5 gap-8 items-start auto-rows-min">
          <Section label="Quick Transfer" rootProps={{ className: 'col-span-5 xl:col-span-2' }}>
            <QuickTransfer contacts={result.data.transferContacts} />
          </Section>

          <Section label="Balance History" rootProps={{ className: 'col-span-5 xl:col-span-3' }}>
            <BalanceHistory history={result.data.balanceHistory} />
          </Section>
        </Section>
      </AppLayout>
    </div>
  )
}
