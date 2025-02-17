import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'

import { PaymentCard } from '@/components/payment-card'
import { Section } from '@/components/section/Section'
import { BalanceHistory } from '@/composition/balance-history'
import { balanceHistory } from '@/composition/data/balance-history'
import { expenseStatistics } from '@/composition/data/expense-statistics'
import { cards } from '@/composition/data/payment-cards'
import { recentTransactions } from '@/composition/data/recent-transactions'
import { transferContacts } from '@/composition/data/transfer-contacts'
import { weeklyActivities } from '@/composition/data/weekly-activity'
import { ExpenseStats } from '@/composition/expense-statistics'
import { AppLayout } from '@/composition/layout'
import { QuickTransfer } from '@/composition/quick-transfer'
import { Transactions } from '@/composition/transactions'
import { WeeklyActivity } from '@/composition/weekly-activity'
import { cn } from '@/lib/utils'
import { clamp } from '@/utils/utils'

import type { PassedProps } from './_app'

export default function Home({ fonts }: PassedProps) {
  const [height, setHeight] = useState(0)
  const slidesPerViewLg = clamp(2, cards.length, 2.175)
  const slidePerGroupLg = Math.floor(slidesPerViewLg)
  const slidesOffsetLg = slidePerGroupLg === slidesPerViewLg ? 0 : 24
  const breakpoints: SwiperOptions['breakpoints'] = {
    576: {
      slidesPerView: 1.175,
    },
    1024: {
      slidesPerView: slidesPerViewLg,
      slidesPerGroup: slidePerGroupLg,
      slidesOffsetBefore: slidesOffsetLg,
      slidesOffsetAfter: slidesOffsetLg,
    },
    1280: {
      spaceBetween: 48,
      slidesPerView: slidesPerViewLg,
      slidesPerGroup: slidePerGroupLg,
      slidesOffsetBefore: slidesOffsetLg,
      slidesOffsetAfter: slidesOffsetLg,
    },
  }

  return (
    <div className={cn(fonts.inter.className)}>
      <AppLayout>
        <Section className="grid grid-cols-3 gap-8 items-start auto-rows-min">
          <Section
            label="My Cards"
            action={{ label: 'See All', link: '/cards' }}
            className={cn('-mx-6', { 'lg:px-6': slidesOffsetLg === 0 })}
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
              {cards.map((card, index) => {
                return (
                  <SwiperSlide key={index}>
                    <PaymentCard
                      className={fonts.lato.className}
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
            <Transactions className="overflow-auto" transactions={recentTransactions} />
          </Section>
        </Section>

        <Section className="grid grid-cols-3 gap-8">
          <Section label="Weekly Activity" rootProps={{ className: 'col-span-3 lg:col-span-2' }}>
            <WeeklyActivity summary={weeklyActivities} />
          </Section>

          <Section label="Expense Staistics" rootProps={{ className: 'col-span-3 lg:col-span-1' }}>
            <ExpenseStats
              className="h-full [&>div]:relative [&>div]:top-1/2 [&>div]:-translate-y-1/2"
              stats={expenseStatistics}
            />
          </Section>
        </Section>

        <Section className="grid grid-cols-5 gap-8 items-start auto-rows-min">
          <Section label="Quick Transfer" rootProps={{ className: 'col-span-5 lg:col-span-2' }}>
            <QuickTransfer contacts={transferContacts} />
          </Section>

          <Section label="Balance History" rootProps={{ className: 'col-span-5 lg:col-span-3' }}>
            <BalanceHistory history={balanceHistory} />
          </Section>
        </Section>
      </AppLayout>
    </div>
  )
}
