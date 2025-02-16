import {
  CreditCard,
  Home,
  Investment,
  Loan,
  Privileges,
  Services,
  Settings,
  Transactions,
  User,
} from '@/components/icons'
import type { AppSidebarProps } from '@/components/sidebar'
import * as React from 'react'

export const SidebarItems: AppSidebarProps['items'] = [
  { icon: <Home />, label: 'Dashboard', title: 'Overview', link: '/' },
  {
    icon: <Transactions />,
    label: 'Transactions',
    title: 'Transactions',
    link: '/transactions',
  },
  { icon: <User />, label: 'Accounts', title: 'Accounts', link: '/accounts' },
  {
    icon: <Investment />,
    label: 'Investments',
    title: 'Investments',
    link: '/investments',
  },
  {
    icon: <CreditCard />,
    label: 'Credit Cards',
    title: 'Credit Cards',
    link: '/cards',
  },
  { icon: <Loan />, label: 'Loans', title: 'Loans', link: '/loans' },
  {
    icon: <Services />,
    label: 'Services',
    title: 'Services',
    link: '/services',
  },
  {
    icon: <Privileges />,
    label: 'My Privileges',
    title: 'My Privileges',
    link: '/privileges',
  },
  {
    icon: <Settings />,
    label: 'Settings',
    title: 'Settings',
    link: '/settings',
  },
]
