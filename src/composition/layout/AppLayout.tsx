import { AppSidebar, AppSidebarProps } from '@/components/sidebar'
import * as React from 'react'
import { SidebarItems } from '../data/sidebar-items'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useRouter } from 'next/router'
import { Icon } from '@/components/Icon'
import { Task } from '@/components/icons'
import { AppBar } from '../appbar'
import { cn } from '@/lib/utils'

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

export const AppLayout = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const router = useRouter()
    const activePredicate: AppSidebarProps['active'] = (item) => router.pathname === item.link
    const activeItem = SidebarItems.find(activePredicate)

    return (
      <div
        data-composition="AppLayout"
        className={cn('flex size-full bg-background md:bg-background-alt', className)}
        ref={ref}
        {...props}
      >
        <SidebarProvider className="w-full">
          <AppSidebar
            items={SidebarItems}
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
              avatarUrl="/images/avatar.png"
            />

            <div className="p-6 lg:p-8 space-y-8">{children}</div>
          </div>
        </SidebarProvider>
      </div>
    )
  },
)

AppHeader.displayName = 'AppHeader'
AppLayout.displayName = 'AppLayout'
