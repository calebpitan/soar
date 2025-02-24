import * as React from 'react'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { isFn } from '@/utils/utils'

import { Icon } from '../Icon'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar'

type SidebarItem = {
  title: string
  icon: React.ReactNode
  label: React.ReactNode
  link: string
}

export interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  items: Array<SidebarItem>
  header?: React.ReactNode
  active?: string | ((item: SidebarItem) => boolean)
}

export const AppSidebar = React.forwardRef<HTMLDivElement, AppSidebarProps>(
  ({ items, active, header, ...props }, ref) => {
    return (
      <Sidebar data-component="AppSidebar" ref={ref} {...props}>
        <SidebarHeader className="px-12 py-8 h-[100px]">{header}</SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {items.map((item, index) => {
              const isActive = isFn(active) ? active(item) : item.link === active
              const textInactive = { 'opacity-40': !isActive }
              return (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton className="relative" asChild>
                    <Link href={item.link} className="rounded-none pl-6 py-8">
                      <div
                        className={cn('absolute', {
                          'bg-zinc-950 w-1.5 left-0 h-full rounded-ee-md rounded-se-md': isActive,
                        })}
                      />

                      <Icon scale={1.5} className={cn('text-current mx-6', textInactive)}>
                        {item.icon}
                      </Icon>

                      <span
                        className={cn(
                          'font-semibold md:font-medium text-sm md:text-base',
                          textInactive,
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    )
  },
)

AppSidebar.displayName = 'AppSidebar'
