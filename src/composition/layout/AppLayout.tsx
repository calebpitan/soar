import * as React from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import { Icon } from '@/components/Icon'
import { Task } from '@/components/icons'
import { AppSidebar, AppSidebarProps } from '@/components/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

import { AppBar } from '../appbar'
import { profiles } from '../data/profile'
import { sidebarItems } from '../data/sidebar-items'

// export interface AppHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
// export interface AppLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AppHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex items-center space-x-5 -ms-2">
        <Icon scale={2.175}>
          <Task />
        </Icon>
        <div className="font-extrabold text-2xl text-blue-950 tracking-tight">Soar Task</div>
      </div>
    </div>
  )
}

export const AppLayout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { profile: FlatArray<typeof profiles, 1> }
>(({ className, children, profile, ...props }, ref) => {
  const router = useRouter()
  const activePredicate: AppSidebarProps['active'] = (item) => router.pathname === item.link
  const activeItem = sidebarItems.find(activePredicate)

  return (
    <div
      data-composition="AppLayout"
      className={cn('flex size-full bg-background md:bg-background-alt', className)}
      ref={ref}
      {...props}
    >
      <Head>
        <title>{activeItem?.title ?? 'Soar Task'}</title>
        <meta name="description" content="Caleb's Implementation of the Sora Assessment Task" />
      </Head>

      <SidebarProvider className="w-full">
        <AppSidebar
          items={sidebarItems}
          active={activePredicate}
          header={<AppHeader />}
          side="left"
          variant="sidebar"
          collapsible="offcanvas"
        />

        <div className="flex flex-col w-full">
          <AppBar
            className="p-6 lg:p-8 bg-background"
            navigation={activeItem?.title ? activeItem.title : 'Overview'}
            avatarUrl={profile.avatar}
          />

          <div className="p-6 lg:p-8 space-y-8">{children}</div>
        </div>
      </SidebarProvider>
    </div>
  )
})

AppHeader.displayName = 'AppHeader'
AppLayout.displayName = 'AppLayout'
