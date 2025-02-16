import { PaymentCard } from '@/components/payment-card'
import { Section } from '@/components/section/Section'
import { AppLayout } from '@/composition/layout'
import { cn } from '@/lib/utils'
import { clamp } from '@/utils/utils'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import type { PassedProps } from './_app'
import { Transactions } from '@/composition/transactions'
import { RecentTransactions } from '@/composition/data/recent-transactions'
import { WeeklyActivity } from '@/composition/weekly-activity'
import { cards } from '@/composition/data/payment-cards'
import { WeeklyActivities } from '@/composition/data/weekly-activity'
import { ExpenseStats } from '@/composition/expense-statistics'
import { ExpenseStatistics } from '@/composition/data/expense-statistics'

export default function Home({ fonts }: PassedProps) {
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
        <Section className="grid grid-cols-3 gap-8">
          <Section
            label="My Cards"
            action="See All"
            className={cn('-mx-6', { 'lg:px-6': slidesOffsetLg === 0 })}
            rootProps={{ className: 'col-span-3 xl:col-span-2' }}
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
            label="Recent Transactions"
            rootProps={{ className: 'col-span-3 xl:col-span-1' }}
          >
            <Transactions transactions={RecentTransactions} />
          </Section>
        </Section>

        <Section className="grid grid-cols-3 gap-8">
          <Section label="Weekly Activity" rootProps={{ className: 'col-span-3 lg:col-span-2' }}>
            <WeeklyActivity summary={WeeklyActivities} />
          </Section>

          <Section label="Expense Staistics" rootProps={{ className: 'col-span-3 lg:col-span-1' }}>
            <ExpenseStats
              className="h-full [&>div]:relative [&>div]:top-1/2 [&>div]:-translate-y-1/2"
              stats={ExpenseStatistics}
            />
          </Section>
        </Section>
      </AppLayout>
    </div>
  )
}
