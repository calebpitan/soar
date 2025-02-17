import * as React from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Icon } from '@/components/Icon'
import { Send } from '@/components/icons'
import { Paper } from '@/components/paper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type TransferContacts = {
  avatar: string
  name: string
  role: string
}

export interface QuickTransferProps extends React.HTMLAttributes<HTMLDivElement> {
  contacts: Array<TransferContacts>
}

export const QuickTransfer: React.FC<QuickTransferProps> = ({ className, contacts, ...props }) => {
  const [beneficiary, setBeneficiary] = React.useState<string | null>(null)
  return (
    <Paper data-composition="QuickTransfer" className={cn('md:p-8', className)} {...props}>
      <div className="flex flex-col">
        <div className="-mx-6">
          <Swiper
            autoplay={true}
            cssMode={false}
            spaceBetween={4}
            slidesPerView="auto"
            slidesPerGroupAuto={true}
            slidesOffsetBefore={24 * 3}
            slidesOffsetAfter={24 * 3}
            freeMode={{ enabled: true, sticky: true }}
            modules={[FreeMode, Navigation, Mousewheel]}
            mousewheel={{ enabled: true, releaseOnEdges: false, sensitivity: 1.5 }}
            navigation={{
              enabled: true,
              nextEl: '#q-trf-swiper-next',
              prevEl: '#q-trf-swiper-prev',
            }}
          >
            {contacts.map((contact, index) => {
              const isSelected = beneficiary === contact.name
              return (
                <SwiperSlide style={{ width: 'auto' }} key={index}>
                  <div
                    className={cn(
                      'p-3 my-2 flex flex-col items-center w-25 md:w-30 rounded-3xl cursor-default [&:not(.selected)]:hover:bg-gray-100',
                      { 'ring-0 ring-ring bg-blue-300/20 selected': isSelected },
                    )}
                    role="button"
                    tabIndex={0}
                    aria-label={contact.name}
                    onClick={() =>
                      setBeneficiary((current) =>
                        current && current === contact.name ? null : contact.name,
                      )
                    }
                  >
                    <div
                      className="w-13 h-13 md:w-16 md:h-16 rounded-full mb-2 border"
                      style={{
                        backgroundImage: `url(${contact.avatar})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />

                    <div
                      className="w-full font-semibold text-center text-sm md:text-base truncate mb-0.5"
                      title={contact.name}
                    >
                      {contact.name}
                    </div>
                    <div
                      className="w-full text-center text-xs md:text-sm text-foreground/50 truncate"
                      title={contact.role}
                    >
                      {contact.role}
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}

            <Button
              className="w-12 h-12 rounded-full bg-white text-gray-400 hover:bg-gray-100 absolute left-2 top-2/3 -translate-y-1/2 z-10"
              id="q-trf-swiper-prev"
              size="icon"
              aria-label="Previous"
            >
              <ChevronLeft />
            </Button>
            <Button
              className="w-12 h-12 rounded-full bg-white text-gray-400 hover:bg-gray-100 absolute right-2 top-2/3 -translate-y-1/2 z-10"
              id="q-trf-swiper-next"
              size="icon"
              aria-label="Next"
            >
              <ChevronRight />
            </Button>
          </Swiper>
        </div>

        <div className="flex items-center mt-6">
          <div className="text-sm md:text-base text-gray-400 grow">Write Amount</div>
          <Input
            className="max-w-20 md:max-w-25"
            type="number"
            rootProps={{
              className: 'px-6 h-12 bg-background-alt border-transparent rounded-full shrink',
            }}
            placeholder="525.50"
            appendNode={
              <Button className="rounded-full h-11 w-30 me-[calc(1px+var(--spacing)*-6)]">
                Send{' '}
                <Icon scale={1.125}>
                  <Send className="size-auto" />
                </Icon>
              </Button>
            }
          />
        </div>
      </div>
    </Paper>
  )
}

QuickTransfer.displayName = 'QuickTransfer'
