import * as React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Icon } from '@/components/Icon'
import { Hamburger, NotificationOutlined, Search, SettingsOutlined } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSidebar } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

export interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The name of the page in the current navigation
   */
  navigation: string
  avatarUrl: string
}

export const AppBar = React.forwardRef<HTMLDivElement, AppBarProps>(
  ({ className, navigation, avatarUrl, ...props }, ref) => {
    const { toggleSidebar } = useSidebar()

    return (
      <div
        data-composition="AppBar"
        className={cn(
          'grid grid-cols-3 gap-6 items-center md:flex md:border-b w-full md:h-[100px]',
          className,
        )}
        ref={ref}
        {...props}
      >
        <Button
          className="rounded-full [&_svg]:size-auto md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => toggleSidebar()}
        >
          <Icon scale={1.175}>
            <Hamburger />
          </Icon>
        </Button>

        <span className="text-xl md:text-[1.75rem] text-blue-950 leading-none tracking-tight font-semibold inline-flex items-center mx-auto">
          {navigation}
        </span>

        {/* Avatar on Mobile Devices */}
        <div className="rounded-full md:hidden ml-auto">
          <Image src={avatarUrl} alt="avatar" width={35} height={35} />
        </div>

        <div className="col-span-3 ms-auto flex items-center justify-center lg:justify-end md:space-x-8 w-full">
          <div className="w-full md:w-auto">
            <Input
              className="w-full"
              rootProps={{
                className: 'border-transparent rounded-full bg-background-alt w-full py-6',
              }}
              prependNode={
                <Icon className="text-muted-foreground">
                  <Search />
                </Icon>
              }
              placeholder="Search for something"
            />
          </div>

          <div className="hidden space-x-8 lg:[display:initial]">
            <Button
              className="rounded-full bg-background-alt border-transparent hover:bg-gray-300 transition-colors"
              variant="outline"
              size="icon"
              aria-label="Settings"
              asChild
            >
              <Link href="/settings">
                <Icon className="text-gray-500" scale={1.175}>
                  <SettingsOutlined className="size-auto" />
                </Icon>
              </Link>
            </Button>

            <Button
              className="rounded-full bg-background-alt border-transparent hover:bg-gray-300 transition-colors"
              variant="outline"
              size="icon"
              aria-label="Notifications"
              asChild
            >
              <Link href="/notifications">
                <Icon className="text-blue-500" scale={1.175}>
                  <NotificationOutlined className="size-auto" />
                </Icon>
              </Link>
            </Button>
          </div>

          {/* Avatar on Small Tablet to Larger Devices  */}
          <div className="hidden rounded-full md:[display:initial] hover:ring-3 hover:ring-gray-300 transition-shadow">
            <Image src={avatarUrl} alt="avatar" width={48} height={48} />
          </div>
        </div>
      </div>
    )
  },
)

AppBar.displayName = 'AppBar'
